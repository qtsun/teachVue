<template>
    <div>
        <h2>detial page</h2>
        <p>{{$route.params.name}}</p>
    </div>
</template>

<script>
    export default {
        watch: {
            $route:{
                immediate:true,
                handler(){
                    console.log('详情获取')
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>