<template>
  <q-page>
    <div class="row w-100pr justify-around mt-5pr">
      <div class="w-55pr_md-90pr_sm-90pr">
        <card />
      </div>
      <div class="w-35pr_md-70pr_sm-90pr mb-50px">
        <card2 />
      </div>
    </div>
  </q-page>
</template>

<script>
import Card from "../components/Basket/Card.vue";
import Card2 from "src/components/Basket/Card2.vue";
export default {
  components: { Card, Card2 },
};
</script>

<style>
</style>
