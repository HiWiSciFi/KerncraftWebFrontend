<script lang="ts">
	import { runConfiguration } from '../RunConfigurationStore';
</script>

<label>Cores: <input type="number" min="1" step="1" bind:value={runConfiguration.cores}/></label>

<style lang="scss">
	@import '../styles/label';
	@import '../styles/input';
</style>
