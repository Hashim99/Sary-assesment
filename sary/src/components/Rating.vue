<template>
  <v-rating
    :empty-icon="$mdiStarOutline"
    :full-icon="$mdiStar"
    :half-icon="$mdiStarHalfFull"
    hover
    :length="5"
    :size="30"
    
     @input="addRating($event, rating.id)"
      :value="rating.id"

:id="rating.id"
  ></v-rating>
</template>

<script>
export default {
  props: ["rating"],
  methods: {
    addRating(value, id) {

      this.$store.commit("rateHero")
    }
  }
};
</script>

<style>

</style>
