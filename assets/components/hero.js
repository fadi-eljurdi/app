export default {
    template:
    /*html */
    `
    <section class="container" style="margin-top: 100px;">
        <div class="row justify-content-between g-3">
            <section class="col-12 col-lg-6 order-1">
                <div class="d-flex flex-column">
                    <h1 class="fs-3 cin text">{{contact.heading}}</h1>
                    <p class="pop text-secondary text-justify">{{contact.bio}}</p>
                    <!-- <div class="d-flex justify-content-start gap-2 align-items-center flex-wrap">
                        <a
                            v-for="l in links" :key="l"
                            :href="l.url" class="link-underline-opacity-0 link-underline fs-6 m-0 bg-light shadow-sm rounded px-3 py-1 pop d-flex align-items-center gap-1">
                            <span class="material-symbols-outlined">link</span>
                            <span class="text-fade">{{l.text}}</span>
                        </a>
                    </div> -->
                </div>
            </section>
            <section class="d-none d-lg-block col-12 col-lg-5 order-2 order-lg-1">
                
                <div class="d-flex justify-content-center">
                    <div class="ratio ratio-16x9">
                        <slot></slot>
                        <!-- <video :src="utilities.convertGoogleDriveLink(contact.video)" controls class="rounded img-fluid"></video> -->
                    </div>
                </div>
            </section>
        </div>
    </section>
    `,
    props:['links','contact','utilities']
}