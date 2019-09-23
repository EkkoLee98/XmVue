<template>
    <div id="a">
       <pg1></pg1>
    </div>
</template>

<script>
    import Pg1 from '../components/page1'

    export default {
        name: "Page1",
        components:{
            pg1:Pg1,
        }
    }
</script>

<style scoped>
    #a{
        position:absolute;
        left: 0;
        right: 0;
        top :0;
        bottom: 0;
    }
</style>
