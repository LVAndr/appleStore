<script setup>

const date = new Date();
const currentYear = date.getFullYear();
</script>

<template>
  <footer>
    <div class="footer-line">
      <hr>
    </div>
    <div class="footer_copyright-terms">
<span>
  Copyright &copy; {{currentYear}} Apple Inc. All rights reserved.
</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer{
  padding: 20px 0;
  margin: 0 15px;
  .footer-line{
    hr{
      margin: 0;
      accent-color: #0066cc;
    }
  }
  .footer_copyright-terms{
    margin-top: 20px;
    font-size: 12px;
  }
}
</style>