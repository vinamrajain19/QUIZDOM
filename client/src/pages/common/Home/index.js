import { Col, message, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExams } from "../../../apicalls/exams";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import PageTitle from "../../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import background from "../../../images/exam4.jpg";

function Home() {
  const [exams, setExams] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const getExams = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllExams();
      if (response.success) {
        setExams(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getExams();
  }, []);

  const mystyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    marginTop: '-30px',
    fontSize: '20px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    user && (
      <div className="cool-div">
        <PageTitle title={`Hi ${user.name}, Welcome to QuizDom`} />
        <div className="divider"></div>
        <div style={mystyle}>
          <Row gutter={[16, 16]}>
            {exams.map((exam) => (

              <Col span={6}>
                <div className="card-lg flex flex-col gap-1 p-2">
                  <h1 className="text-2xl">{exam?.name}</h1>

                  <h1 className="text-md">Category : {exam.category}</h1>

                  <h1 className="text-md">Total Marks : {exam.totalMarks}</h1>
                  <h1 className="text-md">Passing Marks : {exam.passingMarks}</h1>
                  <h1 className="text-md">Duration : {exam.duration}</h1>

                  <button
                    className="buttton"
                    onClick={() => navigate(`/user/write-exam/${exam._id}`)}
                  >
                    Start Exam
                  </button>

                </div>
              </Col>
            ))}
          </Row>
        </div>

      </div>
    )
  );
}

export default Home;