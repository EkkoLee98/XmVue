<template>
    <div class="a">
        <span v-text="$t('nav.home')"></span>
        <span>{{$t('nav.home')}}</span>
        <p>
            <el-button type="primary" @click="changeType()">切换语言</el-button>
            <button type="primary">aa</button>
        </p>
        <template>
            <el-select v-model="value" placeholder="请选择" @change="selectTrigger(value)">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        >
                </el-option>
            </el-select>
        </template>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                options: [{
                    value: 'zh',
                    label: '中文',
                }, {
                    value: 'en',
                    label: 'English'
                }, {
                    value: 'ty',
                    label: 'หน้าแรก'
                }],
                value: ''
            }
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
            },
            selectTrigger(val){
                this.$i18n.locale=val;
            }
        }
    }
</script>
<style>
    .a{
        text-align: center;
    }
</style>
