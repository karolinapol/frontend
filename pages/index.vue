<script setup>
const searchQuery = ref("star")
const resultQuery = ref(null)
const arrayData = ref(null)
const loader = ref(false)
const searchData = async () => {
    loader.value = true
    await useFetch('articles').then((response) => {
        if (response.data) {
            setTimeout(() => {
                console.log(response.data.value)
                resultQuery.value = response.data.value
                loader.value = false
            }, 1000)
        }
    })
}

onBeforeMount(async () => {
    await searchData()
});

// Użycie watch do obserwacji resultQuery
watch(resultQuery, (newValue, oldValue) => {
    arrayData.value = newValue

    console.log(newValue); // Wyświetla nową wartość resultQuery.value
    // Możesz tutaj dodać dodatkowe logikę, która ma się wykonać po zmianie wartości
}, {
    deep: true // opcja 'deep' jest przydatna, jeśli obserwowany obiekt jest złożony (np. obiekt lub tablica)
});
</script>
<template>
    <div>
        <input type="text" v-model="searchQuery">
        <button @click="searchData" v-if="!loader">Wyszukaj</button>
        <button @click="searchData" disabled v-else>Wyszukaj</button>
        <div class="cos" v-if="loader">To jest ladowanie danych</div>

        <div class="result" v-else>
            <div v-for="(value, index) in arrayData" :key=index>
                {{ value }}
                

            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
h3 {
    span {
        color: green
    }
}
</style>
