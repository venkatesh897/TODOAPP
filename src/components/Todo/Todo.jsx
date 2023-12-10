import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import InputText from '../InputText/InputText'
import List from '../List/List'
import styles from './Todo.module.css'


function Todo() {

    const [list,setList] = useState([])

    const [input,setInput] = useState('');


    useEffect(()=>
    {
        const todolist = JSON.parse(window.localStorage.getItem('todoList'))||''
        setList(todolist)
    }, []);

    
    useEffect(()=>
    {
        window.localStorage.setItem('todoList',JSON.stringify(list))
    }, [list]);


    const inputhandler = (e)=>
    {
        setInput(e.target.value)
    }

    const buttonHandler = () =>
    {
    const item = input.trim();
    if (item) {
      const items = [...list];
      items.push({
        item,
        isCheck: false,
        isEdit: false,
        editingItem: item,
      });
      setList(items);
      setInput(''); 
    }
  };

    

    const keyUpHandler = (e) =>
    {
        if (e.key === 'Enter')
        {
            buttonHandler();
        }
    }



  
    const checkHandler = (taskIndex)=>
    {
        const items = [...list];
        items[taskIndex].isCheck = !items[taskIndex].isCheck;
        setList(items);
    }

    const deleteHandler = (taskIndex)=>
    {
        const items = [...list];
        items.splice(taskIndex,1)
        setList(items)
    }

    const swapHandler = (initailIndex,finalIndex)=>
    {
        const items = [...list];
        const item = items[initailIndex]
        items[initailIndex] = items[finalIndex]
        items[finalIndex] = item
        setList(items)

    }
    const editHandler = (taskIndex)=>    
    {
        const items = [...list];
        items[taskIndex].edit = true;
        setList(items)
    }

    const cancelHandler = (taskIndex)=>    
    {
        const items = [...list];
        items[taskIndex].edit = false;
        items[taskIndex].editingitem = items[taskIndex].item;
        setList(items)
    }

    const editingHandler = (taskIndex,task)=>    
    {
        const items = [...list];
        items[taskIndex].editingitem = task;
        
        
        setList(items)
    }

    
    const saveHandler = (taskIndex,task)=>    
    {
        const items = [...list];
        items[taskIndex].item = task;
        items[taskIndex].edit = false;
        setList(items)
    }

 



    return (
        <div >   
                <div className={styles.inputContainerStyle}>
                    <InputText   inputStyle={styles.inputStyle} inputhandler = {inputhandler} value={input} keyUpHandler = {keyUpHandler}/>
                </div>
                
                <div className={styles.buttonContainerStyle}>
                    <Button buttonHandler = {buttonHandler} disabled = {false}  btnTxt = "ADD TODO" btnStyle={styles.buttonStyle} />
                </div>

                <div className={styles.listContainerStyle}>

                <List items= {list} listStyle = {styles.listStyle}  isCheckHandler = {checkHandler}  isdeleteHandler = {deleteHandler} swapHandler = {swapHandler} editHandler ={editHandler} cancelHandler = {cancelHandler} editingHandler = {editingHandler} saveHandler={saveHandler}/> 
                
                </div>
                    
        </div>
    )
}

export default Todo
