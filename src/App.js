import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
export default function App() {
  return (
    <div className="container">
      <QuestionList />
    </div>
  );
}

function QuestionList() {
  const [selectId, setSelectedId] = useState(null);
  function handleClick(id) {
    //we if click after getting answer, it will back to question with below code
    setSelectedId(id !== selectId ? id : null);
  }

  return (
    <div className="menu">
      {questions.map((ques) => (
        <div
          key={ques.id}
          onClick={() => handleClick(ques.id)}
          className={ques.id === selectId ? "grid-item selected" : "grid-item"}
        >
          <p>{ques.id === selectId ? ques.answer : ques.question}</p>
        </div>
      ))}
    </div>
  );
}

// <span className="menu" >
//   {/* console.log(questions); */}
//   {questions.map(Display)
// {questions.map((ques)=>(<Display questionObj={ques} key={ques.id}/>
// }
// </span>
// <div className="menu">
//   {questions.map((ques)=>(<div key=ques.id > <p className="grid-item">{ques.question}</p></div>))}

// </div>
//   )
// }
// function Display(questionObj){
//   return (

//     <span className="grid-item">
//       {/* console.log(ques); */}
//       {questionObj.question}</span>
//   )
// }
