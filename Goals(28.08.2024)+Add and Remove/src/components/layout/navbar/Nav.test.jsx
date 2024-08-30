// import React from 'react';
// import { render } from '@testing-library/react';
// import Nav from './Nav'; // Adjust the path as necessary
// import { Button } from 'antd';
// import { UserOutlined } from '@ant-design/icons';

// describe('Nav Component', () => {
//   it('renders the header with correct text', () => {
//     const { getByText } = render(<Nav />);
    
//     // Check if the header text is rendered
//     expect(getByText('SUSTAINABILITY PROGRAM')).toBeInTheDocument();
//   });

//   it('renders the UserOutlined icon button', () => {
//     const { container } = render(<Nav />);
    
//     // Check if the button with the UserOutlined icon is rendered
//     const button = container.querySelector('.ant-btn');
//     expect(button).toBeInTheDocument();
//     expect(button).toHaveClass('h-[48px]', 'w-[48px]', 'rounded-full', 'text-[25px]', 'bg-[white]', 'text-[black]');
    
//     const icon = container.querySelector('.anticon-user');
//     expect(icon).toBeInTheDocument();
//   });
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from './Nav'; // Adjust the path as necessary

test('renders Nav with correct header text', () => {
  render(<Nav />);
  
  // Check if the header text is rendered
  expect(screen.getByText('SUSTAINABILITY PROGRAM')).toBeInTheDocument();
});

test('renders the UserOutlined icon button', () => {
  render(<Nav />);
  
  // Check if the button with the UserOutlined icon is rendered
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('h-[48px]', 'w-[48px]', 'rounded-full', 'text-[25px]', 'bg-[white]', 'text-[black]');
  
  const icon = button.querySelector('.anticon-user');
  expect(icon).toBeInTheDocument();
});


