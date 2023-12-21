
const Start = (props) => {
    return (
        <div className={"start"}>
            <div className={"start--content"}>
                <h1 className={"start--title"}>Quizzical</h1>
                <p className={"start--description"}>Interactive quiz app: Test, learn, compete.</p>
                <button {...props} className={"start--btn"}>Start quiz</button>
            </div>
        </div>
    );
};

export default Start;