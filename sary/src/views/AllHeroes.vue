<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="$store.state.search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="$store.state.headers"
      :items="$store.state.heroes"
      :search="$store.state.search"
      @click:row="handleClick"
    >
      <template #item.rate="{item}">
        <Rating :rating="item.rate" />
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import Rating from "../components/Rating";
export default {
  components: {
    Rating,
  },
  methods: {
    handleClick() {
      this.$router.push({ path: "HeroProfile" });
    },
  },
};
</script>
