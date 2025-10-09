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
                image="https://i.ibb.co/XJB7cVn/craniumcon.jpg"
                title="Movie Genre Classifier"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="text.primary" sx={{ borderBottom: '2px solid black' }}> {/* Add solid line under the title */}
                    Mental Wellness Platform
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Cranium Conscious is a human interactive website,
                    that involved user feedback to refine features,
                    such as a weekly mood tracker, journal, and curated poetry/quotes.
                    Utilized HTML5, CSS, Javascript, flask, and postgres.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" sx={{ backgroundColor: '#316FF6' }}>
                    <a href="https://github.com/WilliamEricCastillo/craniumconscious" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Code</a></Button>
            </CardActions>
        </Card>
    );
}
export default CardTemplate;
