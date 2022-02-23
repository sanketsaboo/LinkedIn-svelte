<script lang="ts">
import Connections from "$lib/icons/Connections.svelte";

import HomeIcon from "$lib/icons/HomeIcon.svelte";
import Logo from "$lib/icons/Logo.svelte";
import Message from "$lib/icons/Message.svelte";
import Notification from "$lib/icons/Notification.svelte";
import Search from "$lib/icons/Search.svelte";
import Job from "$lib/icons/Job.svelte";
import Profile from "$lib/icons/Profile.svelte";

import Work from "$lib/icons/Work.svelte";
import NavItem from "./Navbar/NavItem.svelte";
import NavItem2 from "./Navbar/NavItem2.svelte";




</script>
<div class="w-full h-[3.3125rem]  bg-color-white-base  mb-2 mx-0  top-0 z-50 fixed">

    <div class="mx-[8%]  pt-2 flex">
        <Logo class="flex mr-2 rounded"/> 

        <div class="w-[20%] flex ">
            <div class="relative m-0"> 
                <input type="text" placeholder="Search" class=" bg-color-serachbox-base z-0 h-9  rounded pl-10">
                <div class="absolute top-2 left-3 ">
                    <Search class=" z-20"/>
                </div>
            </div>
        </div>


        <div class=" flex ml-40">
            <NavItem navName="Home" href="/">
                <HomeIcon class="m-auto"/>
            </NavItem>

            <NavItem navName="Connections">
                <Connections class="m-auto"/>
            </NavItem>

            <NavItem navName="Job">
                <Job class="m-auto"/>
            </NavItem>

            <NavItem navName="Message">
                <Message class="m-auto"/>
            </NavItem>

            <NavItem navName="Notification" href="/Notification">
                <Notification class="m-auto"/>
            </NavItem>

            <NavItem2 navName="Sanket" >
                
                <Profile class="m-auto"/>
               
            </NavItem2>


            <NavItem2 navName="Work">
                
                <Work class="m-auto"/>
                
            </NavItem2>

           
        </div>




    </div>

</div>


