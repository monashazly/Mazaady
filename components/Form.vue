<script lang="ts" setup>

const mainCategory = ref<Category[]>([]);
const valid = ref(false)
const review = ref(false)
const selectedMainCategory = ref<Category>()
const selectedSubCategory = ref()
const selectedOptions = ref<SelectedOption>({});
const customValues = ref<SelectedOption>({});

const privateKey = '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'
const baseURL = 'https://staging.mazaady.com/api/v1'
const rules: ((value: any) => string | boolean)[] = [requiredValidator];

type Category = {
    name: string;
    id: number;
    children: Children[];
    options?: Option[];
};

type Children = {
    name: string;
    id: number;
    children: boolean;
};

type MainCategoryResponse = {
    data: {
        categories: Category[];
    };
};
type fetchedCategoryProperties = {
    code: number;
    msg: string;
    data: Category[]
};

type Option = {
    id: number | string,
    name: string,
    parent?: number,
    slug?: string
}
type SelectedOption = {
    [key: number | string]: Option | undefined;
};

type Header = {
    title: string;
    value: string;

};
type Item = {
    [key: number | string]: string | undefined | Option;
};

const { data } = await useFetch<MainCategoryResponse>(`${baseURL}/get_all_cats`, {
    headers: {
        'Private-Key': privateKey
    }
});

mainCategory.value = data.value?.data?.categories ?? [];


const { data: fetchedCategoryProperties, pending } = await useFetch<fetchedCategoryProperties>(() => {
    return `${baseURL}/properties?cat=${selectedSubCategory.value?.id}`
}, {
    key: selectedSubCategory.value?.id,
    headers: {
        'Private-Key': privateKey
    },
    immediate: false
})


const subCategories = computed(() => selectedMainCategory.value?.children)

const getPropertyOptions = (options: Option[] | undefined): Option[] => {
    return [...(options ?? []), { id: 'other', name: 'Other' }];
};

const submitForm = () => {
    if (valid.value) review.value = true
}


const headers = computed<Header[]>(() => {
    const arr: Header[] = []
    fetchedCategoryProperties.value?.data.forEach(property =>
        arr.push({ title: property.name, value: property.id.toString() })
    )

    return [{ title: 'Main Category', value: 'main_category' }, { title: 'Subcategory', value: 'subcategory' }, ...arr]
})
const items = computed<Item[]>(() => {
    const arr: Item[] = [
        {
            main_category: selectedMainCategory.value?.name,
            subcategory: selectedSubCategory.value?.name
        }
    ]
    Object.values(selectedOptions.value).forEach(item => {
        if (item?.parent) arr[0][item.parent] = item.name
    })
    Object.keys(customValues.value).forEach(key => {
        arr[0][key] = customValues.value[key]
    });
    return arr
})

</script>

<template>
    <v-form @submit.prevent="submitForm" v-model="valid" v-if="!review">
        <v-row class=" tw-px-5 md:tw-px-24 tw-py-3">
            <v-col cols="12">
                <v-label lass="mb-1 text-body-2" text="Main Categories" /><span class="text-error">*</span>
                <VAutocomplete v-model="selectedMainCategory" :items="mainCategory" item-title="name" item-value="id"
                    clearable return-object :rules="rules">
                </VAutocomplete>
            </v-col>
            <v-col cols="12">
                <v-label lass="mb-1 text-body-2" text=" Subcategory" /><span class="text-error">*</span>
                <VAutocomplete v-model="selectedSubCategory" :items="subCategories" item-title="name" item-value="id"
                    clearable return-object :rules="rules">
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

    <v-row class=" tw-px-5  md:tw-px-24 py-15" v-else>
        <v-col cols="12">
            <v-card>
                <v-data-table-server class="text-no-wrap tw-h-36 " :headers="headers" item-value="name" items-length="1"
                    :items="items">
                    <template #bottom>
                    </template>
                </v-data-table-server>
            </v-card>
        </v-col>
        <v-col cols="12" class="text-center">
            <v-btn class="mt-3 mb-15" color="primary" @click="review = false">Back</v-btn>
        </v-col>
    </v-row>
</template>