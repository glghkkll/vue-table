<template>
    <el-row>
        <el-col :span="3">
            <SubNav />
        </el-col>
        <el-col :span="21">
            <div class="grid-content bg-purple-light"></div>
        </el-col>
    </el-row>
</template>

<script>
import SubNav from '@/components/SubNav.vue';
export default {
    name: 'Home',
    components: {
        SubNav
    }
}
</script>

<style>
.el-row {
    height: 90vh;
}
</style>
