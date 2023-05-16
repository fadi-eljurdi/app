export default {
    template:
    /*html*/
    `
    <header class="w-100 p-3 z-3 position-fixed top-0 start-0 bg-light shadow d-flex align-items-center justify-content-between">
        <section class="">
            <a :href="utilities.env('/')">
                <div v-if="!logo" class="skeleton rounded" style="width:100px;height:30px;"></div>
                <div class="ratio ratio-16x9" style="width:80px;"><img v-else :src="logo" alt="Jurdi logo" class="img-fluid object-fit-cover rounded"></div>
            </a>
        </section>
        <nav class="d-none d-md-flex align-items-center gap-3 pop">
            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" :href="utilities.env('/')">Home</a>
            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" :href="utilities.env('/services')">Services</a>
            
            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" :href="utilities.env('/blogs')">Blogs</a>
            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" :href="utilities.env('/privacy-policy.html')">Privacy Policy</a>
            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" :href="utilities.env('/terms.html')">Terms</a>
            <button class="btn btn-success btn-sm px-3" data-bs-toggle="dropdown">Contact</button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" :href="'mailto:'+contact.email"><i class="bi bi-envelope me-1"></i> {{contact.email}} </a></li>
                <li><a class="dropdown-item" :href="'tel:'+contact.number"><i class="bi bi-telephone-forward me-1"></i> + {{contact.number}}</a></li>
                <li><a class="dropdown-item" :href="contact.linkedIn"><i class="bi bi-linkedin me-1"></i> linkedIn</a></li>
                <li><a class="dropdown-item" :href="contact.whatsapp"><i class="bi bi-whatsapp me-1"></i> Whatsapp</a></li>
            </ul>
        </nav>
        <i class="d-block d-md-none fs-3 bi bi-three-dots-vertical" type="button" data-bs-toggle="dropdown" ></i>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" :href="utilities.env('/')">Home</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/services')">Services</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/blogs')">Blogs</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/privacy-policy.html')">Privacy policy</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/terms.html')">Terms</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" :href="'mailto:'+contact.email"><i class="bi bi-envelope me-1"></i> {{contact.email}} </a></li>
            <li><a class="dropdown-item" :href="'tel:'+contact.number"><i class="bi bi-telephone-forward me-1"></i> +{{contact.number}}</a></li>
            <li><a class="dropdown-item" :href="contact.linkedIn"><i class="bi bi-linkedin me-1"></i> linkedIn</a></li>
            <li><a class="dropdown-item" :href="contact.whatsapp"><i class="bi bi-whatsapp me-1"></i> Whatsapp</a></li>
        
        </ul>
    </header>
    `,
    props:['utilities','logo','contact']
}