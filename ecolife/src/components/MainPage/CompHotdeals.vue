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
                <del v-if=" product.oldPrice.length!=0 ? true :false " class="text-grey">{{ product.oldPrice }}$</del>
                <span class="ml-5px text-dark text-subtitle1">{{ product.price }}$</span>
                <q-icon class="ml-20px" @click="addBacket(i)" color="yellow" size="25px" name="shopping_cart" />
              </div>
              
            </div>
          </div>
          <q-dialog class="MyDialog bg-transparent" full-height full-width v-model="toolbar">
             <div>
              <div class="row justify-center">
                <q-card class=" w-80pr_md-95pr_sm-95pr" >
                  <div class="w-100pr_md-90pr_sm-95pr bg-dark text-white  h-50px row no-wrap justify-between items-center content-center">
                    <div class="w-30pr h-50px row no-wrap justify-end items-center content-end">
                      <q-icon name="check" class="text-weight-bolder q-pr-lg"/>
                    </div>
                    <span class="fs-22px_md-15px_sm-10px text-weight-bold">Product Successfully Added To Your Shopping Cart</span>
                    <div class="w-20pr h-50px row no-wrap justify-end items-center content-end mr-10px">
                      <q-icon name="close" @click="dialogVisable" class="text-bold ml-10px"></q-icon>
                    </div>
                  </div>
                    <ForAlert  :product="products[i]" />
                </q-card>
              </div>
            </div>
          </q-dialog>
          
        </div>
          {{ProductsApi}}
      </div>
      bu chhhh {{products}}
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import {ref, onMounted} from 'vue';
import axios from "axios";
import CompCarusel2 from './CompCarusel2.vue';
import ForAlert from '../ShopAlert/ForAlert.vue';
export default {
  components: {
    CompCarusel2,
    ForAlert
},
computed:{
    ...mapState(['products','costs'])
  },
setup() {
      const ProductsApi=ref([])
      const productapi=ref([])
      onMounted(()=>{
        
        const getComment = async () => {
          try {
            const Fetch_Product = await axios.get('http://127.0.0.1:8000/productlar/');
            ProductsApi.value = Fetch_Product.data;
            console.log('lkjhg');
          } 
          catch (err) {
            console.log(err);
          }

        };
        const getFilter = ()=>{
          for(let j=0 ; j <  ProductsApi.value.length ; j++ ){
            if( ProductsApi.value[j].chegirma_foizi != null ){
              productapi.value.push(ProductsApi[j])
            }
          }
        }
        let timerId = setInterval(() => {getComment() , getFilter()}, 1000);
        setTimeout(() => { clearInterval(timerId) }, 5000);
      
      }
  
    )
    return {
      ProductsApi,
      productapi
    }
  },

  
  
   mounted() {
    // maxsulot rasmiga responsiv
    function decimalAdjust(type, value, exp) {
      // Если степень не определена, либо равна нулю...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // Если значение не является числом, либо степень не является целым числом...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Сдвиг разрядов
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Обратный сдвиг
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Десятичное округление к ближайшему
    if (!Math.round10) {
      Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
      };
    }
    console.log(Math.round10(1.005, -2))
  },
  methods: {
    // cardning ostidagi iconni bosganda quyidagi amal bajariladi
      ...mapMutations(["ADD_BACKET","CALCULATION_SHOT","INCREMENT"]),     

      addBacket(i){ 
        for(let j=0 ; j<this.costs.length ; j++){
          if(this.products[i].name==this.costs[j].name){
            this.yangi++
          }
        }
        console.log(this.yangi);
        
        if( this.yangi<1){
          const cost ={
            id:this.products[i].id,
            imgLink:this.products[i].imgLink,
            name: this.products[i].name,
            price: this.products[i].price,
            oldPrice: this.products[i].oldPrice,
            type:"",
            size:this.products[i].size,
            color:this.products[i].color,
            skitka:this.products[i].skitka,
            amount:1,
            overallPrice:this.products[i].price
          }
          this.ADD_BACKET(cost,i)
          this.CALCULATION_SHOT(i)
          // this.toolbar=true
        }
        else{
          this.INCREMENT(i)
          this.CALCULATION_SHOT(i)
          // this.toolbar=true
        }
        this.yangi=0
        
      },
      dialogVisable(){
        this.toolbar=false
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
