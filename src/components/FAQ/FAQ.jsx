import React, { useState } from 'react';
import './FAQ.scss';
import { FiPlus } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const FAQItem = ({ number, question, answer, isOpen, toggleOpen }) => (
  <article className={`faq-item ${isOpen ? 'open' : 'collapsed'}`}>
    <span className="faq-number">{number}</span>
    <div className="faq-content">
      <div className="faq-question-wrapper">
        <h3 className="faq-question" onClick={toggleOpen}>{question}</h3>
        <button 
          className={`toggle-button ${isOpen ? 'open' : 'collapsed'}`} 
          onClick={toggleOpen}
          aria-expanded={isOpen}
        >
          {isOpen ? <MdClose /> : <FiPlus />}
        </button>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  </article>
);

const FAQ = () => {
  const [openItem, setOpenItem] = useState(-1);
  const [showAll, setShowAll] = useState(false);
  const faqData = [
    {
      question: "What is Hack The Mountains 5.0 (HTM 5.0)?",
      answer: "HTM 5.0 is a 30-hour hybrid hackathon that brings together tech enthusiasts, developers, designers, and innovators to collaborate, learn, and create innovative projects. It's a platform to showcase your skills, network with industry professionals, and explore the latest tech trends."
    },
    {
      question: "How can I register for Hack The Mountains?",
      answer: "You can go to <a href='https://portal.hackthemountain.tech/' target='_blank' rel='noopener noreferrer' style='color: inherit; font-weight: bold;'>HTM 5.0 Registration Portal</a> and create an account. After creating an account, you have to create or join a team. If you are creating a team, then share a unique code appearing on your dashboard to your team members and they can join your team after their individual registration. If you have opted for Offline Participation, you will then need to fill in the mandatory Evaluation Form. For Online participation, there is no need to fill in any form. Lastly, you have to join our Discord to receive constant updates."
    },
    {
      question: "How many members should be in a team?",
      answer: "For offline participation, You must have 4 members in your team and for online participation, you must have minimum 2 and maximum 4 members in your team. No individual participation is allowed."
    },
    {
      question: "Is there any fee for Participation?",
      answer: "We go by the Major League Hacking Guidelines and according to the rules of every Hack The Mountains’ official event, there will be no fee or charge for the attendees to attend our events. The only thing we hope to receive in return is your support, and to be able to help you develop in your career."
    },
    {
      question: "Do my team members need to register separately from me?",
      answer: "Yes, your team members need to register separately from you. You cannot register on behalf of your team members. Each team member needs to fill out their own registration form and join your team."
    },
    {
      question: "Will the organisers reimburse the travel expenses of the participants?",
      answer: "No, the organisers will not reimburse the travel expenses of the participants. The hackathon is a community-driven event and the organisers have budget constraints that prevent them from offering travel reimbursements. In case we provide travel reimbursements, we will inform you."
    },
    {
      question: "Will the organisers provide food for the participants at the hackathon?",
      answer: "Yes, the organisers will provide food for the participants at the hackathon. The participants will get breakfast, lunch, and dinner for day 01 & Breakfast, Lunch for day 02 of the Hackathon."
    },
  ];

  return (
    <section className={`faq-section ${showAll ? 'expanded' : ''}`}>
      <h2 className="faq-title">FAQ's</h2>
      <div className="faq-container">
        {faqData.slice(0, showAll ? faqData.length : 3).map((item, index) => (
          <React.Fragment key={index}>
            <FAQItem
              number={`0${index + 1}`}
              question={item.question}
              answer={<span dangerouslySetInnerHTML={{ __html: item.answer }} />}
              isOpen={openItem === index}
              toggleOpen={() => setOpenItem(openItem === index ? -1 : index)}
            />
            {index < (showAll ? faqData.length - 1 : 2) && <div className="faq-divider"></div>}
          </React.Fragment>
        ))}
      </div>
      <div className='view-more-button-container'>
        <button className="view-more-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
      {showAll }
    </section>
  );
};

export default FAQ;
