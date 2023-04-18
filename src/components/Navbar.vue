<template>
    <div class="flex items-center justify-between py-8 px-6 border-b-4 border-b-black">
        <RouterLink to="/" class="font-normal underline">mrporter.com</RouterLink>
        <img src="./../assets/logo.png" alt="logo">
        <ul>
            <RouterLink :to="list.to" class="font-normal text-sm mx-2" v-for="list in lists">
                {{ list.name }}
            </RouterLink>
        </ul>
    </div>
</template>
<script setup>
const lists = [
    { name: 'How it works', to: '#work' },
    { name: 'My wardrobe', to: '#wardrobe' },
    { name: 'My account', to: '#account' },
]
</script>