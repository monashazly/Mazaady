<script setup>
const props = defineProps({
    bordered:{
        type : Boolean
    },
    disabled:{
        type : Boolean
    }
})
</script>

<template>
    <span class="   tw-rounded-2xl tw-p-1 tw-px-4" :class="[bordered ? ' tw-border-secondary tw-border':'' , disabled ? ' tw-text-slate-400 tw-border-slate-400 tw-border' :'tw-text-secondary tw-bg-secondary-low' ]">
        <slot name="content"/>
    </span>
</template>