<template>
  <v-rating
    :empty-icon="$mdiStarOutline"
    :full-icon="$mdiStar"
    :half-icon="$mdiStarHalfFull"
    readonly
    :length="5"
    :size="30"
    :value="rating"
  ></v-rating>
</template>

<script>
export default {
  props: ["rating"],
};
</script>

<style></style>
