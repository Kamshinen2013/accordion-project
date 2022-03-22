import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';
import Footer from './Footer';

function App() {
  const [question, setQuestion] = useState(data)
  return (
  <div>
  <main>
    <div className='container'>
      <h3>Questions and answers about login</h3>
      <section className='info'>
        {
          questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question}/>
          })
        }
      </section>
    </div>
  </main>;
    <Footer className='footer'/>
    </div>
  )}

export default App;
