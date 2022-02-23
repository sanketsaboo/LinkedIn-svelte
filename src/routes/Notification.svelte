<script lang="ts">
import NotificationsLap from "$lib/components/Notification/NotificationsLap.svelte";
import NotificationsMob from "$lib/components/Notification/NotificationsMob.svelte";
let innerWidth :number =1027;
</script>
<svelte:window bind:innerWidth />
{#if innerWidth > 1026}
<NotificationsLap/>
{:else}

<NotificationsMob/>

{/if}