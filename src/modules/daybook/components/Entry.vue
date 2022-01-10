<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'entry', params: {id: 1}})">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2022</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis,
      deserunt, maiores cum nesciunt praesentium nisi temporibus omnis,
      doloribus vero adipisci. Ad veniam at beatae placeat aut architecto quae
      animi.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2 all ease-in;
    }

    .entry-container:hover{
        background-color: lighten($color: grey, $amount: 45);
    }

    .entry-description{
        font-size: 12px;
    }
</style>