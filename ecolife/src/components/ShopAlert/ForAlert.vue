<template>

    
      <div class="row items-center justify-center wrap q-mr-lg">
        <div class="w-30pr_md-70pr_sm-90pr ">
          <q-img class="fit" src="http://demo.posthemes.com/pos_ecolife_fastfood/375-home_default/pizza-mushrooms.jpg" alt=""/>
        </div>
        <div class="w-30pr_md-70pr_sm-90pr q-pb-md">
          <span class="text-bold fs-26px_md-24px_sm-22px q-mb-md">{{product.name}}</span>
          <div class="q-my-md"></div>
          <div class="q-my-xs">
            <span class="text-bold fs-22px_md-20px_sm-18px">{{product.price}}</span>
            <span class="fs-22px_md-20px_sm-18px">{{product.price}}</span>
          </div>
        </div>
        <div class="w-30pr_md-70pr_sm-90pr">
          <span class="fs-22px_md-20px_sm-18px">Lorem ipsum dolor sit.</span>
          <div>
            <span class="text-bold fs-22px_md-20px_sm-18px">{{product.price}}</span>
            <span class="fs-22px_md-20px_sm-18px">soni:{{product.amount}}</span>
          </div>
          <div class="row no-wrap items-center w-100pr">
            <q-btn class="bg-dark text-white q-my-md q-mr-md h-50px">Continue Shopping</q-btn>
            <q-btn class="bg-dark text-white">Lorem, ip dolor.</q-btn>
          </div>
        </div>
      </div>
    
    
  
</template>
<script>
export default {
  props:["product"],
  data() {
    return {
      texts:[
        {textOne:'$21.51',textTwo:''},
        {textOne:'Dimitsion:',textTwo:'40x 60x'},
        {textOne:'Quaritiy:',textTwo:'7'}
      ],
       texts2:[
        {textOne:'Total products:',textTwo:'$536.41'},
        {textOne:'Total shipping:',textTwo:' $7.00'},
        {textOne:'Taxes',textTwo:'$0.00'},
        {textOne:'Total:',textTwo:' $543.41 (tax excl.)s'}
      ]
    }
  },
}
</script>
<style scoped>

</style>
