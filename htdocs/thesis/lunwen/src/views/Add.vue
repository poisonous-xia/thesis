<template>
  <div>
    <van-cell-group>
      <van-field
        label="姓名"
        left-icon="user-o"
        placeholder="请输入姓名"
        v-model="name"
      />
      <van-field
        label="手机号"
        left-icon="phone-o"
        placeholder="请输入手机号"
        v-model="el"
      />
      <van-field
        label="电子邮箱"
        left-icon="envelop-o"
        placeholder="请输入电子邮箱"
        v-model="email"
      />
      <van-field
        label="备注"
        left-icon="coupon-o"
        placeholder="请输入备注"
        v-model="beizhu"
      />
      <van-field
        label="地址"
        left-icon="location-o"
        placeholder="请输入地址"
        v-model="address"
      />
      <van-field
        label="公司"
        left-icon="hotel-o"
        placeholder="请输入公司名"
        v-model="company"
      />
    </van-cell-group>
    <van-button type="primary" round size="large" @click="handleClick()"
      >保存</van-button
    >
    <van-button type="danger" round size="large" to="/contact">取消</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      el: "",
      email: "",
      beizhu: "",
      address: "",
      company: "",
    };
  },
  methods: {
    handleClick() {
      this.$ajax({
        method: "post",
        url: "http://localhost/mysql/addInsert.php",
        data: {
          name: this.name,
          mobilephone: this.el,
          email: this.email,
          remark: this.beizhu,
          address: this.address,
          company: this.company,
        },
        success: function (result) {},
        error: function (msg) {
          alert(msg);
        },
      });
      this.$toast.success({
        message: "添加成功",
      });
      var that = this;
      setTimeout(() => {
        that.$router.push("/contact");
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  margin-top: 20px;
}
</style>