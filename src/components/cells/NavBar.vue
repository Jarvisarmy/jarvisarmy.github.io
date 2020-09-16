<template>
    <div class="nav-bar">
        <ul class="nav-list">
            <li class="nav-item">
                <router-link to="/"> Home </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/project"> Project </router-link>
            </li>
            <li class="nav-item">
                <router-link to="#"> Work </router-link>
            </li>
            <li class="nav-item">
                <router-link to="#"> Contact </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.nav-bar {
    height: 60px;
    background-color: rgb(115,115,115);
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    .nav-list {
        width: 50%;
        display: flex;
        justify-content: space-between;
        list-style: none;
        .nav-item {
            a {
                border: none;
                outline: none;
                text-decoration: none;
                color: white;
                font-size: 20px;
            }
        }
    }
}
</style>