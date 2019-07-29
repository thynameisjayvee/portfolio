<template>
    <div :class="navBrandClass">
        <slot />
    </div>
</template>
<script>
export default {
    name: 'NavBrand',
    props : {
        navBrandClass : {
            type : String,
            default: ''
        },
    }
}
</script>
<style lang="scss" scoped>

</style>