<template>
  <form @submit="formSubmit">
    <label for="">Company</label><br>
    <input type="text" v-model="company" class="form-control"><br>
    <label for="">Name</label><br>
    <input type="text" v-model="name" class="form-control"><br>

    <button>Submit</button>
  </form>
</template>
<script>

const axios = require('axios').default;
  axios.post('/user', {
    company: 'Fred',
    name: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


export default {
  name: 'BookingsForm',
  data(){
    return{
      company: "",
      name: ''
    };
  },

  methods: {
    formSubmit(e){
      e.preventDefault();
      let currentObj = this;
      axios.post('http://localhost:5000/bookings', {
        company: this.company,
        name: this.name
      })
      .then(function (response) {
        currentObj.output = response.data;
      })
      .catch(function (error){
        currentObj.output = error;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->