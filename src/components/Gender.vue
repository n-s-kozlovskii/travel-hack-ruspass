<template>
    <div>
        <select v-model="selected">
            <span>Сезон : </span>
            <option v-for="item in genderType" v-bind:value="item.id">
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
                genderType: [
                    {id : 0, title :"не выбрано"},
                    {id : 1, title :"мужчина"},
                    {id : 2, title :"женщина"}]
            }
        }
    }
</script>