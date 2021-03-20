<template>
    <div class="card">
        <div class="simple-name">
            <div class="simple-name-c-class">{{simpleName}}</div>
        </div>
        <div class="english-name">{{englishName}}</div>
    </div>
</template>

<script>
    export default {
        name: "TitleDepart",
        props:{
            simpleName:{
                type:String,
                default(){
                    return null
                }
            },
            englishName:{
                type: String,
                default(){
                    return null
                }
            }
        },
        mounted() {
            console.log(this.simpleName);
        }
    }
</script>

<style scoped>
  .simple-name-c-class{
    height: 60px;
    line-height: 60px;
  }
    .card{
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-family: serif;
        color: black;
        font-size: 18px;
    }

    .english-name{
        color: darkgrey;
        font-size: 16px;
    }

    .circle{
        width: 5px;
        height: 5px;
        background-color: black;
        border-radius: 50px;
        display: inline-block;
        vertical-align: middle;
        margin: 5px;
    }
</style>
