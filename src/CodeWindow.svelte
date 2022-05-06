<script lang="ts">
	let kernel: string = "";

	let kernels: string[] = ["1bt", "liawjj"];
	let selectedKernel: string = "";

	let machines: string[] = ["haskell", "skylake"];
	let selectedMachine: string = "";

	let performanceModels: string[] = ["ECM", "Benchmark"];
	let selectedPerformanceModel: string = "";

	let cachePredictors: string[] = ["LC", "SIM"];
	let selectedCachePredictor: string = "";

	let selectedCores: number = 1;

	let errorText: string = "";

	function handleKey(e: KeyboardEvent) {
		if (e.key != 'Tab') return;
		if (e.shiftKey) return;
		e.preventDefault();
		let start = this.selectionStart;
		let end = this.selectionEnd;

		this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
		this.selectionStart = this.selectionEnd = start + 1;
	}

	function loadKernel() {
		kernel = "int main()";
		selectedKernel = "";
	}

	function isValid() : boolean {
		return machines.includes(selectedMachine) && performanceModels.includes(selectedPerformanceModel) && cachePredictors.includes(selectedCachePredictor) && selectedCores > 0;
	}

	function analyze() {
		errorText = "";
		if (!isValid()) errorText = "You must select a valid option for all fields first!";
	}
</script>

<label for="loadkernels">Load: <select name="loadkernels" class="loadselect" bind:value={selectedKernel} on:change={loadKernel}>
	{#each kernels as k}
		<option value={k}>{k}</option>
	{/each}
</select></label><br/>

<textarea placeholder="Input Kernel here..." bind:value={kernel} on:keydown={handleKey}/><br/>

<label for="selectmachine">Machine: <select name="selectmachine" bind:value={selectedMachine}>
	{#each machines as m}
		<option value={m}>{m}</option>
	{/each}
</select></label>

<label for="selectpmodel">Performance model: <select name="selectpmodel" bind:value={selectedPerformanceModel}>
	{#each performanceModels as pm}
		<option value={pm}>{pm}</option>
	{/each}
</select></label>

<label for="selectcachepredictor">Cache predictor: <select name="selectcachepredictor" bind:value={selectedCachePredictor}>
	{#each cachePredictors as cp}
		<option value={cp}>{cp}</option>
	{/each}
</select></label>

<label>Cores: <input type="number" min="1" step="1" bind:value={selectedCores}/></label>

<br/>

<button on:click={analyze}>Analyze</button>

<br/>

{#if errorText != ""}
<span class="errorText">{errorText}</span>
{/if}

<link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
<style>
	textarea {
		color: #dcdcdc;
		background-color: #1e1e1e;
		resize: none;
		width: 50vw;
		height:33.3vh;

		font-family: 'Roboto Mono';
	}

	label {
		display: inline-block;
	}

	select {
		border-radius: 1em;
		background-color: #444444;
		color: #e2e2e2;
		border-color: #ff3e00;
	}

	.loadselect {
		border-radius: 0;
		border: 0;
		background-color: #444444;
		color: #e2e2e2;
		width: 2ch;
	}

	input {
		border-radius: 1em;
		background-color: #444444;
		color: #e2e2e2;
		border-color: #ff3e00;
		width: 10ch;
	}

	button {
		background-color: #444444;
		color: #e2e2e2;
		border-color: #ff3e00;
		border-radius: 1em;
		font-family: monospace;
		font-size: 2em;
	}

	.errorText {
		color: #ff0000;
		font-family: 'Roboto Mono';
		padding: 5px;
		background-color: #ffffff;
		border-radius: 1em;
	}
</style>