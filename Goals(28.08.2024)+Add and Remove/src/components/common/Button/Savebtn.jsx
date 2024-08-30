import React from 'react';
import { Button, notification } from 'antd';

const Savebtn = ({ onClick }) => {
  const handleSaveClick = () => {
    onClick();
    notification.success({
      message: 'Fields Saved',
      description: 'Your changes have been saved successfully.',
    });
  };

  return (
    <Button
      className="h-[30px] w-[87px] border-[#014D4E] text-[#014D4E] border-[1.5px] rounded-[10px] border-solid"
      onClick={handleSaveClick}
    >
      Save
    </Button>
  );
};

export default Savebtn;
