<script lang="ts">
import MidBarIcon from "./MidBarIcon.svelte";
import Photo from '$icons/Photo.svelte';
import Video from '$icons/Video.svelte';
import Event from '$icons/Event.svelte';
import Article from '$icons/Article.svelte';
import Post from "./Post.svelte";

// let innerWidth :number =1027;
</script>
<!-- <svelte:window bind:innerWidth />
{#if innerWidth > 1026}
{/if} -->

<div class="grid w-9/12 grid-cols-1 mx-2 ">

    <div class="w-full h-28 border-1 bg-color-white-base justify-around  rounded-md mb-4">
        

        
        <div class="grid grid-cols-8 ">
            <button type="button " class="flex rounded-full" >
                <img class="w-12 mt-2 border-none m-auto rounded-full flex " src="./images/jpg/ProfilePicture.jpg" alt="user photo" />
            </button>

            <div class="flex col-span-7">
                <input type="text" placeholder="Start a post" class=" flex border rounded-[3.125rem] h-12 w-11/12 p-2 mt-2 border-color-borders-base ">
            </div>
        </div>
        



        <div class="grid grid-cols-4 gap-2 mt-0 ">
            <div>
                <MidBarIcon iconName="Photo">
                    <Photo/>
                </MidBarIcon>
            </div>

            <div>
                <MidBarIcon iconName="Video">
                    <Video/>
                </MidBarIcon>
            </div>
            <div>
                <MidBarIcon iconName="Event">
                    <Event/>
                </MidBarIcon>
            </div>
            <div>
                <MidBarIcon iconName="Write Article">
                    <Article/>
                </MidBarIcon>
            </div>
            
        </div>




    </div>

    <div class="flex mb-4">
        <hr class=" h-0.5 m-2 text-xs bg-color-hr flex">
        <p class="text-xs flex  mx-1">Sort By:</p>

       
        <button id="dropdownBottomButton" data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom" class="   flex text-xs text-color-black" type="button">Top
             <svg class="ml-1 w-3 h-3 flex" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>

        <div id="dropdownBottom" class="hidden z-10 w-3 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul class="py-1" aria-labelledby="dropdownBottomButton">
            <li>
                <a href="/home" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
                <a href="/home" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
            </li>
        
            </ul>
        </div>


    </div>
    <!-- {#each userPostType as feed}
    <div class="">
           <Post name= {feed.name}
           followers={feed.followers}
           days= {feed.days}
           caption=  {feed.caption}
           logo={feed.logo}
           image= {feed.image} />
           
       </div>
       {/each}   -->
  
 <div >
        <Post name= 'Webrazzi'
        followers='69696'
        days= '4d'
        caption=' Become a fullstack developer'
        logo='/images/png/UserPicture1.png'
        image='/images/png/FeedImage1.png'/>
        
    </div>
    
    <div >
        <Post name= 'Github'
        followers='169696'
        days= '1d'
        caption=' The 2020 State of the Octoverse uncovered COVIDs impact on developer contributions, the OSS community pandemic response, and the challenge of securing the world’s software. Learn how developers turned challenges into opportunities on The ReadME Project.'
        logo='/images/png/UserPicture2.png'
        image='/images/png/FeedImage2.png'/>
        
    </div>
    <div >
        <Post name= 'Sherpa Blog'
        followers='21567'
        days= '3hrs'
        caption=' A degree can land you in a job after six rounds of interview. A Twitter Space session can do that in six minutes. Networking > Mindless Degrees'
        logo='/images/png/UserPicture3.png'
        image='/images/png/FeedImage3.png'/>
        
    </div>


</div>

