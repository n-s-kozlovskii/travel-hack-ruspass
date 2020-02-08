<template>
    <li>
        <div>
            <div>
                <img src="{{ url }}">
            </div>
            <div>
                <h5> {{title}} </h5>
                <span> {{description}}</span>
            </div>
        </div>
    </li>

</template>

<script>
    export default {
        props: {
            url: String,
            title: String,
            description: String
        }
    }
</script>