<template>
  <div id="nav" class="bg-gray-50 rounded-md shadow-md h-16 py-3 flex w-full">
    <div class="flex space-x-3 mx-5 items-center">
      <router-link class="text-xl" to="/">Home</router-link>
      <router-link class="text-xl" to="/quiz">Quiz</router-link>
      <router-link class="text-xl" to="/about">About</router-link>
    </div>
    <div class="flex justify-end w-full">
      <div class="w-80 flex items-center space-x-5">
        <button class="text-blue-400 text-xl py-2 hover:underline">Sign In</button>
        <button class="text-white text-xl bg-blue-400 px-3 py-2 rounded-lg hover:bg-blue-300">Sign Up</button>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      --tw-text-opacity: 1;
      color: rgba(96, 165, 250, var(--tw-text-opacity));
    }
  }
}
</style>
