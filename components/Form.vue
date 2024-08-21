<script setup>
const mainCategory = ref([])
const valid = ref()
const selectedMainCategory = ref()
const selectedSubCategory = ref()
const selectedOptions = ref({});
const customValues = ref({});

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
    immediate: false
})

const subCategories = computed(() => selectedMainCategory.value?.children)

const getPropertyOptions = (options) => {
    return [...options, { id: 'other', name: 'Other' }];
}
const submitForm = () => {
    if (valid.value) {
        Object.values(selectedOptions.value).forEach(item => {
            console.log(item);
        });
    }
}

const headers = computed(() => {
    const arr = []
    fetchedCategoryProperties.value?.data.forEach(property =>
        arr.push({ title: property.name, value:  property.id.toString(), id: property.id })
    )

    return [{ title: 'Main Category', value: 'main_category' }, { title: 'Subcategory', value: 'subcategory' }, ...arr]
})
const items = computed(() => {
    const arr = [
        {
            main_category: selectedMainCategory.value?.name,
            subcategory: selectedSubCategory.value?.name
        }
    ]
    Object.values(selectedOptions.value).forEach(item => {
        if(item.parent)   arr[0][item.parent] = item.name
    })
    Object.keys(customValues.value).forEach(key => {   
        arr[0][key] = customValues.value[key]
    });
    return arr
})

</script>

<template>
    <v-form @submit.prevent="submitForm" v-model="valid">
        <v-row class="tw-px-24 tw-py-3">
            <v-col cols="12">
                <v-label lass="mb-1 text-body-2" text="Main Categories" /><span class="text-error">*</span>
                <VAutocomplete v-model="selectedMainCategory" :items="mainCategory" item-title="name" item-value="id"
                    clearable return-object :rules="[requiredValidator]">
                </VAutocomplete>
            </v-col>
            <v-col cols="12">
                <v-label lass="mb-1 text-body-2" text=" Subcategory" /><span class="text-error">*</span>
                <VAutocomplete v-model="selectedSubCategory" :items="subCategories" item-title="name" item-value="id"
                    clearable return-object :rules="[requiredValidator]">
                </VAutocomplete>
            </v-col>
            <v-col class="text-center" cols="12" v-if="pending && selectedSubCategory">
                <v-progress-circular color="primary" indeterminate></v-progress-circular>
            </v-col>
            <v-col cols="12" v-for="property in fetchedCategoryProperties?.data" :key="property.id">
                <v-label lass="mb-1 text-body-2" :text="property.name" />
                <VAutocomplete v-model="selectedOptions[property.id]" :items="getPropertyOptions(property.options)"
                    item-title="name" item-value="id" clearable return-object>
                </VAutocomplete>
                <v-text-field v-model="customValues[property.id]" label="Please specify"
                    placeholder="Enter custom value" v-if="selectedOptions[property.id]?.id === 'other'" />
            </v-col>
        </v-row>
        <div class="text-center">
            <v-btn class="mt-3 mb-15" type="submit" color="primary">Submit</v-btn>
        </div>
    </v-form>
    <!-- :items="serverItems" -->
    <!-- v-model:items-per-page="itemsPerPage"  -->
    <v-row class="tw-px-24">
        <v-col cols="12">
            <v-data-table-server class="text-no-wrap" :headers="headers" item-value="name" items-length="1"
                :items="items">
                <template #bottom>
                </template>
            </v-data-table-server>
        </v-col>
    </v-row>
</template>