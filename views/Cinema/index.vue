<template>
    <div id="main">
        <Header title="影院"/>
        <div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>
            <CiList></CiList>
        <TabBar />
    </div>
</template>

<script>
import Header from "../../src/components/Header";
import TabBar from "../../src/components/TabBar";
import CiList from "../../src/components/CiList";
export default {
    name : "Cinema",
    components :{
        Header,
        TabBar,
        CiList
    }
}
</script>

<style scoped>
.cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>