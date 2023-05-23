import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'
export default {
    template:
    /*html*/
    `
    <figure>
        <!-- Swiper -->
        <div class="swiper w-100 h-100">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="m in media">
                    <section class="ratio ratio-16x9" v-if="m.type == 'youtube'">
                        <iframe class="img-fluid object-fit-cover rounded" :src="'https://www.youtube.com/embed/'+m.src+'?rel=0'" :title="m.alt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </section>
                    <section v-if="m.type == 'image'">
                        <div class="ratio ratio-16x9">
                            <img :src="m.src" :alt="m.alt" class="img-fluid rounded object-fit-cover">
                        </div>
                    </section>

                </div>
            </div>
            
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination position-static my-3"></div>
        <button v-if="media.length >= 2" class="btn tb-sm btn-info" @click="swiper.slideNext()">Watch video</button>
    </figure>
    `,
    props:['media'],
    data(){
        return{
            swiper:''
        }
    },
    mounted(){
        this.swiper = new Swiper('.swiper', {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            spaceBetween:20,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });
    }
}