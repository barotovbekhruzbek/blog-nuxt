<script setup>
import {reactive} from 'vue'
import supabase from "../supabase.js"
 import store from '../store.js'

const getWordsNumbers = (str) => (str.split('').length)

 const fetchPosts = async () => {
 let { data: posts, error } = await supabase
  .from('posts')
  .select()

  if(error) throw new Error()
  store.posts = posts
 }


  fetchPosts()
</script>
<template>
 <div class="Home">
 <main class="container mx-auto">
   <div v-for="post in store.posts" :key="post.id" class="PostItem border border-slate-700 mb-4 p-4 rounded-lg" @click="$router.push(`/post/${post.id}`)">
    
      <h1 class="text-slate-900 text-3xl font-bold mb-4">{{post.title}}</h1>
    <p class="text-xl text-slate-500">{{ getWordsNumbers(post.description) }} words</p>
   </div>
   </main>
  </div>

</template>