<template>
    <div class="list-container">
        <h2 class="list-title"> {{ title }} </h2>
        <ul class="list-column">
            <li class="list-item" v-for="(el,index) in list" :key="index">
                <h4> {{ el.title }} </h4>
                <div class="icon-part">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" :fill="chooseColor(el)" xmlns="http://www.w3.org/2000/svg"
                    @click="el.favourite = !el.favourite">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-music-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" v-show="el.Listened" @click="el.Listened = !el.Listened">
                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.572 2.572 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0 .974-.134 1.338-.377.36-.24.662-.628.662-1.123V8.89l2-.5V6.64z"/>
                </svg>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-music" fill="currentColor" xmlns="http://www.w3.org/2000/svg" v-show="!el.Listened" @click="el.Listened = !el.Listened">
                    <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                    <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"/>
                    <path fill-rule="evenodd" d="M9.757 5.67A1 1 0 0 1 11 6.64v1.75l-2 .5v3.61c0 .495-.301.883-.662 1.123C7.974 13.866 7.499 14 7 14c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 11.134 6.501 11 7 11c.356 0 .7.068 1 .196V6.89a1 1 0 0 1 .757-.97l1-.25z"/>
                </svg>
                </div>
                <p> {{ el.desp }} </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['title','list'],
    methods: {
        chooseColor: function(item) {
            if (item.favourite) {
                return 'red';
            } else {
                return 'currentColor';
            }
        }
        
    }
}
</script>
<style>
.list-container {
    width: 18vw;
    margin: 70px 0 0 0;
    background-color: white;
    border-radius: 5px;
    height:fit-content;
}
.list-title {
    font-size: 2em;
    background-color: rgb(78,9,88);
    padding: 10px;
    margin: 0;
    text-align: center;
    color: white;
}
h4 {
    color: rgb(55,55,55);
    font-size: 18px;
}
p {
    color: rgb(98,98,98);
    font-size: 15px;
}
.list-column {
    padding: 0;
    margin: 0;
    list-style: none;
    background-color: white;

}
.list-item {
    padding: 20px;
    position: relative;
    height: 80px;
}
.list-item:nth-child(even) {
    background-color: rgb(233,233,233);
}
.icon-part {
    position: absolute;
    right: 10px;
    top: 20px;
}
svg {
    margin: 5px;
    width: 20px;
}
</style>