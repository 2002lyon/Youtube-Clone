import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom' 
import { Box } from '@mui/material'

import ChannelCard from './ChannelCard';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

    const getChannel = async(id)=>{
      const fetchedData = await fetchFromAPI(`channels?part=snippet&id=${id}`)
      setChannelDetail(fetchedData.data?.items[0]);
      
    };

    const getVideoData = async(id) => {
      const fetchedData = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);
      setVideos(fetchedData.data.items);
    }

    console.log(channelDetail);
    console.log(videos);

  useEffect (() => {
    getChannel(id);
    getVideoData(id);
    
  }, [id]);

 


  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'rgb(2,0,36)',
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }} 
        />
          <ChannelCard channelDetail = {channelDetail} marginTop = '-110px'/>
      </Box>

      <Box display = "flex" p = "2">
        <Box sx = {{  mr: {sm: '110px'} }} />
          <Videos videos = {videos}/>

      </Box>
    </Box>
  )
}

export default ChannelDetail