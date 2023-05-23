<template>
    <div class="el-menu-header">
        <el-menu default-active="home" mode="horizontal" active-text-color="#409eff"
         router
        >
            <el-menu-item index="home">列表展示</el-menu-item>
            <el-menu-item index="page1">page1</el-menu-item>
            <el-menu-item index="page2">page2</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'Nav'
}
</script>

<style>
.el-menu-header {
    /* display: flex;
    align-items: center; */
    margin: 0;
    padding: 0 20px;
    height: 10vh;
}
</style>