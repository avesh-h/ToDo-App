import React from 'react'
import CardInput from './CardInput';


function Card(props) {

  const deleteHandler = (TaskNo) =>{
    props.onDelete(TaskNo)
    // console.log(TaskNo)
  }
  const the_card =  props.Task_info.map(val=>{
    return(
        <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <h4>Task: {val.No}</h4>
            <h5 className="card-title">Title: {val.Title}</h5>
            <p className="card-text">Info: {val.Detail}</p>
            <a href="#" className="btn btn-danger" onClick={()=>deleteHandler(val.No)}>Delete</a>
        </div>
    </div>
    )
    })
    const getCardData=(inputCardData)=>{
        // console.log(inputCardData)
        const inputData={
            ...inputCardData
        }
        props.onCardData(inputData)

    }
  return (
    <div>
        <CardInput onSendCardData={getCardData}/>
        {the_card}
    </div>
  )
}

export default Card
