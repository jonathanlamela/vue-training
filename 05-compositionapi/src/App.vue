<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useFetch } from './composable/useFetch';

const message = ref('Hello, Vue 3 with Composition API!');

type Response = {
  isLoading: boolean;
  data: any;
  error: Error | null;
}

let status = reactive<Response>({
  isLoading: false,
  data: null,
  error: null
});

const callApi = () => {
  const { data, error, loading } = useFetch('https://api.xdevel.com/streamsolution/web/player/songs/new/48?clientId=2873bb874c81be6550372b7fb222304b93a3ff34&key=fbef37c7cb070c7c050c888cce23b04a4bb455ce');

  status.isLoading = loading;
  status.data = data;
  status.error = error;

}




setInterval(() => {
  callApi();
  console.log('API called');
}, 5 * 1000); // Update every 30 seconds

callApi(); // Initial API call
</script>

<template>
  <h1>{{ message }}</h1>
  <label for="message-input">Edit message:</label>
  <input id="message-input" v-model="message" placeholder="Type a new message" />

  <h4>RadioFlash API</h4>
  <div v-if="status.isLoading">Loading...</div>
  <div v-if="status.error">{{ status.error.message }}</div>
  <div v-if="status.data">
    <h5>Response:</h5>
    <pre>{{ JSON.stringify(status.data, null, 2) }}</pre>
  </div>
</template>
