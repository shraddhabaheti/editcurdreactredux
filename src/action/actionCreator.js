export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            text: text
        }


    }
}
export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id: id
    }
}
export const editTodo = ({ id, text }) => {

    return {
        type: "EDIT_TODO",
        id: id,
        text: text

    }

}
