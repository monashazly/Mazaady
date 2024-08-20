<script setup>
import UserIcon from "~/components/icons/UserIcon.vue"
import TwoUsers from "~/components/icons/TwoUsers.vue"
import Star from "~/components/icons/Star.vue"


const chipData = ref([
    {
        icon: markRaw(UserIcon),
        number: 8,
        text: 'Following'
    },
    {
        icon: markRaw(TwoUsers),
        number: 20,
        text: 'Followers'
    },
    {
        icon: markRaw(Star),
        number: '4.2 (15)',
        text: 'Rate'
    }
])

</script>

<template>
    <div class="tw-px-16 tw-py-6 tw-flex tw-justify-between">
        <div class=" tw-flex tw-flex-col tw-gap-2 tw-bg-white tw-rounded-2xl tw-w-[35%] tw-p-4">
            <NuxtImg src="/profile.png" width="70" />
            <h3>Hala Ahmed</h3>
            <small class=" tw-text-slate-600">
                I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.
            </small>
            <div class="tw-flex tw-justify-between">
                <Chip v-for="(data, index) in chipData" :key="index">
                    <template #content>
                        <div class="tw-flex tw-justify-start tw-gap-2 tw-items-center">
                            <component :is="data.icon" />
                            <div class="tw-flex tw-flex-col">
                                <small class="tw-text-black">{{ data.number }}</small>
                                <small>{{ data.text }}</small>
                            </div>
                        </div>
                    </template>
                </Chip>
            </div>
            <button class=" tw-mt-2 tw-text-white tw-text-sm tw-font-bold  tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-p-3 tw-rounded-xl ">Follow</button>
        </div>
        <div class=" tw-bg-white tw-rounded-2xl tw-w-[63%] tw-p-3">
            hi2
        </div>
    </div>
</template>
