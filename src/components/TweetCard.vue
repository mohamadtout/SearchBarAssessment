<script setup lang="ts">
defineProps<{
  text: string
  tweeterName: string
}>()
</script>
<template>
  <div class="card">
    <div class="body">
      {{ text }}
    </div>
    <div class="bottom">Follow @{{ tweeterName }}</div>
  </div>
</template>

<style lang="css" scoped>
.card {
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  transition: 0.3s;
  font-size: 14px;
}
.body {
  font-size: 1em;
  word-wrap: break-word;
}
.bottom {
  margin-top: 0.3rem;
  width: fit-content;
  padding: 0.2rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  background-color: #1DA1F2;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  transition: 0.3s;
}
.bottom:hover{
  outline: 1px solid rgb(51, 50, 50);
  border-radius: 8px;

}
:deep(.bg) {
  background-color: rgb(207, 189, 22);
}
</style>
