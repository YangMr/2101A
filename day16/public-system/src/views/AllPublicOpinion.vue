<template>
  <a-table :columns="columns" :data-source="data">
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
    <template #myType="{ text }">
      <span v-if="text == 1">正面舆情</span>
      <span v-else>负面舆情</span>
    </template>
     <template #myAddTime="{ text }">
      {{formatTime(text)}}
    </template>
  </a-table>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive } from "vue";
import reportApi from "../api/report";
 let columns = [
      {
        title: "标题",
        dataIndex: "title",
        key: "id"
      },
      {
        title: "舆情类型",
        dataIndex: "type",
        key: "type",
         slots: { customRender: 'myType' },
      },
      {
        title: "舆情关键词",
        dataIndex: "keywords",
        key: "keywords"
      },
      {
        title: "舆情网站",
        dataIndex: "url",
        key: "url"
      },
      {
        title: "发现时间",
        dataIndex: "add_time",
        key: "add_time",
        slots: { customRender: 'myAddTime' },
      },
    ];
 let data = <any>[];
export default defineComponent({
  name: "AllPublicOpinion",
  setup() {
    let reportParams = reactive({
      page: 1,
      pageSize: 5,
      startTime: 0,
      endTime: 0,
    });

    let initReportList = () => {
      reportApi
        .getAllReportList(reportParams)
        .then((response: any) => {
          data = response.data.result;
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    let formatTime = (val:number) => {
      var date = new Date(val); // 初始化日期
      var year = date.getFullYear(); //获取年份
      var month = date.getMonth() + 1; // 获取月份
      var day = date.getDate(); // 获取具体日
      var hour = date.getHours(); // 获取时
      var minutes = date.getMinutes(); // 获取分
      var seconds = date.getSeconds(); // 获取秒
      return year + '年' + month + '月' + day + '日 ' +  hour + '时' + minutes + '分' + seconds + '秒'
    }

    onMounted(()=>{
      initReportList();
    })
    

    return {
      columns,
      data,
      formatTime
    };
  },
});
</script>

<style></style>
