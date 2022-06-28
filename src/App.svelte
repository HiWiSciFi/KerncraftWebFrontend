<script lang="ts">
	import AnalyzeButton from "./components/AnalyzeButton.svelte";
	import CachePSelector from "./components/CachePSelector.svelte";
	import CodeWindow from "./components/CodeWindow.svelte";
	import CoresSelector from "./components/CoresSelector.svelte";
	import DefinesSelector from "./components/DefinesSelector.svelte";
	import LoadSelector from "./components/LoadSelector.svelte";
	import MachineSelector from "./components/MachineSelector.svelte";
	import PModelSelector from "./components/PModelSelector.svelte";
	import UnitSelector from "./components/UnitSelector.svelte";
</script>

<link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
<div class="root">
	<h1>Kerncraft Web</h1>
	<div class="ct">
		<div class="it-defs"><DefinesSelector/></div>
		<LoadSelector/> <MachineSelector/> <PModelSelector/> <CachePSelector/> <CoresSelector/> <UnitSelector/> <br/>
		<div class="it-code"><CodeWindow/></div><br/>
		<div class="it-btn"><AnalyzeButton/></div>
	</div>
</div>

<style lang="scss">
	:global(html, body) {
		padding: 0;
		margin: 0;
		width: 100%;
		height: max(100vh, 100%);
		background-color: #333333;
	}

	.ct {
		display: grid;
		grid-template-columns: 30em auto auto auto auto auto;
		width: 75vw;
		text-align: left;
	}

	.it-btn {
		grid-column: 2 / span 6;
		text-align: center;
	}

	.it-code {
		grid-column: 2 / span 6;
	}

	.it-defs {
		grid-row: 1 / span 4;
		padding-right: 5em;
		padding-left: 5em;
		text-align: center;
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
