<template>
  <div class="w-100pr">
    <div class="text-h6">Shopping Cart</div>
    <div v-for="card in cards" :key="card" class="w-90pr mt-50px">
      <div class="w-100pr h-100pr row items-center justify-between">
        <div class="w-25pr">
          <q-img :width="widthImg" :src="card.src" />
        </div>
        <div class="w-45pr content-card " >
          <div class="w-65pr_md-65pr_sm-100pr h-90pr ">
            <div class="fs-16px">
              {{ card.span }}
            </div>
            <div class="row w-100pr ">
              <div class="w-70pr_md-100pr_sm-100pr">
                <span class="mr-5pr text-red-9"> {{ card.number }} </span>
                <del class="mr-5pr"> {{ card.del }} </del>
              </div>
              <div>
                <span class="bg-black text-white pl-5px pr-5px p-3px">
                  {{ card.num }}
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
                5
              </div>
              <div class="w-35pr h-100pr">
                <div
                  class="w-100pr h-50pr row justify-center items-center"
                  style="border-bottom: 1px solid grey"
                >
                  <button class="btn-inc">
                    <q-icon size="18px" name="expand_less" />
                  </button>
                </div>
                <div class="w-100pr h-50pr row justify-center items-center">
                  <button class="btn-inc">
                    <q-icon size="18px" name="expand_more" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" for-icon-content w-23pr row">
          <div class=" forr w-70pr h-90pr row justify-center">
            <span class="fs-16px">{{ card.iq }}</span>
          </div>
          <div class=" for-icon w-30pr  h-90pr row justify-end">
            <q-icon  size="22px" :name="card.icon" />
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
export default {
  mounted() {
      if(this.windowWidth<500){
        this.widthImg="100%"
      }
      else if(this.windowWidth>500 && this.windowWidth<900){
        this.widthImg="80%"
      }
      console.log(this.windowWidth);
    },
  data() {
    return {
      widthImg:"60%",
      windowWidth: window.innerWidth,
      cards: [
        {
          src: "http://demo.posthemes.com/pos_ecolife_fastfood/375-cart_default/pizza-mushrooms.jpg",
          span: " Pizza Mushrooms",
          number: "$21.51 ",
          del: "$23.90",
          num: "-10%",
          iq: "$21.51",
          icon: "delete",
        },
        {
          src: "http://demo.posthemes.com/pos_ecolife_fastfood/375-cart_default/pizza-mushrooms.jpg",
          span: " Pizza Mushrooms",
          number: "$21.51 ",
          del: "$23.90",
          num: "-10%",
          iq: "$21.51",
          icon: "delete",
        },
        {
          src: "http://demo.posthemes.com/pos_ecolife_fastfood/375-cart_default/pizza-mushrooms.jpg",
          span: " Pizza Mushrooms",
          number: "$21.51 ",
          del: "$23.90",
          num: "-10%",
          iq: "$21.51",
          icon: "delete",
        },
        {
          src: "http://demo.posthemes.com/pos_ecolife_fastfood/375-cart_default/pizza-mushrooms.jpg",
          span: " Pizza Mushrooms",
          number: "$21.51 ",
          del: "$23.90",
          num: "-10%",
          iq: "$21.51",
          icon: "delete",
        },
      ],
    };
  },
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


@media screen and (min-width:600px) {
  .content-card{
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

  }
  .forr{
    position: absolute;
    top: 50px;

  }
}
</style>
