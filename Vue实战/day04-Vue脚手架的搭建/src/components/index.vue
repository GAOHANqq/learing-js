<template>
    <div class="hello">
        <hd-nav title="头部导航123"></hd-nav>
        <h1>index 页面</h1>
        <ft-nav :tip="text"></ft-nav>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                text:'底部导航123'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
