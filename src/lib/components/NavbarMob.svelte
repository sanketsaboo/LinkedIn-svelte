<script lang="ts">
    import Connections from "$lib/icons/Connections.svelte";
    
    import HomeIcon from "$lib/icons/HomeIcon.svelte";
    import Notification from "$lib/icons/Notification.svelte";
    import Job from "$lib/icons/Job.svelte";
    import NavItem from "./Navbar/NavItem.svelte";
    import Add from "$lib/icons/add.svelte";
    
    
    
    
    </script>
    <div class="w-full h-[3.3125rem]  bg-color-white-base justify-between  bottom-0 z-50 sticky">
    
        <div class="pt-2 flex">
           
    
    
            <div class=" flex justify-between ">
                <NavItem navName="Home" href="/">
                    <HomeIcon class="m-auto"/>
                </NavItem>
    
                <NavItem navName="Connections">
                    <Connections class="m-auto"/>
                </NavItem>
    
                <NavItem navName="Post" >
                    <Add class="m-auto"/>
                </NavItem>
    
    
                <NavItem navName="Notification" href="/Notification">
                    <Notification class="m-auto"/>
                </NavItem>
                
                <NavItem navName="Job">
                    <Job class="m-auto"/>
                </NavItem>
                
    
    
                
               
            </div>
    
    
    
    
        </div>
    
    </div>
    
    
    