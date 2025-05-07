<script setup>

</script>

<template>
    <div class="div_1">
        <div class="glass-box">
            <!-- 你的内容 -->
        </div>
    </div>
</template>

<style scoped>
.div_1 {

    /* 方案2：图片背景 */
    background-image: url('../assets/baihe1.jpg');
    background-size: cover;
    background-position: center;
    
    /* 通用设置 */
    min-height: 100vh;
    width: 100%;
    position: relative;
    z-index: -1;
}

.glass-box {
    /* 原有样式保持不变 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35vh;
    height: 50vh;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    z-index: 1;
}
</style>