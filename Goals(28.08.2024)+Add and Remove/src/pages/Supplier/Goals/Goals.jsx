
// import React, { useEffect, useState } from 'react';
// import { Layout, Tabs, Modal, Input, Select, Button, notification } from 'antd';
// import Sidebar from '../../../components/layout/sidebar/Sidebar';
// import Nav from '../../../components/layout/navbar/Nav';
// import Resetbtn from '../../../components/common/Button/Resetbtn';
// import Deletebtn from '../../../components/common/Button/Deletebtn';
// import Addbtn from '../../../components/common/Button/Addbtn';
// import './Goals.css';
// import { fetchData } from '../../../services/apiService';

// const { Content } = Layout;
// const { confirm } = Modal;

// const Goals = () => {
//   const [activeTabKey, setActiveTabKey] = useState(null);
//   const [pillarData, setPillarData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isSaved, setIsSaved] = useState(false);

//   useEffect(() => {
//     const fetchPageData = async () => {
//       try {
//         const result = await fetchData();
//         setPillarData(result);
//         const energyTab = result.find(pillar => pillar.pillarName === 'Energy');
//         setActiveTabKey(energyTab ? energyTab.id : result[0].id);
//       } catch (error) {
//         console.error('Error fetching page content:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPageData();
//   }, []);

//   const handleGoalsSave = () => {
//     setIsSaved(true);
//     console.log('Save success');
//     notification.success({
//       message: 'Fields Saved',
//       description: 'Your changes have been saved successfully.',
//     });
//   };

//   const handleNextClick = () => {
//     if (isSaved) {
//       confirm({
//         title: 'Are you sure you want to move to the next page?',
//         onOk() {
//           const currentIndex = pillarData.findIndex(item => item.pillarName === activeTabKey);
//           const nextIndex = (currentIndex + 1) % pillarData.length;
//           setActiveTabKey(pillarData[nextIndex].pillarName); // Update to pillarName
//           setIsSaved(false);
//         },
//       });
//     } else {
//       Modal.error({
//         title: 'Save Required',
//         content: 'Please save your changes before proceeding.',
//       });
//     }
//   };

//   const parseQuestionText = (text, inputFields, questionId, handleInputChange) => {
//     const textParts = text.split(/(<[^>]+>)/g).map((part, index) => {
//       const matchedField = inputFields.find(field => `<${field.inputId}>` === part);
//       if (matchedField) {
//         const { inputId, inputType, options } = matchedField;
//         if (inputType === 'number') {
//           return (
//             <Input
//               key={`${questionId}-${inputId}-${index}`}
//               className="text-center mx-1 w-[60px] h-[28px]"
//             />
//           );
//         } else if (inputType === 'dropdown') {
//           return (
//             <Select
//               key={`${questionId}-${inputId}-${index}`}
//               className="mx-1 w-[150px] h-[28px]"
//             >
//               {options.map(option => (
//                 <Select.Option key={option} value={option}>
//                   {option}
//                 </Select.Option>
//               ))}
//             </Select>
//           );
//         }
//       } else {
//         return part;
//       }
//     });
//     return <span>{textParts}</span>;
//   };

//   // Function to handle adding a new question line
//   const handleAddQuestion = (pillarId, questionIndex) => {
//     setPillarData(prevPillarData =>
//       prevPillarData.map(pillar => {
//         if (pillar._id === pillarId) {
//           const newQuestions = [...pillar.questions];
//           const newQuestion = { ...newQuestions[questionIndex] }; // Clone the question to add
//           newQuestions.splice(questionIndex + 1, 0, newQuestion); // Add the new question
//           return { ...pillar, questions: newQuestions };
//         }
//         return pillar;
//       })
//     );
//   };

//   // Function to handle deleting a question line
//   const handleDeleteQuestion = (pillarId, questionIndex) => {
//     setPillarData(prevPillarData =>
//       prevPillarData.map(pillar => {
//         if (pillar._id === pillarId) {
//           const newQuestions = [...pillar.questions];
//           newQuestions.splice(questionIndex, 1); // Remove the selected question
//           return { ...pillar, questions: newQuestions };
//         }
//         return pillar;
//       })
//     );
//   };

//   const generateTabContent = (pillar) => {
//     return pillar.questions.map((question, index) => (
//       <div key={index} className="ml-10 mb-3 mt-3 flex">
//         <div className="question-container flex-1 mt-3 mb-3 mr-15">
//           <div className="question-text">
//             {parseQuestionText(question.text, question.inputFields, question.questionId)}
//           </div>
//         </div>
//         <div className="input-container mr-[15px] flex">
//           <Addbtn onClick={() => handleAddQuestion(pillar._id, index)} />
//           {pillar.questions.length > 1 && <Deletebtn onClick={() => handleDeleteQuestion(pillar._id, index)} />}
//         </div>
//       </div>
//     ));
//   };

