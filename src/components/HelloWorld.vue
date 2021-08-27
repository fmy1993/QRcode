<template>
  <div class="hello">
    <div id="main" class="use-flexbox">
      
      <div id="header">
        <img
          src="../assets/image/header.jpg"
          alt=""
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="title" style="background: rgb(87, 200, 0)">
        <span  class="icon"
          ><img
            src="../assets/image/card.png"
        /></span>
        <span  class="titlename">商品信息</span>
        <span  class="up"></span>
      </div>
      <div id="steps">
        <el-steps :spaces="8" direction="vertical" :active="3" align-center>
          <!-- description="这段就没那么长了" -->
          <el-step icon="el-icon-circle-check" title="文字1">
            <!-- title="文字1" -->
            <i class="stepcircle" slot="icon"></i>
            <!-- <span class="comname">商品名称</span>
      <span class="comintro" style="text-align: left;">山西隰县玉露香梨2021</span> -->
            <!-- <template slot="description">
      <p>缴费时间:</p>
      <p>缴费方式：</p>
      <p>缴费金额：</p>
      <p>交易码：</p>
      <p>收款编号：</p>
    </template> -->

            <template slot="title">
              <p>
                <span class="comname">商品名称</span>
                <span class="comintro">山西隰县玉露香梨2021</span>
              </p>
            </template>
            <!-- <p class="elstepstitle" v-slot:title></p> -->
          </el-step>
          <!-- <template >
      <span class="comname">商品名称</span>
      <span class="comintro" style="text-align: left;">山西隰县玉露香梨2021</span>
    </template> -->

          <el-step title="文字2" icon="el-icon-circle-check">
            <i class="stepcircle" slot="icon"></i>
          </el-step>
          <el-step title="文字3" icon="el-icon-circle-check">
            <i class="stepcircle" slot="icon"></i>
          </el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
/* .el-step__line{
  background: transparent;
  border-top: 5px dotted;
} */
/* .el-step__line-inner{
    border-width: 0 !important;
  } */

.stepcircle {
  width: 35px;
  height: 35px;
  background-size: 100% 100%;

  background-image: url("~@/assets/image/circle.png");
}

div#header {
  /* height: 300px; */
  /* width:600px; */
  height: 300px;
  margin: 0%;
}

div#steps {
  /* padding: 1%; */
   width:450px; 
  height: 300px;
}
div#steps span {
  width: 45%;
  display: inline-block;
}
.use-flexbox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  /* width:400px; */
  /* width:400px;
    height:300px; */
  /* border:1px solid #000; */
}
.use-flexbox div {
  width: 500px;
  /* height:300px; */
}
span.comname {
  width: 40%;
}

span.comintro {
  width: 40%;
}
span.titlename{
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  padding: 0px;
}
img{
  vertical-align: middle;
}

p {
  padding: 0px;
  margin: 0px;
}
div.title{
 background-color:rgb(87, 200, 0);
 height: 40px;
 border-radius: 5px;
 line-height: 40px;
 color: #fff;
 width: 30%;
 text-align: left;
 margin: 1%;
 /* padding: 50px; */
}

</style>
