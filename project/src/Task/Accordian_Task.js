
import React, { useState } from "react";

function Accordian_Task() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is this portfolio?",
      answer:
        "This is my personal portfolio built using React."
    },
    {
      question: "What technologies am I learning?",
      answer:
        "I am learning HTML, CSS, JavaScript, React, Python, and Java."
    },
    {
      question: "What is my career interest?",
      answer:
        "I am interested in full stack development and cybersecurity."
    },
    {
      question: "How can I contact you?",
      answer:
        "You can use the Contact page to fill in the contact form."
    }
  ];

  return (
    <section className="">
      <h1>HAVE QUESTIONS?</h1>
      <h2>Frequently Asked Questions</h2>

      <div className=" acc">
        {faqs.map((faq, index) => (
          <div className="" key={faq.question}>
            <button
              className="btn"
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Accordian_Task;
