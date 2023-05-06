export default {
    template:
    /*html */
    `
    <section class="container" style="margin-top: 90px;">
        <div class="row justify-content-between g-3">
            <section class="col-12 col-lg-6 order-2">
                <div class="d-flex flex-column">
                    <h1 class="fs-3 cin text">MEDIA PRODUCTION CONSULTANTS LLC </h1>
                    <p class="pop text-secondary text-justify">We are a specialized consultancy and media services firm that focuses on providing expert guidance and support to businesses operating or interested in operating within the media and entertainment industries across America, the Middle East, and North Africa markets. Our services cater to the unique needs of businesses within this niche, offering tailored solutions to help them achieve their goals and maximize their success.</p>
                    <div class="d-flex justify-content-start gap-2 align-items-center flex-wrap">
                        <a
                            v-for="l in links" :key="l"
                            :href="l.url" class="link-underline-opacity-0 link-underline fs-6 m-0 bg-light shadow-sm rounded px-3 py-1 pop d-flex align-items-center gap-1">
                            <span class="material-symbols-outlined">link</span>
                            <span class="text-fade">{{l.text}}</span>
                        </a>
                    </div>
                </div>
            </section>
            <section class="col-12 col-lg-5 order-1 order-lg-2">
                
                <div class="d-flex justify-content-center">
                    <div class="ratio ratio-16x9">
                        <video src="./assets/img/video1.mp4" controls aut oplay class="rounded img-fluid"></video>
                    </div>
                </div>
            </section>
        </div>
    </section>
    `,
    props:['links']
}