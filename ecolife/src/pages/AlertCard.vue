<template>
  <div>
    <for-alert/>
    <!-- <for-card/> -->
    <!-- <ForShop /> -->
    <a target="blanck" href="http://demo.posthemes.com/pos_ecolife_fastfood/en/">ef</a>

  </div>
</template>
<script>
import { ref } from 'vue'
import ForAlert from '../components/ShopAlert/ForAlert.vue';
import ForCard from '../components/ShopAlert/ForCard.vue';
import ForShop from '../components/ShopAlert/ForShop.vue';
export default {
  components: { ForAlert, ForCard,  ForShop },
  data()
  {
    return {
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
