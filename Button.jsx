const Button = ()=>{
   
   const handleclick = ()=>{
     
       alert('your value is sumbited')
   }
   
    return(
    <button  onClick={handleclick} >Sumbit</button>)
}

export default Button