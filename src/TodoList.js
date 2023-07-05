import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const TodoList = (data)=>{
return (
  <>
  <DeleteOutlineOutlinedIcon/>
<li>{data.text}</li>)

</>
)
}

export default TodoList;