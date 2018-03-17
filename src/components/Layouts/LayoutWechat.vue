<template>
<div>
<van-nav-bar
  v-if="!this.$route.meta.noTitle"
  :title="this.$route.name"
/>
<router-view></router-view>
<van-tabbar>
  <van-tabbar-item icon="pending-evaluate" to="/">资讯</van-tabbar-item>
  <van-tabbar-item icon="like-o" to="/sport">运动</van-tabbar-item>
    <van-tabbar-item icon="contact" to="/me">我</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
}
</script>