<script lang="ts">
    import Information from "$lib/icons/Information.svelte"
import ItemList from "./ItemList.svelte";
</script>

<!-- <div class="w-[25%] border-1 p-1 rounded-md bg-color-white-base mx-1 h-full "> -->
    <div class=" border-1 p-1 rounded-md bg-color-white-base mx-1  max-h-min">

    <div class="flex justify-between px-2 pt-4 pb-1 items-start">
        <h3 class="text-base font-semibold text-color-grey-base">LinkedIn News</h3>
        <Information/>
    </div>
    <div>
        <ul class="list-disc text-left px-8 h-11/12 ">
            <ItemList text="Startups set to give massive hikes" time="7h ago. 22324 readers"/>   
            <ItemList text="Startups set to give massive hikes" time="7h ago. 22324 readers"/>   
            <ItemList text="Add h-full to set length automatically" time="7h ago. 22324 readers"/>   
        </ul>
    </div>
    
</div>