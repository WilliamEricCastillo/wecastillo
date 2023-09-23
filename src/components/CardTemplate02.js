import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function CardTemplate() {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: '#F5F5F5' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.png"
                title="React Layout"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    React application that demonstrates the creation of react layouts and the use of states and components.
                    States were used to manage a clock component and a clicker counter component.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" size="small"><a href="https://github.com/WilliamEricCastillo/ReactLayout" target="_blank" rel="noopener noreferrer">Code</a></Button>
            </CardActions>
        </Card>
    );
}
export default CardTemplate;