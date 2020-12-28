<template >
  <a-carousel autoplay :style="{width:'1180px',height:'160px',margin:'0 auto'}">
    <template v-for="(item,index) in imgList">
      <div ><img :src="item.src" :alt="item.name" class="img"></div>
    </template>
  </a-carousel>
</template>
<script>
import banner from '../assets/banner.png'
export default {
  name: "SlideShow",
  data() {
    return {
      imgList: [
        {
          src: banner,
          name: 'img1'
        },
        // {
        //   src: avatar,
        //   name: 'img1'
        // },
        // {
        //   src: avatar,
        //   name: 'img1'
        // },
        // {
        //   src: avatar,
        //   name: 'img1'
        // },
      ]
    }
  }

};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 158px;
  line-height: 160px;
  background: #364d79;
  border-radius: 10px;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>


