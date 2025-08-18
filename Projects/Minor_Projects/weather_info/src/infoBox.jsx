import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

export default function InfoBox({info}){
    const COLD_URL="https://cdn.pixabay.com/photo/2021/11/30/17/06/tree-6835828_1280.jpg";
    const HOT_URL="https://cdn.pixabay.com/photo/2022/09/24/16/31/sunshine-7476726_1280.jpg";
    const RAIN_URL="https://cdn.pixabay.com/photo/2023/08/06/15/29/heaven-8173189_1280.jpg";
    return(
        <div className="infoDiv" style={{color:"black"}}>
        <h2>Weather Info</h2>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?
         RAIN_URL: info.temp>18? 
         HOT_URL : COLD_URL }
        title="green iguana"
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80?
         <WaterDropIcon/>: info.temp>18? 
         <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
            <p>The humidity level is {info.humidity}</p>
            <span><b>Temprature:</b>{info.temp}&deg;C  </span> <span><b> Feels Like:</b>{info.feels_like}&deg;C</span><br />
            <span>Min: {info.temp_min}&deg;C </span> <span>Max: {info.temp_max}&deg;C </span>
        </Typography>
        </CardContent>
        </Card> 
        </div>
    )
}