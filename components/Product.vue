<script lang="ts" setup>

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    days: number;
    hours: number;
    minutes: number;
    sale: boolean;
}

const props = defineProps<{
    product: Product;
}>();

const active = ref(false)
</script>

<template>
    <div class="tw-flex tw-justify-between" style="position: relative;">
        <div
            class=" tw-relative tw-rounded-[19px] tw-overflow-hidden  tw-h-fit tw-max-h-[150px] tw-w-[33%] md:tw-w-[20%] ">
            <NuxtImg :src="product.image" class="tw-w-full" />
            <div class=" tw-text-xs text-no-wrap tw-absolute tw-bottom-0 tw-right-0 tw-text-white tw-px-4 tw-py-2 tw-rounded-tl-full tw-rounded-tr-none tw-rounded-bl-none tw-rounded-br-[19px]"
                :class="product.sale ? 'tw-bg-secondary' : 'tw-bg-primary'">
                {{ product.sale ? 'Hot Sale' : 'Live Auction' }}
            </div>
        </div>
        <div class="tw-flex tw-justify-between tw-w-[60%] md:tw-w-[78%]  ">
            <div class="tw-flex tw-flex-col tw-gap-1">
                <span>{{ product.name }}</span>
                <h5> <span class=" tw-text-sm tw-text-zinc-400">Starting Price </span> {{ product.price }} EGP</h5>
                <h5 class="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-start md:tw-gap-2  ">
                    <span class=" tw-text-sm tw-text-zinc-400">Lot starts in </span>
                    <span class="tw-flex tw-flex-wrap tw-gap-2">
                        <Chip class=" tw-text-xs">
                            <template #content>
                                {{ product.days }} Days
                            </template>
                        </Chip>
                        <Chip class=" tw-text-xs">
                            <template #content>
                                {{ product.hours }} Hrs
                            </template>
                        </Chip>
                        <Chip class=" tw-text-xs">
                            <template #content>
                                {{ product.minutes }} Mins
                            </template>
                        </Chip>
                    </span>

                </h5>
            </div>
            <div class="max-md:tw-rounded-full max-md:tw-bg-white max-md:tw-p-1 max-md:tw-absolute max-md:tw-left-1 max-md:tw-top-2"
                @click="active = !active">
                <IconsHeart :active="active" />
            </div>
        </div>
    </div>
</template>