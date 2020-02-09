<template>
    <div>
        <span>Интересы :</span>
        <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
        <pre class="language-json"><code>{{ value  }}</code></pre>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'

    export default {
        components: {
            Multiselect
        },
        data () {
            return {
                value: [],
                options: [
                    {id: 0, title: "не выбрано"},
                    {id: 1, title: "только ТОП"},
                    {id: 2, title: "потусить"},
                    {id: 3, title: "покупки"},
                    {id: 4, title: "искусство"},
                    {id: 5, title: "наука"},
                    {id: 6, title: "природа"},
                    {id: 7, title: "отдых с детьми"},
                    {id: 8, title: "история"}
                ]
            }
        },
        methods: {
            addTag (newTag) {
                const tag = {
                    title: newTag,
                    id: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                }
                this.options.push(tag)
                this.value.push(tag)
            }
        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>