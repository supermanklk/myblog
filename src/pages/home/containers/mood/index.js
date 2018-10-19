import React from 'react';
// import './index.scss';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

// 引入echarts
import echarts from 'echarts/lib/echarts'  

import 'echarts/map/js/china';
//引入地图和柱状图
import 'echarts/lib/chart/map';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


import {Button} from 'qnui';
class Mood extends React.Component {
	renderEcharts () {
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = echarts.init(document.getElementById('mainEcharts'));

		  // 指定图表的配置项和数据
		  var option = {
			  title: {
				  text: '超人在学习eCharts'
			  },
			  tooltip: {},
			  legend: {
				  data:['销量']
			  },
			  xAxis: {
				  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			  },
			  yAxis: {},
			  series: [{
				  name: '销量',
				  type: 'bar',
				  data: [5, 20, 36, 10, 10, 20]
			  }]
		  };
		
		var data2 = {
			"name": "flare",
			"children": [
				{
					"name": "HTML",
					"children": [
							{"name": "学习HTML的基础知识","value": "那个彬"},
							{"name": "HTML语法","value": "那个彬"},
							{"name": "将页面划分为多个部分并正确构建DOM","value": "那个彬"}
					]
				},
				{
					"name": "CSS",
					"children": [
						{"name": "学习CSS基础知识", "value": 2105},
						{"name": "Grid布局和Flex布局", "11": 1316},
						{"name": "媒体查询", "value": 3151},
				   ]
				},
				{
					"name": "JS",
					"children": [ 
						{"name": "语法和基础的操作", "value": 8833},
						{"name": "DOM操作", "value": 8833},
						{"name": "变量提升,事件冒泡,原型", "value": 8833},
						{"name": "AJXA(XHR)", "value": 8833},
						{"name": "ES6+", "value": 8833}, 
						{"name": "Jquery选学", "value": 8833},
				   ]
				},
				{
					"name": "常用开发技能",
					"children": [
						{"name": "GIT,SVN(很少人用了))", "value": 8833},
						{"name": "HTTP/HTTPS", "value": 8833},
						{"name": "学会解决方案", "value": 8833},
						{"name": "数据结构与算法", "value": 8833},
						{"name": "设计模式", "value": 8833},
				   ]
				},
				{
					"name" : "React"
				},
				{
					"name" : "构建工具",
					"children" : [
						{ "name" : "包管理器"},
						{ "name" : "任务运行器"},
					]
				}
			]
		};
		
		myChart.hideLoading();
		
		myChart.setOption(option = {
			tooltip: {
				trigger: 'item',
				triggerOn: 'mousemove'
			},
			legend: {
				top: '10%',
				left: '2%',
				orient: 'vertical',
				data: [ 
				{
					name: 'tree2',
					icon: 'rectangle'
				}],
				borderColor: 'red'
			},
			series:[
				{
					type: 'tree',
					name: 'tree2',
					data: [data2],
		
					top: '20%',
					left: '20%',
					bottom: '22%',
					right: '18%',
		
					symbolSize: 7,
		
					label: {
						normal: {
							position: 'left',
							verticalAlign: 'middle',
							align: 'right'
						}
					},
		
					leaves: {
						label: {
							normal: {
								position: 'right',
								verticalAlign: 'middle',
								align: 'left'
							}
						}
					},
		
					expandAndCollapse: true,
		
					animationDuration: 550,
					animationDurationUpdate: 750
				}
			]
		});
  
		  // 使用刚指定的配置项和数据显示图表。 
		  myChart.setOption(option);
	}  
	componentDidMount () {
		this.renderEcharts();
	}
	render() {
		return (
			<div>
				<Button>千牛UI的按钮</Button>
				这是心情页
				<div style = {{ width : 800, height : 500}} id = "mainEcharts"></div>
				{/* 学习echarts,渲染一个例子 */}
			</div>
		) 
	} 
}




// const mapStateToProps = (state) => ({
// 	state: state.SmallToolsReducer
// })
// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({},dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Learn);

export default Mood;