<script lang="ts">
	import { runConfiguration } from '../RunConfigurationStore';
	import { store } from '../Store';

	import { Highlight } from "svelte-highlight";
	import c from "svelte-highlight/languages/c";
	import anOldHope from "svelte-highlight/styles/an-old-hope";

	function handleKey(e: KeyboardEvent) {
		resizeTextArea();
		if (e.key != 'Tab') return;
		if (e.shiftKey) return;
		e.preventDefault();
		let start = this.selectionStart;
		let end = this.selectionEnd;

		this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
		this.selectionStart = this.selectionEnd = start + 1;
	}

	function resizeTextArea() {
		store.codeWindow.style.height = "auto";
		store.codeWindow.style.height = store.codeWindow.scrollHeight + "px";
		store.codeEditor.style.height = store.codeWindow.style.height;
	}

	function updateCode() {
		runConfiguration.kernel = runConfiguration.kernel;
	}

	$: try { runConfiguration.kernel = runConfiguration.kernel; resizeTextArea(); } catch {}

	store.updateFunc = updateCode;
</script>

<svelte:head>
	{@html anOldHope}
</svelte:head>

<div class="kernelWindowWrapper">
	<textarea class="hljs" bind:this={store.codeEditor} placeholder="Input Kernel here..." bind:value={runConfiguration.kernel} on:keydown={handleKey}/>
	<div bind:this={store.codeWindow} class="codestyle"><Highlight language={c} code={runConfiguration.kernel} /></div>
</div>

<style lang="scss">
	textarea {
		resize: none;
		width: 70vw;
		height: 33.3vh;
		overflow-x: scroll;
		overflow-y: hidden;

		font-family: 'Roboto Mono';
		font-size: .91rem;
		padding-top: 2.1rem;
		padding-left: 1rem;
		display: block;

		color: transparent;
		background-color: transparent;

		position: absolute;
		left: 0;
	}

	.codestyle {
		font-family: 'Roboto Mono';
		font-size: 1rem;
		padding: 0;
		margin: 0;
		
		width: 70vw;
		height: 33.3vh;
		overflow-x: scroll;
		overflow-y: hidden;
		display: block;
		background-color: #1e1e1e;
	}

	.kernelWindowWrapper {
		display: inline-block;
		text-align: left;
		position: relative;
	}
</style>
