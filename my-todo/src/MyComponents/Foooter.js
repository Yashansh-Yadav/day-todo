import React from 'react'
export const Foooter = () => {
  let footerStyle = {
    position: "relative",
    top: "16vh",
    width: "100%",
}
return (
<footer className='bg-dark text-light py-2' style={footerStyle}>
    <p className='text-center'>
    copyright &copy; MyTodoList.com
    </p>
</footer>
)
}
