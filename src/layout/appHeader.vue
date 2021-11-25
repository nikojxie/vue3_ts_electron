<template>
  <header class="app-header">
    <nav class="app-header-container">
      <h1>Niko's Blog</h1>
      <ul>
        <li></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header",
};
</script>

<style lang="less">
.app-header {
  .app-header-container{
    width: 80%;
    min-width: 800px;
    h1 {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
