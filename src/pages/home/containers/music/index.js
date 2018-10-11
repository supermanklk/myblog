import React from 'react';
// import './index.scss';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';
class Music extends React.Component {
  
	render() {
		const data = [ 
			{a : '让一切随风',b : '钟镇涛', c : '听涛'},
			{a : '一言难尽',b : '张宇', c : '一言难尽'},
			{a : '小半',b : '陈粒', c : '小梦大半'},
		  ];
		return (
			<div>
				  <div> 
					<Table
					rowHeight={50}  //行高
					rowsCount={data.length} //行数
					width={500} //table宽度
					height={200} //table的高度s
					headerHeight={50} //header的高度
				>
				<Column 
					header = {<Cell>歌曲</Cell>}
					width = {100}
					cell = {({rowIndex,...props}) => (
					<Cell {...props}>
						{data[rowIndex]['a']}
					</Cell>
					)}
				>
				</Column>
				<Column 
					width = {100}
					header = {<Cell>作者</Cell>}
					cell = {({rowIndex,...props}) => (
					<Cell {...props}>
						{data[rowIndex]['b']}
					</Cell>
					)}
				>
				</Column>
				<Column 
					width = {300}
					header = {<Cell>专辑</Cell>}
					cell = {({rowIndex,...props}) => (
					<Cell {...props}>
						{data[rowIndex]['c']}
					</Cell>
					)}
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

export default Music;