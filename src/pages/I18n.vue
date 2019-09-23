<template>
    <div>
        <span v-text="$t('nav.home')"></span>
        <span>{{$t('nav.home')}}</span>
        <p>
            <button @click="changeType()">切换语言</button>
<!--            <button @click.native="changeType('en')">切换英文</button>-->
        </p>
    </div>
</template>
<script>
    export default {
        date() {
            return {}
        },
        methods:{
            changeType(){
                console.log(this.$i18n.locale);
                console.log("aaa");
                if(this.$i18n.locale==="zh"){
                    this.$i18n.locale="en";
                }else{
                    this.$i18n.locale="zh";
                }
                // 此处做了语言选择记录
                //localStorage.setItem('locale',type);
                // 修改显示语言
                //this.$i18n.locale = type;
            }
        }
    }
</script>
