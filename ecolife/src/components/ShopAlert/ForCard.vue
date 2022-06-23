<template>
  <div>
    <q-btn label="With QToolbar" color="primary" @click="toolbar = true" />
    <q-dialog class="MyDialog bg-transparent" full-height full-width v-model="toolbar">
      <q-card class="no-shadow bg-transparent" full-width>
        <q-card-section>
          <div class="row justify-center align-center">
            <q-card class="w-80pr h-88vh mt-m1pr">
              <div class="MyClose mt-15px ml-97pr">
                <q-btn flat round dense icon="close" v-close-popup class="mt-m40pr" />
              </div>
              <div class="row mt-m50px">
                <div class="w-40pr h-450px mt-40px">
                <img src="http://demo.posthemes.com/pos_ecolife_fastfood/374-large_default/pizza-mushrooms.jpg" class="fit">
              </div>
              <div class="column w-60pr h-450px lh-3 mt-70px">
                <span class="text-h5 text-bold">Pizza Mushrooms</span>
                <span class="text-subtitle1 mt-6px text-bold">Reference: demo_24</span>
                <div>
                  <q-icon class="text-yellow text-weight-bolder text-subtitle1" name="star" v-for="star in stars" :key="star"></q-icon>
                </div>
                <div class="text-h5 text-bold">
                  <span class="text-strike text-grey fs-20px">$23.90</span>
                  <span class="q-ml-md">$21.51</span>
                  <q-badge class="bg-dark text-white h-25px w-10pr mt-10px q-ml-md text-bold" label="Save 10%" />
                </div>
                <div class="column lh-1_8 mt-25px text-grey text-subtitle1">
                  <span>Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket.</span>
                  <span>Part of the Kaval Collection.</span>
                  <span>Regular fit is eased, but not sloppy, and perfect for any activity.</span>
                  <span>Plain-woven jacket specifically constructed for freedom of movement.</span>
                </div>
                <q-separator inset class="q-mt-lg "/>
                <div class="row">
                  <div class="column w-50px align-center justify-center">
                    <span>Dimension</span>
                    <select name="" id="" class="w-110px h-35px">
                      <option value="">w-50px h-35px</option>
                    </select>
                  </div>
                  <div class="column ml-100px">
                    <span>how many</span>
                    <input type="number" class="w-80px h-35px">
                  </div>
                </div>
                <div class="w-35pr h-50px br-50pr lh-3">
                  <q-btn icon="add" class="mt-30px fit bg-red text-white " rounded  >ADD TO CARD</q-btn>
                  <div class="mt-15px">
                    <a href="" class="Mya fs-15px mt-30px" ><q-icon name="shuffle"/> Add To Compare</a>
                  </div>
                  <div class="fs-20px row mt-m15px ">
                    <span class="text-bold">Shere</span>
                    <div class="row justify-around w-150px mt-20px">
                      <q-icon class="Mya" name="facebook"></q-icon>
                      <q-icon class="Mya" name="fa-brands fa-instagram-square"></q-icon>
                      <q-icon class="Mya" name="fa-brands fa-google"></q-icon>
                      <q-icon class="Mya" name="fa-brands fa-telegram"></q-icon>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      icon: ref(false),
      bar: ref(false),
      bar2: ref(false),
      toolbar: ref(false),
      stars:[
        {name:'star'},
        {name:'star'},
        {name:'star'},
        {name:'star'},
        {name:'star'}
      ],
    }
  },
}
</script>
<style scoped>
.Mya{
  text-decoration: none;
}
.Mya:hover{
  color: red;
  justify-content: space-around;
}
.MyClose{
  position: absolute;
}
.MyDialog{
  width: 100%;
  height: 100vh ;
}
</style>
