<template>
  <div>
    <!-- <for-alert/> -->
    <!-- <for-card/> -->
    <!-- <for-page-shop-in-card/> -->
    <a target="blanck" href="http://demo.posthemes.com/pos_ecolife_fastfood/en/">ef</a>
    <q-btn label="Medium" color="primary" @click="medium = true" />
     <q-dialog
      v-model="medium"
    >
      <q-card style="width:100%; max-width:100% ;" class="bg-transparent no-shadow">
        <q-card-section class="q-pt-none">
          <div class="row justify-center ">
            <q-card class="w-80pr h-350px" >
              <div class="w-100pr h-50px bg-dark text-white text-h6 row wrap items-center content-center">
                <q-icon name="check" class="text-bold ml-27pr q-pr-lg"/>
                <span>Product Successfully Added To Your Shopping Cart</span>
                <q-btn flat icon="close" v-close-popup class="text-bold ml-23pr" />
              </div>
              <div class="row">
                <div>
                  <img class="w-100pr h-260px mt-10px" src="http://demo.posthemes.com/pos_ecolife_fastfood/427-home_default/pizza-primavera.jpg" alt="">
                </div>
                <div class="column mt-60px ls-1px lh-2_1 ">
                  <span class="text-bold q-pb-md text-subtitle1">Pizza Primavera</span>
                  <span class="text-grey-8 text-bold"><span>$29.00</span></span>
                  <div class="text-grey-8 text-bold row">Dimension: <span class="text-subtitle2 text-dark mt-4px">40x60cm</span></div>
                  <div class="text-grey-8 text-bold row">Color:     <span class="text-subtitle2 text-dark mt-5px">White</span></div>
                  <div class="text-grey-8 text-bold row">Quantity:  <span class="text-subtitle2 text-dark mt-4px">5</span></div>
                </div>
                <q-separator inset class="rotate-90 q-mt-xl mt-m50px w-20pr mr-m10pr" />
                <div class="mt-50px ml-m6pr lh-1_8">
                  <span>There are 10 items in your cart.</span>
                  <div class="text-bold text-subtitle1">Total products: <span class="text-weight-light">$275.02</span></div>
                  <div class="text-bold text-subtitle1">Total shipping: <span class="text-weight-light">$7.00</span></div>
                  <div class="text-bold text-subtitle1">Taxes <span class="text-weight-light">$0.00</span></div>
                  <div class="text-bold text-subtitle1">Total: <span class="text-weight-light">$282.02 (tax excl.)</span></div>
                  <div class="mt-20px">
                    <q-btn class="bg-dark text-white">Cnoution Shopping</q-btn>
                    <q-btn icon="check" class="bg-dark text-white q-ml-md">prokeet to checkout</q-btn>
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
import ForAlert from '../components/ShopAlert/ForAlert.vue';
import ForCard from '../components/ShopAlert/ForCard.vue';
import ForPageShopInCard from '../components/ShopAlert/ForPageShopInCard.vue';
export default {
  components: { ForAlert,ForCard, ForPageShopInCard },
  data()
  {
    return {
      small: ref(false),
      medium: ref(false),
      fullWidth: ref(false),
      fullHeight: ref(false),

      model: ref(2.3),
      badges:[
        {name:'badge',text:'Compositions'},
        {name:'badge',text:'Compositions'},
        {name:'badge',text:'Compositions'},
        {name:'badge',text:'Compositions'},

      ],
      stars:[
        {name:'star'},
        {name:'star'},
        {name:'star'},
        {name:'star'},
        {name:'star'}
      ],
      tab: ref(true),
      innerTab: ref('innerDescription'),
      splitterModel: ref(20)
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

</style>
