<template>
    <div class="relative flex items-center justify-center py-48 bg-no-repeat bg-cover">
        <img src="./../assets/banner.png" alt="banner" class="absolute w-full h-full object-cover">
        <h1 class="text-white font-normal relative text-5xl text-center leading-tight">Resell and refresh your wardrobe with us and
            <br> enjoy MR PORTER store credit
        </h1>
    </div>
    <div class="bg-primary text-center flex flex-col justify-center items-center py-20">
        <h3 class="font-normal text-3xl">We have partnered with Reflaunt so you can resell with <br> ease, convenience and
            flexibility</h3>
        <p class="mt-6 text-secondary font-normal">At MR PORTER, we believe in long-lasting style. Which is why we’re making
            it easy for you to extend the life <br> of
            your clothes and unlock the value in your wardrobe. It’s simple: just click below to list your items for sale
            <br>
            and once they have sold, you can choose to receive your payment as cash – or as MR PORTER credit with an <br>
            extra
            10 per cent added.
        </p>
        <Button name="Sell your items"/>
    </div>
</template>
<script setup>
import Button from './Button.vue';

</script>