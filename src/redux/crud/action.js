import * as action from "./action-type"

export const ADD_POST = (data) => {
    return {
        type : action.post_create,
        payload : data
    }
}

export const UPDATE_POST = (data) => {
    return {
        type : action.post_update
    }
}

export const READ_POST = () => {
    return {
        type : action.post_read
    }
}

export const DELETE_POST = () => {
    return {
        type : action.post_delete
    }
}