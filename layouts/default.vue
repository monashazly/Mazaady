<template>
    <div class=" tw-position-fixed tw-top-0 tw-bg-white tw-py-4 tw-px-16">
        <div class=" tw-flex tw-justify-start tw-gap-6 tw-text-stone-500 ">
            <NuxtLink to="/">
                <NuxtImg src="/logo.png" />
            </NuxtLink>
            <NuxtLink to="/" exact-active-class="active-link">
                Home
            </NuxtLink>
            <NuxtLink to="/blogs" exact-active-class="active-link">
                Blog
            </NuxtLink>
            <NuxtLink exact-active-class="active-link">
                Gifts
            </NuxtLink>
        </div>
    </div>
</template>
<style scoped>
.active-link {
    color: #e63946;
    /* Active link color */
    font-weight: bold;
    border-bottom: 3px solid #e63946;
    /* Optional underline */
}
</style>