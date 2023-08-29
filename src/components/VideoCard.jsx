import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { demoThumbnailUrl, demoVideoUrl, demoVideolTitle, demoChannelTitle, demoChannelUrl } from '../utils/constant';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{width:{md:'300px', xs:'100%'}, boxShadow:'none', borderRadius:0}}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={ {width: 358,height:180}}/>
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height : '106px' }}>
      <Link to = {videoId ? `/video/${videoId}`: demoVideoUrl} >
        <Typography variant="subtitle1" fontWeight='bold' color='#FFF'>
         {snippet?.title.slice(0,60) || demoVideoUrl.slice(0,60)} 
        </Typography>
      </Link>
      <Link to = {snippet?.channelId ? `/Channel/${snippet?.channelId }`: demoChannelUrl} >
        <Typography variant="subtitle1" fontWeight='bold' color='gray'>
          {snippet?.channelTitle || demoChannelTitle} 
          <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
        </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard