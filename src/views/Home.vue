<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <img alt="Vue logo" :src="`${publicPath}assets/logo.png`">
    <CourseAdd v-model="course" @add-course="addCourse"></CourseAdd>
    <CourseList :courses="courses"></CourseList>
    <!-- 嵌套内容出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseList from '@/components/CourseList.vue'
import CourseAdd from '@/components/CourseAdd.vue'
import { getCourses } from '@/api/course'
export default {
  name: 'Home',
  components: {
    CourseList,
    CourseAdd
  },
  data() {
    return {
      title: '购物车',
      course: '',
      courses: [],
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    addCourse() {
        if (this.course) {
          // 添加course到数组
          this.courses.push({ name: this.course })
          this.course = ''

          // 显示提示信息
          // this.show = true
          this.$refs.msgSuccess.toggle()
        } else {
          // 显示错误信息
          // this.showWarn = true
          this.$refs.msgWarning.toggle()
        }

      },
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
