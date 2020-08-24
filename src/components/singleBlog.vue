<template>
    <div>
        <h1>{{blog.title}}</h1>
        <hr>
        <p>{{blog.content}}</p>
        <p>{{blog.author}}</p>
        <ul>
            <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
        </ul>
        <button v-on:click="deletePost">Delete Blog</button>
    </div>
</template>
<script>
export default {
  data(){
      return{
      id: this.$route.params.id,
      blog: {}
     
  }
  },
  created() {
      this.$http.get('https://test-7f255.firebaseio.com/posts/' + this.id + '.json').then((data)=> {
          return data.json()
      }).then((data)=> {
          this.blog = data
      }).catch((err)=>{
          console.log('This is the cause of the error ' + err)
          console.error(err)
      })
  },
  methods: {
    deletePost: function(){
        this.$http.delete('https://test-7f255.firebaseio.com/posts/' + this.id + '.json').then((data)=>{
            console.log(data)
        }).catch((eer)=>{
            console.log("fdf")
        })
   
    }
  } 
}
</script>
<style>

</style>