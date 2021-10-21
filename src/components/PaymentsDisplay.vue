<template>
  <v-container>
    <v-row
      class="font-weight-bold text-center"
      justify="center"
      align="center"
    >
      <v-col
        :cols="2"
        justify="center"
      >#</v-col>
      <v-col
        :cols="4"
        justify="center"
      >Date</v-col>
      <v-col
        :cols="4"
        justify="center"
      >Category</v-col>
      <v-col
        :cols="2"
        justify="center"
      >Value</v-col>
    </v-row>
    <!-- <div class="payment-header">
      <span class="payment-header-title">#</span>
      <span class="payment-header-title">Date</span>
      <span class="payment-header-title">Category</span>
      <span class="payment-header-title">Value</span>
    </div> -->
    <v-row
      justify="center"
      align="center"
      class="line text-center p-0 my-0"
      v-for="(item, idx) in payment"
      :key="idx"
    >
      <v-col
        class="pb-0"
        :cols="2"
      >{{ item.id }}</v-col>
      <v-col
        class="pb-0"
        :cols="4"
      >{{ item.date }}</v-col>
      <v-col
        class="pb-0"
        :cols="4"
      >{{ item.category }}</v-col>
      <v-col
        class="pb-0"
        :cols="2"
      >{{ item.value }}</v-col>
      <span
        class="lnr lnr-menu context-icon"
        @click="openPopUp(item, idx)"
      ></span>
    </v-row>
    <v-row
      justify="space-between"
      class="text-lg-h6"
    >
      <span>Total:</span>
      <span>{{ getFPV }}</span>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    payment: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      clientX: "",
      clientY: "",
    };
  },
  computed: {
    ...mapGetters({
      paymentsList: "getPaymentList",
      getFPV: "getFullPrise",
    }),
  },
  methods: {
    openPopUp(item, idx) {
      this.clientY = event.clientY;
      this.clientX = event.clientX;
      this.$popUp.showPopUp("ContextMenu", {
        header: "testik",
        id: idx,
        x: this.clientX,
        y: this.clientY,
        item: item,
      });
    },
  },
};
</script>

<style scoped>
.line {
  position: relative;
}
.context-icon {
  position: absolute;
  top: 15px;
  right: 0;
  font-size: 15px;
  cursor: pointer;
}
</style>
