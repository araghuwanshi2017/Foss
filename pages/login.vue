<template>
  <form>
    <br />Roll no:
    <br />
    <input type="text" name="rollno" v-model ="roll_no"/>
    <br />Password:
    <br />
    <input type="password" name="password" v-model="password"/>
    <br />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      roll_no: "B170000CS"
    
    };
  }
};
</script>
