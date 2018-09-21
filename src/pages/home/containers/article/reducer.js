// import {GET_JUDGE, SHOW_HIDE, CHANGE} from './action';

const initState = {
    judge: [],             // 评分记录
    nick: '',              // 搜寻的用户昵称
    app: '选择服务',       // 产品
    vipflag: '选择版本',   // 选择版本信息
    score: '选择分数',     // 评分
    sTime: '',            // 开始时间
    eTime: '',            // 结束时间
    record_id: '',        // 当前备注的 id
    record_mark: '',      // 当前备注的内容
    pages: '',            // 总页数
    current: 1,           // 当前页
    visible: false,       // 弹出框的显示与隐藏
}

export default (state = initState, action) => {
    switch (action.type) {
        case '1':
            return Object.assign({}, state, action.judge);
        default:
            return state; 
    }
}
