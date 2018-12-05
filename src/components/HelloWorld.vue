<template>
  <div class="hello">
   <h3>Önskelista</h3>
     <input type="text" placeholder="Lägg till önskan..." v-model="wish" @keyup.enter="addWish">
     <ul>
       <li v-for="(wishName,key) in wishes" :key="key">
         <h4>{{wishName.name}}</h4>
         <button>Edit</button>
         <button @click="deleteWish(key)">Delete</button>
         <input type="text" placeholder="ändra..." v-model="editWish[key]" @keyup.enter="editWish(key)">
       </li>
     </ul>


  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  data(){
    return{
    wish:null,
    wishes: [],
    editWish: []
  }
},
methods:{
    editWish(key){
    firebase.database().ref('wishes/' + key).set({
      name:this.editWish[key]
    });
  },
  deleteWish(key){
    firebase.database().ref('wishes/' + key).remove();
    
  },
  addWish(){
    firebase.database().ref('wishes').push({name:this.wish})
    wish:null
    .then((data)=> {
      console.log(data)
      })
    .catch((error) =>  {
      console.log(error)
    });
  }
    
} ,
  created(){
    firebase.database().ref('wishes').on('value', (snapshot) =>{
      this.wishes=snapshot.val();
    });
}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  
}
li {

  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
