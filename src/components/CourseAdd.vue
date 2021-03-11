<template>
    <div>
        <p>
            <input type="text" :value="val" 
                @change="onChange"
                v-on:keydown.enter="addCourse"
                ref="inp" v-focus>
            <button @click="addCourse">新增</button>
        </p>
    </div>
</template>

<script>
    export default {
      props: ['val'],
      model: {
        prop: 'val',
        event: 'change'
      },
      methods: {
        addCourse() {
          // 派发事件通知父组件新增课程
          this.$emit('add-course')

        },
        onChange(e) {
          this.$emit('change', e.target.value)
        }
      },
      directives: {
          focus: {
             inserted(el, binding) {
                el.focus()
            } 
          }
      }
      // mounted () {
      //   this.$refs.inp.focus();
      // },
    }
</script>

<style lang="scss" scoped>

</style>