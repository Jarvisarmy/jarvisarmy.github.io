<template>
    <div id="playlist">
        
        <app-column :list="getFavouriteList()" :title="'Favourite'"> </app-column>
        <app-column :list="getListenedList()" :title="'Listened'"> </app-column>
        <app-column :list="playList" :title="'PlayList'"> </app-column>
    </div>



</template>

<script>
import Column from './../cells/Column.vue';

export default {
    data: function() {
        return {
            playList: [
                {
                    title:'Oasis',
                    desp: 'Half The World Away',
                    favourite: false,
                    Listened: false
                },
                {
                    title: 'Pink Floyd',
                    desp: 'wish Ypu Were Here',
                    favourite: false,
                    Listened: false
                },
                {
                    title: 'Blink-182',
                    desp: 'All the Small Thinks',
                    favourite: false,
                    Listened: false
                },
                {
                    title: 'Third Eye Blind',
                    desp: 'ALL The Small Things',
                    favourite: false,
                    Listened: false
                },
                {
                    title: 'The Chainsmoker',
                    desp: 'Closer',
                    favourite: false,
                    Listened: false
                },
                {
                    title: 'Sia',
                    desp: 'Cheap Thrills',
                    favourite: false,
                    Listened: false
                },
                {
                    title: 'Birdy',
                    desp: 'Wild Horses',
                    favourite: false,
                    Listened: false
                },
                {
                    title: 'Stereophonics',
                    desp: 'Local Boy in the Photograph',
                    favourite: false,
                    Listened: false
                }
            ]
        }
    },
    components: {
        appColumn: Column
    },
    methods: {
        getFavouriteList: function() {
            var list = []
            for (let el of this.playList) {
                if (el.favourite) {
                    list.push(el);
                }
            }
            return list;
        },
        getListenedList: function() {
            var list = []
            for (let el of this.playList) {
                if (el.Listened) {
                    list.push(el);
                }
            }
            return list;
        }
    }
    
}
</script>

<style scoped>
#playlist {
    box-sizing: border-box;
    width: 100vw;
    background-color: rgb(132,10,151);
    display: flex;
    justify-content: space-between;
    padding: 30px 10% 0 10%;
}
</style>
    