// Action 类型

import * as ActionTypes from './actionTypes'

// 其他一些变量

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// action创建函数

export function addTodo(text) {
    return {type: ActionTypes.ADD_TODO, text}
}

export function toggleTodo(index) {
    return {type: ActionTypes.TOGGLE_TODO, index}
}

export function setVisibilityFilter(filter) {
    return {type: ActionTypes.setVisibilityFilter, filter}
}