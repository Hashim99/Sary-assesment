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
      class="table"
      :hide-default-footer="true"
      :headers="$store.state.headers"
      :items="$store.state.heroes"
      :search="$store.state.search"
    >
      <template #item.name="{item}">
        <div @click="handleClick">
          {{ item.name }}
        </div>
      </template>

      <template #item.powers="{item}">
        <div @click="handleClick">
          {{ item.powers }}
        </div>
      </template>

      <template #item.rate="{item} ">
        <Rating :rating="item.rate" @click="lol" />
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
    lol() {
      console.log("lol");
    },
  },
};
</script>

<style scoped></style>