//   const items = pillarData.map(pillar => ({
//     key: pillar.pillarName,
//     label: pillar.pillarName,
//     children: generateTabContent(pillar),
//   }));

//   return (
//     <Layout>
//       <Nav />
//       <Layout>
//         <Sidebar />
//         <Content style={{ backgroundColor: '#EAF5FF', padding: '24px' }}>
//           <Content className="ml-[43px] bg-white mb-[17px] rounded-b-[20px] w-[975px] h-auto shadow-md">
//             {loading ? (
//               <div>Loading...</div>
//             ) : (
//               <Tabs
//                 activeKey={activeTabKey}
//                 items={items}
//                 onChange={key => setActiveTabKey(key)}
//                 tabBarStyle={{
//                   backgroundColor: '#014D4E',
//                   height: '45px',
//                   marginBottom: 0,
//                 }}
//                 className="custom-tabs"
//                 tabBarGutter={0}
//               />
//             )}
//           </Content>
//           <div className="w-[975px] flex justify-end gap-2.5">
//             <Resetbtn />
//             <Button
//               className="h-[30px] w-[87px] border-[#014D4E] text-[#014D4E] border-[1.5px] rounded-[10px] border-solid"
//               onClick={handleGoalsSave}
//             >
//               Save
//             </Button>
//             <Button
//               className="h-[30px] w-[87px] border-[#014D4E] text-[#014D4E] border-[1.5px] rounded-[10px] border-solid"
//               onClick={handleNextClick}
//             >
//               Next
//             </Button>
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Goals;

import React, { useEffect, useState } from 'react';
import { Layout, Tabs, Modal, Input, Select, Button, notification } from 'antd';
import Sidebar from '../../../components/layout/sidebar/Sidebar';
import Nav from '../../../components/layout/navbar/Nav';
import Resetbtn from '../../../components/common/Button/Resetbtn';
import Deletebtn from '../../../components/common/Button/Deletebtn';
import Addbtn from '../../../components/common/Button/Addbtn';
import './Goals.css';
import { fetchData } from '../../../services/apiService';

const { Content } = Layout;
const { confirm } = Modal;

