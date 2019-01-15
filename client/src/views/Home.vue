<template>
  <div class="home">

    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://picsum.photos/1024/480/?image=55" alt="image slot">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>


    <div class="jumbotron">
      <h1 class="display-3">
        Welcome to Community!
      </h1>
      <p class="lead">
        A fully open source forum. Made with by Coding Garden.
      </p>
      <hr class="my-4">
      <p>
        This forum is all about community. Be kind! Be helpful!
      </p>
      <p class="lead">
        <a class="btn btn-primary btn-lg"
           :href="getLoginURL"
           role="button">
          Login with Google
        </a>
      </p>
    </div>


    <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image">
    </b-img>

  </div>



</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
  computed: {
    getLoginURL() {
      if(window.location.hostname === 'localhost') {
        return 'http://localhost:3000/auth/google'
      } else {
        return 'https://community-forum-tugberk-api.now.sh/auth/google'
      }
    }
  },
};

</script>

<style scoped>

  /*#carousel1 {*/
    /*!* any dimensions are fine, it can be responsive with max-width *!*/
    /*width: 1920px;*/
    /*height: 350px;*/
  /*}*/

</style>
