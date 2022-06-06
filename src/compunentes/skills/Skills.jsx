import React from 'react'
import {
    CheckCircleFilled,
    SyncOutlined
  } from "@ant-design/icons";
import { Progress  } from "antd";


const Skills = () => {
  return (
    <div className="skills">
    <h3>Skills</h3>
    <div className="skills__menu">
      <p className="skills__menu-html skills__menu-text"> <SyncOutlined spin className='skills__menu-icon' />  HTML
        <p><Progress percent={70} size="small" /></p>
      </p>
      <p className="skills__menu-css skills__menu-text"> <SyncOutlined spin className='skills__menu-icon' /> CSS
        <p><Progress percent={70} size="small" /></p>
      </p>
      <p className="skills__menu-js skills__menu-text"> <SyncOutlined spin className='skills__menu-icon' />  Javascript 
        <p><Progress percent={69} size="small" /></p>
      </p>
      <p className="skills__menu-react skills__menu-text"> <SyncOutlined spin className='skills__menu-icon' />  React
        <p><Progress percent={69} size="small" /></p>
      </p>
    </div>
    <p className='Additional'> Additional</p>
    <p className='additional-skills'><SyncOutlined spin/> BootsTrap <br />
      <SyncOutlined spin/>  Ant Design of React</p>
  </div>
  )
}

export default Skills