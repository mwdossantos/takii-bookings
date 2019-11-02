<template>
  <form method="post" action="http://localhost:5000/bookings">
    <label for="">Company</label><br>
    <input type="text" name="company"><br>
    <label for="">Name</label><br>
    <input type="text" name="name"><br>
    <label for="">Receipient</label><br>
    <input type="text" name="receipient"><br>
    <label for="">location</label><br>
    <input type="text" name="location"><br>
    <input type="submit">
  </form>
</template>
<script>
export default {
  name: 'BookingsForm',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->