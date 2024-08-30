// import React from 'react'
// import { Button } from 'antd'
// import { CloseCircleOutlined } from '@ant-design/icons'

// export default function Deletebtn() {
//   return (
//     <div>
//       {/* <Button type="text" className="h-[18px] w-[55px] text-[15px] font-medium"> */}
//       <Button type="text" className="h-[27px] text-[#F22F23] bg-[rgba(242,47,35,0.3)] w-[65px] text-[10px] font-bold">
//       <CloseCircleOutlined
//        className="text-[15px] text-[#F22F23]"/>
//       Delete</Button>
//     </div>
//   )
// }

import React from 'react';
import { Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

export default function Deletebtn({ onClick }) {
  return (
    <Button
      type="text"
      className="h-[27px] text-[#F22F23] bg-[rgba(242,47,35,0.3)] w-[65px] text-[10px] font-bold"
      onClick={onClick}
    >
      <CloseCircleOutlined className="text-[15px] text-[#F22F23]" />
      Delete
    </Button>
  );
}

