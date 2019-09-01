<template>
    <div id="main">
        <Header title="个人中心"/>
        <Login></Login>
        <TabBar />
    </div>
</template>

<script>
import Header from "../../src/components/Header";
import TabBar from "../../src/components/TabBar";
import Login from "../../src/components/Login";
export default {
    name : "Mine",
    components :{
        Header,
        TabBar,
        Login
    }
}
</script>

<style lang="">
    
</style>