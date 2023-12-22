/* eslint-disable react/prop-types */
import QuizQuestion from "./QuizQuestion.jsx";

const Quiz = (props) => {
    function getSelectedValue(value,index){
        props.getSelectedValue(value,index)
    }

    const questionElement = props.question.map((q,index) => {
        return (
            <QuizQuestion
                index={index}
                key={index}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                answer={props.answer[index]}
                getSelectedValue={getSelectedValue}
                showResult={props.showResult}
            />
        )
    })
    return (
        <div className={"quiz"}>
            <div className={"quiz--content"}>
                {questionElement}
            </div>
            <button {...props} className={"submit--btn"}>{!props.showResult?"Check answers":"Play Again"}</button>
        </div>
    );
};

export default Quiz;