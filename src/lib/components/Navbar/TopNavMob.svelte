<script lang="ts">

import Search from "$lib/icons/Search.svelte";
import Message from "$lib/icons/Message.svelte";
</script>
<div class="grid grid-cols-8 mb-1 bg-color-white-base" >
    <button type="button col-span-1 " class="flex rounded-full" >
        <img class="w-9 ml-1 border-none m-auto rounded-full flex " src="./images/jpg/ProfilePicture.jpg" alt="user photo" />
    </button>

   
    
    <div class="w-[30%] flex mx-1 my-1 ">
        <div class="relative m-0"> 
            <input type="text" placeholder="Search" class=" bg-color-serachbox-base z-0 h-8  rounded pl-10">
            <div class="absolute top-2 left-3 ">
                <Search class=" z-20"/>
            </div>
        </div>
        
    </div>
    
    <div class="flex absolute col-span-1 top-2 right-3">
        <Message class="flex"/>
    </div>
    
</div>