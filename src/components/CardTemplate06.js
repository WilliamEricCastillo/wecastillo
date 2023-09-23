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
                image="https://repository-images.githubusercontent.com/232512685/70107a80-31f8-11ea-9436-66c4dc25c0e2"
                title="Restful"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography variant="body2" color="text.secondary">
                     RESTful API for managing a collection of books.
                    It facilitates operations like retrieving a list of books, fetching book details by ID, adding new books, updating existing book information, and deleting books.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" size="small"><a href="https://github.com/WilliamEricCastillo/RestExpress" target="_blank" rel="noopener noreferrer">Code</a></Button>
            </CardActions>
        </Card>
    );
}
export default CardTemplate;