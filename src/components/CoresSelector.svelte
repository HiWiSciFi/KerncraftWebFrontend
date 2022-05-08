<script lang="ts">
	import { selectedCores } from '../ExecutionStore';
</script>

<label>Cores: <input type="number" min="1" step="1" bind:value={$selectedCores}/></label>

<style lang="scss">
	@import '../styles/label';
	@import '../styles/input';
</style>
