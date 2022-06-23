
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'packer', component: () => import('src/pages/ForPackerPage.vue') },
      { path: 'carrier', component: () => import('src/pages/ForCarrierPage.vue') },
      { path: 'report', component: () => import('src/pages/MonthlyReport.vue') },
      { path: 'personal', component: () => import('src/pages/Personalpage.vue') },
      { path: 'basket', component: () => import('src/pages/BasketPage.vue')},
      { path: 'login', component: () => import('src/pages/LoginPage.vue')},
      { path: 'shop', component: () => import('src/pages/ShopPage.vue')},
      { path: 'alert', component: () => import('src/pages/AlertCard.vue')},

      
      
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
