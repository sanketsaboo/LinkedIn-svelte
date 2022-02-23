<script lang="ts">
    import BottomArrow from "$lib/icons/BottomArrow.svelte";
</script>
<div class="navdiv">
    <div class="inline-block content-center">
        <slot/>
    <p class="navtext">{$$props.navName}<BottomArrow class="flex"/></p>
    </div>   
</div>

<style>
    .navtext{
        @apply flex justify-center items-center text-xs mt-1
    }
    
    .navdiv{
        @apply flex px-3
    }
</style>