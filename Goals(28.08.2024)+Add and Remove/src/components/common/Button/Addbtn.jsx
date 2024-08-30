// import { PlusCircleOutlined } from '@ant-design/icons'
// import { Button } from 'antd'
// import React from 'react'

// function Addbtn() {
//   return (
//     <div>
//     <Button type="text" className="h-[27px] text-[#014D4E] bg-[rgba(1,77,78,0.3)] w-[65px] text-[10px] font-bold">
//     <PlusCircleOutlined className='text-[#014D4E] text-[15px]'/>Add</Button>
//     </div>
//   )
// }

// export default Addbtn

import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

function Addbtn({ onClick }) {
  return (
    <Button
      type="text"
      className="h-[27px] text-[#014D4E] bg-[rgba(1,77,78,0.3)] w-[65px] text-[10px] font-bold"
      onClick={onClick}
    >
      <PlusCircleOutlined className='text-[#014D4E] text-[15px]' /> Add
    </Button>
  );
}

export default Addbtn;

