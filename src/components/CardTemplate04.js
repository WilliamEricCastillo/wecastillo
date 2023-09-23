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
                image="https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2748&q=80"
                title="Craps"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    C++ application that simulates a craps dice game.
                    This application encompasses the fundamental phases and rules of the game.
                    Object-oriented programming principles were employed to build modular code.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" size="small"><a href="https://github.com/WilliamEricCastillo/CrapsSimulator" target="_blank" rel="noopener noreferrer">Code</a></Button>
            </CardActions>
        </Card>
    );
}
export default CardTemplate;