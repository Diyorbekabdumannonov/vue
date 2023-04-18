<template>
    <div class="mt-14">
        <hr class="bg-[#F0F0F0] h-px mx-40">
        <ul class="flex items-center justify-center gap-14 mt-9 text-secondary text-xs">
            <li v-for="list in lists">
                {{ list.name }}
            </li>
        </ul>
        <div class="flex justify-between items-center p-8 mt-8">
            <img src="./../assets/Socialicons.png" alt="social media" class="cursor-pointer">
            <img src="./../assets/PoweredbyReflaunt.png" alt="social media">
            <div></div>
        </div>
    </div>
</template>
<script setup>
const lists = [
    { name: 'MR PORTER', to: '/' },
    { name: 'Our Pledge', to: '/' },
    { name: 'Contact Us', to: '/' },
    { name: 'FAQs', to: '/' },
    { name: 'Terms And Conditions', to: '/' },
    { name: 'Privacy Policy', to: '/' },
] 
</script>