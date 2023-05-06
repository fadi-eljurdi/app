export default {
    template:
    /*html */
    `
    <section class="container" id="#services">
        <div class="row">
            <h2 class="fs-3 cin text">Empowering Your Media Production with Our Tailored Solutions</h2>
            <small class="pop text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas enim officia harum, maxime eaque.</small>
        </div>
        <div class="row justify-content-center g-3 my-3">
            <section class="col-12 col-lg-4" v-for="s in services" :key="s">
                <div class="p-3 shadow-sm bg-light rounded d-flex flex-column gap-2 pop" data-bs-toggle="modal" :data-bs-target="'#'+s.id">
                    <div class="ratio ratio-16x9"><img :src="s.thumbnail" :alt="s.title" class="object-fit-cover skeleton img-fluid rounded-top"></div>
                    
                    <!-- <h6 class="pop point m-0 text-primary text-fade-3 d-flex align-items-center gap-2 justify-content-between">{{s.title}} <i class="bi bi-chevron-expand"></i> </h6> -->
                    <a class="d-flex justify-content-between align-items-center icon-link fs-6 link-underline-opacity-0 m-0" :href="s.url">
                        <span class="text-fade">{{s.title}}</span>
                        <i class="bi bi-chevron-expand"></i>
                    </a>
                    <p class="text-secondary text-fade-3 fs-small m-0" style="height: 60px;">{{s.description}}</p>
                    <!-- Modal -->
                    <div class="modal fade bg-glass" :id="s.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">{{s.title}}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>{{s.description}}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Contact</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section> 
    `,
    props:['services','utilities']
}