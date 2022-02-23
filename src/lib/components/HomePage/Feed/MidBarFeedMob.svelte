<script lang="ts">

import PostMob from "./PostMob.svelte";
import TopNavMob from "$lib/components/Navbar/TopNavMob.svelte";
    
 
    </script>
   
    
    <div class="grid grid-cols-1 m-0">
    
        <div class="w-full min-h-min border-1 bg-color-white-base justify-around  rounded-md mb-4">
            
    
            
            <TopNavMob/>
            
    
    
    
    
    
        </div>

      
     <div >
            <PostMob name= 'Webrazzi'
            followers='69696'
            days= '4d'
            caption=' Become a fullstack developer'
            logo='/images/png/UserPicture1.png'
            image='/images/png/FeedImageMob1.png'/>
            
        </div>
        
        <div >
            <PostMob name= 'Github'
            followers='169696'
            days= '1d'
            caption='  The 2020 State of the Octoverse uncovered COVIDs impact on developer contributions, the OSS community pandemic response, and the challenge of securing the world’s software. Learn how developers turned challenges into opportunities on The ReadME Project.'
            logo='/images/png/UserPicture2.png'
            image='/images/png/FeedImageMob2.png'/>
            
        </div>
        <div >
            <PostMob name= 'Sherpa Blog'
            followers='21567'
            days= '3hrs'
            caption=' A degree can land you in a job after six rounds of interview. A Twitter Space session can do that in six minutes. Networking > Mindless Degreeser'
            logo='/images/png/UserPicture1.png'
            image='/images/png/FeedImageMob3.png'/>
            
        </div>
    
    
    </div>
    
    