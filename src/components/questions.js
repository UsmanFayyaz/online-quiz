import React from 'react';

class Questions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      minutes: 2,
      seconds: 0,
      isSubmit: "Next",
      data: [
        {
          question: "Which statement about factors of production is correct?",
          answer: [
            "Capital is the amount of money borrowed from a bank.",
            "Labour is output made by an employee.",
            "Land includes commercially grown rice crops.",
            "Profit is the reward for enterprise."
          ],
          correctAnswer: 2,
          marks: 2,
          image: null,
          table: null
        },
        {
          question: "The diagram shows two production possibility curves. Which statement about the movement from point X to point Y is correct?",
          answer: [
            "Demand for consumer goods has risen.",
            "The opportunity cost for producing consumer goods has risen.",
            "There has been an increase in productivity in consumer goods production.",
            "There has been an inward shift in the production possibility curve."
          ],
          correctAnswer: 3,
          marks: 5,
          image: "questionImage.png",
          table: null
        },
        {
          question: "A railway company increases ticket prices by 10% for travel between 06:00 and 09:00, causing a reduction in demand by 2%. After 09:00 it reduces ticket prices by 5%, resulting in a 7% increase in demand. What is the price elasticity of demand in response to these price changes?",
          answer: [
            "Career opportunities are abundant.",
            "Earnings are related to the level of skill.",
            "It may be difficult to find work locally.",
            "Labour supply is elastic and plentiful."
          ],
          correctAnswer: 1,
          marks: 2,
          image: null,
          table: [
            ["", "prices", "effect"],
            ["A", "fluctuate up and down", "consumers are uncertain about future price levels"],
            ["B", "fluctuate up and down", "consumers can anticipate future price levels"],
            ["C", "rise very rapidly", "value of fixed assets remains stable"],
            ["D", "rise very rapidly", "money has limited worth as a medium of exchange"]
          ]
        }
      ]
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  increment() {
    if (this.state.isSubmit !== "Submit") {
      if (this.state.currentQuestion < this.state.data.length - 1) {
        this.setState(state => ({
          currentQuestion: state.currentQuestion + 1
        }));
      }
      if (this.state.currentQuestion === this.state.data.length - 2) {
        this.setState(state => ({
          isSubmit: "Submit"
        }))
      }
    } else {
      if (window.confirm("Are you sure, you want to submit the quiz.")) {
        alert("Quiz submitted successfuly");
      }
    }

  }
  decrement() {
    if (this.state.currentQuestion !== 0) {
      this.setState(state => ({
        currentQuestion: state.currentQuestion - 1
      }));
    }
    if (this.state.currentQuestion <= this.state.data.length - 1) {
      this.setState(state => ({
        isSubmit: "Next"
      }))
    }
  }

  renderTableData() {
    return (
      this.state.data[this.state.currentQuestion].table.map(function (row, index) {
        return <tr key={index}>{(row.map(function (cell, ind) {
          return <td key={ind}>{cell}</td>
        }))}</tr>
      })
    )
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div id="questionsContainer">
        <h2 id="titleOfTheAssesment">Ecnomics Quiz-1</h2>
        <div>
          <h4 id="totalQuestions">Total Questions: {this.state.data.length}</h4>
          {minutes === 0 && seconds === 0
            ? <h4 id="timer">Time over!</h4>
            : <h4 id="timer">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h4>
          }
        </div>
        <form>
          {(this.state.data[this.state.currentQuestion].image === null && this.state.data[this.state.currentQuestion].table === null) ? (
            <div className="questionBody">
              <h5 className="questionNumber"><span style={{ backgroundColor: '#020718', padding: '10px' }}>{this.state.currentQuestion + 1}.</span></h5>
              <p className="questionText">{this.state.data[this.state.currentQuestion].question}</p>
              <p className="marks">({this.state.data[this.state.currentQuestion].marks} marks)</p>

              <div className="options">
                <input type="radio" id="q1option1" name="q1correctAnswer" value="q1option1" />
                <label htmlFor="q1option1">{this.state.data[this.state.currentQuestion].answer[0]}</label><br />
                <input type="radio" id="q1option2" name="q1correctAnswer" value="q1option2"></input>
                <label htmlFor="q1option2">{this.state.data[this.state.currentQuestion].answer[1]}</label><br />
                <input type="radio" id="q1option3" name="q1correctAnswer" value="q1option3"></input>
                <label htmlFor="q1option3">{this.state.data[this.state.currentQuestion].answer[2]}</label><br />
                <input type="radio" id="q1option4" name="q1correctAnswer" value="q1option4"></input>
                <label htmlFor="q1option4">{this.state.data[this.state.currentQuestion].answer[3]}</label>
              </div>
            </div>
          ) : (this.state.data[this.state.currentQuestion].image !== null && this.state.data[this.state.currentQuestion].table === null) ? (
            <div className="questionBody">
              <h5 className="questionNumber"><span style={{ backgroundColor: '#020718', padding: '10px' }}>{this.state.currentQuestion + 1}.</span></h5>
              <p className="questionText">{this.state.data[this.state.currentQuestion].question}</p>
              <p className="marks">({this.state.data[this.state.currentQuestion].marks} marks)</p>
              <img className="imagesForQuestion" src={require('../' + this.state.data[this.state.currentQuestion].image)} alt="question description" /><br />

              <div className="options">
                <input type="radio" id="q2option1" name="q2correctAnswer" value="q2option1"></input>
                <label htmlFor="q2option1">{this.state.data[this.state.currentQuestion].answer[0]}</label><br />
                <input type="radio" id="q2option2" name="q2correctAnswer" value="q2option2"></input>
                <label htmlFor="q2option2">{this.state.data[this.state.currentQuestion].answer[1]}</label><br />
                <input type="radio" id="q2option3" name="q2correctAnswer" value="q2option3"></input>
                <label htmlFor="q2option3">{this.state.data[this.state.currentQuestion].answer[2]}</label><br />
                <input type="radio" id="q2option4" name="q2correctAnswer" value="q2option4"></input>
                <label htmlFor="q2option4">{this.state.data[this.state.currentQuestion].answer[3]}</label>
              </div>
            </div>
          ) : (this.state.data[this.state.currentQuestion].image === null && this.state.data[this.state.currentQuestion].table !== null) ? (
            <div className="questionBody">
              <h5 className="questionNumber"><span style={{ backgroundColor: '#020718', padding: '10px' }}>{this.state.currentQuestion + 1}.</span></h5>
              <p className="questionText">{this.state.data[this.state.currentQuestion].question}</p>
              <p className="marks">({this.state.data[this.state.currentQuestion].marks} marks)</p>
              <table>
                <tbody>
                  {this.renderTableData()}
                </tbody>
              </table>

              <div className="options">
                <input type="radio" id="q3option1" name="q3correctAnswer" value="q3option1"></input>
                <label htmlFor="q3option1">{this.state.data[this.state.currentQuestion].answer[0]}</label><br />
                <input type="radio" id="q3option2" name="q3correctAnswer" value="q3option2"></input>
                <label htmlFor="q3option2">{this.state.data[this.state.currentQuestion].answer[1]}</label><br />
                <input type="radio" id="q3option3" name="q3correctAnswer" value="q3option3"></input>
                <label htmlFor="q3option3">{this.state.data[this.state.currentQuestion].answer[2]}</label><br />
                <input type="radio" id="q3option4" name="q3correctAnswer" value="q3option4"></input>
                <label htmlFor="q3option4">{this.state.data[this.state.currentQuestion].answer[3]}</label>
              </div>
            </div>
          ) : (<div></div>)
          }

          <div>
            <button type="button" onClick={this.decrement}>Previous</button>
            <button type="button" onClick={this.increment}>{this.state.isSubmit}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Questions;