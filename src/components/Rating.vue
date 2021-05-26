<template>
  <v-rating
    :empty-icon="$mdiStarOutline"
    :full-icon="$mdiStar"
    :half-icon="$mdiStarHalfFull"
    hover
    :length="5"
    :size="30"
    @input="saveRating($event)"
    :value="rating"
    :id="rating.id"
  ></v-rating>
</template>

<script>
export default {
  props: ["rating"],
  data() {
    return {
      rating: this.$store.state.selectedHero.rating,
    };
  },
  methods: {
    saveRating(rating) {
      this.$store.state.userRating = rating;
    },
  },
};
</script>

<style></style>
