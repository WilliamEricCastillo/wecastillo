import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./card.css";

export default function CardTemplate() {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: '#F5F5F5' }}>
            <CardMedia
                sx={{ height: 140 }}
                image= "https://i.ibb.co/XJB7cVn/craniumcon.jpg"
                title="Cranium Conscious"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Cranium Conscious is a human interactive website,
                    that involved user feedback to refine features,
                    such as a weekly mood tracker and curated media.
                    Front-end development using HTML5, CSS, and Javascript.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" size="small"><a href="https://craniumc.fly.dev/" target="_blank" rel="noopener noreferrer">Demo</a></Button>
                <Button variant="outlined" size="small"><a href="https://github.com/WilliamEricCastillo/craniumconscious" target="_blank" rel="noopener noreferrer">Code</a></Button>
            </CardActions>
        </Card>
    );
}