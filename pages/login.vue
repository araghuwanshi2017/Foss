<template>
  <section>
     <b-field label="Roll no">
       <b-input v-model="roll_no" maxlength="9" minlength="9" /> </b-input>
      </b-field>

      <b-field label="Password" type="is-warning">
       <b-input v-model="password" type="password"  maxlength="18"/> </b-input>
      </b-field>

      <a href = "/mainpage"><b-button type="is-link" v-on="redirect"> Sign in </b-button> </a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      roll_no: '',
      password: ''
    };
  }
};
</script>
