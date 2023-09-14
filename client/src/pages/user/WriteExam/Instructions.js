import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../../../images/ins.jpg";

const mystyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    marginTop: '-30px',
    fontSize: '20px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};


function Instructions({ examData, setView, startTimer }) {
    const navigate = useNavigate();
    return (
        <div style={mystyle}>
            <div className="flex flex-col items-center gap-5">
                <ul className="flex flex-col gap-1">
                    <h1 className="text-2xl underline">Instructions</h1>
                    <li>Exam must be completed in {examData.duration} seconds.</li>
                    <li>
                        Exam will be submitted automatically after {examData.duration}{" "}
                        seconds.
                    </li>
                    <li>Once submitted, you cannot change your answers.</li>
                    <li>Do not refresh the page.</li>
                    <li>
                        You can use the <span className="font-bold">"Previous"</span> and{" "}
                        <span className="font-bold">"Next"</span> buttons to navigate between
                        questions.
                    </li>
                    <li>
                        Total marks of the exam is{" "}
                        <span className="font-bold">{examData.totalMarks}</span>.
                    </li>
                    <li>
                        Passing marks of the exam is{" "}
                        <span className="font-bold">{examData.passingMarks}</span>.
                    </li>
                </ul>

                <div className="flex gap-2">
                    <button className="primary-outlined-btn"
                        onClick={() => navigate('/')}
                    >
                        CLOSE
                    </button>
                    <button
                        className="primary-content-btn"
                        onClick={() => {
                            startTimer();
                            setView("questions");
                        }}
                    >
                        Start Exam
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Instructions;