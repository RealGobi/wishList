<template>
  <div class="sign-up">
    <h3>Let´s create a new account!</h3>
 <input type="text" v-model="email" placeholder="Email"><br>
 <input type="password" v-model="password" placeholder="Password"><br>
 <button @click="signup">Sign Up</button>
 <span>
<router-link to="/login"> <p>Already have an account?</p></router-link>
  </span>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'sign-up',
data(){
  return{
    email:'',
    password:''
  };
},
methods: {
  signup: function (){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then (
       (user) =>{
        this.$router.replace('home')
      },
       (err) => {
        alert('Ooops ' + err.message)
      }
    );
  }
}
}
</script>


<style scoped>
.signup{
  margin-top: 40px;
}
input{
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button{
  margin-top: 20px;
  min-width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
