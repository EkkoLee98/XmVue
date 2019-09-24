<template>
    <div id="a">
       <pg1></pg1>
        <h2>{{this.$store.state.count}}</h2>
        <h2>{{this.$store.getters.getStateCount}}</h2>

        <p>count的值{{this.$store.state.count}}</p>
        <el-button type="primary" @click="addFun">+</el-button>
        <el-button type="primary" @click="reductionFun">-</el-button>

    </div>
</template>

<script>
    import Pg1 from '../components/page1'
    export default {
        name: "Page1",
        components:{
            pg1:Pg1,
        },
        methods:{
            addFun(){
                //this.$store.commit("add")
                this.$store.dispatch("addFun")
            },
            reductionFun(){
                const n=2;
                //this.$store.commit("reduction")
                this.$store.dispatch("reductionFun",n)
            }
        },
    }
</script>

<style scoped>
    #a{
        position:absolute;
        left: 0;
        right: 0;
        top :0;
        bottom: 0;
        text-align: center;
    }
</style>
