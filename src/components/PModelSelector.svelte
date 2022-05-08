<script lang="ts">
	import { performanceModels, selectedPerformanceModel } from '../ExecutionStore';
	import { API_HOST } from '../AppInfo';

	let loaded : boolean = false;

	async function getPModels() {
		await fetch("http://" + $API_HOST + "/available/models")
		.then(r => r.json())
		.then(data => {
			performanceModels.set(data);
			loaded = true;
		});		
	}

	getPModels();
</script>

{#if loaded}
	<label for="selectpmodel">Performance model: <select name="selectpmodel" bind:value={$selectedPerformanceModel}>
		{#each $performanceModels as pm}
			<option value={pm}>{pm}</option>
		{/each}
	</select></label>
{:else}
	<span class="temp-text">Loading performance models...</span>
{/if}

<style lang="scss">
	@import '../styles/label';
	@import '../styles/select';
	@import '../styles/temp-text';
</style>
