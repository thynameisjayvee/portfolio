<template>
    <div :class="black">
        <slot />
    </div>
</template>
<script>
export default {
    name: "Navbar",
}
</script>
<style lang="scss" scoped>
    .black {
        background-color: #000;
        height: 30px;
        width: 100px; 
    }
</style>