<script lang="ts">
	import { definedVarNames, definedVarValues } from '../ExecutionStore';

	function AddDefine() {
		definedVarNames.update(v => { v.push("N"); return v; });
		definedVarValues.update(v => { v.push(1); return v; });
	}

	function RemoveDefine() {
		definedVarNames.update(v => { v.pop(); return v; });
		definedVarValues.update(v => { v.pop(); return v; });
	}
</script>

<div style="display: grid; justify-content: center; align-content: center;">
	<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 2em; width: fit-content;">
		<div/>
		<div class="cc">
			<table style="border-collapse: collapse;">
				<tr>
					<th style="text-align: left;">Name</th>
					<th style="text-align: right;">Value</th>
				</tr>
				{#each $definedVarNames as _, i}
					<tr>
						<th><input placeholder="Name" type="text" maxlength="1" bind:value={$definedVarNames[i]}></th>
						<th><input placeholder="Value" type="number" step="1" bind:value={$definedVarValues[i]}></th>
					</tr>
				{/each}
			</table>
		</div>
		<div style="text-align: left;">
			<button on:click={AddDefine} style="font-size: 1.5em;" class="top">+</button><br/><button on:click={RemoveDefine} style="font-size: 1.5em;" class="bottom">-</button>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../styles/input';
	@import '../styles/half-button';

	.cc {
		display: inline-block;
		text-align: right;
		padding: .1em;
		width: fit-content;
	}

	th {
		border: .3em;
		border-style: solid;
		border-color: #444444;
	}

	th input {
		margin: .5em;
	}
</style>
