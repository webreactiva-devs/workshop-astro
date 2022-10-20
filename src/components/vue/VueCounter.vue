<template>
  <div class="container">
    <div class="numbers">{{ count }}</div>
    <div class="buttons">
      <button @click="increment">⬆️</button>
      <button @click="decrement">⬇️</button>
    </div>
    <div>Vue</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
}
</script>

<style scoped>
.container {
  background-color: blueviolet;
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.numbers {
  font-size: 5rem;
}
button {
  background-color: transparent;
  border: none;
  font-size: 3rem;
}
</style>