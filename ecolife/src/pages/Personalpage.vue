<template> 
  <div> 
    <br><br> 
    <!--responsive 1 --> 
    <div class=" w-100pr row justify-around"> 
      <div class="w-55pr_md-80pr_sm-90pr row justify-center mb-100px"> 
        <comp-personal /> 
      </div> 
      <div class="w-35pr_md-70pr_sm-100pr  mb-100px"> 
        <comp-totel /> 
      </div> 
    </div> 
    <!--responsive 2 -->
 
  </div> 
</template> 
 
<script> 
import CompPersonal from '../components/CompPersonal.vue'
import CompTotel from '../components/CompTotel.vue'

 
export default {
  components: { CompPersonal, CompTotel }, 
  
 
} 
</script> 
 
<style> 
</style>