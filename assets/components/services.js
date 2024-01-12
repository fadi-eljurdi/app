export default {
    template:
    /*html */
    `
    <section class="container" id="#services">
        <div class="row">
            <h2 class="fs-3 cin text">{{contact.sHeading}}</h2>
        </div>
        <div class="row justify-content-start g-3 my-3">
            <section class="col-12 col-lg-4" v-for="s in services" :key="s">
                <a :href="s.url" style="text-decoration:none;">
                    <div class="p-3 shadow-sm bg-light rounded d-flex flex-column gap-2 pop">
                        <div class="ratio ratio-16x9"><img :src="'https://lh3.googleusercontent.com/d/'+utilities.exId(s.thumbnail)" :alt="s.title" class="object-fit-cover skeleton img-fluid rounded-top"></div>
                        
                        <a class="d-flex justify-content-between align-items-center fs-6  m-0" :href="s.url" style="text-decoration:none;">
                            <span class="text-fade text-uppercase">{{s.title}}</span>
                        </a>
                        <button class="btn btn-sm btn-outline-primary">Know more</button>
                    </div>
                </a>
            </section>
        </div>
    </section> 
    
    
<!--<section class="container" id="#services">
    <div class="row">
        <h2 class="fs-3 cin text">{{contact.sHeading}}</h2>
    </div>
    <div class="row justify-content-start g-3 my-3">
        <section class="col-12 col-lg-4" v-for="s in services" :key="s">
            
                <div class="p-3 shadow-sm bg-light rounded d-flex flex-column gap-2 pop">
                    <div class="d-flex gap-3 align-items-center">
                        <img :src="s.thumbnail" width="100" height="100" :alt="s.title" class="object-fit-cover skeleton rounded-circle">
                        <a class="d-flex justify-content-between align-items-center fs-5 m-0" :href="s.url" style="text-decoration:none;min-height:125px;">
                            <span class=" text-uppercase">{{s.title}}</span>
                        </a>
                    </div>
                    <p class="text-secondary text-fade-3 m-0 fs-small">{{s.description}}</p>
                    <a :href="s.url" class="btn btn-sm btn-outline-primary">Know more</a>
                </div>
            
        </section>
    </div>
</section> --> 
 
    `,
    props:['services','utilities','contact']
}