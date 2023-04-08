import * as ACTION_TYPES from "./action-type"

let initState = {
    post : []
}

export const crud_reducer = (state = initState, action) => {
    const { type , payload } = action;

    switch(type){
        case type.post_create : {
            return {
                ...state,
                post : [...payload]
            }
        }
    }
}