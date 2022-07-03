<template >
  <div>
    <div>
      <CompCarusel />
    </div>
    <div class="container row wrap justify-center">
      <div class="content">
        <Suspense>
          <CompPopular   />
        </Suspense>
        <Suspense>
          <CompHotdeals />
        </Suspense>
        
      </div>
    </div>

    <div class="w-100pr h-460px row">
      <div class="w-50pr h-100pr">
        <q-img src="http://demo.posthemes.com/pos_ecolife_fastfood/img/cms/5_1.jpg" />
      </div>
      <div class="w-50pr h-100pr">
        <q-img src="http://demo.posthemes.com/pos_ecolife_fastfood/img/cms/6_1.jpg" />
      </div>
    </div>

    <div class="container row wrap justify-center">
      <div class="content">
        <CompFeatured />
        <CompLatest />
      </div>
    </div>
    <button @click="TheWether" > vnkdfvjfhv</button>
  </div>
</template>

<script>
// import {mapMutations} from 'vuex';
import CompCarusel from "src/components/MainPage/CompCarusel";
import CompPopular from "../components/MainPage/CompPopular";
import CompFeatured from "src/components/MainPage/CompFeatured";
import CompLatest from "src/components/MainPage/CompLatest";
import CompHotdeals from "src/components/MainPage/CompHotdeals.vue";
export default {
  components: {
    CompCarusel,
    CompPopular,
    CompFeatured,
    CompLatest,
    CompHotdeals,
  },
  // data() {
  //   return {
  //     categoriya:[],
  //     categoriyaImg:[],
  //     carts: [
  //       {
  //         id: 1,
  //         img: "http://demo.posthemes.com/pos_ecolife_fastfood/modules/xipblog/img/home_default-blog2.jpg",
  //         fresh: " Fresh Vegetables",
  //         product: "17 Product",
  //         a: "Shop Now",
  //       },
  //       {
  //         id: 2,
  //         img: "http://demo.posthemes.com/pos_ecolife_fastfood/modules/xipblog/img/home_default-blog2.jpg",
  //         fresh: " Fresh Vegetables",
  //         product: "17 Product",
  //         a: "Shop Now",
  //       },
  //       {
  //         id: 3,
  //         img: "http://demo.posthemes.com/pos_ecolife_fastfood/modules/xipblog/img/home_default-blog2.jpg",
  //         fresh: " Fresh Vegetables",
  //         product: "17 Product",
  //         a: "Shop Now",
  //       },
  //       {
  //         id: 4,
  //         img: "http://demo.posthemes.com/pos_ecolife_fastfood/modules/xipblog/img/home_default-blog2.jpg",
  //         fresh: " Fresh Vegetables",
  //         product: "17 Product",
  //         a: "Shop Now",
  //       },
  //       {
  //         id: 5,
  //         img: "http://demo.posthemes.com/pos_ecolife_fastfood/modules/xipblog/img/home_default-blog2.jpg",
  //         fresh: " Fresh Vegetables",
  //         product: "17 Product",
  //         a: "Shop Now",
  //       },
  //       {
  //         id: 6,
  //         img: "http://demo.posthemes.com/pos_ecolife_fastfood/modules/xipblog/img/home_default-blog2.jpg",
  //         fresh: " Fresh Vegetables",
  //         product: "17 Product",
  //         a: "Shop Now",
  //       },
  //     ],
  //   };
  // },
  // methods:{
  //   ...mapMutations(["FETCH_CATEGORIYA"]),
  //   Fetch_Categoriya(){
  //     fetch('http://127.0.0.1:8000/categoriya/')
  //       .then(response => response.json())
  //       .then(data => this.categoriya = data);
  //       console.log(this.categoriya);
  //     this.FETCH_CATEGORIYA(this.categoriya)
  //   },
  //   Fetch_Categoriya_imgs(){
  //     fetch('http://127.0.0.1:8000/rasmlar/')
  //     .then(response => response.json())
  //     .then(data => this.categoriyaImg = data);
  //     console.log(this.categoriyaImg);
  //   }
  // },
  // mounted() {
  //   this.Fetch_Categoriya(),
  //   this.Fetch_Categoriya_imgs()
  // }
   
};
</script>
<style>
.container {
  width: 100%;
  height: auto;
}

.content {
  width: 92%;
  height: 93%;
}
</style>
