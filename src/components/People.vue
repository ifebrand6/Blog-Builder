<template>
   <ul>
       <li v-for="person in people" :key="person"> {{person}}</li>
   </ul>
</template>

<script>
export default {
    data(){
        return{
       people: ['Happy', "John"]
       }
    }
}
</script>
<style  scoped>
li{
    color: blueviolet;
}
</style>