<template>
  <table>
      <tbody> 
        <tr>
          <td>
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
          </td>
        </tr>
      </tbody>
  </table>
  
</template>

<script>
export default {
  data() {
    return {
      roll_no:""
    
    };
  }
};
</script>
