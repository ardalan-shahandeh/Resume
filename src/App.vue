<template>
  <div id="app" class="vh-100">
    <b-container fluid>
      <b-row class="vh-100">
        <b-col
          order-lg="2"
          class="d-flex align-items-center"
        >
          <router-view/>
        </b-col>

        <b-col
          md="3"
          cols="auto"
          order-lg="1"
        >
          <sidebar class="d-none d-md-block"/>

          <toggle-menu class="d-block d-md-none"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
import ToggleMenu from '@/components/ToggleMenu.vue'

export default {
  name: 'main',
  components: {
    ToggleMenu,
    Sidebar
  }
}
</script>

<style lang="scss" src  >
  @import "assets/scss/style.scss";
</style>
