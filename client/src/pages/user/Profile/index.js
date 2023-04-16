import { Col, Anchor, Row } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PageTitle from "../../../components/PageTitle";
import { useNavigate } from "react-router-dom";

function Profile() {

    const navigate = useNavigate();
    //const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users);

    return (
        <div >
            <PageTitle title={"Profile"} />
            <div className="divider"></div>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <div className="card-lg flex flex-col gap-1 p-2 divcenter">
                        <h1 className="text-2xl"></h1>

                        <h1 className="text-lg">Name : {user.name}</h1>

                        <h1 className="text-lg">Role : {user.isAdmin === false ? "User" : "Admin"}</h1>
                        <h1 className="text-lg">Email : {user.email}</h1>

                        <button
                            className="primary-content-btn"
                            onClick={() => navigate("/")}
                        >
                            Home
                        </button>



                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Profile