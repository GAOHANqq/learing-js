<template>
    <div class="hello">
        <hd-nav title="头部导航123"></hd-nav>
        <h1>index 页面</h1>
        <button @click="callA">B-->子组件</button>
        <ft-nav :tip="text"></ft-nav>
    </div>
</template>


<script>
    import connector from './call/connector'
    export default {
        name: 'index',
        data() {
            return {
                text:'底部导航123'
            }
        },
        methods:{
            callA(){
                connector.$emit('phone','子组件和父组件通讯')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
