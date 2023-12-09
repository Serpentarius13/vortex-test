<script lang="ts">
  import Loader from "./Loader.svelte";
  import ErrorText from "$shared/ui/Error/ui/ErrorText.svelte";

  export let loading: boolean = false;
  export let error: Error | null = null;
</script>

{#if loading}
  <Loader />
{:else if error}
  <ErrorText>
    {error.message}
  </ErrorText>
{:else}
  <slot />
{/if}

<style lang="scss">
</style>
