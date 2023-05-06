export default {
    template:
    /*html*/
    `<header class="w-100 p-3 bg-light d-flex align-items-center shadow-sm gap-1 position-fixed top-0 start-0 z-3 pop fs-small">
        <a :href="utilities.env('/')" class="link-underline-opacity-0 link-underline">Home</a>
        <i class="bi bi-chevron-compact-right"></i>
        <a :href="utilities.env('/blogs')" class="link-underline-opacity-0 m-0 text-primary opacity-75 link-underline">Blogs</a>
        <i class="bi bi-chevron-compact-right"></i>
        <span class="m-0 text-secondary text-fade"><slot></slot></span>
    </header>
    `,
    props:['utilities']
}