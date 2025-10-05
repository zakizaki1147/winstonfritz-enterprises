import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { ChevronDown } from 'lucide-react'

const questionsAnswers = [
  {id: 1, question: 'What does the Winston-Fritz Enterprises do?', answer: 'The Winston-Fritz Enterprises is a company that focuses on the **technology sector**, especially gadgets, robotics, and softwares. Founded by **Sir Winston** and **King Fritz** in **Year 92**, the Winston-Fritz Enterprises has produced many innovative products, has 1.000+ employees, and over than 20.000 customers across the world!'},
  {id: 2, question: 'Where is the location of the Winston-Fritz Enterprises?', answer: 'The Winston-Fritz Enterprises has several buildings around the world. Our factory is located in **Cindervale**, while our exhibition center is located in **Midgard**. Meanwhile, our production center, the Winston-Fritz Integrated Complex, is located in **Neo-Karta, Nusantara**.'},
  {id: 3, question: 'What is the Winston-Fritz Enterprises known for?', answer: 'The Winston-Fritz Enterprises has a **good image in society**, has many **recognized achievements**, and has **participated** in bringing humanity **to the greater world**. Besides that, the Winston-Fritz Enterprises has the **Winston-Fritz Integrated Complex**, which is one of the largest integrated complex the world.'},
  {id: 4, question: 'How to become part of the Winston-Fritz Enterprises family?', answer: 'To be part of the Winston-Fritz Enterprises family, please **send us your best CV** to our email. Your CV will **reviewed by our HR team** and we will send our response within a **maximum of one week**.'},
  {id: 5, question: 'Is the Winston-Fritz Integrated Complex open to the public?', answer: '**Yes**, the Winston-Fritz Integrated Complex is open to the public. This integrated complex is open from **8 AM** to **9 PM**.  The visitors can directly enter this area for **free**, without having to pay anything. The visitors can even **reserve rooms** in the twin hotel building here.'}
]

const FAQsDropdown = () => {
  const [activeQuestionId, setActiveQuestionId] = useState(null)

  const handleToggle = (id) => {
    setActiveQuestionId((prevId) => (prevId === id ? null : id))
  }

  return (
    <>
      <div className='lg:w-[1000px] flex flex-col gap-1 rounded overflow-hidden'>
        {questionsAnswers.map((questionAnswer) => (
          <div key={questionAnswer.id} id={`faq-${questionAnswer.id}`}>
            <div
              className='bg-blue-main p-4 text-cream-main cursor-pointer flex justify-between items-center'
              onClick={() => handleToggle(questionAnswer.id)}
            >
              <h3 className='font-aclonica text-sm lg:text-lg'>{questionAnswer.question}</h3>
              <ChevronDown className={`transition-transform duration-300
                ${activeQuestionId === questionAnswer.id ? 'rotate-180' : ''}
              `} />
            </div>
              <div className={`bg-cream-main px-4 border-l-4 border-blue-main overflow-hidden transition-all duration-300 ease-in-out
                ${activeQuestionId === questionAnswer.id ? 'max-h-[200px] py-4' : 'max-h-0 py-0'}
              `}>
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props}) => (
                      <p className='font-medium text-blue-main text-xs lg:text-sm leading-tight' {...props} />
                    )
                  }}
                >
                  {questionAnswer.answer}
                </ReactMarkdown>
              </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FAQsDropdown
