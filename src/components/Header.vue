<template>
    <div>
        <header>
            <h1 v-on:click="changeTitle" >{{title}}</h1>
        </header>
    </div>
</template>

<script>
    export default {
    props: {
        title: {
        type: String,
        required: true
        }
    },
      methods: {
          changeTitle(){
              this.$emit('changeTitle', `Animal farm`)
          }
      }
    }
</script>

<style scoped>
    header{
        background: lightgreen;
        padding: 10px;
    }
    h1{
        color: #222;
        text-align: center;
    }
</style>