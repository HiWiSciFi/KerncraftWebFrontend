<script lang="ts">
	import { kernels } from '../ExecutionStore';
	import { runConfiguration } from '../RunConfigurationStore';
	import { API_HOST } from '../AppInfo';

	let selectedKernel: string = "";

	function handleKey(e: KeyboardEvent) {
		if (e.key != 'Tab') return;
		if (e.shiftKey) return;
		e.preventDefault();
		let start = this.selectionStart;
		let end = this.selectionEnd;

		this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
		this.selectionStart = this.selectionEnd = start + 1;
	}

	let codeWindow : HTMLTextAreaElement;

	async function loadKernel() {
		let toLoad : string = selectedKernel;
		selectedKernel = "";
		codeWindow.placeholder = "Loading Example...";
		await fetch("http://" + $API_HOST + "/examples/kernels/" + toLoad)
		.then(r => r.json())
		.then(data => {
			runConfiguration.kernel = data;
			codeWindow.placeholder = "Input Kernel here...";
			
		}).then(() => {
			resizeTextArea();
		}).catch(err => {
			console.log(err);
		});
	}

	function resizeTextArea() {
		codeWindow.style.height = "auto";
		codeWindow.style.height = codeWindow.scrollHeight + "px";
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


<div class="kernelWindowWrapper">
	{#if loaded}
		<label for="loadkernels">Load: <select name="loadkernels" class="loadselect" bind:value={selectedKernel} on:change={loadKernel}>
			{#each $kernels as k}
				<option value={k}>{k}</option>
			{/each}
		</select></label>
	{:else}
		<span class="temp-text">Loading Examples...</span>
	{/if}
	<br/>
	<textarea bind:this={codeWindow} on:input={resizeTextArea} placeholder="Input Kernel here..." bind:value={runConfiguration.kernel} on:keydown={handleKey}/><br/>
</div>

<style lang="scss">
	@import '../styles/label';
	@import '../styles/select';
	@import '../styles/temp-text';

	textarea {
		color: #dcdcdc;
		background-color: #1e1e1e;
		resize: none;
		width: 50vw;
		height: 33.3vh;
		overflow-x: scroll;
		overflow-y: hidden;

		font-family: 'Roboto Mono';
	}

	.kernelWindowWrapper {
		display: inline-block;
		text-align: left;
	}

	.loadselect {
		border-radius: 0;
		border: 0;
		background-color: #444444;
		color: #e2e2e2;
		width: 2ch;
	}
</style>
