<template>
  <div>
    <form @submit="formSubmit">
      <h3>Takii Bookings</h3>
      <label for>Company</label>
      <br />
      <input type="text" v-model="company" class="form-control" />
      <br />
      <label for>Name</label>
      <br />
      <input type="text" v-model="name" class="form-control" />
      <br />
      <label for="receipient">receipient</label>
      <br />
      <input type="text" v-model="receipient" class="form-control" />
      <br />
      <label for="location">Location</label>
      <br />
      <input type="text" v-model="location" class="form-control" />
      <br />
      <button>Submit</button>
    </form>
    <article class="appointment-prefix">
      <h4>Company:</h4>
      <p>{{ company }}</p>
      <h4>Name:</h4>
      <p>{{ name }}</p>
      <h4>Recipient:</h4>
      <p>{{ receipient }}</p>
      <h4>Location</h4>
      <p>{{ location }}</p>
    </article>
    <button v-on:click="getShit">oh shit</button>
  </div>
</template>
<script>
const axios = require("axios").default;
export default {
  name: "BookingsForm",
  data() {
    return {
      company: "",
      name: "",
      receipient: "",
      location: ""
    };
  },

  methods: {
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      axios
        .post("http://localhost:5000/bookings", {
          company: this.company,
          name: this.name,
          receipient: this.receipient,
          location: this.location
        })
        .then(function(response) {
          currentObj.output = response.data;
        })
        .catch(function(error) {
          currentObj.output = error;
        });
    },
    getShit(e) {
      e.preventDefault();
      axios
        .get("http://localhost:5000/get")
        .then(response => {
          console.log(response.data);
        })
        .catch(function(error) {
          this.output = error;
        })
        .finally(() => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  display: flex;
  justify-content: center;
}
.appointment-prefix {
  margin-top: 3%;
  width: 20vw;
  border-style: solid;
  border-radius: 4%;
}
</style>