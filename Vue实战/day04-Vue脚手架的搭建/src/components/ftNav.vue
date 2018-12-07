<template>
    <div>
        <h2 v-text="tip"></h2>
    </div>
</template>

<script>
    export default {
        props:['tip'] // 父组件取值
    }
</script>

<style>

</style>
