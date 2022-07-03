<template>
    <div class="body  w-100pr h-100vh">
        <div class="pos pt-50px w-100pr h-100vh">
            <div class="background w-430px h-520px ">
                <div class="shape w-200px h-200px br-50pr"></div>
                <div class="shape w-200px h-200px br-50pr"></div>
            </div>
            <div class="form h-520px w-35pr_md-65pr_sm-90pr br-10px">
                <h3>Tizimga kirish</h3>

                <div class="label">Username</div>
                <input type="text" v-model="email" placeholder="Email or Phone" >

                <div class="label">Password</div>
                <input type="password" v-model="password" placeholder="Password" >

                <q-btn class="btn text-black bg-white  " @click="toAdminPage" :to="to" >Log In</q-btn>
            </div>
        </div>
    </div>
</template>
<script >
export default ({
    data() {
       return{
        email:'',
        password:'',
        to:''
       } 
    },
    methods: {
        toAdminPage(){
            if(this.email=="Packer" && this.password=="1234"){
                this.to="packer"
            }
            else if(this.email=="Carrier" && this.password=="1234"){
                this.to="carrier"
            }
            else{
                alert("Iltimos Ismingizni Yoki Parolingizni Tekshirib Ko'ring")
            }
        }
    },
})
</script>

<style scoped media="screen">
    *,*:before,*:after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .body{
        position: relative;
        top: 0px;
        background-color: #080710;
    }
    .pos{
        position: absolute;
        top:0px;
    }
    .background{
        position: absolute;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 50%;
    }

    @media screen and (max-width:500px) {
        .background{
        top: 55%;
    }
    }
    .background .shape{
        position: absolute;
    }
    .shape:first-child{
        background: linear-gradient(
            #1845ad,
            #23a2f6
        );
        left: -80px;
        top: -80px;
    }
    .shape:last-child{
        background: linear-gradient(
            to right,
            #ff512f,
            #f09819
        );
        right: -30px;
        bottom: -80px;
    }
    .form{
        background-color: rgba(255,255,255,0.13);
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255,255,255,0.1);
        box-shadow: 0 0 40px rgba(8,7,16,0.6);
        padding: 50px 35px;
    }
    .form *{
        font-family: 'Poppins',sans-serif;
        color: #ffffff;
        letter-spacing: 0.5px;
        outline: none;
        border: none;
    }
    .form h3{
        font-size: 32px;
        font-weight: 500;
        line-height: 42px;
        text-align: center;
    }

    .label{
        display: block;
        margin-top: 30px;
        font-size: 16px;
        font-weight: 500;
    }
    input{
        display: block;
        height: 50px;
        width: 100%;
        background-color: rgba(255,255,255,0.07);
        border-radius: 3px;
        padding: 0 10px;
        margin-top: 8px;
        font-size: 14px;
        font-weight: 300;
    }
    ::placeholder{
        color: #e5e5e5;
    }
    .btn{
        margin-top: 50px;
        width: 100%;
        background-color: #ffffff;
        color: #080710;
        padding: 15px 0;
        font-size: 18px;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
    }
    @media screen and ( max-width:500px) {
        .background{
            width: 330px;
        }
    }
    

</style>