<script setup>
const mainCategory = ref([])
const valid = ref()
const selectedMainCategory = ref()
const selectedSubCategory = ref()
const privateKey = '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'
const baseURL = 'https://staging.mazaady.com/api/v1'


const { data } = await useFetch(`${baseURL}/get_all_cats`, {
    headers: {
        'Private-Key': privateKey
    }
});

mainCategory.value = data.value.data.categories

const { data: fetchedCategoryProperties, pending } = await useFetch(() => {
    return selectedSubCategory.value?.id ? `${baseURL}/properties?cat=${selectedSubCategory?.value.id}` : null;
}, {
    key: selectedSubCategory.value?.id,
    headers: {
        'Private-Key': privateKey
    },
    immediate : false
})

const subCategories = computed(() => selectedMainCategory.value?.children)

</script>

<template>
    <v-form v-model="valid">
        <v-row class="tw-px-24 tw-py-3">
            <v-col cols="12">
                <v-label lass="mb-1 text-body-2" text="Main Categories" />
                <VAutocomplete v-model="selectedMainCategory" :items="mainCategory" item-title="name" item-value="id"
                    clearable return-object>
                </VAutocomplete>
            </v-col>
            <v-col cols="12">
                <v-label lass="mb-1 text-body-2" text=" Subcategory" />
                <VAutocomplete v-model="selectedSubCategory" :items="subCategories" item-title="name" item-value="id"
                    clearable return-object>
                </VAutocomplete>
            </v-col>
            <v-col class="text-center" cols="12" v-if="pending && selectedSubCategory">
                <v-progress-circular color="primary" indeterminate></v-progress-circular>
            </v-col>
        </v-row>
    </v-form>
</template>