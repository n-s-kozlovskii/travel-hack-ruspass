<template>
    <div>
        <select v-model="selected">
            <span>Сезон : </span>
            <option v-for="item in seasons" v-bind:value="item.id">
                {{ item.title }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: 0,
                seasons: [
                   {id : 0, title :"не выбрано"},
                   {id : 1, title :"лето"},
                   {id : 2, title :"осень"},
                   {id : 3, title :"зима"},
                   {id : 4, title :"весна"}]
            }
        }
    }
</script>