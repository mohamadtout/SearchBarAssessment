<script setup lang="ts">
defineProps<{
  title: string
  date: string
  postBody: string
  searchedWord: string
}>()
//regEscape here is used to allow searching with punctuations
const regEscape = (v: string): string => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
const highlightSearchedWord = (word: string, searchedWord: string): string => {
  const regex = new RegExp(regEscape(searchedWord), 'ig')
  return word.replace(regex, (match) => `<span class="bg">${match}</span>`)
}
</script>

<template>
  <div class="card">
    <div class="title">
      <h1 v-html="highlightSearchedWord(title, searchedWord)"></h1>
    </div>
    <div class="subtitle">
      {{ date }}
    </div>
    <div class="bodyText">
      <span v-html="highlightSearchedWord(postBody, searchedWord)"></span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  width: 100%;
  padding: 0.5rem;
  padding-bottom: 10;
  border-bottom: 1px solid #d7d7d7;
  transition: 0.3s;
}
.card:hover {

  outline: 1px solid rgb(81, 94, 168);
  border-radius: 5px;
  cursor: pointer;
}
.title {
  font-weight: 700;
  font-size: 1em;
  word-wrap: break-word;
}
:deep(.bg) {
  background-color: rgb(207, 189, 22);
}
/* .title{
        
    } */
</style>
