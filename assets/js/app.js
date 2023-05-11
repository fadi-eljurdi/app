import utilities from '../js/utilities.js'
import banner from '../components/banner.js'
import blogs from '../components/blogs.js'
import checkAlso from '../components/check-also.js'
import footer from '../components/footer.js'
import header from '../components/header.js'
import hero from '../components/hero.js'
import services from '../components/services.js'
import blogNavigation from '../components/blog-navigation.js'
import blogMedia from '../components/blog-media.js'


const app = Vue.createApp({
    data() {
        return {
            api: 'https://script.google.com/macros/s/AKfycbzXmhOqIFumVkR4DnVgb4COi0eSVV-T4FXNSRk7YJKCHT74Hl7P_Wp9uL38QkBc_cC6/exec',
            logo:'',
            contact:'',
            services:'',
            blogs:'',
            utilities,
            profile:'',
            links:'',
            blogSpinner:true,
            showVideo:true,
            translated:false
            
        }
    },
    methods: {
        async getProfile() {
            try {
                var api = this.api
                api += `?getProfile=1`
                this.blogSpinner = true
                var res = await fetch(api)
                res = await res.json()
                // console.log(res)
                this.profile = res
                console.log(res);
                this.logo=res.contact.logo
                this.contact = res.contact
                this.blogs = res.blogs
                this.services = res.services
                this.links = res.links
                this.blogSpinner = false
            } catch (err) {
                console.log(err)
                this.blogSpinner = false
            }
        },
        async translate(){
            
            this.blogSpinner = true
            const original = document.querySelector('#original');
            // console.log(original.innerHTML);
            var api = this.api
            api += `?translate=1`
            var res = await fetch(api,{
                method:"POST",
                headers:{
                    "Content-Type":"text/plain"
                },
                body:JSON.stringify({
                    text:original.innerHTML,
                    source:'en',
                    target:'ar'

                })
            })

            res = await res.json()
            console.log(res);
            var translated = document.querySelector('#translated')
            translated.setAttribute('dir','rtl')
            translated.classList.add('arb')
            translated.innerHTML = (utilities.fixClosingTags(res)).replaceAll(' & nbsp؛ ',' ')
            this.translated = true
            
            this.blogSpinner = false


        }

    },
    mounted() {
        this.getProfile()
        // this.translate()
    }
})


app.component('blogs-section', blogs)
app.component('footer-section', footer)
app.component('header-section', header)
app.component('services-section', services)
app.component('hero-section', hero)
app.component('banner-section', banner)
app.component('check-also', checkAlso)
app.component('blog-navigation', blogNavigation)
app.component('blog-media',blogMedia)

app.mount('#app')