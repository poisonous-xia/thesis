<template>
  <div v-if="datalist">
    <van-cell-group>
      <van-field label="姓名" left-icon="user-o" v-model="datalist[0].name" />
      <van-field
        label="手机号"
        left-icon="phone-o"
        v-model="datalist[0].mobilephone"
      />
      <van-field
        label="电子邮箱"
        left-icon="envelop-o"
        v-model="datalist[0].email"
      />
      <van-field
        label="备注"
        left-icon="coupon-o"
        v-model="datalist[0].remark"
      />
      <van-field
        label="地址"
        left-icon="location-o"
        v-model="datalist[0].address"
      />
      <van-field
        label="公司"
        left-icon="hotel-o"
        v-model="datalist[0].company"
      />
    </van-cell-group>
    <van-button type="primary" round size="large" @click="Modify()"
      >修改</van-button
    >
    <van-button type="danger" round size="large" @click="Delete()"
      >删除</van-button
    >
    <van-button type="warning" round size="large" @click="fanhui()"
      >返回</van-button
    >
  </div>
</template>
<script>
import Vue from "vue";
import { Dialog } from "vant";
export default {
  data() {
    return {
      datalist: null,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    var that = this;
    this.$ajax({
      method: "post",
      url: "http://localhost/mysql/insertModify.php",
      data: {
        id: id,
      },
      success: function (result) {
        that.datalist = JSON.parse(result);
        // console.log(that.datalist[0].address);
      },
      error: function (msg) {
        alert(msg);
      },
    });
  },
  methods: {
    Modify() {
      let id = this.$route.params.id;
      let i = this;
      this.$ajax({
        method: "post",
        url: "http://localhost/mysql/modifyInsert.php",
        data: {
          id: id,
          name: i.datalist[0].name,
          mobilephone: i.datalist[0].mobilephone,
          email: i.datalist[0].email,
          remark: i.datalist[0].remark,
          address: i.datalist[0].address,
          company: i.datalist[0].company,
        },
        success: function (result) {
          // console.log(result);
        },
        error: function (msg) {
          console.log(msg);
        },
      });
      //以上修改数据的具体内容
      this.$toast.success({
        message: "修改成功",
      });
      setTimeout(() => {
        i.$router.push("/contact");
      }, 1000);
    },
    Delete() {
      Dialog.confirm({
        message: "是否删除",
      })
        .then(() => {
          //确认删除
          let id = this.$route.params.id;
          this.$ajax({
            method: "post",
            url: "http://localhost/mysql/modifyDelete.php",
            data: {
              id: id,
            },
            success: function (result) {
              console.log(result);
            },
            error: function (msg) {
              console.log(msg);
            },
          });
          this.$toast.success({
            message: "删除成功",
          });
          let i = this;
          setTimeout(() => {
            i.$router.push("/contact");
          }, 1000);
        })
        .catch(() => {
          // 取消
        });
    },
    fanhui() {
      this.$router.push("/contact");
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  margin-top: 20px;
}
</style>