import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
//import { addTodo } from '../action/actionCreator';

const Todo = () => {
  const [input, setInput] = useState({
    text:'',
    firstname:'',
    lastname:'',
    age:'',
    salary:''
  })
 // const [firstname,setFirstName]=useState('')
  const [item, setItem] = useState([]);
  const [toggleButton, setToggleButton] = useState(true);
  const [editdata, setEditData] = useState(null);
  //const dispatch = useDispatch();
 // console.log(input)
  const addItem = () => {
    if (!toggleButton) {
      let newlist = item.map((elem) => {
        if (elem.id === editdata) {
          elem.name = input 
          //elem.name=firstname
          
        }
        return elem
      })

       setItem(newlist)
      //dispatch(addTodo(newlist))
      setToggleButton(true)
      setEditData(null)
      setInput('')
    }
    else {
      const alldata = { id: new Date().getTime().toString(), name: input }
      setItem([...item, alldata])
      setInput('')

    }

  }
  const editItem = (value) => {
    
    setToggleButton(false)
    setInput(value.name)
    
    setEditData(value.id)

  }

  const deleteItem = (index) => {
    const updateItem = item.filter((elem) => {
      return index !== elem.id
    })
    setItem(updateItem)
  }
  const handleChange=(e)=>{
      setInput({
          [e.target.name]:e.target.value
      })
  }
  console.log(input)
  return (
    <div>
      <h1>Todo app in curd </h1>
      <div>
          <label>name</label>
        <input type="text" name='text' placeholder='name' value={input?.text} onChange={handleChange} /><br/><br/>
        <label>Firstname</label>
        <input type="firstname" name='firstname' placeholder='firstname' value={input?.firstname} onChange={handleChange} /><br/><br/>
        <label>lastname</label>
        <input type="lastname" name='lastname' placeholder='lastname' value={input?.lastname} onChange={handleChange} /><br/><br/>
        <label>age</label>
        <input type="age" name='age' placeholder='age' value={input?.age} onChange={handleChange} /><br/><br/>
        <label>salary</label>
        <input type="salary" name='salary' placeholder='salary' value={input?.salary} onChange={handleChange} /><br/><br/>
        <button onClick={addItem}>{toggleButton ? "Add" : "edit"}</button>
        <div>
            <div>
         <table>
             <tbody></>
             </table>       
          <div/>
          {
            item.map((elem) => {
                {
                    console.log("=======>",item)
                }
              return (
                <div key={elem.id}>
                  <h1>{elem.name}</h1>
                  
                  <button onClick={() => editItem(elem)}>edit</button>
                  <button onClick={() => deleteItem(elem.id)}>delete</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Todo
