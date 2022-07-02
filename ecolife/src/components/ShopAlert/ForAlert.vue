<template>
 
        <div class="row no-wrap content-info">
          <div class="img-pro w-35pr_md-50pr_sm-100pr row items-center justify-center" >
            <img class=" mt-10px w-80pr_md-90pr_sm-100pr" :src="product.imgLink" alt="">
          </div>
          <div class="column  mt-60px ls-1px lh-2_1 content-info-bit1 ">
            <span class="text-bold q-pb-md text-subtitle1 lh-1_1">{{product.name}}</span>
            <span class="text-grey-8 text-bold"><span>{{product.price}}$</span></span>
            <div class="text-grey-8 text-bold row">Dimension: <span class="text-subtitle2 text-dark mt-4px">40x60cm</span></div>
            <div class="text-grey-8 text-bold row">Color:     <span class="text-subtitle2 text-dark mt-5px">White</span></div>
            <div class="text-grey-8 text-bold row">Quantity:  <span class="text-subtitle2 text-dark mt-4px">5</span></div>
          </div>
          <q-separator inset class="rotate-90 q-mt-xl mt-m50px w-20pr mr-m10pr" />
          <div class="mt-50px content-info-bit2 ml-m6pr lh-1_8 no-wrap">
            <span>There are 10 items in your cart.</span>
            <div class="text-bold text-subtitle1">Total products: <span class="text-weight-light">$275.02</span></div>
            <div class="text-bold text-subtitle1">Total shipping: <span class="text-weight-light">$7.00</span></div>
            <div class="text-bold text-subtitle1">Taxes <span class="text-weight-light">$0.00</span></div>
            <div class="text-bold text-subtitle1">Total: <span class="text-weight-light">$282.02 (tax excl.)</span></div>
            <div class="mt-20px btn-content pb-20px pr-20px row no-wrap">
              <q-btn class="w-100pr_md-90pr_sm-95pr bg-dark text-white">Cnoution Shopping</q-btn>
              <q-btn class=" btn-2 w-80pr_md-90pr_sm-95pr bg-dark fs-36px row text-white q-ml-md"> <q-icon class="icon-btn-check" name="check"></q-icon> prokeet to checkout</q-btn>
            </div>
          </div>
        </div>
      
</template>
<script>
import { ref } from 'vue'
export default {
   props:["product"],
  data() {
    return {
      icon: ref(false),

    }
  },
}
</script>
<style scoped>
@media screen and ( max-width:900px ) and (min-width:500px) {
   .q-btn{
    font-size: 12px;
    margin-right: 5px;
   }
   .btn-2{
    margin-top: 20px;
    margin-left: 0px;
   }
   .btn-content{
    flex-wrap: wrap;
    /* justify-content: center; */
   }
   .text-subtitle1 , .text-subtitle2 , .content-info{
    font-size: 12px;
   }
   .icon-btn-check{
    display: none;
   }
}
@media screen and ( max-width:499px ){
  .content-info{
    flex-wrap: wrap;
    justify-content: center;
  }
  .img-pro{
    width: 80%;
    height: 250px;
  }
  .content-info-bit1{
    width: 100%;
    margin-left:50px;
  }
  .rotate-90{
    display:none;
  }
  .content-info-bit2{
    width:100%;
    margin-left: 50px;
    margin-top: 0px;
  }
  .btn-content{
    flex-wrap: wrap;
    /* justify-content: center; */
   }
   .q-btn{
    font-size: 12px;
    margin-right: 5px;
   }
   .btn-2{
    margin-top: 20px;
    margin-left: 0px;
   }
}
</style>
