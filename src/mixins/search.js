
export default {
    computed: {
        findBlog(){
        return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            })
        }
    }
}