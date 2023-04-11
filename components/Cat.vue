<template>
  <div>
    <div
      class="w-100 h-100 mt-5 d-flex align-items-center justify-content-center"
      v-if="loading"
    >
      <Loading />
    </div>
    <div
      v-else
      class="container my-5 d-flex flex-column align-items-center justify-content-center"
    >
      <div class="fade-in-image">
        <img :src="cat?.url" width="500" height="500" :alt="cat?.id" />
      </div>
      <button
        class="btn btn-block mt-3 btn-primary"
        @click.prevent="getRandomCat"
      >
        Değiştir
      </button>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
export default {
  name: "Cat",
  components: {
    Loading,
  },
  data() {
    return {
      cat: null,
      loading: false,
    };
  },
  created() {
    this.getRandomCat();
  },
  methods: {
    getRandomCat() {
      this.loading = true;
      this.$store
        .dispatch("getRandomCat")
        .then((response) => {
          this.cat = response[0];
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.fade-in-image {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
