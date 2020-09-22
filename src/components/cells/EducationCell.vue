<template>
    <div class="education-cell">
        <h2> {{ data.school }} </h2>
        <ul class="education-fields"> 
            <li class="education-field" v-for= "(item,index) in data.fields" :key="index">
                <h3> {{ item }} </h3>
            </li>
        </ul>
        <h4> {{ data.period }} </h4>
        <h4> average score:{{ data.score }} </h4>
        <p> {{ data.description }} </p>

    </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>
.education-cell {
    background-color: rgb(64,252,227);
    margin: 0;
    padding: 0;

}

</style>