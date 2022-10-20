import { Button, Col, Input, Row, Spin } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./_profile.scss";
import { Radio, Tabs } from "antd";
import userImg from "assets/img/user/pic2_3.jpg";
import { formatFullName } from "common/utils/formatFullName";
import { useEffect } from "react";
import {
	FileTextOutlined,
	LockOutlined,
	MailOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import ShowUserInfo from "./components/ShowUserInfo";
import CourseInfo from "./components/CourseInfo";

function Profile() {
	const userProfile = useSelector((state) => state.auth.profile);

	const [keySelect, setKeySelect] = useState(1);

	const handleSelect = (e) => {
		const key = e.target.getAttribute("data-value"); //1
		// setKeySelect(key);
	};

	const renderContent = () => {
		if (keySelect === 1) {
			return <ShowUserInfo />;
		}

		if (keySelect === 2) {
			return <CourseInfo />;
		}
	};

	// check userProfile
	if (!userProfile) {
		return (
			<div style={{ textAlign: "center" }}>
				<Spin size="large" />
			</div>
		);
	}

	return (
		<div className="Profile">
			<div className="container">
				<div className="content-info">
					<Row>
						<Col xs={4} sm={4} md={6} lg={6} xl={6}>
							<div className="left-content">
								<div className="user">
									<div className="image">
										<img src={userImg} alt="" />
									</div>
									<div className="user-name">
										{formatFullName(userProfile.hoTen)}
									</div>
								</div>

								<div className="option-select">
									<div
										className="option-content"
										data-value={1}
										onClick={(e) => {
											handleSelect(e);
											setKeySelect(1);
										}}
									>
										Thông tin tài khoản
									</div>
									<div
										className="option-content"
										data-value={2}
										onClick={(e) => {
											handleSelect(e);
											setKeySelect(2);
										}}
									>
										Khóa học đã đăng ký
									</div>
								</div>
							</div>
						</Col>
						<Col xs={20} sm={20} md={18} lg={18} xl={18}>
							{renderContent()}
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default Profile;
