import React from 'react'

const Button = (props) => {
    function ClickHandler() {
        alert(props.test)
    }
  return (
   <>
   <button style={{backgroundColor: "red"}} onClick={ClickHandler}>{props.test}</button>
   </>
  )
}

export default Button