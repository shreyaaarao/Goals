import React from 'react'
import { Button, Layout } from 'antd';
import {UserOutlined } from '@ant-design/icons';



const { Header } = Layout;

const Nav = () => {
  return (
    <div>
      <Header className="flex justify-between bg-white text-[#014D4E] h-[70px] pl-[50px] pt-[15px] font-poppins font-bold text-4xl">
        <div className='flex-start'>SUSTAINABILITY PROGRAM</div>
        <Button className="flex-end h-[48px] w-[48px] rounded-full text-[25px] bg-[white] text-[black]">
        <UserOutlined className=' text-black' />
        </Button>  
      </Header>
    </div>
  )
}

export default Nav
