<template>
  <div>
    <nav class="navbar navbar-light bg-light px-5">
      <a class="navbar-brand">CATS</a>
      <button
        class="btn btn-outline-danger my-2 my-sm-0"
        type="button"
        @click.prevent="logout"
      >
        Çıkış Yap
      </button>
    </nav>
    <Cat />
  </div>
</template>

<script>
import Cat from "../components/Cat.vue";

export default {
  name: "IndexPage",
  middleware: ["session-control", "auth"],
  components: {
    Cat,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>
