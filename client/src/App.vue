<template>
  <div id="app">
    <HelloThanos logo="https://media.giphy.com/media/Mc7glzjN2Ukj4KGvCU/giphy.gif"/>
    <BookingsForm location="Location"/>
  </div>
</template>

<script>

import HelloThanos from './components/HelloThanos.vue';
import BookingsForm from './components/BookingsForm.vue';

// export this template file along with its components
export default {
  name: 'app',
  components: {
    HelloThanos,
    BookingsForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.thanoshead {
  border-radius: 20px;
  box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.4);
}

</style>
