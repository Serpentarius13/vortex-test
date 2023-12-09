<script lang="ts">
  import Spinner, { type SpinnerProps } from "flowbite-svelte/Spinner.svelte";

  export let color: SpinnerProps["color"] = "primary";
  export let size: SpinnerProps["size"] = "8";
</script>

<Spinner {color} {size} />
