<template>
  <div>
    <!-- FORM HELPER -->
    <!-- <formHelper>
      <h1 slot="header">Form description</h1>
      <p slot="p">form paragraph {{title}}</p>
    </formHelper> -->

    <!-- PASSING EVENT TO CHILD -->
    <!-- <app-header v-bind:title="title" v-on:changeTitle='update($event)'></app-header>
   <app-main v-bind:ninjas='ninjas'></app-main>
   <app-footer v-bind:title="title" v-on:changeTitle='title=$event'></app-footer> -->

   <!-- DYNAMIC COMPONENTS -->
    <!-- <keep-alive>
      <component v-bind:is='components'></component>
    </keep-alive>

    <button v-on:click="components = 'form-one'">use form one</button>
    <button v-on:click="components = 'form-two'">use form two</button> -->

    <!-- BLOG -->
    <keep-alive>
      <add-blog></add-blog>
    </keep-alive>

  </div>
</template>

<script>
  // import formHelper from './components/formHelper'
  // import formOne from './components/formOne'
  // import formTwo from './components/formTwo'
    import addBlog from './components/addBlog'
  export default {
    components: {
      // 'formHelper': formHelper
      // 'form-one': formOne,
      // 'form-two': formTwo
          'add-blog': addBlog
    },
    data() {
      return {
        ninjas: [{
            name: 'Ryu',
            speciality: 'Vue Components',
            show: false
          },
          {
            name: 'Crystal',
            speciality: 'HTML Wizardry',
            show: false
          },
          {
            name: 'Hitoshi',
            speciality: 'Click Events',
            show: false
          },
          {
            name: 'Tango',
            speciality: 'Conditionals',
            show: false
          },
          {
            name: 'Kami',
            speciality: 'Webpack',
            show: false
          },
          {
            name: 'Yoshi',
            speciality: 'Data Diggin',
            show: false
          }
        ],
        title: `People's Tracker`,
        components: 'form-one'

      }
    },
    methods: {
      update(d) {
        this.title = d
      }
    }

  }
</script>

<style scoped>
</style>