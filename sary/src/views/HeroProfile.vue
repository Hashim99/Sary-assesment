<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-container bg fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-avatar color="sky blue" size="56">
          <img src="../assets/user-alt-512.png" />
        </v-avatar>
        <v-card-title>{{ hero.name }}</v-card-title>

        <v-card-text class="content">
          <h3>Description:</h3>
          <h3 id="bottom-label">
            Powers:
            <p>{{ hero.powers }}</p>
          </h3>
        </v-card-text>
      </v-layout>
    </v-container>
    <v-btn @click="backHome"  class="ma-2" color="orange darken-2" dark>
      <v-icon dark left>
        mdi-arrow-left </v-icon
      >Back
    </v-btn>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      hero: this.$store.state.selectedHero,
    };
  },
  methods:{
    backHome(){
      this.$router.push({name:"All Heroes"})
    }
  }
};
</script>

<style scoped>
.content {
  color: #2b2f32;
}

h3 {
  padding-top: 10px;
}
#bottom-label {
  padding-top: 20%;
}
</style>
