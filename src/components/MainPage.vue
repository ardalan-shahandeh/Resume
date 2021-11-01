<template>
  <b-row class="justify-content-center align-items-center">
    <b-col md="auto" class="text-center">
      <div class="avatar">
        <div class="image avatar_img mb-3">
          <b-img
            src="@/assets/avatar.jpg"
            fluid-grow
            class="img-fluid"
          />
        </div>
      </div>
    </b-col>

    <b-col md="7">
      <div class="text-content p-lg-5">
        <h1 class="font-weight-bold text-light">
          {{title}}
        </h1>

        <p class="text-muted text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam ab ducimus quod modi sapiente veniam alias error quia? Ad nihil nesciunt autem porro est modi placeat distinctio quos necessitatibus vel?
        </p>

        <social-media/>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import SocialMedia from './SocialMedia.vue'
export default {
  components: {
    SocialMedia 
  },
  name: 'MainPage',
  props: {
    title: String
  }
}
</script>
