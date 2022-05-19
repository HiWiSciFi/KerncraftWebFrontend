<script lang="ts">
	import { API_HOST } from '../AppInfo';

	let errorText: string = "";
	let outputText: string = "";

	import { cachePredictors, machines, performanceModels } from '../ExecutionStore';
	import { runConfiguration } from '../RunConfigurationStore';

	function isValid() : boolean {
		return $machines.includes(runConfiguration.machine) && $performanceModels.includes(runConfiguration.performanceModel) && $cachePredictors.includes(runConfiguration.cachePredictor) && runConfiguration.cores > 0;
	}

	function analyze() {
		errorText = "";
		if (!isValid()) { errorText = "You must select a valid option for all fields first!"; return; }
		console.log(JSON.stringify(runConfiguration));

		fetch(
			"http://" + $API_HOST + "/test",
			{
				method: "POST",
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(runConfiguration)
			}
		)
		.then(r => r.json())
		.then(data => {
			outputText = data;
		}).then(() => {
			resizeTextArea();
		});
	}

	let outputWindow : HTMLTextAreaElement;

	function resizeTextArea() {
		outputWindow.style.height = "auto";
		outputWindow.style.height = outputWindow.scrollHeight + "px";
	}
</script>

<button style="font-size: 2em;" on:click={analyze}>Analyze</button>

{#if errorText != ""}
<br/><span class="temp-text">{errorText}</span>
{/if}

{#if outputText != ""}
<br/><textarea bind:this={outputWindow} readonly class="output-text">{outputText}</textarea>
{/if}

<style lang="scss">
	@import '../styles/button';
	@import '../styles/temp-text';

	textarea.output-text {
		width: 50vw;
		height: max-content;
		color: #dcdcdc;
		background-color: #1e1e1e;
		resize: none;
		width: 80vw;
		height: 33.3vh;
		overflow-y: hidden;
		overflow-x: auto;

		font-family: 'Roboto Mono';
	}
</style>
