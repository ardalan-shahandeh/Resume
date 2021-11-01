<template>
  <div>
    <font-awesome-icon icon="bars" size="2x" class="p-2" v-b-toggle.sidebar-variant/>

    <b-sidebar id="sidebar-variant" bg-variant="secondary" text-variant="light" shadow>
      <div class="d-flex flex-column justify-content-center align-items-center h-100">

        <h1 class="h2 mb-5 font-weight-normal">
          Ardalan Shahandeh
        </h1>

        <router-link to="/" class="mb-3 d-flex align-items-center">
          <font-awesome-icon icon="home" size="2x" class="pr-3"/>
          <span>
            Home
          </span>    
        </router-link>

        <router-link to="/about" class="mb-3 d-flex align-items-center">
          <font-awesome-icon icon="user" size="2x" class="pr-3"/>
          <span>
            About
          </span>
        </router-link>

        <router-link to="/skills" class="mb-3 d-flex align-items-center">
          <font-awesome-icon icon="layer-group" size="2x" class="pr-3"/>
          <span>
            Skills
          </span>
        </router-link>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
  export default {
    name: 'ToggleMenu'
  }
</script>

<style lang="scss" scoped>

</style>