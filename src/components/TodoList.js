import React, { useRef, useState } from "react";
import './TodoList.css'

const TodoList=()=>{
    const refElement=useRef('')
    const[activity,setActivity]=useState("")
    const[listData,setlistData]=useState([])
    
    const addActivity=()=>{
        //setlistData([...listData],activity)
        //console.log(listData)
        setlistData((listData)=>{
            const updatedList=[...listData,activity]
          
            setActivity("")
            refElement.current.focus()
            console.log(updatedList)
            
            return updatedList

        })
        
    }
    const removeActivity=(i)=>{
        const upadtedListData=listData.filter((elem,id)=>{
            if(i===id){
                return false
            }else{
                return true
            }
            

            //return i!=id;
            

        })
        setlistData(upadtedListData)
    

    }

    const removeAll=()=>{
        setlistData([])
    }
    return(
        <>
        <div className="container">
            <div className="header">TODOLIST</div>
            <input ref={refElement}  type={'text'} placeholder={'Add activity'} value={activity} onChange={(e)=>setActivity(e.target.value)}/>
            <button  id='btn1' onClick={addActivity}>Add</button>
            <p className="List-rendering">Here is your List :{')'}</p>
            {listData!=[] && listData.map((data,i)=>{
                return(
                    <>
                    <p className="list-btn" key={i}>
                        <div className="listData">{data}</div>
                        <div className="btn-position"><button id='btn2' onClick={()=>removeActivity(i)}>remove(-)</button></div>
                        
                    </p>
                    </>
                )
                
            }

            )}
            {listData.length>=1 && <button className="btn3" onClick={removeAll}>Remove All</button>}


        </div>


        </>
    )
}

export default TodoList