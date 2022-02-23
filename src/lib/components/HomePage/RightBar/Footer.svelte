<script>
import LinkedInFullLogo from "$lib/icons/LinkedInFullLogo.svelte";

import UpArrow from "$lib/icons/UpArrow.svelte";

</script>

<div class="w-11/12 border-1 p-1 rounded-md mx-1 max-h-min items-start {$$props.class} mt-[3.3125rem]">
    <div class="grid grid-cols-3 justify-around items-start max-h-min">
        <div class=""><p>About</p></div>
        <div class="col-span-2"><p>Accessibility</p></div>
        <div class=""><p>Help Center</p></div>
        <div class="col-span-3 "><p>Privacy & Terms </p></div>
        <div class="col-span-1"><p>Ad Choices</p></div>
        <div class="col-span-2"><p>Advertising</p></div>
        <div class="col-span-2 "><p>Business Services</p></div>
        <div class="col-span-3 "><p>Get the LinkedIn app</p></div>
        <div class=""><p>More</p></div>
    
        <div class="col-span-4 "><p class="pchange"><LinkedInFullLogo class="flex"/> LinkedIn Corporation © 2022</p></div>
    </div>
</div>

  <style>
      p{
          @apply text-xs text-color-grey-base justify-around  px-2 py-1
      }
      .pchange{
            @apply flex px-0 py-1
      }
  </style>