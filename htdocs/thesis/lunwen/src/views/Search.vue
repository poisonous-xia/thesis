<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      show-action
      @search="onSearch"
      @cancel="onCancel"
      placeholder="搜索联系人"
    />
    <van-cell-group v-if="searchlist">
      <van-cell
        v-for="item in searchlist"
        :key="item.id"
        :value="item.name"
        @click="xiangqing(item.id)"
        is-link
      />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      datalist: null,
      searchlist: [],
    };
  },
  mounted() {
    var that = this;
    this.$ajax({
      method: "get",
      url: "http://localhost/mysql/deteil.php",
      success: function (result) {
        that.datalist = JSON.parse(result);
        // console.log(that.datalist);
      },
      error: function (msg) {
        console.log(msg);
      },
    });
  },
  methods: {
    onSearch() {
      this.searchlist = [];
      // console.log("搜索");
      for (var i = 0; i < this.datalist.length; i++) {
        if (this.datalist[i].name.indexOf(this.value) != -1) {
          this.searchlist.push(this.datalist[i]);
          // console.log(this.datalist[i]);
        }
        if (this.datalist[i].mobilephone.indexOf(this.value) != -1) {
          this.searchlist.push(this.datalist[i]);
        }
      }
    },
    onCancel() {
      this.$router.push("/contact");
    },
    xiangqing(id) {
      this.$router.push(`/modify/${id}`);
    },
  },
};
</script>