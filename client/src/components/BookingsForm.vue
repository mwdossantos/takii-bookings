<template>
  <div class="lol">
    <form @submit="formSubmit">
      <h3>Takii Bookings</h3>
      <label for>Company</label>
      <br />
      <br />
      <input type="text" v-model="company" class="form-control" />
      <br />
      <br />
      <label for>Name</label>
      <br />
      <br />
      <input type="text" v-model="name" class="form-control" />
      <br />
      <br />
      <label for="receipient">receipient</label>
      <br />
      <br />
      <input type="text" v-model="receipient" class="form-control" />
      <br />
      <br />
      <label for="location">Location</label>
      <br />
      <br />
      <input type="text" v-model="location" class="form-control" />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
    <br />
    <br />
    <div class="divi"></div>
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
        }, alert(
          `You booked a room! It is reserved for ${this.name} from ${this.company} and ${this.receipient} will take you to the ${this.location} room 👩🏻‍🌾`
        ))
        .catch(function(error) {
          currentObj.output = error;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.appointment-prefix {
  margin-top: 3%;
  width: 20vw;
  border-style: solid;
  border-radius: 4%;
}

input {
  padding: 15px 15px;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.05);
}

button {
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
  transition: all 0.2s ease;
}

button:active {
  border: none;
  background-color: rgba(0, 0, 0, 0.05);
}

.lol {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.divi {
  width: 300px;
}
</style>