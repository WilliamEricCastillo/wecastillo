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
                image="https://miro.medium.com/v2/resize:fit:1296/format:webp/0*ddvPZf_X9in4wa90.jpeg"
                title="Movie Genre Classifier"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="text.primary" sx={{ borderBottom: '2px solid black' }}> {/* Add solid line under the title */}
                    Movie Genre Classifier
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Machine learning model utilizing a Naive Bayes classifier to predict movie genre from a given plot.
                    Training data sourced from IMDb and stored in MongoDB, undergoes natural language processing for plot vectorization.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" sx={{ backgroundColor: '#316FF6' }}>
                <a href="https://github.com/WilliamEricCastillo/MovieGenreClassifier" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Code</a>
                </Button>
            </CardActions>
        </Card>
    );
}
export default CardTemplate;
