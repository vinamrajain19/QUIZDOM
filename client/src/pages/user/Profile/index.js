import { Col, Anchor, Row } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PageTitle from "../../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import background from "../../../images/p1.jpg";

function Profile() {

    const navigate = useNavigate();
    //const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users);

    const mystyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        marginTop: '-70px',
        fontSize: '20px',
        backgroundSize: 'cover',
        opacity: 1,
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div>
            <PageTitle title={"Profile"} />
            < div className="divider" ></div >
            <div style={mystyle}>

                <div className="flex flex-col justifyContent:center gap-1 p-2 " style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    boxShadow: '0 0 2px rgb(128, 128, 128)',
                    opacity: 2,
                }}>

                    <h1 className="text"><span style={{ fontWeight: 'bold' }}>Name : </span><span style={{ fontWeight: 'bold' }}>{user.name}</span></h1>
                    <h1 className="text"><span style={{ fontWeight: 'bold' }}>Role : </span><span style={{ fontWeight: 'bold' }}>{user.isAdmin === false ? "User" : "Admin"}</span></h1>
                    <h1 className="text"><span style={{ fontWeight: 'bold' }}>Email : </span><span style={{ fontWeight: 'bold' }}>{user.email}</span></h1>

                    <button
                        className="primary-content-btn"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </button>


                </div>
            </div>

        </div >
    )
}

export default Profile