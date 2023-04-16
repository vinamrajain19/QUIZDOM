import React from 'react'
import { Form, message } from 'antd';
import { Link } from 'react-router-dom';
import { registerUser } from '../../../apicalls/users';
import { HideLoading, ShowLoading } from '../../../redux/loaderSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();;
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            const response = await registerUser(values);
            dispatch(HideLoading());
            if (response.success) {
                message.success(response.message);
                navigate("/login");
            }
            else {

                message.error(response.message);
            }

        } catch (error) {
            dispatch(HideLoading());
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

                <div className='flex justify-center items-center h-screen w-screen'>

                    <div className='flex flex-col'>

                        <div id='login-card'>
                            <label className='login-label'>
                                <b>Q</b>
                            </label>

                            <Form layout='vertical' className='mt-2' onFinish={onFinish}>

                                <Form.Item name='name' label={<label style={{ color: "white" }}>Name</label>}>
                                    <input type="text" />
                                </Form.Item>

                                <Form.Item name='email' label={<label style={{ color: "white" }}>Email</label>}>
                                    <input type="text" />
                                </Form.Item>

                                <Form.Item name='password' label={<label style={{ color: "white" }}>Password</label>}>
                                    <input type="password" />
                                </Form.Item>

                                <div className='flex flex-col gap-2'>
                                    <button type='submit' className='primary-outlined-btn mt-2 w-100'>Register</button>
                                    <Link to="/login" className='col'>Already a member? Login</Link>
                                </div>

                            </Form>

                        </div>


                    </div>
                </div >
            </div>

        </>
    )
}

export default Register