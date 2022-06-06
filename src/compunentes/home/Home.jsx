import React from "react";
import "../home/Home.css";
import { Progress } from "antd";
import {
  CheckCircleFilled,
  IdcardTwoTone,
  PhoneTwoTone,
  MailTwoTone,
  FacebookOutlined,
  HomeTwoTone,
  UserOutlined,
  CheckOutlined,
  BugFilled,
  GithubFilled,
  DingtalkOutlined
} from "@ant-design/icons";
import { Avatar, Image, Badge, Card } from "antd";
import Skills from "../skills/Skills";
import Interests from "../portfolio/Interests";
import Project from "../project/Project";

const Home = () => {
  return (
    <div className="container">
      <p><BugFilled className="BugFilled-icon" /></p>
      <h1 className="my-cv">My CV </h1>
      <div className="container-home">
        <div className="personal__infor">
          <div className="avatar">
            <Avatar
              src={
                <Image
                  className="avt-Image"
                  src="https://github.com/Mrcuong1996/baitap29-4/blob/master/NewAvatar.jpg?raw=true"
                />
              }
            />
            <p className="avt-text">
              Cường Thợ Xây <CheckCircleFilled className="info-icon-check" />
            </p>
            <p className="tex-avt-check">
              FrontEnd
              <Badge status="processing" className="badge-processing" />
            </p>
            <p>
              <Progress percent={69.5} size="small" status="%" />
            </p>
          </div>
          <div className="info"></div>
          <div className="contact">
            <Card>
              <h3>
                 <DingtalkOutlined className="Personal-Info-icon Personal-Info-icon-left" /> 
                  Personal Info 
                  <DingtalkOutlined className="Personal-Info-icon Personal-Info-icon-right"/>
              </h3>
            </Card>

            <Badge.Ribbon text={<CheckOutlined />}>
              <Card size="small">
                <p>
                  <Avatar
                    src="https://github.com/Mrcuong1996/CuongThoXay.githud.io/blob/main/public/Imgs/userName.jpg?raw=true"
                    className="contact__info-icon-avt"
                  />
                  <span className="contact-userName">Đặng Văn Cường</span>
                </p>
              </Card>
            </Badge.Ribbon>

            <Badge.Ribbon text={<CheckOutlined />} color="red">
              <Card size="small">
                <p>
                  <IdcardTwoTone className="info-icon" />
                  09/10/1996
                </p>
              </Card>
            </Badge.Ribbon>

            <Badge.Ribbon text={<CheckOutlined />} color="pink">
              <Card size="small">
                <p>
                  <UserOutlined className="info-icon" />
                  Nam
                </p>
              </Card>
            </Badge.Ribbon>

            <Badge.Ribbon text={<CheckOutlined />} color="cyan">
              <Card size="small">
                <p>
                  <PhoneTwoTone className="info-icon" />
                  <a href="tel:0967.72.1996">0967.72.1996</a>
                </p>
              </Card>
            </Badge.Ribbon>

            <Badge.Ribbon text={<CheckOutlined />} color="green">
              <Card size="small">
                <p>
                  <a href="https://www.facebook.com/MrCuong1996/">
                    <FacebookOutlined className="info-icon" />
                    Facebook.com/Mrcuong1996
                  </a>
                </p>
              </Card>
            </Badge.Ribbon>

            <Badge.Ribbon text={<CheckOutlined />} color="purple">
              <Card size="small">
                <p>
                  <MailTwoTone className="info-icon" />
                  vanlytuongtuluv@gmail.com
                </p>
              </Card>
            </Badge.Ribbon>

            <Badge.Ribbon text={<CheckOutlined />} color="green">
              <Card size="small">
                <p>
                  <a href="https://github.com/Mrcuong1996">
                    <GithubFilled className="info-icon" />
                    github.com/Mrcuong1996
                  </a>
                </p>
              </Card>
            </Badge.Ribbon>

            <Badge.Ribbon text={<CheckOutlined />} color="volcano">
              <Card size="small">
                <p>
                  <HomeTwoTone className="info-icon" />
                  Xã Quảng Nham - Huyện Quảng Xương- Tỉnh Thanh Hóa
                </p>
              </Card>
            </Badge.Ribbon>

          </div>
        </div>
        <div className="skills-portfolio-about">
          <div className="about">
            <h3 className="about__h3-about-me">About Me</h3>
            <p>
              • Đã đươc đào tạo, hướng dẫn các kiến thức chuyên môn về FrontEnd và
              kĩ năng làm việc trong 3 tháng tại <a href="https://www.nodemy.vn/">Nodemy</a>.
            </p>
            <p>
              • Đã được tham gia phát triển sản phẩm, dự án theo quy trình chuẩn
              của công ty từ thiết kế, code, test...
            </p>
            <p>
              • Sẵn sàng học hỏi công nghệ mới. Có khả năng giao tiếp tốt và tư
              duy sáng tạo cao, giải quyết vấn đề nhanh gọn.
            </p>
            <p>
              • Kĩ năng nghiên cứu tốt, có tư duy tìm ra các kiến thức mới.
            </p>
            <p>
              • Cẩn thận, tỉ mỉ, trung thực, có trách nhiệm cao với công việc.
            </p>
            <p>• Nhiệt huyết, biết lắng nghe, chịu được áp lực công việc.</p>
            <p>
              • Thích nghi nhanh với sự thay đổi liên tục của mô hình hệ thống.
            </p>
          </div>
          <Skills />
          <Project/>
          <Interests />
        </div>
      </div>
    </div>
  );
};

export default Home;
