<template>
    <section class="container pages-detail"> 
        <div class="text-center mb-5 title-lodging">
            <h1>{{data.name}}</h1>
            <span>{{data.city}} <span>{{data.country}}</span></span>
        </div>
            <div class="container-grid mb-5 sm">
                <div class="item row-2 column-7">
                    <div class="card">
                        <figure class="img-wrapper">
                            <img :src="path + '/storage/' + gallery[1]" class="img-cover" 
                            :alt="data.name">
                        </figure>
                    </div>
                </div>
                <div class="item row-1 column-5">
                    <div class="card">
                        <figure class="img-wrapper">
                            <img :src="path + '/storage/' + gallery[2]" class="img-cover" 
                            :alt="data.name">
                        </figure>
                    </div>
                </div>
                <div class="item row-1 column-5">
                    <div class="card">
                        <figure class="img-wrapper">
                            <img :src="path + '/storage/' + gallery[3]" class="img-cover" 
                            :alt="data.name">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="row description-content mb-5">
                <h3>About the place</h3>
                <div class="col-7 pr-5" >
                   <span v-html="data.description"></span>
                   <div class="row feature">
                       <div class="col-3 pt-3">
                           <img src="@/assets/icons/feature/feature-1.png" alt="" style="width: 38px;">
                               <h6 class="mt-3">{{feature.bedroom}} <span>Bedroom</span></h6>
                       </div>
                       <div class="col-3 pt-3">
                           <img src="@/assets/icons/feature/feature-2.png" alt="" style="width: 38px;">
                               <h6 class="mt-3">{{feature.livingroom}} <span>Livingroom</span></h6>
                       </div>
                       <div class="col-3 pt-3">
                           <img src="@/assets/icons/feature/feature-4.png" alt="" style="width: 38px;">
                               <h6 class="mt-3">{{feature.bathroom}} <span>Bathroom</span></h6>
                       </div>
                       <div class="col-3 pt-3">
                           <img src="@/assets/icons/feature/feature-3.png" alt="" style="width: 38px;">
                               <h6 class="mt-3">{{feature.diningroom}} <span>Diningroom</span></h6>
                       </div>
                       <div class="col-3 pt-3">
                           <img src="@/assets/icons/feature/feature-5.png" alt="" style="width: 38px;">
                               <h6 class="mt-3">{{feature.wifi}} <span>Mbps</span></h6>
                       </div>
                       <div class="col-3 pt-3">
                           <img src="@/assets/icons/feature/feature-6.png" alt="" style="width: 38px;">
                               <h6 class="mt-3">{{feature.smalltable}} <span>Smalltable</span></h6>
                       </div>
                       <div class="col-3 pt-3">
                           <img src="@/assets/icons/feature/feature-7.png" alt="" style="width: 38px;">
                               <h6 class="mt-3">{{feature.wardrobe}} <span>Refigrator</span></h6>
                       </div>
                       <div class="col-3 pt-3">
                           <img src="@/assets/icons/feature/feature-8.png" alt="" style="width: 38px;">
                               <h6 class="mt-3">{{feature.television}} <span>Television</span></h6>
                       </div>
                   </div>
                </div>
            </div>

            <h4>Treasure to Choose</h4>
            <div class="pt-4 list-activity container-grid ">
            <div class="item row-1 column-3" v-for="activity in data.activity" :key="activity.id">
                <div class="card">
                    <div class="tag" v-if="activity.isPopuler === 1">
                        Populer
                            <span className="font-wight-light">Choise</span>
                    </div>
                    <figure class="img-wrapper">
                        <img :src="path +'/storage/'+ activity.image" :alt="activity.name" class="img-cover">
                    </figure>
                    <div class="meta-wrapper">
                        <router-link class=" text-decoration-none d-block" to="" style="color: #152C5B;">
                            <h5>{{ activity.name }}</h5>
                        </router-link>
                        <span class="sub-title">
                             {{ activity.type}}
                        </span>
                     </div>
                </div>
            </div>
         </div>
            <RatingItems/>
    </section>
</template>
<script>
import axios from 'axios'
import RatingItems from '../components/ratings/RatingItems.vue'


export default {
    data() {
        return {
            data: [],
            gallery: [],
            feature:[],
            path: "http://127.0.0.1:8000",
        };
    },
    async mounted() {
        let response = await axios.get(`${this.path}/api/data1/${this.$route.params.slug}`);
        this.gallery = response.data.items.gallery.map(item => (item.image));
        this.data = response.data.items;
        this.feature = response.data.feature;
        const title = response.data.items.name;
        document.title = title + ` | Staycation`;
    },
    components: { RatingItems }
}
</script>
