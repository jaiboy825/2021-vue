<template>
    <div>
        <h6>A02 About Component</h6>
        This is About Component
        <br>
        <br>

        Name: {{name}} / Id : {{id}}

    </div>
</template>

<script>
export default {
    name: 'About',
    props : ['name', 'id']
}
</script>

<style>

</style>