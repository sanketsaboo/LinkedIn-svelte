<script lang="ts">
import Footer from "../HomePage/RightBar/Footer.svelte";

    
import Navbar from "../Navbar.svelte";
import NotificationItem from "./NotificationItem.svelte";
import NotificationItemButton from "./NotificationItemButton.svelte";
      
        
    </script>
    
    <Navbar />
    
    <body class="mx-[7%]  mt-[3.3125rem] pt-2 flex justify-between bg-color-background-base">
        <!-- ------------------------Notification--------------------------->
        
        <div class="grid sticky items-start max-h-min z-10 ">
            <div class="mx-0 my-4 sticky top-[5%]    left-auto">
                <div class="w-full p-4  rounded-md bg-color-white-base border-1 mx-1 h-full mt-[3.3125rem] text-left" >
                    <h1 class="text-base font-medium">Manage your Notifications</h1>
                    <a ><p class="text-color-linkedin-base text-xs my-2 font-medium"> View Settings</p></a>
                </div>
            </div>
        </div>
    
        <div class="w-8/12  border-1 bg-color-white-base mx-4 align-middle p-2 rounded-md mb-8">
       
            
            <NotificationItem  logo="/images/png/UserPicture1.png" notify="Tuesday News Wrap: Offices call employees back, India's EV charging stations double; and more."
            time="2s"/> 
            <NotificationItem  logo="/images/png/UserPicture2.png" notify="This post is popular at Goldman Sachs: Proud to see Goldman Sachs listed as Bank of the Year by International Financing Review. https://click.gs.com/ntkh"
            time="6h"/>
            <NotificationItemButton buttonName="View Jobs"  logo="/images/png/UserPicture2.png" notify="This post is popular at Goldman Sachs: Proud to see Goldman Sachs listed as Bank of the Year by International Financing Review. https://click.gs.com/ntkh"
            time="6h"/>
            <NotificationItem  logo="/images/png/UserPicture1.png" notify="Tuesday News Wrap: Offices call employees back, India's EV charging stations double; and more."
            time="2s"/> 
            <NotificationItem  logo="/images/png/UserPicture2.png" notify="This post is popular at Goldman Sachs: Proud to see Goldman Sachs listed as Bank of the Year by International Financing Review. https://click.gs.com/ntkh"
            time="6h"/>
            <NotificationItemButton buttonName="View Jobs"  logo="/images/png/UserPicture2.png" notify="This post is popular at Goldman Sachs: Proud to see Goldman Sachs listed as Bank of the Year by International Financing Review. https://click.gs.com/ntkh"
            time="6h"/>
            <NotificationItem  logo="/images/png/UserPicture1.png" notify="Tuesday News Wrap: Offices call employees back, India's EV charging stations double; and more."
            time="2s"/> 
            <NotificationItem  logo="/images/png/UserPicture2.png" notify="This post is popular at Goldman Sachs: Proud to see Goldman Sachs listed as Bank of the Year by International Financing Review. https://click.gs.com/ntkh"
            time="6h"/>
            <NotificationItemButton buttonName="View Jobs"  logo="/images/png/UserPicture2.png" notify="This post is popular at Goldman Sachs: Proud to see Goldman Sachs listed as Bank of the Year by International Financing Review. https://click.gs.com/ntkh"
            time="6h"/>
            <NotificationItem  logo="/images/png/UserPicture1.png" notify="Tuesday News Wrap: Offices call employees back, India's EV charging stations double; and more."
            time="2s"/> 
            <NotificationItem  logo="/images/png/UserPicture2.png" notify="This post is popular at Goldman Sachs: Proud to see Goldman Sachs listed as Bank of the Year by International Financing Review. https://click.gs.com/ntkh"
            time="6h"/>
            <NotificationItemButton buttonName="View Jobs"  logo="/images/png/UserPicture2.png" notify="This post is popular at Goldman Sachs: Proud to see Goldman Sachs listed as Bank of the Year by International Financing Review. https://click.gs.com/ntkh"
            time="6h"/>
              
            
        </div>
        <div class="grid sticky items-start max-h-min z-10 ">
            <div class="mx-0 my-4 sticky top-[5%]   left-auto">
                <Footer/>
            </div>
        </div>
        <!-- <Footer class="w-[25%] "/> -->
    <!-- ------------------------Notification Ends--------------------------->
    </body>
    
    
    
    