
export default {
    template:
    /*html*/
    `
    <section class="container">
        
        <div class="row">
            <h2 class="fs-3 cin text">{{contact.bHeading}}</h2>
            <small class="pop text-secondary">{{contact.bTagline}}</small>
        </div>
        
        <div class="row justify-content-start g-3 my-3">
            <section class="col-12 col-md-6 col-lg-3" v-for="b in lazyBlogs" :key="b">
                <a :href="b.url">
                    <div class="p-3 shadow-sm bg-light rounded d-flex flex-column gap-1 pop">
                        <div class="ratio ratio-16x9"> 
                            <img :src="b.thumbnail" :alt="b.title" class="img-fluid object-fit-cover rounded-top skeleton">
                        </div>
                        <a class="icon-link icon-link-hover fs-6 link-underline-opacity-0 p-1 m-0" :href="b.url">
                            <span class="text-fade">{{b.title}}</span>
                            <i class="bi bi-arrow-right"></i>
                        </a>
                        <p class="text-secondary text-fade-3 fs-small px-1 m-0" style="height: 60px;">{{b.description}}</p>
                        <time class="p-1 fs-xsmall text-secondary mono m-0">{{utilities.timo(b.date)}} </time>
                    </div>
                </a>
            </section>
            <a id="show-more" class="col-12 icon-link icon-link-hover fs-small link-underline-opacity-0 p-1 justify-content-center" :href="utilities.env('/blogs')">
                <span class="text-fade text-center">show more</span>
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </section>
    `,
    computed:{
        lazyBlogs(){
            if(location.href.includes('/blogs')) return this.blogs
            else return this.blogs.slice(-8)
        }
    },
    props:['blogs','utilities','contact'],
    mounted(){
        if(location.href.includes('/blogs')){
            document.getElementById('show-more').classList.add('d-none')
        }
    }
}