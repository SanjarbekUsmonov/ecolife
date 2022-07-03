<template>
  <div>
    <q-btn label="With QToolbar" color="primary" @click="toolbar = true" />
    <q-dialog class="MyDialog " full-height full-width v-model="toolbar">
     <q-card>
      <div class="row justify-around">
          <div class="w-40pr_md-40pr_sm-100pr row items-center justify-center">
            <div class="w-70pr_md-70pr_sm10pr">
              <img class="fit" src="http://demo.posthemes.com/pos_ecolife_fastfood/374-large_default/pizza-mushrooms.jpg" />
            </div>
          </div>
        <div class="w-40pr_md-40pr_sm-100pr lh-3 fs-15px mt-80px q-ml-md">
          <span class="text-h5 ">Pizza Mushrooms</span>
          <div class="text-subtitle1 text-bold">Reference: <span class="text-weight-regular">demo_24</span></div>
          <div class="row wrap items-center ml-m3pr fs-50px_md_15px_sm15px w-100pr_md-50pr_sm25pr">
            <div class="Mya">
              <q-icon name="fa-solid fa-comment-dots" class="q-mx-sm"/>
              <span>Read reviews (1)</span>
            </div>
            <div class="Mya ml-10px fs-50px_md_15px_sm15px">
              <q-icon class="q-mx-sm" name="fa-solid fa-clipboard"/>
              <span>Write a review</span>
            </div>
          </div>
          <div class="mt-15px">
            <span class="text-h6 text-strike text-grey">$23.90</span>
            <span class="text-h5 q-mx-md">$23.90</span>
            <q-badge class="bg-red q-py-sm q-px-md" label="Save 10%" />
          </div>
          <div class="column lh-1_5 fs-50px_md_15px_sm15px text-grey-8 mt-20px">
            <span>Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket.</span>
            <span>Part of the Kaval Collection.</span>
            <span>Regular fit is eased, but not sloppy, and perfect for any activity.</span>
            <span>Plain-woven jacket specifically constructed for freedom of movement.</span>
          </div>
          <q-card class="bg-grey h-1px q-my-lg no-shadow"></q-card>
          <div class="row justify-right">
            <div class="row justify-around no-wrap ">
              <div class="text-subtitle column">
                <span class="text-bold">Size</span>
                <select name="" id="" class="h-40px">
                  <option value="" label="kgfew,l"/>
                </select>
              </div>
              <div class="text-subtitle column q-ml-lg ">
                <span class="text-bold">How Mony</span>
                <input type="number" class="w-72px h-40px"/>
              </div>
            </div>
          </div>
          <div class="row justify-center">
            <div class="w-40pr_md-60pr_sm-50pr h-40px mt-35px mb-35px">
              <q-btn class="bg-red text-white fit" icon="add" rounded>Add To Card</q-btn>
            </div>
          </div>

          <div class=" row items-center fs-18px">
            <span class="text-bold">Shere</span>
            <div class="row justify-around w-150px">
              <q-icon class="Mya" name="facebook"></q-icon>
              <q-icon class="Mya" name="fa-brands fa-instagram-square"></q-icon>
              <q-icon class="Mya" name="fa-brands fa-google"></q-icon>
              <q-icon class="Mya" name="fa-brands fa-telegram"></q-icon>
            </div>
          </div>
          <div>
            <q-item v-for="item in 3" :key="item">
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar3.jpg">
                </q-avatar>
              </q-item-section>
              <q-item-section
              class="lh-1_5 text-weight-light text-grey-9">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-item-section>
            </q-item>
          </div>
        </div>
      </div>
      <br><br>
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
  color: gray;
}
.Mya:hover{
  color: red;
  justify-content: space-around;
}
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
