<script lang="ts">
	import { machines, selectedMachine } from '../ExecutionStore';
	import { API_HOST } from '../AppInfo';

	let loaded : boolean = false;

	async function getMachines() {
		await fetch("http://" + $API_HOST + "/examples/machines")
		.then(r => r.json())
		.then(data => {
			machines.set(data);
			loaded = true;
		});
	}

	getMachines();
</script>

{#if loaded}
	<label for="selectmachine">Machine: <select name="selectmachine" bind:value={$selectedMachine}>
		{#each $machines as m}
			<option value={m}>{m}</option>
		{/each}
	</select></label>
{:else}
	<span class="temp-text">Loading Machines...</span>
{/if}

<style lang="scss">
	@import '../styles/label';
	@import '../styles/select';
	@import '../styles/temp-text';
</style>
