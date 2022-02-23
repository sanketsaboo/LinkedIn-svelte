<div class="navdiv">
    <a href="{$$props.href}">
    <div class="inline-block content-center">
        <slot/>
    <p class="navtext">{$$props.navName}</p>
    </div>   
</a>
</div>

<style>
    .navtext{
        @apply flex justify-center items-center text-xs
    }
    
    .navdiv{
        @apply flex px-3
    }
</style>