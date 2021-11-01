<template>
  <div>
      <b-link class="sci-telegram">
        <font-awesome-icon :icon="['fab', 'telegram']" size="3x" class="pr-3"/>
      </b-link>

      <b-link class="sci-instagram">
        <font-awesome-icon :icon="['fab', 'instagram']" size="3x" class="pr-3"/>
      </b-link>
      
      <b-link class="sci-twitter">
        <font-awesome-icon :icon="['fab', 'twitter']" size="3x" class="pr-3"/>
      </b-link>
      
      <b-link class="text-muted">
        <font-awesome-icon :icon="['fab', 'github']" size="3x" class="pr-3"/>
      </b-link>
      
      <b-link class="sci-stackoverflow">
        <font-awesome-icon :icon="['fab', 'stack-overflow']" size="3x" class="pr-3"/>
      </b-link>

      <b-link class="sci-linkedin">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" class="pr-3"/>
      </b-link>
  </div>
</template>

<script>
  export default {
    name: 'SocialMedia'
  }
</script>

<style lang="scss" scoped>

</style>