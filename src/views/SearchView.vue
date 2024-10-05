<script setup lang="ts">
import PostSearchCard from '../components/PostSearchCard.vue'
import TweetCard from '../components/TweetCard.vue'
import posts from '../models/Post'
import { ref, watch } from 'vue'

let input = ref('');
let loading = ref(false);
let timeoutId: number | null = null;
const tweeterName :string = "MT"
const tweet : string = "As this is a Front End task, this page was made with a responsive design and some basic animations. In addition to priority for search on Post Title over Post Description :)"
function filteredList() {
  return posts.filter((post) => {
    const searchTerm = input.value.toLowerCase();
    const titleMatch = post.title.toLowerCase().includes(searchTerm);
    const bodyMatch = post.body.toLowerCase().includes(searchTerm);
    return titleMatch || (bodyMatch && !titleMatch);
  });
}
function clearInput(){
  input.value="";
}
watch(input, () =>{
  if(timeoutId){
    clearTimeout(timeoutId);
  }
  loading.value = true;
  timeoutId = setTimeout(() => {
    loading.value = false;
  }, 300);
});
</script>
<template>
  <div class="page">
    <div class="main">
      <div class="title">Search</div>
      <div class="search">
        <input type="text" v-model="input" placeholder="Search Posts..." />
        <img src="/src/assets/x.svg" @click="clearInput"></img>
      </div>
      <div v-if="loading">
        <p>Loading...</p>
      </div>
      <div v-if="!loading && input && input.length !== 0">
        <div v-if="filteredList().length">
          <p><span style="font-weight: 700;">{{filteredList().length}} {{ filteredList().length === 1 ? 'post' : 'posts' }}</span> {{ filteredList().length === 1 ? 'was' : 'were' }} found.</p>
        </div>
        <div v-for="post in filteredList()" :key="post.id">
          <PostSearchCard
            :title="post.title"
            :date="post.getDateInStr()"
            :postBody="post.body"
            :searchedWord="input"
          />
        </div>
      </div>
      <div class="error" v-if="!loading && input && !filteredList().length">
        <p>No Posts Found!</p>
      </div>
    </div>
    <div class="sidebar">
      <TweetCard
      :text="tweet"
      :tweeterName="tweeterName"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.main {
  width: 70%;
  float: left;
}
.page{
  padding-top: 2rem;
}
.page:after {
  content: '';
  display: table;
  clear: both;
  
}
.sidebar {
  width: 20%;
  float: right
}
.search {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    padding: 0.2em;
    padding-left: 0.4em;
    border: 0.1rem solid rgb(190, 189, 189);
    margin-bottom: 1.5em;
}

.search img {
    cursor: pointer;
    margin-left: 0.5em;
}
p{
  margin-bottom: 10px;
}

.search input {
    width: 95%;
    border: 0;
    outline: none;
}


.title {
  width: 100%;
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 2em;
}
.error {
  color: crimson;
  font-size: 1.5rem;
}
</style>
