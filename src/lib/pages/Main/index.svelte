<script lang="ts">
	

    
    import LeftInfoBar from '$lib/components/HomePage/LeftBar/LeftInfoBar.svelte';
import MidNavbar from '$lib/components/HomePage/Feed/MidNavbar.svelte';
import RightSideBar from '$lib/components/HomePage/RightBar/RightSideBar.svelte';
import Navbar from '$lib/components/Navbar.svelte';
import NavbarMob from '$lib/components/NavbarMob.svelte';
import MidBarFeedMob from '$lib/components/HomePage/Feed/MidBarFeedMob.svelte';

let innerWidth :number =1027;
</script>
<svelte:window bind:innerWidth />
{#if innerWidth > 1026}

<Navbar />
<body class="h-screen bg-color-background-base ">
    <div class="mt-[4.3125rem]">
    <div class="mx-[7%]  pt-2 flex justify-between">
        <LeftInfoBar/>
        <MidNavbar/>
        <RightSideBar/>
    </div>
</div>
</body>
<!-- {/if} -->
{:else}
<body class="h-screen bg-color-background-base">
<MidBarFeedMob/>
<NavbarMob/>

</body>

{/if}

<style lang="postcss">
	* {
		@apply text-center;
		font-family: 'Inter', sans-serif;
	}

	
</style>
