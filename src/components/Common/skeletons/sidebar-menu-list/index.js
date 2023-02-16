import React from 'react'
import {Menu,Skeleton} from 'antd'

const SMLskeleton = props =>{
  const {item} = props

  return(
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      className="sideMenu-scroll"
    >        
    {
      Array.from(Array(item),(e,i)=>(
        <Menu.Item key={i} className="library-items grow" style={{padding:"0 1.5em"}}>
          <Skeleton active paragraph={false}/>
        </Menu.Item>
      ))
    }
    </Menu>
  )
}


export default SMLskeleton