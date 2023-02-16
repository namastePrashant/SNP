import React from 'react'
import {Skeleton} from 'antd'


const ATSkeleton = props =>{
  const {item,cols} = props

  return(
    <>
    {
      Array.from(Array(item),(e,i)=>(
        <tbody  key={i}>
          <tr >
            {
              Array.from(Array(cols),(e,i)=>(
                <td  key={i}> <Skeleton active paragraph={false}  /> </td>
              ))
            }
          </tr>
        </tbody>
      ))
    }
    </>
  )
}


export default ATSkeleton