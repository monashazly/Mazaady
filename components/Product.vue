<script setup>
const props = defineProps({
    product: {
        type: Object
    }
})
const active = ref(false)
</script>

<template>
    <div class="tw-flex tw-justify-between" style="position: relative;">
        <div class=" tw-relative tw-rounded-[19px] tw-overflow-hidden  tw-h-fit tw-max-h-[150px]"
        :class="$vuetify.display.smAndDown ? 'tw-w-[33%]' : 'tw-w-[20%]'">
            <NuxtImg :src="product.image" class="tw-w-full" />
            <div class=" tw-text-xs tw-text-nowrap tw-absolute tw-bottom-0 tw-right-0 tw-text-white tw-px-4 tw-py-2 tw-rounded-tl-full tw-rounded-tr-none tw-rounded-bl-none tw-rounded-br-[19px]"
                :class="product.sale ? 'tw-bg-secondary' : 'tw-bg-primary'">
                {{ product.sale ? 'Hot Sale' : 'Live Auction' }}
            </div>
        </div>
        <div class="tw-flex tw-justify-between  "
        :class="$vuetify.display.smAndDown ? 'tw-w-[60%]' : 'tw-w-[78%]'">
            <div class="tw-flex tw-flex-col tw-gap-1">
                <span>{{ product.name }}</span>
                <h5> <span class=" tw-text-sm tw-text-zinc-400">Starting Price </span> {{ product.price }} EGP</h5>
                <h5 class="tw-flex" :class="$vuetify.display.smAndDown ? ' tw-flex-col' : 'tw-justify-start tw-gap-2'">
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
            <div :class="$vuetify.display.smAndDown ? ' tw-rounded-full tw-bg-white tw-p-1 tw-absolute tw-left-1 tw-top-2 ' : ''"
                @click="active = !active">
                <IconsHeart :active="active" />
            </div>
        </div>
    </div>
</template>