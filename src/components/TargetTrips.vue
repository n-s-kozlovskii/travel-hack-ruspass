<template>
    <div>
        <select v-model="selected">
            <span>Интересы : </span>
            <option v-for="item in interests" v-bind:value="item.id">
                {{ item.title }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selected : [],
                interests: [
                    {id: 0, title: "не выбрано", isSelected: false},
                    {id: 1, title: "только ТОП", isSelected: false},
                    {id: 2, title: "потусить", isSelected: false},
                    {id: 3, title: "покупки", isSelected: false},
                    {id: 4, title: "искусство", isSelected: false},
                    {id: 5, title: "наука", isSelected: false},
                    {id: 6, title: "природа", isSelected: false},
                    {id: 7, title: "отдых с детьми", isSelected: false},
                    {id: 8, title: "история", isSelected: false}
                ]
            }
        }
    }
</script>