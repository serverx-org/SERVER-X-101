<svelte:options tag="route-loader" />

<script lang="ts">
  import { routeLoading } from '../../stores/loading';
</script>


<div class="gradient-loader" class:show={$routeLoading}></div>

<style lang="scss">
  div {
    @apply fixed w-full top-0 left-0 h-1 opacity-0 -translate-x-full transition-all;
  }
  .show {
    @apply opacity-100 translate-x-0;
  }
  .gradient-loader {
    @apply bg-gradient-to-r from-peach1 via-blue-500 to-peach rounded-full transition-all duration-150 ease-in-out;
    background-size: 200% 200%;
    animation: gradiant-move 1s infinite;
  }
  @keyframes gradiant-move { 
    0%{background-position:left}
    50%{background-position:right}
    100%{background-position:left}
  }
</style>