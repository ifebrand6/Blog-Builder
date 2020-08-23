<template>
    <div>
        <h1>{{blog.title}}</h1>
        <hr>
        <p>{{blog.body}}</p>
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
      this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id ).then((data)=> {
          this.blog = data.body
          console.log(this.blog)
      })
  }  
}
</script>
<style>

</style>