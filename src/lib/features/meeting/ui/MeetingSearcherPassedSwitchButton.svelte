<script lang="ts">
  import { Button, Indicator } from "flowbite-svelte";
  import type { ButtonProps } from "flowbite-svelte/Button.svelte";
  import type { IndicatorProps } from "flowbite-svelte/Indicator.svelte";

  export let passed: boolean;
  export let type: "passed" | "default" = "default";
  export let handleChangePassed: (val: boolean) => void;
  export let meetingsCount: number;

  $: isTypePassed = type === "passed";
  $: componentData = isTypePassed
    ? {
        buttonColor: "dark" as ButtonProps["color"],
        disabled: passed,
        value: true,
        text: "Passed",
        indicatorColor: "red" as IndicatorProps["color"],
      }
    : {
        buttonColor: "primary" as ButtonProps["color"],
        disabled: !passed,
        value: false,
        text: "Upcoming",
        indicatorColor: "dark" as IndicatorProps["color"],
      };
</script>

<Button
  color={componentData.buttonColor}
  class="relative"
  disabled={componentData.disabled}
  on:click={() => handleChangePassed(componentData.value)}
>
  {componentData.text}

  <Indicator
    color={componentData.indicatorColor}
    size="xl"
    placement="top-right"
  >
    {meetingsCount}
  </Indicator>
</Button>

<style lang="scss">
</style>
