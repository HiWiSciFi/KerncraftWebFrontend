<script lang="ts">
	import { performanceModels } from '../ExecutionStore';
	import { runConfiguration } from '../RunConfigurationStore';
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
	<label for="selectpmodel">Performance model: <br/><select name="selectpmodel" bind:value={runConfiguration.performanceModel}>
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
