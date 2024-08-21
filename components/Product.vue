<script setup>
const props = defineProps({
    product: {
        type: Object
    }
})
const active = ref(false)
</script>

<template>
    <div class="tw-flex tw-justify-start tw-gap-3 tw-items-center">
        <NuxtImg :src="product.image" width="95" />
        <div class="tw-flex tw-justify-between tw-flex-grow">
            <div class="tw-flex tw-flex-col tw-gap-1">
                <span>{{ product.name }}</span>
                <h5> <span class=" tw-text-sm tw-text-zinc-400">Starting Price </span> {{ product.price }} EGP</h5>
                <h5> 
                    <span class=" tw-text-sm tw-text-zinc-400">Lot starts in </span>
                    <Chip class=" tw-text-xs">
                        <template #content>
                            {{ product.days }} Days
                        </template>
                    </Chip>
                    <Chip class=" tw-text-xs tw-mx-2">
                        <template #content>
                            {{ product.hours }} Hours
                        </template>
                    </Chip>
                    <Chip class=" tw-text-xs">
                        <template #content>
                            {{ product.minutes }} Minutes
                        </template>
                    </Chip>
                </h5>
            </div>
            <IconsHeart :active="active" @click="active = !active"/>
        </div>
    </div>
</template>