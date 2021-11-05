<template>
  <div>1231233</div>
  <el-button type="primary">Primary</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Login",
  setup() {
    console.log("setup");
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
});
</script>

<style scoped></style>
