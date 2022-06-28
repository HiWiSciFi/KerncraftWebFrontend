<script lang="ts">
	import { units } from '../ExecutionStore';
	import { runConfiguration } from '../RunConfigurationStore';
	import { API_HOST } from '../AppInfo';

	let loaded : boolean = false;

	async function getUnits() {
		await fetch("http://" + $API_HOST + "/available/units")
		.then(r => r.json())
		.then(data => {
			units.set(data);
			loaded = true;
		});
	}

	getUnits();
</script>

{#if loaded}
	<label for="selectcachepredictor">Output unit: <br/><select name="selectcachepredictor" bind:value={runConfiguration.unit}>
		{#each $units as cp}
			<option value={cp}>{cp}</option>
		{/each}
	</select></label>
{:else}
	<span class="temp-text">Loading units...</span>
{/if}

<style lang="scss">
	@import '../styles/label';
	@import '../styles/select';
	@import '../styles/temp-text';
</style>
