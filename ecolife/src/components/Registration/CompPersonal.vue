<template> 
  <div class="w-100pr row justify-center"> 
    <!-- bosh sarlavha --> 
    <div 
      class=" w-75pr_md-100pr_sm-100pr
        justify-center 
        content-center 
        shadow-up-14 
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
              v-model="text" 
              label="Name" 
              :dense="dense" 
            /> 
            <q-input 
              type="text" 
              class="w-90pr mb-40px" 
              v-model="text1" 
              label="Surname" 
              :dense="dense" 
            /> 
          </div> 
        </form> 
 
        <div class="q-mt-xl q-ml-md"> 
          <form> 
            <q-input 
              class="w-90pr" 
              type="number" 
              v-model="number" 
              label="Number" 
              :dense="dense" 
            /> 
          </form> 
        </div> 
 
        <div class="q-mt-xl w-100pr row justify-center "> 
          <q-btn class="btn">Lakatsiyani jo'natish  <q-icon name="location_on" class="ml-10px" color="yellow" size="20px"></q-icon></q-btn>
        </div> 
        <br /> 
        <div class="row q-mt-md justify-center"> 
          <q-btn color="secondary" label="Send Message" /> 
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
import { ref } from "vue"; 
export default { 
  setup() { 
    return { 
      text: ref(""), 
      text1: ref(""), 
      number: ref(""), 
      textarea: ref(""), 
      dense: ref(true), 
    }; 
  }, 
}; 
</script>
<style scoped>
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