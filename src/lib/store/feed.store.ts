import { browser } from '$app/env';
import { readable, writable } from 'svelte/store';
export const userPostType = readable([
	{
        name: 'Webrazzi',
        followers:'69696',
        days: '4d',
        caption: ' Become a fullstack developer',
        logo:'/images/png/UserPicture1.png',
        image:'/images/png/FeedImage1.png',
	
	},

	{
        name: 'Github',
        followers:'169696',
        days: '1d',
        caption: ' The 2020 State of the Octoverse uncovered COVIDs impact on developer contributions, the OSS community pandemic response, and the challenge of securing the world’s software. Learn how developers turned challenges into opportunities on The ReadME Project.',
        logo:'/images/png/UserPicture2.png',
        image:'/images/png/FeedImage2.png',
	},

	{
        name: 'Sherpa Blog',
        followers:'21567',
        days: '3hrs',
        caption: ' A degree can land you in a job after six rounds of interview. A Twitter Space session can do that in six minutes. Networking > Mindless Degrees',
        logo:'/images/png/UserPicture3.png',
        image:'/images/png/FeedImage3.png',
	},
	
]);
