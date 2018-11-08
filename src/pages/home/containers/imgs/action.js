export const HORROR_TO_WESTERN = 'HORROR_TO_WESTERN';
export const CHANGE_KEY = 'CHANGE_KEY';

/**
 * @description 图片集的总状态管理库
 * @author Bin
 * @date 2018-10-28
 * @export
 * @param {*} data
 * @returns
 */ 

 // data 就是要从 惊悚图 跳转到 欧美图的 那个位置.
export function horroToWestern(data) {
    return (dispatch, getState) => { 
        dispatch({
            type : HORROR_TO_WESTERN,
            data : data 
        })
    }
}

export function changeKey(key) { 
    return (dispatch, getState) => {
        dispatch({
            type : CHANGE_KEY,
            key : key
        })
    }
}