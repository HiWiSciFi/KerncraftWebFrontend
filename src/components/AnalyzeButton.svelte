<script lang="ts">
	let errorText: string = "";

	import { cachePredictors, selectedCachePredictor, kernel, kernels, selectedCores, definedVarNames, definedVarValues, machines, selectedMachine, performanceModels, selectedPerformanceModel } from '../ExecutionStore';

	function isValid() : boolean {
		return $machines.includes($selectedMachine) && $performanceModels.includes($selectedPerformanceModel) && $cachePredictors.includes($selectedCachePredictor) && $selectedCores > 0;
	}

	function analyze() {
		errorText = "";
		if (!isValid()) errorText = "You must select a valid option for all fields first!";
	}
</script>

<button style="font-size: 2em;" on:click={analyze}>Analyze</button>

{#if errorText != ""}
<br/><span class="temp-text">{errorText}</span>
{/if}

<style lang="scss">
	@import '../styles/button';
	@import '../styles/temp-text';
</style>
