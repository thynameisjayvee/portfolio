<template>
    <div :class="black">
        <slot />
    </div>
</template>
<script>
export default {
    name: "NavbarItem",
    props: ['class']
}
</script>
<style lang="scss" scoped>
    .red-txt {
        color: red;
    }
</style>