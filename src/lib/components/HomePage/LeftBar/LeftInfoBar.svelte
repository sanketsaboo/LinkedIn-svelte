<script lang="ts">
import ProfileBanner from "$lib/icons/ProfileBanner.svelte"
import Premium from "$lib/icons/Premium.svelte"
import MyItems from "$lib/icons/MyItems.svelte"
import LeftStats from "./LeftStats.svelte";
import Line from "../Line.svelte";
import LeftPremium from "./LeftPremium.svelte";
</script>

<div class="w-[20%] p-0 mt-0 rounded-md bg-color-white-base border-1 mx-1 h-full" >
    <ProfileBanner class="w-full p-0 m-0 "/>

    <button type="button  " class="flex w-full rounded-full" >
        <img class="w-14 border-none m-auto rounded-full flex z-20" src="/images/jpg/ProfilePicture.jpg" alt="user photo" />
    </button>

    <div >
        <h3 class="text-base p-2 font-semibold">Sanket Saboo</h3>
        <p class="text-xs font-normal pb-4 text-color-grey-base"> Open to Freelancing</p>
        <Line/>
        <LeftStats text="Who Viewed your profile" numbers="51"/>
        <LeftStats text="Views of your posts" numbers="510"/>
        <Line/>
        <div class="p-2">
            <p class="text-xs font-normal text-left text-color-grey-base"> Access exclusive tools & insights</p>

            <LeftPremium text="Try Premium for free"> 
                <Premium class="mx-1"/>
            </LeftPremium>
            
        </div>
        <Line/>
        <div class="p-2">
            <LeftPremium text="My Items"> 
            <MyItems class="mx-1"/>
        </LeftPremium></div>
    </div>

</div>