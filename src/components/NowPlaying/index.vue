<template>
    
        <div class="movie_body">
				<ul>
					<li>
						<div class="pic_show"><img src="/images/movie_1.jpg"></div>
						<div class="info_list">
							<h2>无名之辈</h2>
							<p>观众评 <span class="grade">9.2</span></p>
							<p>主演: 陈建斌,任素汐,潘斌龙</p>
							<p>今天55家影院放映607场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_2.jpg"></div>
						<div class="info_list">
							<h2>毒液：致命守护者</h2>
							<p>观众评 <span class="grade">9.3</span></p>
							<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
							<p>今天56家影院放映443场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_1.jpg"></div>
						<div class="info_list">
							<h2>无名之辈</h2>
							<p>观众评 <span class="grade">9.2</span></p>
							<p>主演: 陈建斌,任素汐,潘斌龙</p>
							<p>今天55家影院放映607场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_2.jpg"></div>
						<div class="info_list">
							<h2>毒液：致命守护者</h2>
							<p>观众评 <span class="grade">9.3</span></p>
							<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
							<p>今天56家影院放映443场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_1.jpg"></div>
						<div class="info_list">
							<h2>无名之辈</h2>
							<p>观众评 <span class="grade">9.2</span></p>
							<p>主演: 陈建斌,任素汐,潘斌龙</p>
							<p>今天55家影院放映607场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_2.jpg"></div>
						<div class="info_list">
							<h2>毒液：致命守护者</h2>
							<p>观众评 <span class="grade">9.3</span></p>
							<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
							<p>今天56家影院放映443场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_1.jpg"></div>
						<div class="info_list">
							<h2>无名之辈</h2>
							<p>观众评 <span class="grade">9.2</span></p>
							<p>主演: 陈建斌,任素汐,潘斌龙</p>
							<p>今天55家影院放映607场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
					<li>
						<div class="pic_show"><img src="/images/movie_2.jpg"></div>
						<div class="info_list">
							<h2>毒液：致命守护者</h2>
							<p>观众评 <span class="grade">9.3</span></p>
							<p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
							<p>今天56家影院放映443场</p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
				</ul>
			</div>
    
</template>

<script>
export default {
    name:'NowPlaying'
}
</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>