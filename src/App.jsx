/* eslint-disable react/prop-types */
import Start from "./components/Start.jsx";
import Quiz from "./components/Quiz.jsx";
import {useEffect, useState} from "react";
import data from "./data.js";
import he from "he"
const App = () => {
    const [page, setPage] = useState(0)
    const [question, setQuestion] = useState([])
    const [answer,setAnswer] = useState([])
    const [mark,setMark] = useState(0)

    useEffect(() => {
        let count = 0
        for (let i=0;i<question.length;i++){
            if(answer[i] === question[i].correctAnswer){
                count++
            }
        }
        setMark(count)
    },[answer, question])
    function shuffleOptions(options) {
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
    }

    function buildQuestion(result){
        const options = result.incorrect_answers.map(res => {
            return he.decode(res)
        })
        options.push(he.decode(result.correct_answer))
        shuffleOptions(options);
        return {
            question: he.decode(result.question),
            options: options,
            correctAnswer: result.correct_answer
        }
    }
    function questionArray(){
        const questions = data.results.map(result => {
            return buildQuestion(result)
        })
        setQuestion(questions)
    }
    function answerArray(value,index){
        setAnswer(prevState => {
            const tempArray = [...prevState]
            tempArray[index] = value
            return tempArray
        })
    }
    function evaluateResult(){
        console.log(mark)
    }
    function handleStartClick(){
        setPage(1)
        questionArray()
    }
    return (
        <div className={"main"}>
            {
                page===0?
                <Start onClick={handleStartClick}></Start>:
                <Quiz onClick={evaluateResult} question={question} getSelectedValue={answerArray}/>
            }
        </div>
    );
};

export default App;