<template>
  <div>
    <div class="w-100pr h-80px bg-white q-mt-lg row content-center">
      <div>
        <div class="text-h5">Popular Categories</div>
        <div class="text-grey">Add Popular Categories to weekly line up</div>
      </div>
    </div>

    <div class="
        w-100pr
        mb-50px
        bg-white
        row
        wrap
        justify-between
        items-start
        content-start
      ">
      <router-link :to="'/shop/'+categoriy.id" v-for="(categoriy , i) in categoriya" :key="i">
        <div class="  q-mt-lg" >
          <q-img :src="categoriyaImg[i].file_field" width="400px" height="160px">
            <div class="w-100pr h-100pr row items-center" style="background: none">
              <div class="text-fresh q-ml-md w-40pr h-70pr" style="background: none">
                <div class="text-h6 text-weight-medium text-black">
                  {{ categoriy.categoriya_nomi }}
                </div>
                <div class="text-grey">
                  {{ categoriyaImg[i].title }}
                </div>
                <div class="a">
                  <a href="">{{ categoriy.a }}</a>
                </div>
              </div>
            </div>
          </q-img>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex';
import { ref , onMounted } from "vue";
import axios from "axios";
export default {
  // props:['categoriya','categoriyaImg'],
  setup(){
    const categoriya=ref([])
    const categoriyaImg=ref([])
         onMounted(()=>{
        
      const getComment = async () => {
        try {
          const Fetch_Categoriya = await axios.get('http://127.0.0.1:8000/categoriya/');
          categoriya.value = Fetch_Categoriya.data;
          console.log('lkjhg');
        } 
        catch (err) {
          console.log(err);
        }

      };
      const getCategoriya_imgs = async () =>{
        try {
          const Fetch_Categoriya_Img = await axios.get('http://127.0.0.1:8000/rasmlar/');
          categoriyaImg.value = Fetch_Categoriya_Img.data;
        } 
        catch (err) {
          console.log(err);
        }
      }
       let timerId = setInterval(() => { getComment(); getCategoriya_imgs()}, 1000);
      setTimeout(() => { clearInterval(timerId) }, 5000);
      
      }
  
    )
  
      return{
        categoriya,
        categoriyaImg
      } 
  },
  data() {
    return {
    
     
    };
  },
  methods:{
    ...mapMutations(["FETCH_CATEGORIYA"]),
    // Fetch_Categoriya(){
    //   fetch('http://127.0.0.1:8000/categoriya/')
    //     .then(response => response.json())
    //     .then(data => this.categoriya = data);
    //     console.log(this.categoriya);
    //   this.FETCH_CATEGORIYA(this.categoriya)
    // },
    // Fetch_Categoriya_imgs(){
    //   fetch('http://127.0.0.1:8000/rasmlar/')
    //   .then(response => response.json())
    //   .then(data => this.categoriyaImg = data);
    //   console.log(this.categoriyaImg);
    // }
  },
  // mounted() {
  //   this.Fetch_Categoriya(),
  //   this.Fetch_Categoriya_imgs()
  // }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: rgb(83, 81, 81);
  font-size: 14px;
}

.text-fresh {
  line-height: 2;
}

.a a:hover {
  margin-left: 10px;
  color: green;
  transition: 1s;
}
</style>
