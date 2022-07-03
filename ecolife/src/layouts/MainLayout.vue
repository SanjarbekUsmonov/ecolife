<template>
  <q-layout view="hhh lpR fff">
    <q-header reveal class="navbar h-70px content-center">
      <q-toolbar>
        <router-link to="/">
          <div class="w-15pr h-50px mt-10px">
            <img
              src="http://demo.posthemes.com/pos_ecolife/layout2/img/ecolife-responsive-prestashop-theme-logo-1580528177.jpg"
              alt="" />
          </div>
        </router-link>
        <div class="row w-85pr h-50px mt-10px content-center">

          <q-space />
          <router-link to="login" class="fs-18px mr-20px"> Log In </router-link>
          <q-icon   @click="visableCard" size="25px" name="search" class="navicon q-mr-md">
            <q-dialog class="row" position="right" v-model="card">
              <CompDiolog />
          </q-dialog>
          </q-icon>
          <router-link to="basket">
            <q-icon class="navicon" size="25px" name="shopping_cart" /><strong
            class="mt-3px ml-10px mr-10px text-white text-weight-bold">{{shot}} $</strong>
          </router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-black text-white h-600px  mt-500px">
      <div class="w-100pr  h-70pr row justify-center items-center content-center">
        <div class="w-92pr h-60pr row">
          <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">
              OPENING HOURS
            </div>
            <div class="q-mt-lg text-grey text-weight-bold">
              Monday – Friday: 8am – 4pm
            </div>
            <div class="mt-10px text-grey text-weight-bold">
              Saturday: 9am – 5pm
            </div>
            <div class="q-mt-lg">
              <q-icon class="icon" name="fab fa-facebook-f" />
              <q-icon class="icon q-ml-md" name="fab fa-twitter" />
              <q-icon class="icon q-ml-md" name="fab fa-youtube" />
              <q-icon class="icon q-ml-md" name="fab fa-google" />
              <q-icon class="icon q-ml-md" name="fab fa-instagram-square" />
            </div>
          </div>
          <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">INFORMATION</div>
            <div class="a-href column q-mt-lg text-weight-bold">
              <a href="">Dlivery</a>
              <a href="">About Us</a>
              <a href="">Secure Paymett</a>
              <a href="">Contact Us</a>
              <a href="">Sitemap</a>
            </div>
          </div>
          <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">
              CUSTOM LINKS
            </div>
            <div class="a-href column q-mt-lg text-weight-bold">
              <a href="">Legal Notice</a>
              <a href="">Prices Drop</a>
              <a href="">New Product</a>
              <a href="">Best Sales</a>
              <a href="">Login</a>
            </div>
          </div>
          <div class="w-25pr h-100pr">
            <div class="text-h6 text-weight-bolder text-white">NEWSLETTER</div>
            <div class="q-mt-lg text-grey text-weight-bold">
              Be the first to know about our new arrivals and exclusive offers.
            </div>
            <div class="q-mt-md">
              <form>
                <q-input outlined type="email" bg-color="white" v-model="email" :dense="dense" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <q-separator class="w-90pr bg-dark"> </q-separator>
      </div>
      <div class="w-100pr h-29pr column justify-center items-center content-center">
        <div>
          <img src="http://demo.posthemes.com/pos_ecolife_fastfood/img/cms/payment.png" alt="" />
        </div>
        <div class="q-mt-xl">Copyright © Posthemes. All Rights Reserved</div>
      </div>
    </q-footer>
  </q-layout>
</template>


<script>
import { mapState } from 'vuex';
import CompDiolog from "../components/CompDiolog.vue";
export default {
  components:{
  CompDiolog
},
  data() {
    return {
      email:"",
      dense:true,
      card:false
    }
  },
  computed:{
    ...mapState(["shot"])
  },
  methods:{
    visableCard(){
      this.card=true
    }
  }
};
</script>
<style scoped>
.fs-18px{
  text-decoration: none;
  color: white;
}
.fs-18px:hover{
  color:rgb(0, 255, 247);
}
a{
  text-decoration: none;
}
.navbar{
  background: linear-gradient(
    to right,
    rgb(68, 0, 255),
    rgb(200, 0, 255),
    rgb(255, 0, 221),
    rgb(221, 0, 255),
    rgb(255, 0, 149),
    rgb(54, 53, 53)
  ) ;
}
.span {
  cursor: pointer;
  background: transparent;
}

.icon {
  color: grey;
}

.icon:hover {
  color: red;
  cursor: pointer;
}

.a-href a {
  text-decoration: none;
  color: grey;
}

.a-href a:hover {
  color: red;
  margin-left: 5px;
  cursor: pointer;
}

.a-href {
  line-height: 2.5;
  color: grey;
}
.navicon{
color: white;
}

@media screen and (max-width:400px) {
  .w-15pr{
    width: 10%;
  }
}

</style>
