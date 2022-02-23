<script>
    import Comment from "$lib/icons/Comment.svelte";
    import Earth from "$lib/icons/Earth.svelte";
    import Like from "$lib/icons/Like.svelte";
    import Send from "$lib/icons/Send.svelte";
    import Share from "$lib/icons/Share.svelte";
    
    </script>
    <!-- <div class="grid grid-cols-1 mx-2 mb-10 "> -->
    
    <div class="w-full  border-1 bg-color-white-base justify-around  rounded-md mb-4">
       
        <div class="grid grid-cols-8  pt-4 pb-1 px-2">
            <button type="button " class="flex rounded-full" >
                <img class="w-12 mt-2 border-none m-auto rounded-full flex " src="{$$props.logo}" alt="user photo" />
            </button>
    
            <div class="text-left col-span-7 ml-4">
                <h5 class="text-sm font-medium ">{$$props.name}</h5>
                <p class="text-xs text-color-grey-base font-light">{$$props.followers} Followers</p>
                <p class="text-xs text-color-grey-base font-light flex">{$$props.days} . <Earth/></p>
            </div>
    
        </div>
    
        <div class="text-left bg-color-white-base">
           <p class="text-sm font-normal  px-4 pt-4 pb-4"> {$$props.caption}</p>
           <img class="w-full bg-cover" src="{$$props.image}" alt="FeedImage"/>
        </div>
        
        <div class="text-left bg-color-white-base flex p-4 justify-around">
            <!-- <div class="grid grid-cols-4 gap-2 mt-0 "></div> -->
            <div class="flex">
                <Like/>
                <p class="likes">Like</p>
            </div>
            <div class="flex">
                <Comment/>
                <p class="likes">Comment</p>
            </div>
            <div class="flex">
                <Share/>
                <p class="likes">Share</p>
            </div>
            <div class="flex">
                <Send/>
                <p class="likes">Send</p>
            </div>
        </div>
    
    </div>
    <!-- </div> -->
    
    <style>
        .likes{
            @apply text-sm px-2 align-middle justify-around
        }
    </style>