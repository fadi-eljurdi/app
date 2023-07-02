export default {
    template:
    /*html */
    `
    <section class="container" id="#services">
        <div class="row">
            <h2 class="fs-3 cin text">{{contact.sHeading}}</h2>
            <!-- <small class="pop text-secondary">{{contact.sTagline}}</small> -->
        </div>
        <div class="row justify-content-start g-3 my-3">
            <section class="col-12 col-lg-4" v-for="s in services" :key="s">
                <a :href="s.url" style="text-decoration:none;">
                    <div class="p-3 shadow-sm bg-light rounded d-flex flex-column gap-2 pop">
                        <div class="ratio ratio-16x9"><img :src="s.thumbnail" :alt="s.title" class="object-fit-cover skeleton img-fluid rounded-top"></div>
                        
                        <!-- <h6 class="pop point m-0 text-primary text-fade-3 d-flex align-items-center gap-2 justify-content-between">{{s.title}} <i class="bi bi-chevron-expand"></i> </h6> -->
                        <a class="d-flex justify-content-between align-items-center fs-6  m-0" :href="s.url" style="text-decoration:none;">
                            <span class="text-fade text-uppercase">{{s.title}}</span>
                            <!-- <i class="bi bi-chevron-expand"></i> -->
                        </a>
                        <!-- <p class="text-secondary text-fade-2 fs-small m-0" style="height: 40px;">{{s.description}}</p> -->
                        <button class="btn btn-sm btn-outline-primary">Know more</button>
                    </div>
                </a>
            </section>
        </div>
    </section> 
    `,
    props:['services','utilities','contact']
}