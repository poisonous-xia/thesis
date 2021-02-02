<template>
  <div class="main">
    <div class="title">注册</div>
    <van-form>
      <van-field
        v-model="name"
        name="用户名"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="pwd"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" @click="handleClick()"
          >注册</van-button
        >
      </div>
      <van-row>
        <van-col offset="16" span="6" to="/register">
          <router-link to="/login" activeClass="active" tag="span"
            >返回登录</router-link
          >
        </van-col>
      </van-row>
    </van-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      pwd: "",
    };
  },
  methods: {
    handleClick() {
      if (this.name && this.pwd) {
        this.$ajax({
          method: "post",
          url: "http://localhost/mysql/register.php",
          data: {
            name: this.name,
            pwd: this.pwd,
          },
          success: function (result) {
            console.log(result);
          },
          error: function (msg) {
            console.log(msg);
          },
        });
        this.$toast.success({
          message: "注册成功",
        });
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  background-color: #8ddfd1;
  height: 100%;
  width: 100%;
  position: fixed;
}
.title {
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 30px;
  text-align: center;
}
.van-form .van-cell {
  background-color: #8ddfd1;
  span {
    color: white;
  }
  ::-webkit-input-placeholder {
    color: black;
  }
}
</style>
