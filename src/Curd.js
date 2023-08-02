import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./action/actionCreator";

function Curd() {
    const [input, setInput] = useState({
        text: ''
    })
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoReducer.todos)
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleTodo = (e) => {
        e.preventDefault()

        if (input?.id) {

            dispatch(editTodo(input))
            setInput({ text: "", id: "" })

        } else {
            dispatch(addTodo(input.text))
            setInput({ text: '' })
        }

    }

    const editItem = ({ text, id }) => {
        setInput({ text: text, id: id })

    }

    console.log("=====>", todos)
    console.log(input)

    return (
        <div>
            <h1>React redux curd</h1>
            <form onSubmit={handleTodo}>
                <input type="text" name="text" value={input?.text || ''} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
            <div>
                {
                    todos.map((elem) => {
                        return (
                            <div key={elem.id}>
                                <h3>{elem.text}</h3>
                                <button onClick={() => dispatch(deleteTodo(elem.id))} >Delete</button>
                                <button onClick={() => editItem(elem)}>Edit</button>

                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}
export default Curd;
