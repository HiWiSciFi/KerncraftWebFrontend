<script lang="ts">
	import { cachePredictors, selectedCachePredictor } from '../ExecutionStore';
	import { API_HOST } from '../AppInfo';

	let loaded : boolean = false;

	async function getCachePredictors() {
		await fetch("http://" + $API_HOST + "/available/cachepredictors")
		.then(r => r.json())
		.then(data => {
			cachePredictors.set(data);
			loaded = true;
		});
	}

	getCachePredictors();
</script>

{#if loaded}
	<label for="selectcachepredictor">Cache predictor: <select name="selectcachepredictor" bind:value={$selectedCachePredictor}>
		{#each $cachePredictors as cp}
			<option value={cp}>{cp}</option>
		{/each}
	</select></label>
{:else}
	<span class="temp-text">Loading Cache predictors...</span>
{/if}

<style lang="scss">
	@import '../styles/label';
	@import '../styles/select';
	@import '../styles/temp-text';
</style>
