<script lang="ts">

import UpArrow from "$lib/icons/UpArrow.svelte";

</script>
<div class="grid grid-cols-8  p-1 pb-2">
    <button type="button " class="flex rounded-full" >
        <img class="w-12 mt-2 border-none m-auto rounded-full flex  " src="{$$props.logo}" alt="user photo" />
    </button>

    <div class="text-left col-span-6 align-middle p-2">
        <p class="text-sm font-normal ">{$$props.notify}</p>
        
        <!-- <p class="text-xs text-color-grey-base font-light flex">{$$props.days} . <Earth/></p> -->
    </div>
    <div class="text-left col-span-1 p-2">
        
        <p class="text-xs text-color-grey-base text-right font-light ">{$$props.time}</p>
        <UpArrow class="flex  ml-[70%]"/>
    </div>

</div> 

