<template>
    <div>
        <h2> salom </h2>
        <p> {{id }} </p>
    </div>
</template>
 <script>
 export default {
    data() {
       return{
        id:this.$route.params.id
       } 
    },
 }
 </script>