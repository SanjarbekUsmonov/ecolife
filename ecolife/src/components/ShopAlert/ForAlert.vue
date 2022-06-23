<template>
  <div>
    <div class="row justify-center">
      <q-card class="w-80pr h-350px" >
        <div class="w-100pr h-50px bg-dark text-white text-h6 row wrap items-center content-center">
          <q-icon name="check" class="text-bold ml-27pr q-pr-lg"/>
          <span>Product Successfully Added To Your Shopping Cart</span>
          <q-icon name="close" class="text-bold ml-23pr"></q-icon>
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

  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      icon: ref(false),
    }
  },
}
</script>
<style scoped>

</style>
