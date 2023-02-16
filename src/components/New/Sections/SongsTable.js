// import React, {useState,useEffect} from 'react';
// import { Button } from 'antd';
// import { CaretRightFilled } from '@ant-design/icons';

// import TableList from '../../Common/Table'
// import Dot from '../../../assets/Icons/Dot.png'
// import TableLoading from '../../Common/Loading/TableLoading';

// const Songs = (props) => {
//     const [dataSource, setDataSource]= useState(undefined);    
//     const { latestSongsAll, fetchLatestSongsAll, latestSongsAllLoading } = props;

//     useEffect(() => {
//         if (latestSongsAll.length === 0) {
//             fetchLatestSongsAll();
//         }
//     }, [])

//     useEffect(()=>{
//         if(latestSongsAll.length!==0){
//             let dataSource=latestSongsAll.map((song)=>{
                                
//                                 let artists=song.artists.map((artist)=>{
//                                                 return artist?.profile?.name
//                                             })

//                                 return {
//                                     title: { name: song.title , listens: '25,000' },
//                                     artist: artists[0] || 'The Weeknd',
//                                     album: 'Starboy',
//                                     date: song.created_at,
//                                     heartTime: {time:'3:50',loved:true}
//                                 }
//                             })

//             setDataSource(dataSource);
//         }
//     },[latestSongsAll])
    

//     return (
//         <div className='section'>
//             <div className='user-liked-info'>
//                 <Button shape="round" size='large' className='btn-gradient'>
//                     <CaretRightFilled /> Play
//                         </Button>
//                 <div className='favorite-info'>
//                     <span>105 Tracks</span> <span><img src={Dot} alt="Dot" /></span> <span>4hrs 57 mins</span>
//                 </div>
//             </div>
        
//             {
                
//                 latestSongsAllLoading ? <TableLoading /> : Array.isArray(latestSongsAll) && latestSongsAll.length !== 0 ?                    
//                     <TableList dataSource={dataSource}/> 
//                     : ""
//             }

//         </div>
//     );
// };

// export default Songs;