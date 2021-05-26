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
      :items="heroes"
      :search="$store.state.search"
      @click:row="selectHero"
    >
      >

      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>

        <td>{{ props.item.powers }}</td>
      </template>

      <template #item.rate="{item} ">
        <Rating @click.native.stop="rateHero" :rating="item.rate" />
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
  data() {
    return {
      heroes: this.$store.state.heroes,
    };
  },
  methods: {
    selectHero(hero) {
      this.$store.state.selectedHero = {
        name: hero.name,
        powers: hero.powers,
      };
      this.$router.push({ name: "Hero Profile" });
    },
    rateHero(e) {
      var lol = e.path[3].childNodes[0].innerHTML;

      this.$store.state.selectedHero = {
        name: lol,
      };

      this.$store.commit("rateHero", 3);
    },
  },
};
</script>

<style scoped></style>
