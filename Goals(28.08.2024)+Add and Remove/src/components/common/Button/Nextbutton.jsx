import React from 'react';
import { Button, Modal } from 'antd';

const NextButton = ({ onClick, isSaved }) => {
  const handleNextClick = () => {
    if (isSaved) {
      onClick();
    } else {
      Modal.error({
        title: 'Save Required',
        content: 'Please save your changes before proceeding.',
      });
    }
  };

  return (
    <Button
      className="h-[30px] w-[87px] border-[#014D4E] text-[#014D4E] border-[1.5px] rounded-[10px] border-solid"
      onClick={handleNextClick}
    >
      Next
    </Button>
  );
};

export default NextButton;
