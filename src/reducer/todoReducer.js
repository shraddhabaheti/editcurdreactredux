const initalState = {
    todos: []
}
export const todoReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, text } = action.payload

            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: id,
                        text: text

                    }
                ]
            }
        case "DELETE_TODO":
            const list = state.todos.filter((elem) => elem.id !== action.id)


            return {
                ...state,
                todos: list
            }
        case "EDIT_TODO":

            const editlist = state.todos.map((elem) => {
                if (elem.id === action.id) {
                    return { ...elem, text: action.text }
                }
                return elem
            })
            return {
                ...state,
                todos: editlist
            }


        default:
            return state;
    }
}
export default todoReducer;