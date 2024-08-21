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
        <div class=" tw-relative tw-rounded-[19px] tw-overflow-hidden tw-w-[18%] tw-max-h-[150px]">
            <NuxtImg :src="product.image" class="tw-w-full" />
            <div class=" tw-text-white tw-text-xs tw-absolute tw-w-[124px] tw-bottom-[-28px] tw-right-[-43px] tw-h-14 "
                :class="product.sale ? 'tw-bg-secondary tw-py-2 tw-pl-5' : 'tw-bg-primary tw-py-2 tw-pl-2'"
                style="border-radius: inherit;">
                {{ product.sale ? 'Hot Sale' : 'Live auction' }}
            </div>
        </div>
        <div class="tw-flex tw-justify-between  tw-w-[78%]">
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
            <div :class="$vuetify.display.smAndDown ? ' tw-rounded-full tw-bg-white tw-p-1 tw-absolute tw-left-1 tw-top-2 ' : ''" @click="active = !active">
                <IconsHeart :active="active" />
            </div>
        </div>
    </div>
</template>