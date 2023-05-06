
export default {
    template:
    /*html*/
    `
    <section class="container">
        
        <div class="row">
            <h2 class="fs-3 cin text">Expand Your Knowledge with Our Thoughtful and Informative Articles</h2>
            <small class="pop text-secondary">Our blog is dedicated to providing thoughtful and informative articles that are designed to help you expand your knowledge and understanding of a wide range of topics.</small>
        </div>
        
        <div class="row justify-content-center g-3 my-3">
            <section class="col-12 col-md-6 col-lg-3" v-for="b in blogs" :key="b">
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
            </section>
            <a id="show-more" class="col-12 icon-link icon-link-hover fs-small link-underline-opacity-0 p-1 justify-content-center" :href="utilities.env('/blogs')">
                <span class="text-fade text-center">show more</span>
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </section>
    `,
    props:['blogs','utilities'],
    mounted(){
        if(location.href.includes('/blogs')){
            document.getElementById('show-more').classList.add('d-none')
        }
    }
}