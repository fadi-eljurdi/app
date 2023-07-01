export default {
    template:
    /*html */
    `
    
    <footer class="bg-dark pt-5 pb-3 pop"  id="#contact">
        <section class="container">
            <div class="row gy-5 gx-3 justify-content-between">
                <section class="col-12 col-lg-5">
                    <div class="d-flex flex-column gap-1">
                        <h2 class="fs-4 text-light opacity-75 m-0">Jurdi Media Production Consultants</h2>
                        <p class="fs-smaller text-light opacity-50">Our services cater to the unique needs of businesses within this niche, offering tailored solutions to help them achieve their goals and maximize their success.</p>
                        <div class="d-flex flex-column gap-2">
                            <span @click="form.showForm = !form.showForm" class="text-secondary link-light link-underline-opacity-0 d-flex gap-3 align-items-center">
                                <i class="fs-5 bi bi-envelope text-secondary"></i>
                                <span>{{contact.email}}</span>
                            </span>
                            <a :href="'https://wa.me/'+contact.whatsapp" class="text-secondary link-light link-underline-opacity-0 d-flex gap-3 align-items-center">
                                <i class="fs-5 bi bi-whatsapp text-secondary"></i>
                                <span>Whatsapp chat</span>
                            </a>
                            <a :href="contact.linkedIn" class="text-secondary link-light link-underline-opacity-0 d-flex gap-3 align-items-center">
                                <i class="fs-5 bi bi-linkedin text-secondary"></i>
                                <span>LinkedIn</span>
                            </a>
                            
                            <span class="text-secondary d-flex gap-3 align-items-center">
                                <i class="fs-5 bi bi-geo-alt-fill text-secondary"></i>
                                <span>{{contact.address}}</span>
                            </span>
                            <span data-bs-toggle="dropdown" class="point text-secondary link-light link-underline-opacity-0 d-flex gap-3 align-items-center">
                                <i class="fs-5 bi bi-file-text text-secondary"></i>
                                <span>Policies & Terms of use</span>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" :href="utilities.env('/terms.html')">Terms of use</a></li>
                                    <li><a class="dropdown-item" :href="utilities.env('/disclaimer.html')">Disclaimer</a></li>
                                    <!-- <li><a class="dropdown-item" :href="utilities.env('/cookie-policy.html')">Cookies Policy</a></li> -->
                                    <li><a class="dropdown-item" :href="utilities.env('/acceptable-usage.html')">Acceptable usage policy</a></li>
                                    <li><a class="dropdown-item" :href="utilities.env('/privacy-policy.html')">Privacy policy</a></li>
                                </ul>
                            </span>
                            <!-- <a :href="utilities.env('/disclaimer.html')" class="text-secondary link-light link-underline-opacity-0 d-flex gap-3 align-items-center">
                                <i class="fs-5 bi bi-file-text text-secondary"></i>
                                <span>Disclaimer</span>
                            </a>
                            <a :href="utilities.env('/privacy-policy.html')" class="text-secondary link-light link-underline-opacity-0 d-flex gap-3 align-items-center">
                                <i class="fs-5 bi bi-shield-check text-secondary"></i>
                                <span>Privacy policy</span>
                            </a>
                            <a :href="utilities.env('/acceptable-usage.html')" class="text-secondary link-light link-underline-opacity-0 d-flex gap-3 align-items-center">
                                <i class="fs-5 bi bi-shield-check text-secondary"></i>
                                <span>Acceptable usage policy</span>
                            </a> -->
                            <!--
                            <a :href="utilities.env('/cookie-policy.html')" class="text-secondary link-light link-underline-opacity-0 d-flex gap-3 align-items-center">
                                <i class="fs-5 bi bi-shield-check text-secondary"></i>
                                <span>cookie policy policy</span>
                            </a> -->
                        </div>
                    </div>
                </section>
                <section class="col-12 col-lg-3">
                    <div class="d-flex flex-column gap-1">
                        
                        <h2 class="fs-4 text-light opacity-75 m-0">Our Services</h2>
                        <p class="fs-smaller text-light opacity-50">Exceptional services that meet and exceed your expectations.</p>
                        <div class="d-flex flex-column gap-2">
                            <a 
                                v-for="s in services" :key="s"
                                :href="s.url" 
                                class="link-underline-opacity-0 link-underline text-secondary m-0 d-flex align-items-center gap-1">
                                <span class="material-symbols-outlined fs-4">link</span>
                                <span class="text-fade">{{s.title}}</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section class="col-12 col-lg-3">
                    <div class="d-flex flex-column gap-1">
                        
                        <h2 class="fs-4 text-light opacity-75 m-0">Our Business Partners</h2>
                        <p class="fs-smaller text-light opacity-50">Connecting you to the resources you need.</p>
                        <div class="d-flex flex-column gap-2">
                            <a 
                                v-for="l in links" :key="l"
                                :href="l.url" 
                                class="link-underline-opacity-0 link-underline text-secondary m-0 d-flex align-items-center gap-1">
                                <span class="material-symbols-outlined fs-4">link</span>
                                <span class="text-fade">{{l.text}}</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        
        <hr class="container mt-5 mb-3 text-light">
        <small class="text-light text-center d-flex justify-content-center opacity-75 cin ls-2">All rights reserved</small>
    </footer>
    `,
    props:['services','links','utilities','contact','form']
}