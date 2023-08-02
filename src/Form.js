import { useState } from "react";

function Form(){
    const [input,setInput]=useState({
        name:'',
        firstname:'',
        lastname:'',
        age:'',
        salary:'',

    })
    const [item,setItem]=useState([]);
    const [toggleButton, setToggleButton] = useState(true);
    const[editdata,setEditdata]=useState(null);
    const addItem=()=>{
        if (!toggleButton) {
            let newlist = item.map((elem) => {
              if (elem.id === editdata) {
                elem.name = input
      
              }
              return elem
            })
      
             setItem(newlist)
            //dispatch(addTodo(newlist))
            setToggleButton(true)
            setEditdata(null)
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
        setEditdata(value.id)
    
      }
      const deleteItem = (index) => {
        const updateItem = item.filter((elem) => {
          return index !== elem.id
        })
        setItem(updateItem)
      }
const handleChange=(e)=>{
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })

}

console.log(input)
return(
    <div>
            
            <label>Name</label>
            <input type="text" name="name" value={input?.text} onChange={handleChange}/><br/><br/>
            <label>FirstName</label>
            <input type="text" name="firstname" value={input?.firstname} onChange={handleChange}/><br/><br/>
            <label>lastName</label>
            <input type="text" name="lastname" value={input?.lastname} onChange={handleChange}/><br/><br/>
            <label>age</label>
            <input type="text" name="age" value={input?.age} onChange={handleChange}/><br/><br/>
            <label>salary</label>
            <input type="text" name="salary" value={input?.salary} onChange={handleChange}/><br/><br/>
            <button type="submit" onClick={addItem} >{toggleButton ?"add":"edit"}</button>
           
        <div>
            <table border="1px">
                <tbody>
                <tr >
                    <td>name</td>
                    <td>firstname</td>
                    <td>lastname</td>
                    <td>age</td>
                    <td>salary</td>
                    <button>button</button>
                   </tr>
                </tbody>
            {
                item.map((elem)=>{

                    return(
                      
                        <tr key={elem.id}>
                            <td>{elem.name}</td>
                            <td>{elem.firstname}</td>
                            <td>{elem.lastname}</td>
                            <td>{elem.age}</td>
                            <td>{elem.salary}</td>
                            <button onClick={() => editItem(elem)}>edit</button>
                            <button onClick={() => deleteItem(elem.id)}>delete</button>
                        </tr>
                   

                    )
                })
               
            }
            </table>
            {
                console.log("=======>",item)
            }
        </div>
    </div>
)
}
export default Form;