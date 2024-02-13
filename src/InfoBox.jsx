import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {

    let HOT_URL = "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNub3d8ZW58MHx8MHx8fDA%3D"
    let RAIN_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW58ZW58MHx8MHx8fDA%3D"

    return (
        <div className="infoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={info.humd > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title={info.city}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city.toUpperCase()} &nbsp;{info.humd > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}> {/* using attribute "component" to remove error in console */}
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Min Temprature: {info.tempMin}&deg;C</p>
                    <p>Max Temperature: {info.tempMax}&deg;C</p>
                    <p>Humidity: {info.humd}</p>
                    <p>The weather can be described as <b>{info.weather}</b> and the temperature feels like <b>{info.feels}</b>&deg;C</p>
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}