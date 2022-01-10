<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="d-flex ">
      <button @click="goToDayBook" class="btn btn-primary">Primary</button>
      <button @click="goToDayBook" class="btn btn-secondary">Secundary</button>
      <button @click="goToDayBook" class="btn btn-danger">Success</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    goToDayBook(){
      this.$router.push({ name: 'no-entry'})
    }
  },
};
</script>
