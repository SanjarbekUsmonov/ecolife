<template >
    <div  >
       <h1>ivv</h1> 

       <div v-for=" (people , id ) in  peoples" :key="id" > 
            <router-link :to="'/id/'+ people.id">
                <h2>{{people.name}}</h2>
            </router-link>
       </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
    data() {
        return {
            route : useRoute(),
            peoples:[
                {id:0, name:"ali", age:"64",sname:"karim" },
                {id:1,name:"alijon", age:"18",sname:"vali" },
                {id:2,name:"vali", age:"14",sname:"soli" },
                {id:3,name:"soli", age:"85",sname:"salim" },
                {id:4,name:"asror", age:"15",sname:"ggi" },
            ]
        }
    },
}
</script>
<style lang="">
    
</style>