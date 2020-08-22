<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form>
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
            <div id="check-box">
                <span v-for="(category,index) in categories" :key=index>
                    <label> {{category}}</label>
                    <input type="checkbox" v-bind:value='category' v-model='blog.categories'>
                </span>
            </div>
        </form>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Blog Category</p>
            <ul>
                <li v-for="(category,index) in blog.categories" :key=index>{{category}}</li>
            </ul>  
        </div>
    </div>
</template>

<script>
// Imports
export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: []
            },
            categories: ["Art", 'Science', 'Technology', 'Business']
        }
    },
    methods: {
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#check-box input{
    display: inline-block;
    margin-right: 10px;

 }
#check-box label{
        display: inline-block;
 }
</style>