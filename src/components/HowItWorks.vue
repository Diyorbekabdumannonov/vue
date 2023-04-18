<template>
    <img src="./../assets/title.png" alt="title" class="mx-auto mt-14" id="work">
    <div class="flex items-center px-40 gap-16 mt-12">
        <div v-for="work in works" class="flex flex-col items-center">
            <img :src="work.img" alt="img">
            <h3 class="mt-8 text-2xl font-normal">{{ work.title }}</h3>
            <p class="mt-4 font-normal text-secondary text-center">{{ work.desc }}</p>
        </div>
    </div>
    <img src="./../assets/title2.png" alt="title" class="mx-auto mt-32" id="wardrobe">
    <div class="flex items-center px-8 gap-6 mt-10">
        <div v-for="product in products" class="flex flex-col items-center">
            <img :src="product.img" alt="img">
            <h3 class="mt-6 text-secondary font-normal">{{ product.title }}</h3>
        </div>
    </div>
    <div class="flex justify-center">
        <Button name="Sell your items" />
    </div>
</template>
<script setup>
import pickup from './../assets/1.png'
import does from './../assets/2.png'
import reward from './../assets/3.png'
import image from './../assets/image.png'
import image2 from './../assets/image2.png'
import image3 from './../assets/image3.png'
import image4 from './../assets/image4.png'
import image5 from './../assets/image5.png'
import Button from './Button.vue'

const works = [
    { img: pickup, title: '01. We pick up', desc: 'There’s no need to send your items to us – we will collect them from your home, or you can choose our drop-off service' },
    { img: does, title: '02. We do the listing', desc: 'Our expert team will look after the photography, product description, pricing and listing of all your items' },
    { img: reward, title: '03. You are rewarded', desc: 'Choose to receive payment as MR PORTER store credit – with an extra 10 per cent added – or as cash via bank transfer' },
]
const products = [
    { img: image, title: 'Bags and accessories' },
    { img: image2, title: 'Sneakers' },
    { img: image3, title: 'Coats and jackets' },
    { img: image4, title: 'Hoodies and T-shirts' },
    { img: image5, title: 'Knitwear' },
]
</script>