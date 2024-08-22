<script lang="ts" setup>
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
    <span class="   tw-rounded-2xl " :class="[bordered ? ' tw-border-secondary tw-border':'' , disabled ? ' tw-text-zinc-400 tw-border-zinc-400 tw-border' :'tw-text-secondary tw-bg-secondary-low' ]">
        <slot name="content"/>
    </span>
</template>