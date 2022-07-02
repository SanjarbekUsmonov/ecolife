<template>
  <div class="w-100pr">
    <div class="text-h6">Shopping Cart</div>
    <div v-for="cost , i in costs" :key="i" class="w-90pr mt-50px">
      <div class="w-100pr h-100pr row items-center justify-between">
        <div class="w-25pr">
          <q-img :width="widthImg" :src="cost.imgLink" />
        </div>
        <div class="w-45pr content-cost " >
          <div class="w-65pr_md-65pr_sm-100pr h-90pr ">
            <div class="fs-16px">
              {{ cost.name }}
            </div>
            <div class="row w-100pr ">
              <div  class="w-70pr_md-100pr_sm-100pr">
                <span class="mr-5pr text-red-9"> {{ cost.price }}$ </span>
                <del v-if=" cost.skitka.length >0 ? true :false " class="mr-5pr"> {{ cost.oldPrice }}$ </del>
              </div>
              <div v-if=" cost.skitka.length >0 ? true :false ">
                <span class="bg-black text-white pl-5px pr-5px p-3px">
                  -{{ cost.skitka }}%
                </span>
              </div>
            </div>
          </div>
          <div class="w-33pr h-90pr mt-10px mb-10px">
            <div class="w-80px h-40px row" style="border: 1px solid grey">
              <div
                class="w-65pr h-100pr row justify-center items-center"
                style="border-right: 1px solid grey"
              >
                {{cost.amount}}{{cost.size}}
              </div>
              <div class="w-35pr h-100pr">
                <div
                  class="w-100pr h-50pr row justify-center items-center"
                  style="border-bottom: 1px solid grey"
                >
                  <button class="btn-inc w-100pr h-100pr row justify-center items-center" @click="Increment(i)">
                    <q-icon size="18px" name="expand_less" />
                  </button>
                </div>
                <div class="w-100pr h-50pr row justify-center items-center">
                  <button class="btn-inc w-100pr h-100pr row justify-center items-center" @click="Decrement(i)">
                    <q-icon size="18px" name="expand_more" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" for-icon-content w-23pr row">
          <div class=" forr w-70pr h-90pr row justify-center">
            <span class="fs-16px">{{ cost.overallPrice }}$</span>
          </div>
          <div class=" for-icon w-30pr  h-90pr row justify-end">
            <q-icon @click="Remowe(i)" size="22px" name="delete" />
          </div>
        </div>
      </div>
      <q-separator class="w-100pr pr-40px"  color="grey-5" />
    </div>
    <div class="mt-50px ml-4pr mb-50px row justify-center">
      <q-btn class="btn" to="shop" label="Continue Shopping" />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
  computed:{
    ...mapState(["costs"])
  },
  data() {
    return {
      amount:1,
      widthImg:"60%",
      windowWidth: window.innerWidth,
      
    };
  },
  mounted() {
    // maxsulot rasmiga responsiv
      if(this.windowWidth<500){
        this.widthImg="100%"
      }
      else if(this.windowWidth>500 && this.windowWidth<900){
        this.widthImg="80%"
      }
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
  methods:{
    ...mapMutations(["INCREMENT","DECREMENT","REMOWE","CALCULATION_SHOT"]),
    Increment(i){
      this.INCREMENT(i)
      // this.costs[i].amount++
      // this.costs[i].overallPrice=Math.round10(this.costs[i].amount*this.costs[i].price , -2)
      this.CALCULATION_SHOT()
    },
    Decrement(i){
      if(this.costs[i].amount >1){
        this.DECREMENT(i)
        // this.costs[i].amount--
        // this.costs[i].overallPrice=Math.round10(this.costs[i].amount*this.costs[i].price , -2)
        this.CALCULATION_SHOT()
      }
    },
    Remowe(i){
      this.REMOWE(i)
      this.CALCULATION_SHOT()
    }
  }
};
</script>

<style scoped>
.btn {
  background-color: black;
  transition: 0.6s ease;
  color: white;
}
.btn:hover {
  background-color: red;
}
.btn-inc {
  background: rgb(255, 255, 255);
  border: none;
  width: 100%;
  height: 100%;
}
.btn-inc:active {
  background: rgb(184, 183, 183);
}


@media screen and (min-width:500px) {
  .content-cost{
    display: flex;
  }
}
@media screen and (max-width:500px) {
  .for-icon-content{
    position: relative;
    height: 100px;
  }
  .for-icon{
    position: absolute;
    top: 0px;
    left: 50%;
  }
  .forr{
    position: absolute;
    top: 50px;

  }
}
</style>
