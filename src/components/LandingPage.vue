<template>
<div class="container">
    <div class="data-category" v-for="item in data" :key="item.id">
    <!-- looping data category -->
        <div class="mostpicked" v-if="item.id === 1">
        <!-- mengambil data category yang ber ID 1 Mospicked -->
            <h4 class="mb-4">{{item.name}}</h4>
        <div class="container-grid">
            <div  class="column-4 item" 
            :class="i.id === 1 ? 'row-2':'row-1'" v-for="i in item.items" :key="i.id">
            <!-- looping data items yang berada di category Mospicked -->
            <!-- jika item dengan id 1 maka tambah class dengan row-2 -->
            <div class="card card-featured">
                <div class="tag">
                    IDR {{ formatNumber(i.price) }}
                    <span class="font-wight-light">
                        one night
                    </span>
                </div>
                <figure class="img-wrapper">
                    <img class="img-cover" 
                    :src="path + '/storage/'+ i.gallery[0].image" :alt="i.name">
                </figure>
                <div class="meta-wrapper">
                    <router-link class=" text-decoration-none text-white d-block" :to="'/detail-penginapan/'+ i.slug">
                        <h5>{{ i.name }}</h5>
                    </router-link>
                    <span>
                        {{ i.city }} {{ i.country }}
                    </span>
                </div>
            </div>

            </div>
            </div>
        </div>
        <div class="list-category" v-if="item.id > 1">
            <h4 class="mb-4">{{item.name}}</h4>
            <div class="container-grid">
                <div class=" item column-3 row-1" v-for="i in item.items" :key="i.id">
                    <div class="card">
                        <div v-if="i.isPopuler === 1" class="tag">
                            Populer
                            <span className="font-wight-light">Choise</span>
                        </div>
                        <figure class="img-wrapper mb-3">
                            <img class="img-cover" :src="path +'/storage/'+i.gallery[0].image" :alt="i.name">
                        </figure>
                          <div class="meta-wrapper">
                                <router-link class=" text-decoration-none d-block" :to="'/detail-penginapan/'+ i.slug" style="color: #152C5B;">
                                    <h5>{{ i.name }}</h5>
                                </router-link>
                                <span class="sub-title">
                                    {{ i.city }} {{ i.country }}
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import formatNumber from './number/formatNumber'
export default {
    name: "LandingPage",
    data() {
        return {
            data:[],
            formatNumber,
            path: 'http://127.0.0.1:8000'
        }
    },
async mounted() {
    let response = await axios.get(this.path +`/api/data1`)
    this.data = response.data.category
},
}
</script>