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
                image="https://as2.ftcdn.net/v2/jpg/02/18/32/79/1000_F_218327950_XpwmdXNS8ZjdtWjopLHwQ5Ig9ibzxFOK.jpg"
                title="Movie Genre Classifier"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="text.primary" sx={{ borderBottom: '2px solid black' }}> {/* Add solid line under the title */}
                    Book Tracking Application
                </Typography>
                <Typography variant="body2" color="text.primary">
                    MERN (MongoDB, Express.js, React, Node.js) application for managing and monitoring library book activities.
                    Express server has tailored routes and HTTP methods for tasks like listing, checking in/out, and providing JSON responses.                 </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" sx={{ backgroundColor: '#316FF6' }}>
                    <a href="https://github.com/WilliamEricCastillo/Library-Book-Tracking-Application" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Code</a>
                </Button>
            </CardActions>
        </Card>
    );
}
export default CardTemplate;
