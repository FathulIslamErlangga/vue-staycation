<template>
  <div class="hero container">
    <div class="row align-items-center">
      <div class="content-hero col-6">
        <h1 class=" line-height-1 mb-3">
           Forget Busy Work <br/>
           Start Next Vacation
        </h1>
        <p className="mb-4">
         We provide what you need to enjoy your holiday with family. 
         Time to make another memorable moments.
        </p>
        <router-link to="" class="btn px-5">Show Me Now</router-link>
        <div class="row parts">
          <div class="col-auto list-inline-item">
            <img
            src="@/assets/icons/ic_traveler.png" alt="">
            <h6 class="mt-3">
              {{ formatNumber(data.travelers) }}
              <span>travelers</span>
            </h6>
          </div>
          <div class="col-auto list-inline-item" style="margin-right: 30px;">
            <img
            src="@/assets/icons/ic_treasure.png" alt="">
          <h6 class="mt-3">
            {{ formatNumber(data.treasures) }}
            <span>treasure</span>
          </h6>
          </div>
          <div class="col-auto list-inline-item">
            <img
            src="@/assets/icons/ic_cities.png" alt="">
          <h6 class="mt-3">
            {{ formatNumber(data.cities) }}
            <span>cities</span>
          </h6>
          </div>
        </div>
    
      </div>
      <div class="col-6 pt-4 content-image">
        <div class="image-hero">
          <img src="@/assets/icons/picture.png" class="picture img-fluid position-absolute" alt="Room with couches">
          <img src="@/assets/icons/frame.png" class="frame img-fluid position-absolute"  alt="Room with couches frame">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import formatNumber from './number/formatNumber'
export default {
  name: 'HeroPage',
  
  data(){
    return{
      data:[],
      formatNumber,
    }
  },
  async mounted() {
    let result = await axios.get('http://127.0.0.1:8000/api/data1');
    // console.warn(result.data.data.items)
    this.data = result.data.hero
  },
 
}
</script>

