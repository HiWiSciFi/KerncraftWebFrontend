<script lang="ts">
	import Line from "svelte-chartjs/src/Line.svelte"
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
			"http://" + $API_HOST + "/analyze/" + Date.now(),
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

	let lineData = {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
</script>

<button style="font-size: 2em;" on:click={analyze}>Analyze</button>

{#if errorText != ""}
<br/><span class="temp-text">{errorText}</span>
{/if}

{#if outputText != ""}
<br/><textarea bind:this={outputWindow} readonly class="output-text">{outputText}</textarea>
{/if}

<Line data={lineData} />

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
