export default {
    template:
    /*html */
    `
    <aside class="shadow-sm bg-light p-3 rounded">
        <h5 class="m-0 fs-5 pop">Check also</h5>
        <small class="fs-xsmall">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eaque.</small>
        <div class="row mt-3 g-3">
            <div v-for="b in blogs.slice(-8)" :key="b" class="col-12 d-flex gap-1 align-items-center">
                <span class="material-symbols-outlined text-secondary">feed</span>
                <a class="text-fade" :href="b.url"> {{b.title}} </a>
            </div>
            <a class="col-12 icon-link icon-link-hover fs-small link-underline-opacity-0 justify-content-center" :href="utilities.env('/blogs')">
                <span class="text-fade text-center">show more</span>
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </aside>
    `,
    props:['blogs','utilities'],
}