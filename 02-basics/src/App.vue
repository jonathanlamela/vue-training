<script>
export default {
  methods: {
    myButtonClicked(button) {
      alert(`Button clicked: ${button.label}`);
    }
  },
  data() {
    return {
      name: '',
      myList: ['Item 1', 'Item 2', 'Item 3'],
      myImage: {
        src: 'https://vuejs.org/images/logo.png',
        alt: 'Vue.js Logo'
      },
      myObjects: [
        { id: 1, name: 'Object 1' },
        { id: 2, name: 'Object 2' },
        { id: 3, name: 'Object 3' }
      ],
      myButtons: [
        { id: 1, label: 'Button 1' },
        { id: 2, label: 'Button 2' },
        { id: 3, label: 'Button 3' }
      ]
    };
  },
};
</script>

<template>
  <h4>Dynamic binding</h4>
  <input v-model="name" placeholder="Enter your name" />
  <p v-if="name.length > 0">Hello, {{ name }}!</p>

  <h4>My List:</h4>
  <ul>
    <li v-for="item in myList" :key="item">{{ item }}</li>
  </ul>
  <h4>My Image:</h4>
  <img :src="myImage.src" :alt="myImage.alt" width="200" />

  <h4>My Objects:</h4>
  <ul>
    <li v-for="obj in myObjects" :key="obj.id">
      {{ obj.name }} (ID: {{ obj.id }})
    </li>
  </ul>

  <h4>My Buttons:</h4>
  <div v-for="button in myButtons" :key="button.id">
    <button @click="myButtonClicked(button)">{{ button.label }}</button>
  </div>
</template>
