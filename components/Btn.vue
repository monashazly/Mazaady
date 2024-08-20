<script setup>
const props = defineProps({
    title: {
        type: String
    }
})
</script>

<template>
    <button class=" tw-text-sm tw-text-white tw-flex tw-items-center tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-p-2 tw-rounded-md tw-gap-2 ">
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.5 16.5C13.625 16.5 17 13.125 17 9C17 4.875 13.625 1.5 9.5 1.5C5.375 1.5 2 4.875 2 9C2 13.125 5.375 16.5 9.5 16.5Z"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.5 9H12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.5 12V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {{ props.title }}
    </button>
</template>