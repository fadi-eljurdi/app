export default {
    template:
    /*html*/
    `
    <header class="w-100 p-3 z-3 position-fixed top-0 start-0 bg-light shadow d-flex align-items-center justify-content-between">
        <section class="">
            <a :href="utilities.env('/')">
                <div v-if="!logo" class="skeleton rounded" style="width:100px;height:30px;"></div>
                <div v-else class="ratio ratio-16x9" style="width:80px;"><img :src="'https://lh3.googleusercontent.com/d/'+utilities.exId(logo)" alt="Jurdi logo" class="ms-3 img-fluid object-fit-cover rounded" id="logo"></div>
            </a>
        </section>
        <nav class="d-none d-lg-flex align-items-center gap-3 pop">
            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" :href="utilities.env('/')">Home</a>
            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" :href="utilities.env('/services')">Services</a>
            
            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" :href="utilities.env('/blogs')">Blogs</a>
            <span  data-bs-toggle="dropdown" class="link-offset-2 text-primary link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover point">Policies and Terms of use</span>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" :href="utilities.env('/terms.html')">Terms of use</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/disclaimer.html')">Disclaimer</a></li>
            <!-- <li><a class="dropdown-item" :href="utilities.env('/cookie-policy.html')">Cookies Policy</a></li> -->
            <li><a class="dropdown-item" :href="utilities.env('/acceptable-usage.html')">Acceptable usage policy</a></li>
            <li><a class="dropdown-item" :href="utilities.env('/privacy-policy.html')">Privacy policy</a></li>
            </ul>
            <button class="btn btn-success btn-sm px-3" data-bs-toggle="dropdown">Contact</button>
            <ul class="dropdown-menu">
                <li><span class="dropdown-item" @click="form.showForm = !form.showForm"><i class="bi bi-envelope me-1"></i> Email </span></li>
                <li><a class="dropdown-item" :href="contact.linkedIn"><i class="bi bi-linkedin me-1"></i> linkedIn</a></li>
                <li><a class="dropdown-item" :href="'https://wa.me/'+contact.whatsapp"><i class="bi bi-whatsapp me-1"></i> Whatsapp</a></li>
            </ul>
        </nav>
        <div class="d-flex gap-2 align-items-center d-block d-lg-none">
            <i class="bi bi-telephone-outbound d-block d-lg-none fs-5" data-bs-toggle="dropdown"></i>
            <ul class="dropdown-menu">
                <li><span class="dropdown-item" @click="form.showForm = !form.showForm" ><i class="bi bi-envelope me-1"></i> Email </span></li>
                <li><a class="dropdown-item" :href="'https://wa.me/'+contact.whatsapp"><i class="bi bi-whatsapp me-1"></i> Whatsapp</a></li>
                <li><a class="dropdown-item" :href="contact.linkedIn"><i class="bi bi-linkedin me-1"></i> linkedIn</a></li>
            </ul>
            <i class="d-block d-lg-none fs-3 bi bi-three-dots-vertical" type="button" data-bs-toggle="dropdown" ></i>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" :href="utilities.env('/')">Home</a></li>
                <li><a class="dropdown-item" :href="utilities.env('/services')">Services</a></li>
                <li><a class="dropdown-item" :href="utilities.env('/blogs')">Blogs</a></li>
                <li><a class="dropdown-item" :href="utilities.env('/privacy-policy.html')">Privacy policy</a></li>
                <li><a class="dropdown-item" :href="utilities.env('/terms.html')">Terms</a></li>
                <li><a class="dropdown-item" :href="utilities.env('/disclaimer.html')">Disclaimer</a></li>
                <li><a class="dropdown-item" :href="utilities.env('/acceptable-usage.html')">Acceptable Usage</a></li>
                <!-- <li><a class="dropdown-item" :href="utilities.env('/cookie-policy.html')">Cookies Policy</a></li> -->
            </ul>
        </div>
    </header>
    `,
    props:['utilities','logo','contact','form']
}