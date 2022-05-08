<script lang="ts">
	import AnalyzeButton from "./components/AnalyzeButton.svelte";
	import CachePSelector from "./components/CachePSelector.svelte";
	import CodeWindow from "./components/CodeWindow.svelte";
	import CoresSelector from "./components/CoresSelector.svelte";
	import DefinesSelector from "./components/DefinesSelector.svelte";
	import MachineSelector from "./components/MachineSelector.svelte";
	import PModelSelector from "./components/PModelSelector.svelte";
</script>

<link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
<div class="root">
	<h1>Kerncraft Web</h1>
	<CodeWindow/><br/>
	<MachineSelector/> <PModelSelector/> <CachePSelector/> <CoresSelector/><br/>
	<DefinesSelector/><br/>
	<AnalyzeButton/>
</div>

<style lang="scss">
	:global(html, body) {
		padding: 0;
		margin: 0;
		width: 100%;
		height: max(100vh, 100%);
		background-color: #333333;
	}

	.root {
		text-align: center;
		color: #e2e2e2;
		width: 100%;
		height: 100%;
	}

	h1 {
		margin-top: 0;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
