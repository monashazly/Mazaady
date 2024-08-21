<script setup>
const props = defineProps({
    product: {
        type: Object
    }
})
const active = ref(false)
</script>

<template>
    <div class="tw-flex tw-justify-start tw-gap-3">
        <NuxtImg :src="product.image" />
        <div class="tw-flex tw-justify-between">
            <IconsHeart :active="active" @click="active = !active"/>
        </div>
    </div>
</template>