<template>
    <div class="container">
        <div class="row align-item-center">
            <div class="col-6 image-rating">
                <img src="@/assets/images/foto_keluarga.png" alt="foto keluarga">
            </div>
            <div class="col-auto content-rating  mb-5" >
                <h4 class="mb-5">Happy Family</h4>
                <div class="stars">
                    <star-rating :rating="4.5" :read-only="true" 
                    :star-size="30" :increment="0.01"></star-rating>
                </div>
                <h1 class="line-height-1 pt-3">
                    What a great trip with my family and <br/>
                    I should try again next time soon ...
                </h1>
                <h2 class="h4 brand-name pt-3">Stay<span>cation</span></h2>
                <router-link to="" class="btn px-5 mt-3">Read Their Story</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import StarRating from 'vue-star-rating'
export default {
    name:'RatingPage',
    components: {
        StarRating,
    }
}
</script>