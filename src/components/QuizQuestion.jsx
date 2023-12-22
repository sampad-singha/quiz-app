/* eslint-disable react/prop-types */


const QuizQuestion = (props) => {
    function handleChange(e){
        props.getSelectedValue(e.target.value,props.index)
    }
    return (
        <div className={"question"}>
            <h4 className={"question--body"}>{props.question}</h4>
            <div className={"options"}>
                <input
                    type="radio"
                    name={"opt" + props.index}
                    id={props.index+"option-1"}
                    value={props.options[0]}
                    onChange={handleChange}
                    disabled={props.showResult}
                />
                <label style={
                        props.options[0] === props.correctAnswer && props.showResult
                            ? { backgroundColor: "#94D7A2",border: "1px solid #94D7A2"}
                            : props.answer === props.options[0] && props.showResult
                                ? { backgroundColor: "#F8BCBC" }
                                : {}
                        }
                       htmlFor={props.index + "option-1"}>{props.options[0]}</label>

                <input
                    type="radio"
                    name={"opt" + props.index}
                    id={props.index+"option-2"}
                    value={props.options[1]}
                    onChange={handleChange}
                    disabled={props.showResult}
                />
                <label style={
                    props.options[1] === props.correctAnswer && props.showResult
                        ? { backgroundColor: "#94D7A2",border: "1px solid #94D7A2" }
                        : props.answer === props.options[1] && props.showResult
                            ? { backgroundColor: "#F8BCBC" }
                            : {}
                }  htmlFor={props.index + "option-2"}>{props.options[1]}</label>

                <input
                    type="radio"
                    name={"opt" + props.index}
                    id={props.index+"option-3"}
                    value={props.options[2]}
                    onChange={handleChange}
                    disabled={props.showResult}
                />
                <label style={
                    props.options[2] === props.correctAnswer && props.showResult
                        ? { backgroundColor: "#94D7A2",border: "1px solid #94D7A2" }
                        : props.answer === props.options[2] && props.showResult
                            ? { backgroundColor: "#F8BCBC" }
                            : {}
                }  htmlFor={props.index + "option-3"}>{props.options[2]}</label>

                <input
                    type="radio"
                    name={"opt" + props.index}
                    id={props.index+"option-4"}
                    value={props.options[3]}
                    onChange={handleChange}
                    disabled={props.showResult}
                />
                <label style={
                    props.options[3] === props.correctAnswer && props.showResult
                        ? { backgroundColor: "#94D7A2",border: "1px solid #94D7A2" }
                        : props.answer === props.options[3] && props.showResult
                            ? { backgroundColor: "#F8BCBC" }
                            : {}
                }  htmlFor={props.index + "option-4"}>{props.options[3]}</label>
            </div>
            <hr/>
        </div>
    );
};

export default QuizQuestion;