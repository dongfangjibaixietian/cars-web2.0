<template>
    <el-input v-model="phoneNumber" :placeholder="placeholder" v-on:input="enterInput" minlength="6" maxlength="11"></el-input>
</template>

<script>
import { valid_phone } from "../../utils/validdata"
export default {
    name: "phoneNumber",
    components: {},
    data() {
        return {
            phoneNumber: ""
        }
    },
    props: {
        placeholder: {
            type: String,
            default: "请输入手机号"
        }
    },
    methods: {
        // 实时监听输入事件的方法
        enterInput() {
            
            const copyValidData = valid_phone(this.phoneNumber);
            let value = copyValidData ? this.phoneNumber : "";
            this.$emit("update:phoneNumber",value)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>