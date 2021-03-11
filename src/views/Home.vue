<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CourseList :courses="courses"></CourseList>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseList from '@/components/CourseList.vue'
import { getCourses } from '@/api/course'
export default {
  name: 'Home',
  components: {
    CourseList
  },
  data() {
    return {
      title: '购物车',
      course: '',
      courses: [],
    }
  },
  async created() {
        // 组件实例已创建，由于未挂载，dom不存在
        const courses = await getCourses()
        this.courses = courses

        // // 批量更新商品价格
        // this.batchUpdate()
  },
}
</script>

<style scoped>
.active {
      background-color: #ddd;
}
</style>
