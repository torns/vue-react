<template>
  <el-container style="height: 100%;">
      <el-header class="layoutadmin_header">
        <img src="static/logo.png" alt="logo" style="height: 26px;margin-right: 6px;">
         <small> {{ systemName }}</small>
        <span style="flex: 1;"></span>
            <el-dropdown>
      <span style="display:flex;align-items:center;">
        <img :src="user.avator" alt="avator" style="width: 30px;height: 30px;border-radius: 100%;margin-right: 10px;">
        {{ user.name }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item divided @click.native="logout()">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      </el-header>
    <el-container style="height: 100%;">
      <el-aside style="width: 200px;height: 100%;">
    <el-menu :default-active="currentPath" :router="true" style="height: 100%;overflow-y:auto;overflow-x:hidden;">
      <template v-for="item of menu">
        <el-menu-item v-if="!item.children" :index="item.path"  :key="item.title" :route="{ path: item.path }">
          <i :class="item.icon"></i>
          {{item.title}}
        </el-menu-item>
        <el-submenu v-else :key="item.title" :index="item.path">
        <template slot="title">
          <i :class="item.icon"></i>
          <span v-text="item.title"></span>
        </template>
        <el-menu-item v-for="el of item.children" :index="el.path" :key="el.title" :route="{ path: el.path }" v-text="el.title"></el-menu-item>
      </el-submenu>
      </template>
    </el-menu>
      </el-aside>
            <el-main style="overflow-y:auto;">
              <router-view></router-view>
          <el-footer>
            <p class="layoutadmin_footer_text">©2018 南京知了云</p>
      </el-footer>
      </el-main>
    </el-container>
    </el-container>
</template>

<script>

export default {
  props: {
    systemShort: '',
    systemName: '',
    user: {
      default() {
        return {
          name: '',
          avator: ''
        }
      }
    },
    menu: {
      default: []
    }
  },
  computed: {
    currentPath() {
      return this.$route.path
    }
  },
  methods: {
    logout() {
      window.localStorage.removeItem(this.systemShort)
      window.sessionStorage.removeItem(this.systemShort)
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.layoutadmin_header {
  padding: 0 40px;
    box-shadow: 0 2px 8px #f0f1f2;
    z-index: 1;
    border-bottom: 1px solid #eee;
    background: #fff;
    display: flex;
    align-items: center;
}
.layoutadmin_footer_text {
  color: #999;
  font-size: 12px;
  text-align: center;
  margin-top: 40px;
}
</style>
