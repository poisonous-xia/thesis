<template>
  <div class="main">
    <div class="title">登录</div>
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
        <van-button round block type="info" @click="login()">登录</van-button>
      </div>
    </van-form>
    <van-row>
      <van-col offset="16" span="6" to="/register">
        <router-link to="/register" activeClass="active" tag="span"
          >立即注册</router-link
        >
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      name: "",
      pwd: "",
      datalist: null,
    };
  },
  methods: {
    login() {
      let count = 0;
      let that = this;
      if (this.name == "" && this.pwd == "") {
      } else {
        for (var i = 0; i < this.datalist.length; i++) {
          if (
            this.name === this.datalist[i].name &&
            this.pwd === this.datalist[i].pwd
          ) {
            that.$toast.success({
              message: "登录成功",
            });
            setTimeout(() => {
              that.$router.push("/contact");
            }, 1000);
            // console.log(this.datalist[i].id);
            break;
          }
          count++;
        }
        if (count === this.datalist.length) {
          Toast.fail("用户名或密码错误");
        }
      }
    },
  },
  mounted() {
    var that = this;
    this.$ajax({
      method: "get",
      url: "http://localhost/mysql/login.php",
      success: function (result) {
        that.datalist = JSON.parse(result);
        console.log(that.datalist);
      },
      error: function (msg) {
        alert(msg);
      },
    });
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
van-cell__title van-field__label {
  color: white;
}
.van-form .van-cell {
  background-color: #8ddfd1;
  color: white;
  span {
    color: white;
  }
  ::-webkit-input-placeholder {
    color: black;
  }
}
</style>
