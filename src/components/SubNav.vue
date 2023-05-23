<template>
    <div class="subnav">
        <el-menu default-active="1">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">导航1</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-document"></i>
                <span slot="title">导航2</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航3</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'SubNav'
}
</script>

<style>
.subnav {
    height: 90vh;
    background-color: #eef1f6
}
</style>