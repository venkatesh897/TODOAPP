import React from 'react'
import Button from '../Button/Button'
import styles from './List.module.css'
import InputText from '../InputText/InputText'



function List({items,isCheckHandler,isdeleteHandler,swapHandler,editHandler,cancelHandler,editingHandler,saveHandler,listStyle}) {
    const list = items.map((task,index) => 
                            <div key={index}  >

                            {task.edit&& 
                                (<div className={styles.listContainerStyle} >
                                <InputText  value={task.editingitem} inputhandler = {
                                    (e)=>
                                    {
                                        const item = e.target.value
                                        editingHandler(index,item)
                                    }
                                }/>
                                <Button btnTxt="Save"  buttonHandler={()=>saveHandler(index,task.editingitem)}/>
                                <Button btnTxt="cancel" buttonHandler = {()=>cancelHandler(index)}/>
                                </div>)
                            }

                            {!task.edit &&
                                (<div className={styles.listContainerStyle}>
                                <li className={task.isCheck?styles.checked:styles.notChecked}>{task.item}</li> 
                                {!task.isCheck && <Button  btnTxt="edit" disabled={task.isEdit} buttonHandler = {()=>editHandler(index)} />}
                                {console.log(task.isCheck)}
                                </div>)
                            }


                        
                            
                         
                            

                            <div className={styles.listContainerStyle}>
                            {!task.isCheck && (<input  type = "checkbox" btnTxt="Done" onChange = {()=>isCheckHandler(index)} checked = {task.isCheck} /> )}
                            {task.isCheck && (<Button btnTxt="delete" buttonHandler={()=>{isdeleteHandler(index)}}  />)}
                            </div>                 
                            

                            <div className={styles.listContainerStyle}>
                            {index!==0 && <Button btnTxt="UP" buttonHandler={()=>{swapHandler(index,index-1)}}/>}
                            {index!== items.length -1 && <Button btnTxt="Down" buttonHandler={()=>{swapHandler(index,index+1)}}/>}
                            </div>
                            
                            
                            
                            </div> ) 

    return ( <div className={listStyle}>{list}</div>)

}

export default List
