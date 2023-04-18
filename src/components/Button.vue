<template>
    <button class="mt-12 flex items-center px-12 py-3 rounded text-white bg-black">
        <img src="./../assets/Fill1.png" alt="icon">
        <span class="ml-3 font-normal text-sm">{{ name }}</span>
    </button>
</template>
<script >
export default {
    props: {
        name: String,
    }
}
</script>