const Goals = () => {
  const [activeTabKey, setActiveTabKey] = useState(null);
  const [pillarData, setPillarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [errors, setErrors] = useState({}); // Track validation errors

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const result = await fetchData();
        setPillarData(result);
        const energyTab = result.find(pillar => pillar.pillarName === 'Energy');
        setActiveTabKey(energyTab ? energyTab.pillarName : result[0].pillarName);
      } catch (error) {
        console.error('Error fetching page content:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPageData();
  }, []);

  const validateQuestionFields = (questions) => {
    const newErrors = {};
    questions.forEach((question, index) => {
      if (question.inputFields) {
        question.inputFields.forEach((field) => {
          if (field.value === undefined || field.value === '') {
            if (!newErrors[index]) {
              newErrors[index] = {};
            }
            newErrors[index][field.inputId] = 'Required';
          }
        });
      }
    });
    return newErrors;
  };

  const handleGoalsSave = () => {
    setIsSaved(true);
    console.log('Save success');
    notification.success({
      message: 'Fields Saved',
      description: 'Your changes have been saved successfully.',
    });
  };

  const handleNextClick = () => {
    if (isSaved) {
      confirm({
        title: 'Are you sure you want to move to the next page?',
        onOk() {
          const currentIndex = pillarData.findIndex(item => item.pillarName === activeTabKey);
          const nextIndex = (currentIndex + 1) % pillarData.length;
          setActiveTabKey(pillarData[nextIndex].pillarName); // Update to pillarName
          setIsSaved(false);
        },
      });
    } else {
      Modal.error({
        title: 'Save Required',
        content: 'Please save your changes before proceeding.',
      });
    }
  };

  const handleAddQuestion = (pillarId, questionIndex) => {
    const pillar = pillarData.find(pillar => pillar._id === pillarId);
    if (pillar) {
      const newErrors = validateQuestionFields(pillar.questions);
      if (Object.keys(newErrors).length > 0 && newErrors[questionIndex]) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [pillarId]: {
            ...prevErrors[pillarId],
            [questionIndex]: newErrors[questionIndex]
          }
        }));
        return; // Prevent adding if there are validation errors
      }
      setPillarData(prevPillarData =>
        prevPillarData.map(pillar => {
          if (pillar._id === pillarId) {
            const newQuestions = [...pillar.questions];
            const newQuestion = { ...newQuestions[questionIndex] }; // Clone the question to add
            newQuestions.splice(questionIndex + 1, 0, newQuestion); // Add the new question
            return { ...pillar, questions: newQuestions };
          }
          return pillar;
        })
      );
      setErrors(prevErrors => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[pillarId]?.[questionIndex];
        return updatedErrors;
      }); // Clear errors if addition is successful
    }
  };

  const handleDeleteQuestion = (pillarId, questionIndex) => {
    setPillarData(prevPillarData =>
      prevPillarData.map(pillar => {
        if (pillar._id === pillarId) {
          const newQuestions = [...pillar.questions];
          newQuestions.splice(questionIndex, 1); // Remove the selected question
          return { ...pillar, questions: newQuestions };
        }
        return pillar;
      })
    );
  };

  const handleInputChange = (pillarId, questionId, inputId, value) => {
    setPillarData(prevPillarData =>
      prevPillarData.map(pillar => {
        if (pillar._id === pillarId) {
          const newQuestions = pillar.questions.map(question => {
            if (question.questionId === questionId) {
              const newInputFields = question.inputFields.map(field => {
                if (field.inputId === inputId) {
                  return { ...field, value };
                }
                return field;
              });
              return { ...question, inputFields: newInputFields };
            }
            return question;
          });
          return { ...pillar, questions: newQuestions };
        }
        return pillar;
      })
    );
    // Validate fields after input change
    const pillar = pillarData.find(pillar => pillar._id === pillarId);
    if (pillar) {
      const newErrors = validateQuestionFields(pillar.questions);
      setErrors(prevErrors => ({
        ...prevErrors,
        [pillarId]: {
          ...prevErrors[pillarId],
          ...newErrors
        }
      }));
    }
  };

  const parseQuestionText = (text, inputFields, questionId, pillarId) => {
    const textParts = text.split(/(<[^>]+>)/g).map((part, index) => {
      const matchedField = inputFields.find(field => `<${field.inputId}>` === part);
      if (matchedField) {
        const { inputId, inputType, options } = matchedField;
        const errorMessage = errors[pillarId] && errors[pillarId][questionId] && errors[pillarId][questionId][inputId];
        if (inputType === 'number') {
          return (
            <div key={`${questionId}-${inputId}-${index}`}>
              <Input
                className="text-center mx-1 w-[60px] h-[28px]"
                onChange={(e) => handleInputChange(pillarId, questionId, inputId, e.target.value)}
              />
              {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
            </div>
          );
        } else if (inputType === 'dropdown') {
          return (
            <div key={`${questionId}-${inputId}-${index}`}>
              <Select
                className="mx-1 w-[150px] h-[28px]"
                onChange={(value) => handleInputChange(pillarId, questionId, inputId, value)}
              >
                {options.map(option => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
              {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
            </div>
          );
        }
      } else {
        return part;
      }
    });
    return <span>{textParts}</span>;
  };

  const generateTabContent = (pillar) => {
    return pillar.questions.map((question, index) => (
      <div key={index} className="ml-10 mb-3 mt-3 flex">
        <div className="question-container flex-1 mt-3 mb-3 mr-15">
          <div className="question-text">
            {parseQuestionText(question.text, question.inputFields, question.questionId, pillar._id)}
          </div>
        </div>
        <div className="input-container mr-[15px] flex">
          <Addbtn onClick={() => handleAddQuestion(pillar._id, index)} />
          {pillar.questions.length > 1 && <Deletebtn onClick={() => handleDeleteQuestion(pillar._id, index)} />}
        </div>
      </div>
    ));
  };

  const items = pillarData.map(pillar => ({
    key: pillar.pillarName,
    label: pillar.pillarName,
    children: generateTabContent(pillar),
  }));

  return (
    <Layout>
      <Nav />
      <Layout>
        <Sidebar />
        <Content style={{ backgroundColor: '#EAF5FF', padding: '24px' }}>
          <Content className="ml-[43px] bg-white mb-[17px] rounded-b-[20px] w-[975px] h-auto shadow-md">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Tabs
                activeKey={activeTabKey}
                items={items}
                onChange={key => setActiveTabKey(key)}
                tabBarStyle={{
                  backgroundColor: '#014D4E',
                  height: '45px',
                  marginBottom: 0,
                }}
                className="custom-tabs"
                tabBarGutter={0}
              />
            )}
          </Content>
          <div className="w-[975px] flex justify-end gap-2.5">
            <Resetbtn />
            <Button
              className="h-[30px] bg-[#014D4E] text-white"
              onClick={handleNextClick}
            >
              Next
            </Button>
            <Button
              className="h-[30px] bg-[#014D4E] text-white"
              onClick={handleGoalsSave}
            >
              Save
            </Button>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Goals;
