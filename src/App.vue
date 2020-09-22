<template>
    <div>
        <app-nav-bar> </app-nav-bar>
        <router-view> </router-view>
    </div>



</template>

<script>
import NavBar from "./components/cells/NavBar.vue";
export default {
    components: {
        appNavBar: NavBar
    }
}
</script>

<style scoped>
a {
    display: block;
    margin: 0;
    padding: 0;
}
</style>
    