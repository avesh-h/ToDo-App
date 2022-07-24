import React, {useState} from 'react'
import Card from './Card'


const dummy_data=[
    {   
        No: 99,
        Title:'HomeWork',
        Detail : 'School HomeWork'

    },
    {   
        No: 77,
        Title:'Gym',
        Detail : 'WorkOut : Chest day'

    },
    {
        No:88,
        Title:'Sleep',
        Detail : '7 hours of rest'
    }
]
function CardList() {

    const[oldCard,setNewCard]=useState(dummy_data)
    
    const getNewData = (NewCardInput) =>{
        // Now Finally get Data Here
        // console.log(NewCardInput)

        setNewCard((prevCard)=>{
            return [NewCardInput,...prevCard]
        })
    }

//Delete The Task item Function

    const DeleteTask = (getDeleteId) =>{
        // console.log(getDeleteItem)  //Here we get the task No. for delete task
        setNewCard((prevCard)=>{
            const DeleteCard = (prevCard.filter ((delId) => delId.No !== getDeleteId))
            return DeleteCard
        })
    }

    
    return (
    <div>
        <Card Task_info ={oldCard} 
                onCardData ={getNewData}
                onDelete = {DeleteTask}
        />
        {/* <Card Task_info ={dummy_data}/> */}
    </div>
  )
}

export default CardList
