<template> 
  <div class="w-100pr row justify-center"> 
    <!-- bosh sarlavha --> 
    <div 
      class=" w-75pr_md-100pr_sm-100pr
        justify-center 
        content-center 
        shadow-up 
        q-pb-xl
        login 
      " 
    > 
      <div class="w-100pr h-480px q-ml-md items-center"> 
        <br /> 
        <div class=" text-grey contact text-h5 text-weight-bolder"> 
          1 Personal Information 
        </div> 
        <!-- inputlar boshlanishi --> 
        
        <br /> 
        <form> 
          <div class="q-mt-xl q-ml-md items-start content-start"> 
            <q-input 
              type="text" 
              class="w-90pr mb-40px" 
              v-model="fullname" 
              label="Fullname" 
              :dense="dense" 
            /> 
            <q-input 
              type="number" 
              class="w-90pr mb-40px" 
              v-model="telnumber" 
              label="Number" 
              :dense="dense" 

            /> 
          </div> 
        </form> 
 
        <div class="q-mt-xl q-ml-md"> 
          <form> 
            <q-input 
              class="w-90pr" 
              type="text" 
              v-model="address" 
              label="Address" 
              :dense="dense" 
            /> 
          </form> 
        </div> 
 
        <div class="q-mt-xl w-100pr row justify-center "> 
          <q-btn class="btn">Lakatsiyani jo'natish  <q-icon name="location_on" class="ml-10px" color="yellow" size="20px"></q-icon></q-btn>
        </div> 
        <br /> 
        <div class="row q-mt-md justify-center"> 
          <q-btn color="secondary" @click="setOrder()" label="Send Message" /> 
        </div> 
        <br /><br /> 
        <!-- inputlar tugashi --> 
      </div> 
      <br /> 
    </div> 
    <!-- bosh sarlavha tugashi --> 
  </div> 
</template> 
<script> 
import { mapMutations, mapState } from 'vuex';
export default { 
  data() { 
    return { 
      fullname: "", 
      telnumber: "", 
      address: "",
      location:"",
      dense:true, 
    }; 
  }, 
  computed:{
    ...mapState(["costs"])
  },
  methods:{
    ...mapMutations(["SET_ORDER"]),
    setOrder(){
      const order= {
        fullname:this.fullname,
        address:this.address,
        telnumber:this.telnumber,
        ready:"",
        location:this.location,
        product:this.costs
      }
      this.SET_ORDER(order)

    }
  }
}; 
</script>
<style scoped>
.shadow-up{
  box-shadow: 3px 3px 15px 0px rgb(186, 185, 185);
}
.login{
  border-radius: 20px 0px 20px 0px;
}
.btn{
  background: linear-gradient(
   to left,
    rgba(132, 0, 255, 0.63),
    rgba(174, 0, 255, 0.63),
    rgba(255, 0, 191, 0.61)
  );
   color: beige;
}
.btn:active{
  background: linear-gradient(
   to left,
    rgba(132, 0, 255 ),
    rgba(174, 0, 255),
    rgba(255, 0, 191 )
  );
  color: beige;
}
</style>