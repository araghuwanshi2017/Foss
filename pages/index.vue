<template>
    <div>
   <section>
     <b-field label="Name">
       <b-input v-model="creds.name"/> </b-input>
      </b-field>

      <b-field label="Roll number" type="is-success">
       <b-input v-model="creds.userid"  maxlength="9" minlength="9"/> </b-input>
      </b-field>

      <b-field label="Email">
       <b-input type="email" v-model="creds.email"/> </b-input>
      </b-field>

      <b-field label="Phone">
       <b-input v-model="creds.phone" maxlength="10" minlength="10" /> </b-input>
      </b-field>

      <b-field label="Address">
       <b-input v-model="creds.address" /> </b-input>
       </b-field>

      <b-field label="Password"
        type="is-warning"
        :message="['Password is too short', 'Password must have at least 8 characters']">
       <b-input v-model ="creds.password" type="password" maxlength="16"/> </b-input>
       </b-field>

      <b-field label="Confirm Password" :type="{'is-danger': !passwordSame}"> </b-input>
       <b-input v-model="repeatpassword" type="password" maxlength="16"/> </b-input>
       </b-field>

     <a href = "/mainpage"><b-button type="is-link" v-on="redirect"> Signup </b-button> </a>
      
   </section>
   </div>
</template>

<script>
export default {
  data() {
    return {
      repeatpassword: '',
      errormssg: '',
      signupFailed: false,

      creds:{
        name: '',
        email: '',
        userid: '',
        password: '',
        phone: '',
        address: ''
      },
    }
  },
  computed:{
    passwordSame(){
      return this.creds.password===this.repeatpassword
    }
  },

  methods: {
    async signup() {
      if(this.creds.name=== ''){
      this.errormssg=="Name can't be empty"
      this.signupFailed=true
      return
    }else if(this.creds.email===''){
      this.errormssg=="Email can't be empty"
      this.signupFailed=true
    }else if(this.creeds.userid=== ''){
      this.errormssg=="userid can't be empty"
      this.signupFailed=true
      return
    }else if(this.creeds.password=== ''){
      this.errormssg=="Password can't be empty"
      this.signupFailed=true
      return
    }else if(!this.passwordSame){
      this.errormssg=="Please Reenter the password"
      this.signupFailed=true
      return
    }else {
      this.errormssg==""
      this.signupFailed=true
    }
    
    }
  }
};
</script>
