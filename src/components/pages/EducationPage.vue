<template>
    <div class="education-container">
        <ul class="education-list">
            <li class="education-item" v-for="(item, index) in educationList" :key="index">
                <this-education-cell :data="item"> </this-education-cell>

            </li>
        </ul>
    </div>
</template>

<script>
import EducationCell from '../cells/EducationCell.vue';
export default {
    data: function() {
        return {
            educationList: [
                {
                    school: "University of Waterloo",
                    fields: ['Honours Computer Science', 'Honours Statistics'],
                    period: "start: 2016-09, end: 2020-06",
                    score: 82,
                    description: "With Distinction, with all associated rights, privileges and obligations"
                },
                {
                    school: "Seneca College",
                    fields: ["Database Developer Program"],
                    period: "start: 2020-09, end: current",
                    score: "unavailable",
                    description: ""
                }
            ]
        }
    },
    components: {
        thisEducationCell: EducationCell
    }
}
</script>

<style lang="scss" scoped>

.education-container {
    margin: 0;
    padding: 50px 0 0 0;
    .education-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        .education-item {
            margin: 0;
            padding: 0;
        }
        
    }
}
</style>