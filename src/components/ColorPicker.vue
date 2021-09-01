<template>
    <div class="color-picker">
        <input class="input" type="text"/>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            required: true,
            validator() {
                return true;
            }
        }
    }
}
</script>
<style scoped>

</style>