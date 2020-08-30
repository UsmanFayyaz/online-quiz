import React from 'react';

class Questions extends React.Component {

  render() {
    var data = [
      {
        question: "Which statement about factors of production is correct?",
        answer: [
          "Capital is the amount of money borrowed from a bank.",
          "Labour is output made by an employee.",
          "Land includes commercially grown rice crops.",
          "Profit is the reward for enterprise."
        ]
      },
      {
        question: "The diagram shows two production possibility curves. Which statement about the movement from point X to point Y is correct?",
        answer: [
          "Demand for consumer goods has risen.",
          "The opportunity cost for producing consumer goods has risen.",
          "There has been an increase in productivity in consumer goods production.",
          "There has been an inward shift in the production possibility curve."
        ]
      },
      {
        question: "A railway company increases ticket prices by 10% for travel between 06:00 and 09:00, causing a reduction in demand by 2%. After 09:00 it reduces ticket prices by 5%, resulting in a 7% increase in demand. What is the price elasticity of demand in response to these price changes?",
        answer: [
          "Career opportunities are abundant.",
          "Earnings are related to the level of skill.",
          "It may be difficult to find work locally.",
          "Labour supply is elastic and plentiful."
        ]
      }
    ];
    console.log(data);
    return (
      <div id="questionsContainer">
        <h2 id="titleOfTheAssesment">Ecnomics Quiz-1</h2>
        <form>
          <div className="questionBody">
            <h5 className="questionNumber"><span style={{ backgroundColor: '#020718', padding: '10px' }}>1.</span></h5>
            <p className="questionText">{data[0].question}</p>

            <div className="options">
              <input type="radio" id="q1option1" name="q1correctAnswer" value="q1option1" />
              <label htmlFor="q1option1">{data[0].answer[0]}</label><br />
              <input type="radio" id="q1option2" name="q1correctAnswer" value="q1option2"></input>
              <label htmlFor="q1option2">{data[0].answer[1]}</label><br />
              <input type="radio" id="q1option3" name="q1correctAnswer" value="q1option3"></input>
              <label htmlFor="q1option3">{data[0].answer[2]}</label><br />
              <input type="radio" id="q1option4" name="q1correctAnswer" value="q1option4"></input>
              <label htmlFor="q1option4">{data[0].answer[3]}</label>
            </div>
          </div>

          <div className="questionBody">
            <h5 className="questionNumber"><span style={{ backgroundColor: '#020718', padding: '10px' }}>2.</span></h5>
            <p className="questionText">{data[1].question}</p>
            <img className="imagesForQuestion" src={require('../questionImage.png')} alt="question description" /><br />

            <div className="options">
              <input type="radio" id="q2option1" name="q2correctAnswer" value="q2option1"></input>
              <label htmlFor="q2option1">{data[1].answer[0]}</label><br />
              <input type="radio" id="q2option2" name="q2correctAnswer" value="q2option2"></input>
              <label htmlFor="q2option2">{data[1].answer[1]}</label><br />
              <input type="radio" id="q2option3" name="q2correctAnswer" value="q2option3"></input>
              <label htmlFor="q2option3">{data[1].answer[2]}</label><br />
              <input type="radio" id="q2option4" name="q2correctAnswer" value="q2option4"></input>
              <label htmlFor="q2option4">{data[1].answer[3]}</label>
            </div>
          </div>

          <div className="questionBody">
            <h5 className="questionNumber"><span style={{ backgroundColor: '#020718', padding: '10px' }}>3.</span></h5>
            <p className="questionText">{data[2].question}</p>
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>prices</td>
                  <td>effect</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>fluctuate up and down</td>
                  <td>consumers are uncertain about future price levels</td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>fluctuate up and down</td>
                  <td>consumers can anticipate future price levels</td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>rise very rapidly</td>
                  <td>value of fixed assets remains stable</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>rise very rapidly</td>
                  <td>money has limited worth as a medium of exchange</td>
                </tr>
              </tbody>
            </table>

            <div className="options">
              <input type="radio" id="q3option1" name="q3correctAnswer" value="q3option1"></input>
              <label htmlFor="q3option1">{data[2].answer[0]}</label><br />
              <input type="radio" id="q3option2" name="q3correctAnswer" value="q3option2"></input>
              <label htmlFor="q3option2">{data[2].answer[1]}</label><br />
              <input type="radio" id="q3option3" name="q3correctAnswer" value="q3option3"></input>
              <label htmlFor="q3option3">{data[2].answer[2]}</label><br />
              <input type="radio" id="q3option4" name="q3correctAnswer" value="q3option4"></input>
              <label htmlFor="q3option4">{data[2].answer[3]}</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Questions;