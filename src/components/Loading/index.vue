<template>
    <div class="loading">
        <span></span>
    </div>
</template>

<script>
export default {
    name:'Loading'
}
</script>

<style scoped>
    .loading{
            width: 150px;
            height: 4px;
            border-radius: 2px;
            margin: 0 auto;
            margin-top:100px;
            position: relative;
            background: #ef4238;
            animation: changeBgColor .5s ease-in infinite alternate;
        }
        .loading span{
            display: inline-block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #ef4238;
            position: absolute;
            margin-top: -7px;
            margin-left:-8px;
            animation: changePosition .5s ease-in infinite alternate;
        }
        @keyframes changeBgColor{
            0%{
                background: #ef4238;
            }
            100%{
                background: lightblue;
            }
        }
        @keyframes changePosition{
            0%{
                background: #ef4238;
            }
            100%{
                margin-left: 142px;
                background: lightblue;
            }
        }
</style>