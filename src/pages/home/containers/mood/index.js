import React from 'react';
// import './index.scss';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {Button} from 'qnui';
class Mood extends React.Component {
  
	render() {
		return (
			<div>
			<Button>千牛UI的按钮</Button>
            这是心情页
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