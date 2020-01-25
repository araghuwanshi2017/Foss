<template>
  <form>
    First name:
    <br />
    <input type="text" name="firstname" v-model="username" />
    <br />Roll no:
    <br />
    <input type="text" name="rollno" />
    <br />Email Id:
    <br />
    <input type="email" name="emailaddress" />
    <br />Phone no:
    <br />
    <input type="text" name="phone" />
    <br />Hostel Name and Room:
    <br />
    <input type="text" name="address" />
    <br />Password:
    <br />
    <input type="password" name="password" />
    <br />Confirm Password:
    <br />
    <input type="password" name="confirmpassword" />
    <br />
    <input type="submit" value="Submit" />
    {{ username }}
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "raunak"
    };
  }
};
</script>
