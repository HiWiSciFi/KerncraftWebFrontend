<script lang="ts">
	import { kernels } from '../ExecutionStore';
	import { runConfiguration } from '../RunConfigurationStore';
	import { API_HOST } from '../AppInfo';
	import { store } from '../Store';

	let selectedKernel: string = "";

	async function loadKernel() {
		let toLoad : string = selectedKernel;
		selectedKernel = "";
		await fetch("http://" + $API_HOST + "/examples/kernels/" + toLoad)
		.then(r => r.json())
		.then(data => {
			runConfiguration.kernel = data;
			store.updateFunc();
		}).then(() => {
			resizeTextArea();
		}).catch(err => {
			console.log(err);
		});
	}

	function resizeTextArea() {
		store.codeWindow.style.height = "auto";
		store.codeWindow.style.height = store.codeWindow.scrollHeight + "px";
		store.codeEditor.style.height = store.codeWindow.style.height;
	}

	let loaded : boolean = false;

	async function loadKernels() {
		await fetch("http://" + $API_HOST + "/examples/kernels")
		.then(r => r.json())
		.then(data => {
			kernels.set(data);
			loaded = true;
		});
	}

	loadKernels();
</script>

{#if loaded}
	<label for="loadkernels"><br/>Load: <select name="loadkernels" class="loadselect" bind:value={selectedKernel} on:change={loadKernel}>
		{#each $kernels as k}
			<option value={k}>{k}</option>
		{/each}
	</select></label>
{:else}
	<span class="temp-text">Loading Examples...</span>
{/if}

<style lang="scss">
	@import '../styles/label';
	@import '../styles/select';
	@import '../styles/temp-text';

	.loadselect {
		border-radius: 0;
		border: 0;
		background-color: #444444;
		color: #e2e2e2;
		width: 2ch;
	}
</style>
