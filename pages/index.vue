<script setup lang="ts">
import UserIcon from "~/components/icons/UserIcon.vue"
import TwoUsers from "~/components/icons/TwoUsers.vue"
import Star from "~/components/icons/Star.vue"

type IProduct = {
    id: number,
    name: string,
    price: number,
    image: string,
    days: number,
    hours: number,
    minutes: number,
    sale: boolean,

}

const chipData = ref([
    {
        icon: markRaw(UserIcon),
        number: 8,
        text: 'Following'
    },
    {
        icon: markRaw(TwoUsers),
        number: 20,
        text: 'Followers'
    },
    {
        icon: markRaw(Star),
        number: '4.2 (15)',
        text: 'Rate'
    }
])
const tab = ref('products')
const products = ref < IProduct[] > ([
    {
        id: 1,
        name: 'Six-piece clothing set (blouse - pants - hat and',
        price: 1000,
        image: '/item1.png',
        days: 2,
        hours: 10,
        minutes: 20,
        sale: false
    },
    {
        id: 2,
        name: 'Jeep Car, new, used for only one time',
        price: 1000,
        image: '/item2.png',
        days: 2,
        hours: 10,
        minutes: 20,
        sale: false
    },
    {
        id: 3,
        name: 'Six-piece clothing set (blouse - pants - hat and',
        price: 1000,
        image: '/item3.png',
        days: 2,
        hours: 10,
        minutes: 20,
        sale: true
    },
    {
        id: 4,
        name: 'Jeep Car, new, used for only one time',
        price: 1000,
        image: '/item4.png',
        days: 2,
        hours: 10,
        minutes: 20,
        sale: true
    },
    {
        id: 5,
        name: 'Six-piece clothing set (blouse - pants - hat and',
        price: 1000,
        image: '/item1.png',
        days: 2,
        hours: 10,
        minutes: 20,
        sale: true
    },
    {
        id: 6,
        name: 'Six-piece clothing set (blouse - pants - hat and',
        price: 1000,
        image: '/item2.png',
        days: 2,
        hours: 10,
        minutes: 20,
        sale: false
    },
])

</script>

<template>
    <div class=" tw-flex tw-flex-col tw-p-5 md:tw-flex-row md:tw-justify-between md:tw-px-24 md:tw-py-12 ">
        <div class=" md:tw-w-[32%]  tw-w-full tw-mb-3 ">
            <div class=" tw-flex tw-flex-col tw-gap-2 tw-bg-white tw-rounded-3xl  tw-p-4">
                <NuxtImg src="/profile.png" width="100" />
                <h4>Hala Ahmed</h4>
                <small class=" tw-text-slate-600">
                    I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.
                </small>
                <div class="tw-flex tw-justify-between">
                    <Chip v-for="(data, index) in chipData" :key="index">
                        <template #content>
                            <div class="tw-flex tw-justify-start tw-gap-2 tw-items-center">
                                <component :is="data.icon" />
                                <div class="tw-flex tw-flex-col">
                                    <small class="tw-text-black">{{ data.number }}</small>
                                    <small>{{ data.text }}</small>
                                </div>
                            </div>
                        </template>
                    </Chip>
                </div>
                <button
                    class=" tw-mt-2 tw-text-white tw-text-sm tw-font-bold  tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-p-3 tw-rounded-xl ">Follow</button>
            </div>
            <div class=" tw-flex tw-flex-col tw-gap-2 tw-bg-white tw-rounded-2xl tw-p-4 tw-mt-5">
                <div class="tw-flex tw-justify-between">
                    <h4>QR Code</h4>
                    <div class="tw-flex tw-justify-between tw-gap-2 ">
                        <IconsEye />
                        <IconsShare />
                        <IconsDocument />
                    </div>
                </div>
                <Chip>
                    <template #content>
                        <div class="tw-flex tw-justify-start tw-gap-2 tw-items-center">
                            <IconsDocument />
                            <small class="tw-text-black">Download the QR code or share it with your friends.</small>
                        </div>
                    </template>
                </Chip>
                <div class="tw-mt-2  tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-p-4 tw-rounded-xl">
                    <div class="tw-bg-white tw-rounded-xl tw-flex tw-flex-col tw-items-center tw-py-4">
                        <NuxtImg src="/logo.png" width="80" height="30" />
                        <h5>Hala Ahmed</h5>
                        <NuxtImg src="/QR.png" width="100" />
                        <small>Follow Us on Mazaady</small>
                    </div>
                </div>
            </div>
        </div>
        <div class=" tw-bg-white tw-rounded-3xl tw-p-6 tw-w-full tw-mt-3  md:tw-mt-0 md:tw-w-[66%] ">
            <div class=" tw-flex tw-justify-between">
                <div class=" tw-flex tw-justify-between tw-gap-3 tw-items-center">
                    <Chip class=" hover:tw-cursor-pointer" @click="tab = 'products'" :bordered="true" :disabled="tab !== 'products'">
                        <template #content>
                            Products
                        </template>
                    </Chip>
                    <Chip class=" hover:tw-cursor-pointer" @click="tab = 'articles'" :bordered="true" :disabled="tab !== 'articles'">
                        <template #content>
                            Articles
                        </template>
                    </Chip>
                    <Chip class=" hover:tw-cursor-pointer" @click="tab = 'reviews'" :bordered="true" :disabled="tab !== 'reviews'">
                        <template #content>
                            Reviews
                        </template>
                    </Chip>
                </div>
                <Btn class="max-md:tw-hidden" title="Add Review"/>
            </div>
            <v-tabs-window class="py-4" v-model="tab">
                <v-tabs-window-item value="products">
                    <h3 class=" tw-font-extrabold">Products <small class=" tw-text-sm tw-text-slate-400">(12)</small>
                    </h3>
                    <Product class="my-5" v-for="product in products" :key="product.id" :product="product" />
                </v-tabs-window-item>

                <v-tabs-window-item value="articles">
                    <h3 class=" tw-font-extrabold">Articles</h3>
                </v-tabs-window-item>

                <v-tabs-window-item value="reviews">
                    <h3 class=" tw-font-extrabold">Reviews</h3>
                </v-tabs-window-item>
            </v-tabs-window>
        </div>
    </div>
</template>
