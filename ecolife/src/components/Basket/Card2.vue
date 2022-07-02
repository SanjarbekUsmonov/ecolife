<template>
<div>
    <div class=" w-100pr  " style="border:1px solid grey">
      <div class="contier w-100pr q-pt-sm">
        <div class="q-ml-sm q-mr-sm text-subtitle2">2 items</div>
        <q-list class="rounded-borders" />
        <div class="row justify-between text-subtitle2 q-ml-sm q-mr-sm">
          <div>Subtotal</div>
          <div>$33.41</div>
        </div>
        <div class="row justify-between text-subtitle2 q-ml-sm q-mr-sm">
          <div>Shipping</div>
          <div>$7.00</div>
        </div>
        <br />
      </div>
      <div class="row justify-between text-subtitle2 q-ml-sm q-mr-sm">
        <div>Total (Tax Excl.)</div>
        <div>$40.41</div>
      </div>
      <div class="row justify-between text-subtitle2 q-ml-sm q-mr-sm">
        <div>Taxes</div>
        <div>$0.00</div>
      </div>
      <br />
    </div><br>
    <CompPersonal class="w-100pr"/>  
</div>
</template>

<script>
import CompPersonal from '../Registration/CompPersonal.vue';
export default {
    components: { CompPersonal }
}
</script>

<style scoped>
.btn {
  border: none;
}



.contier {
  border-bottom: 1px solid grey;
}
</style>
