import React ,{useState} from 'react'
import './CardInput.css'

function CardInput(props) {

    const [inputNo,setInputNo]=useState('')
    const [inputTitle,setInputTitle]=useState('')
    const [inputDetail,setInputDetail]=useState('')

    const NumberHandler = (e) =>{
        // console.log(e.target.value)
        setInputNo(e.target.value)
    }
    const TitleHandler = (e) =>{
        // console.log(e.target.value)
        setInputTitle(e.target.value)
    }
    const DetailHandler=(e) =>{
        // console.log(e.target.value)
        setInputDetail(e.target.value)
    }
    const SubmitHandler =(e) =>{
        e.preventDefault();

        const CardInput ={
            No : inputNo,
            Title: inputTitle,
            Detail : inputDetail
        }
        // Now this object store the input by user
        // console.log(CardInput)
        setInputNo('')
        setInputTitle('')
        setInputDetail('')

        props.onSendCardData(CardInput)

    }
  return (
    <div>
      <form className='cardInput' onSubmit={SubmitHandler}>
        <label>Task No:</label>
        <input type="number"  value={inputNo} onChange={NumberHandler}/><br/>
        <label>Task Title:</label>
        <input type="Text" value={inputTitle}  onChange={TitleHandler}/><br/>
        <div class="form-floating">
        <textarea  placeholder="Task in Detail" id="floatingTextarea" value={inputDetail}  onChange={DetailHandler}></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>Add note</button>
      </form>
    </div>
  )
}

export default CardInput
