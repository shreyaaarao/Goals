import { Button, Alert } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Addbtn from './Addbtn';
import Deletebtn from './Deletebtn';
import Resetbtn from './Resetbtn';
import Savebtn from './Savebtn';

const Nextval = ({ nextPage }) => {
  const [percentage, setPercentage] = useState('');
  const [year, setYear] = useState('');
  const [supplyChain, setSupplyChain] = useState('');
  const [error, setError] = useState('');
  const [hasClickedNext, setHasClickedNext] = useState(false);

  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleNext = () => {
    if (!percentage || !year || !supplyChain) {
      setError('Please answer all questions before proceeding.');
      setHasClickedNext(true);
      return;
    }

    if (percentage < 0 || percentage > 100) {
      setError('Percentage must be between 0 and 100.');
      setHasClickedNext(true);
      return;
    }

    if (year < currentYear) {
      setError(`The year must be ${currentYear} or later.`);
      setHasClickedNext(true);
      return;
    }

    setError('');
    setHasClickedNext(false);
    navigate(nextPage);
  };

  return (
    <div className="question-form">
      <Content className="ml-[143px] mt-[50px] pt-[17px] bg-white mb-[17px] rounded-b-[20px] w-[1006px] h-[390px] shadow-md">
        {hasClickedNext && error && (
          <Alert
            message={error}
            type="warning"
            showIcon
            closable
            className="mb-4"
            onClose={() => setHasClickedNext(false)}
          />
        )}
        <div className="flex gap-[10px]">
          <div className="h-[57px] w-[903px] pl-[10px] pt-[15px] rounded-[15px] ml-[18px] bg-[#EAF5FF]">
            We will use 
            <input
              className='ml-[5px] mr-[5px] w-[100px]'
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="%"
              min="0"
              max="100"
            />
            renewable energy in our 
            <input
              className='ml-[5px] mr-[5px] w-[100px]'
              type="text"
              value={supplyChain}
              onChange={(e) => setSupplyChain(e.target.value)}
              placeholder="Supply chain"
            />
            by the year
            <input
              className='ml-[5px] mr-[5px] w-[100px]'
              type="number"
              min={currentYear}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
            />
          </div>
          <div className="flex flex-col gap-[5px] text-[15px] font-semibold">
            <div className="flex gap-[2px] items-center">
              <Deletebtn />
            </div>
            <div className="flex gap-[2px] items-center">
              <Addbtn />
            </div>
          </div>
        </div>
      </Content>
      <div className="w-[1000px] flex justify-end gap-2.5 mt-4">
        <Resetbtn />
        <Savebtn />
        <Button
          onClick={handleNext}
          className="h-[30px] w-[87px] border-[#004481] text-[#004481] border-[1.5px] rounded-[10px] border-solid"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Nextval;
