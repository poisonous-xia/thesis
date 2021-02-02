<template>
  <div class="main">
    <h2>联系人</h2>
    <van-search
      v-model="value"
      shape="round"
      placeholder="搜索联系人"
      @focus="tiaozhuan()"
    />
    <van-cell-group>
      <van-cell
        v-for="item in datalist"
        :key="item.id"
        :value="item.name"
        @click="xiangqing(item.id)"
        is-link
      />
    </van-cell-group>
    <div class="add">
      <van-button round type="primary" icon="plus" to="/add"></van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: null,
      value: "",
    };
  },
  methods: {
    tiaozhuan() {
      this.$router.push("/search");
    },
    xiangqing(id) {
      this.$router.push(`/modify/${id}`);
    },
  },
  mounted() {
    var that = this;
    this.$ajax({
      method: "get",
      url: "http://localhost/mysql/deteil.php",
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
.main {
  padding: 10px;
  h2,
  .contact {
    margin-left: 15px;
  }
  .add {
    position: fixed;
    bottom: 40px;
    right: 30px;
  }
}
</style>