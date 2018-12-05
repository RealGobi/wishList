import Vue from 'vue';
import VueFire from 'vuefire'
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import {fb, db} from './firebase-config';

Vue.config.productionTip = false;

window.firebase=firebase;

let app ='';
firebase.auth().onAuthStateChanged(()=>{
  if (!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});

