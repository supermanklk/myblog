import React from 'react';
// import './index.scss';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';
// fixed-data-table 的响应式 
import Dimensions from 'react-dimensions';
class Music extends React.Component {
  
	render() {

		const data = [ 
			{a : '让一切随风',b : '钟镇涛', c : '听涛'},
			{a : '一言难尽',b : '张宇', c : '一言难尽'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
		  ];
		return (
			<div>
				  <div>  
					<Table
					rowHeight={50}  //行高
					rowsCount={data.length} //行数
					width={this.props.containerWidth} //table宽度
					height={this.props.containerHeight} //table的高度s
					headerHeight={50} //header的高度 
					>
				<Column 
					header = {<Cell>歌曲</Cell>}
					width = {200}
					cell = {({rowIndex,...props}) => (
					<Cell {...props}>
						{data[rowIndex]['a']}
					</Cell>
					)}
					flexGrow = {1}
				/>
				<Column 
					width = {200}
					header = {<Cell>作者</Cell>}
					cell = {({rowIndex,...props}) => (
					<Cell {...props}>
						{data[rowIndex]['b']}
					</Cell>
					)}
					flexGrow = {1}
				/>
				<Column 
					width = {200}
					header = {<Cell>专辑</Cell>}
					cell = {({rowIndex,...props}) => (
					<Cell {...props}>
						{data[rowIndex]['c']}
					</Cell>
					)}
					flexGrow = {1}
				>
				</Column>
				</Table>
			</div>
            这是音乐页
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

export default (Dimensions({
	getHeight : function (element) {
		return window.innerHeight - 100;
	},
	getWidth : function (element) {
		return window.innerWidth;
	}
})(Music));

