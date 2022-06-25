<template >
  <div>
    <div class="w-100pr h-950px  row  justify-between items-start content-start">
      <div class=" w-35pr h-90pr bg-grey-1">
        <div class="w-100pr h-7pr bg-white">
          <div class="text-h5">
            Hot Deals
          </div>
          <div class="text-grey">
            Add hot products to weekly line up
          </div>
        </div>
        <CompCarusel2 />
      </div>

      <div class="w-63pr h-95pr   row wrap justify-between items-start content-start">
        <div class="w-100pr h-7pr bg-white">
          <div class="text-h5">
            New Arrivals
          </div>
          <div class="text-grey">
            Add new products to weekly line upf
          </div>
        </div>
        <div class="cart w-205px h-380px  q-mt-md row justify-center content-center" v-for="(product , i) in products"
          :key="i">
          <div class="w-90pr h-90pr  ">
            <div class="w-100pr h-54pr ">
              <q-img :src="product.imgLink" alt="" class="img w-100pr h-97pr">
                <div class="search w-100pr h-100pr row content-center justify-center" style="background: none;">
                  <q-icon class="icon" size="25px" name="search" />
                </div>
              </q-img>
            </div>
            <div class="text w-90pr h-30pr mt-20px ml-10px ">
              <a class="href fs-12px " href="">SDUDIO DECIGN</a><br>
              <a class="a text-subtitle1 text-weight-bold text-black" href="">{{ product.name }}</a>
              <div class="row items-center">
                <q-icon name="star" color="yellow" size="17px" />
                <q-icon name="star" color="yellow" size="17px" />
                <q-icon name="star" color="yellow" size="17px" />
                <q-icon name="star" color="yellow" size="17px" />
                <q-icon name="star" color="yellow" size="17px" />
              </div>
              <div>
                <del class="text-grey">{{ product.oldPrice }}$</del>
                <span class="ml-5px text-dark text-subtitle1">{{ product.price }}$</span>
                <q-icon class="ml-20px" @click="addBacket(i)" color="yellow" size="25px" name="shopping_cart" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import CompCarusel2 from './CompCarusel2.vue';
export default {
  components: {
    CompCarusel2
  },
  computed:{
    ...mapState(['products'])
  },
  
  data() {
    return {
     
    }
    
  },
  methods: {
    // cardning ostidagi iconni bosganda quyidagi amal bajariladi
      ...mapMutations(["ADD_BACKET"]),
      addBacket(i){
        const cost ={
          id:this.products[i].id,
          imgLink:this.products[i].imgLink,
          name: this.products[i].name,
          price: this.products[i].price,
          oldPrice: this.products[i].oldPrice,
          type:"",
          color:this.products[i].color,
          skitka:this.products[i].skitka,
          amount:1,
          overallPrice:this.products[i].price
        }
        this.ADD_BACKET(cost)
      }
    },
}

</script>
<style scoped>
.text {
  line-height: 2.3;
}

.cart {
  border: 1px solid rgb(229, 228, 228);
}

.a {
  text-decoration: none;
}

.href {
  text-decoration: none;
  color: grey;
}

.href:hover {
  margin-left: 10px;
  color: green;
  transition: 1s;
}

.cart:hover {
  border: 2px solid green;
}

.search {
  opacity: 0;
}

.search:hover {
  opacity: 1;
}

.icon {
  background-color: #fff;
  border-radius: 22px;
  padding: 10px;
  color: grey;
}

.icon:hover {
  background-color: red;
  color: #fff;
  transition: 1s;
}
</style>
