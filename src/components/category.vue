<template>
  <div>
    <div>
      <v-select
        :items="categorys"
        label="category"
        :value="category"
        v-model="category"
        @change="$emit('select', category)"
      >
      </v-select>
      <button @click="openComp = !openComp">Add new category</button>
    </div>
    <add-category
      @close="closeWindow"
      v-if="openComp === true"
    ></add-category>
  </div>
</template>

<script>
import addCategory from "./addCategory.vue";
export default {
  props: ["categoryAdd"],
  components: {
    "add-category": addCategory,
  },
  computed: {
    categorys() {
      return this.$store.getters.getCategory;
    },
  },
  data() {
    return {
      openComp: false,
      category: this.categoryAdd,
    };
  },
  methods: {
    closeWindow(data) {
      this.category = data;
      this.openComp = false;
      if (this.openComp === false) {
        this.$emit("changeCategoty", this.category);
      }
      this.$emit("changeCategotyTest", this.category);
    },
  },
};
</script>

<style scoped>
</style>