<script setup>
const props = defineProps({
    product: {
        type: Object
    }
})
const active = ref(false)
</script>

<template>
    <div class="tw-flex tw-justify-between">
        <div class=" tw-relative tw-rounded-[19px] tw-overflow-hidden tw-w-[25%] tw-h-fit">
            <NuxtImg :src="product.image" class="tw-w-full"  />
            <div class=" tw-text-white tw-text-xs tw-absolute tw-w-[124px] tw-bottom-[-28px] tw-right-[-43px] tw-h-14 "
                :class="product.sale ? 'tw-bg-secondary tw-py-2 tw-pl-5' : 'tw-bg-primary tw-py-2 tw-pl-2'"
                style="border-radius: inherit;">
                {{ product.sale ? 'Hot Sale' : 'Live auction' }}
            </div>
        </div>
        <div class="tw-flex tw-justify-between  tw-w-[68%]">
            <div class="tw-flex tw-flex-col tw-gap-1">
                <span>{{ product.name }}</span>
                <h5> <span class=" tw-text-sm tw-text-zinc-400">Starting Price </span> {{ product.price }} EGP</h5>
                <h5 class="tw-flex tw-flex-col">
                    <span class=" tw-text-sm tw-text-zinc-400">Lot starts in </span>
                    <span class="tw-flex tw-flex-wrap tw-gap-2" >
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
            <IconsHeart :active="active" @click="active = !active" />
        </div>
    </div>
</template>