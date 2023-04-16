import React from 'react'
import { Form, message } from 'antd';
import { Link } from 'react-router-dom';
import { loginUser } from '../../../apicalls/users';
import { HideLoading, ShowLoading } from '../../../redux/loaderSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading())
            const response = await loginUser(values);
            dispatch(HideLoading())
            if (response.success) {
                message.success(response.message);
                localStorage.setItem("token", response.data);
                window.location.href = "/";
            }
            else {
                message.error(response.message);
            }
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message);
        }
    }

    return (
        <>
            <div id='Home'>
                <div id='logo'>
                    <div id='logo-name'>
                        <b>Quiz</b>Dom
                    </div>
                    <div id='description'>
                        Now create and join quiz at a single platform.You can create
                        trivia quizzes, personality test, polls and survays. Share out
                        your quiz with your students with a unique code.
                    </div>
                </div>

                <div id='login-card'>
                    <label className='login-label'>
                        <b>Q</b>
                    </label>

                    <Form layout="vertical" className="mt-2" onFinish={onFinish}>
                        <Form.Item name="email" label={<label style={{ color: "white" }}>Email</label>}>
                            <input type="text" />
                        </Form.Item>

                        <Form.Item
                            label={<label style={{ color: "white" }}>Password</label>}
                            name="password"
                        >
                            <input type="password" />
                        </Form.Item>



                        <div className="flex flex-col gap-2">
                            <button
                                type="submit"
                                className="primary-contained-btn mt-2 w-100"
                            >
                                Login
                            </button>
                            <Link to="/register" className="col"
                            >
                                Not a member? Register
                            </Link>
                        </div>
                    </Form>

                </div>
            </div>

        </>
    )
}

export default Login