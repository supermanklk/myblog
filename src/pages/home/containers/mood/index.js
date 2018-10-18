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
						{"name": "FlareVis", "value": 4116}
					]
				},
				{
					"name": "CSS",
					"children": [
						{"name": "11", "value": 2105},
						{"name": "22", "value": 1316},
						{"name": "33", "value": 3151},
						{"name": "44", "value": 3770},
						{"name": "55", "value": 2435},
						{"name": "66", "value": 4839},
						{"name": "77", "value": 1756},
						{"name": "88", "value": 4268},
						{"name": "99", "value": 1821},
						{"name": "00", "value": 5833}
				   ]
				},
				{
					"name": "JS",
					"children": [
						{"name": "DirtySprite", "value": 8833}
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
				top: '2%',
				left: '3%',
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
					left: '60%',
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
				<div style = {{ width : 500, height : 300}} id = "mainEcharts"></div>
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