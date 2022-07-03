<template>
  <div>
    <q-page>
      <div class="row justify-around">
          <div class="w-40pr_md-40pr_sm-100pr row items-center justify-center">
            <div class="w-70pr_md-70pr_sm10pr">
              <img class="fit" src="http://demo.posthemes.com/pos_ecolife_fastfood/374-large_default/pizza-mushrooms.jpg" />
            </div>
          </div>
        <div class="w-40pr_md-40pr_sm-100pr lh-3 fs-15px mt-80px q-ml-md">
          <span class="text-h5 ">Pizza Mushrooms</span>
          <div class="text-subtitle1 text-bold">Reference: <span class="text-weight-regular">demo_24</span></div>
          <div class="row wrap items-center ml-m3pr fs-50px_md_15px_sm15px w-100pr_md-50pr_sm25pr">
            <div class="Mya">
              <q-icon name="fa-solid fa-comment-dots" class="q-mx-sm"/>
              <span>Read reviews (1)</span>
            </div>
            <div class="Mya ml-10px fs-50px_md_15px_sm15px">
              <q-icon class="q-mx-sm" name="fa-solid fa-clipboard"/>
              <span>Write a review</span>
            </div>
          </div>
          <div class="mt-15px">
            <span class="text-h6 text-strike text-grey">$23.90</span>
            <span class="text-h5 q-mx-md">$23.90</span>
            <q-badge class="bg-red q-py-sm q-px-md" label="Save 10%" />
          </div>
          <div class="column lh-1_5 fs-50px_md_15px_sm15px text-grey-8 mt-20px">
            <span>Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket.</span>
            <span>Part of the Kaval Collection.</span>
            <span>Regular fit is eased, but not sloppy, and perfect for any activity.</span>
            <span>Plain-woven jacket specifically constructed for freedom of movement.</span>
          </div>
          <q-card class="bg-grey h-1px q-my-lg no-shadow"></q-card>
          <div class="row justify-right">
            <div class="row justify-around no-wrap ">
              <div class="text-subtitle column">
                <span class="text-bold">Size</span>
                <select name="" id="" class="h-40px">
                  <option value="" label="kgfew,l"/>
                </select>
              </div>
              <div class="text-subtitle column q-ml-lg ">
                <span class="text-bold">How Mony</span>
                <input type="number" class="w-72px h-40px"/>
              </div>
            </div>
          </div>
          <div class="row justify-center">
            <div class="w-40pr_md-60pr_sm-50pr h-40px mt-35px mb-35px">
              <q-btn class="bg-red text-white fit" icon="add" rounded>Add To Card</q-btn>
            </div>
          </div>

          <div class=" row items-center fs-18px">
            <span class="text-bold">Shere</span>
            <div class="row justify-around w-150px">
              <q-icon class="Mya" name="facebook"></q-icon>
              <q-icon class="Mya" name="fa-brands fa-instagram-square"></q-icon>
              <q-icon class="Mya" name="fa-brands fa-google"></q-icon>
              <q-icon class="Mya" name="fa-brands fa-telegram"></q-icon>
            </div>
          </div>
          <div>
            <q-item v-for="item in 3" :key="item">
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar3.jpg">
                </q-avatar>
              </q-item-section>
              <q-item-section
              class="lh-1_5 text-weight-light text-grey-9">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-item-section>
            </q-item>
          </div>
        </div>
      </div>
      <q-card>
        <q-separator/>
        <q-tabs
          v-model="tab"
          dense
          content-class="bg-grey-2 text-red row wrap justify-center items-center content-start"
        >
        <div class="bg-grey-2 text-red row wrap justify-between items-center content-start">
          <q-tab class="w-10pr_md-100pr_sm-100pr" name="DESCRIPTION" label="DESCRIPTION" />
          <q-tab class="w-10pr_md-100pr_sm-100pr q-mx-md" name="PRODUCT DETAILS" label="PRODUCT DETAILS" />
          <q-tab class="w-10pr_md-100pr_sm-100pr" name="REVIEWS" label="REVIEWS" />
        </div>

        </q-tabs>
      </q-card>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="DESCRIPTION">
          <div class="text-subtitle1">
            Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. <br>
            Part of the Kaval Collection.<br>
            Regular fit is eased, but not sloppy, and perfect for any activity.<br>
            Plain-woven jacket specifically constructed for freedom of movement.<br>
            Soft fleece lining delivers lightweight warmth.<br>
            Attached drawstring hood.<br>
            Full-length zip closure.<br>
            Long sleeves with stretch cuffs.<br>
            Side hand pockets.<br>
            Brand graphics at left chest and back.<br>
            Straight hem.<br>
            Shell: 100% nylon;<br>
            Lining: 100% polyester.<br>
            Machine wash, tumble dry.<br>
            Imported.<br>
            Product measurements were taken using size MD. Please note that measurements may vary by size.<br>
          </div>
        </q-tab-panel>

        <q-tab-panel name="PRODUCT DETAILS">
          <q-card class="w-18pr h-100px q-ml-sm">
            <img class="fit" src="http://demo.posthemes.com/pos_ecolife_fastfood/img/m/1.jpg" alt="">
          </q-card>
          <div class="column q-ml-xs">
            <div class="text-bold text-subtitle1 q-my-sm">Reference<span class="text-weight-regular q-ml-xs">demo_1</span></div>
            <div class="text-bold text-subtitle1 q-mb-md ">In stock<span class="text-weight-regular q-ml-xs">195 Items</span></div>
          </div>

          <div>
            <span class="text-subtitle1 text-bold q-ml-sm">Data Sheet</span>
            <div class="row align-center justify-around w-100pr ">
              <div class="column w-49pr">
                <q-item clickable v-ripple class="bg-grey-2 w-100pr q-my-sm" v-for="badge in badges" :key="badge">
                  <q-item-section>
                    <q-item-label>
                      {{badge.text}}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
              <div class="column w-49pr">
                <q-item clickable v-ripple class="bg-grey-2 w-100pr q-my-sm" v-for="badge in badges" :key="badge">
                  <q-item-section>
                    <q-item-label>
                      {{badge.text}}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </div>
        </q-tab-panel>
        <q-tab-panel name="REVIEWS">
          <div class="column lh-2 text-bold">
            <div>
              <span class="text-grey-9 q-pr-sm">Grade</span>
              <q-icon class="text-yellow text-weight-bolder text-body1 m-1px mt-8px q-mb-sm" name="star" v-for="star in stars" :key="star"></q-icon>
            </div>
            <span>posthemes</span>
            <span class="text-grey-9">02/20/2020</span>
            <span>Demo</span>
            <span class="text-grey-9">Good !</span>
            <div class="w-14pr h-40px bg-dark text-white br-5px q-mt-xs ">
              <q-btn class="fit">Write Your Review!</q-btn>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels><br>
      <div class="text-center fs-25px_md-25px_sm-20px">
        <span class="fs-20px_md-16px_sm-14px text-bold">You Might Also Like</span>
        <div class=" row wrap justify-center items-center q-mt-md">
          <q-card class="w-100px h-1px bg-grey q-mr-md"></q-card>
            <q-icon name="star" class="text-h5 text-red"></q-icon>
          <q-card class="w-100px h-1px bg-grey q-ml-md"></q-card>
        </div>
      </div>
      <div class="text-center">
        <span class="fs-20px_md-16px_sm-14px text-bold">16 Other Products In The Same Category:</span>
        <div class=" row wrap justify-center items-center q-mt-md">
          <q-card class="w-100px h-1px bg-grey q-mr-md"></q-card>
            <q-icon name="star" class="text-h5 text-red"></q-icon>
          <q-card class="w-100px h-1px bg-grey q-ml-md"></q-card>
        </div>
      </div>
      <br><br>
    </q-page>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  data()
  {
    return {
      model: ref(2.3),
      badges:[
        {name:'badge',text:'Compositions'},
        {name:'badge',text:'Compositions'},
        {name:'badge',text:'Compositions'},
        {name:'badge',text:'Compositions'},

      ],
      stars:[
        {name:'star'},
        {name:'star'},
        {name:'star'},
        {name:'star'},
        {name:'star'}
      ],
      tab: ref(true),
      innerTab: ref('innerDescription'),
      splitterModel: ref(20)
    }
  },
}
</script>
<style scoped>
.Mya{
  text-decoration: none;
  color: gray;
}
.Mya:hover{
  color: red;
  justify-content: space-around;
}
.h{ height:500px;} @media screen and (min-height:30px) and (max-height:30px) {.h{ height:30px;} }
</style>
