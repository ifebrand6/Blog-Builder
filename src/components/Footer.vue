<template>
    <div>
       <footer>
           <p v-on:click="changeTitle"> {{title}} {{copywrite}} </p>
       </footer>
    </div>
</template>

<script>
let date = new Date
const time = date.getFullYear();
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                copywrite: time
            }
        },
        methods: {
            changeTitle(){
                this.$emit('changeTitle', `Human farm`)
            }
        }
    }
</script>

<style  scoped>
    footer{
        background: #222;
        padding: 6px;
    }
    p{
            color: lightgreen;
            text-align: center;
    }
</style>