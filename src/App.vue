<template>
 <div>
   <app-header v-bind:title="title" v-on:changeTitle='update($event)'></app-header>
   <app-main v-bind:ninjas='ninjas'></app-main>
   <app-footer v-bind:title="title" v-on:changeTitle='title=$event'></app-footer>
 </div>
</template>

<script>
export default {
  data(){
    return {
    ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
    ],
    title: `People's Tracker`,

    }
  },
  methods: {
    update(d){
     this.title = d
    }
  }

}
</script>

<style scoped>
</style>
