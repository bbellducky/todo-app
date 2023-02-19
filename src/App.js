import './App.css';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './Components/List';
import Alert from './Components/Alert'
function App() {
  const [todo,setTodo] = useState("")
  const [list,setList] = useState([])
  const [alert,setAlert] = useState({show:false,msg:'',type:''})
  const [checkEditItem,setCheckEditItem] = useState(false)
  const [editId,setEditId] = useState(null)

  const submitTodo = (e) =>{
    e.preventDefault()
    // console.log("Don't forget to",todo)

    if(!todo){
      //show alert
      setAlert({show:true,msg:"error | Please add todo",type:"error"})
    }else if(checkEditItem && todo){
      const result  = list.map((item)=>{
        if(item.id === editId){
          return {...item,title:todo}
        }
        return item
      })
      setList(result)
      setTodo('')
      setCheckEditItem(false)
      setEditId(null)
      setAlert({show:true,msg:"Edited",type:"success"})
    }else{
      const newItem = {
          id: uuidv4(),
          title: todo,
        }
        // console.log(newItem)
        setList([...list,newItem])
        setTodo('')
        setAlert({show:true,msg:"Saved",type:"success"})
    }
  }

  const removeItem =(id) =>{
    const result = list.filter((item)=>item.id !== id)
    setList(result)
    setAlert({show:true,msg: 'Deleted',type:'success  '})
  }

  const editItem =(id) =>{
    console.log("edit",id)
    setCheckEditItem(true)
    setEditId(id)
    const searchItem = list.find((item)=>item.id === id)
    setTodo(searchItem.title)
    console.log(searchItem)
  }
  return (
    <div className="App">
      <section className="container">
        <h3>Todo List</h3>
        {alert.show && <Alert {...alert} setAlert={setAlert} list={list} /> }
        <form className="form-control" onSubmit={submitTodo}>
          <input type="text" className="text-input" 
            onChange={(e)=>setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit" className="submit-btn">
            {checkEditItem ? "Edit" : "Add"}
          </button>
        </form>
        <section className='list-container'>
          {list.map((data,index)=>{
              return <List key={index} {...data} removeItem={removeItem} editItem={editItem} /> 
          })}
        </section>
      </section>
    </div>
  );
}

export default App;
