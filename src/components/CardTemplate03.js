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
                image="https://images-platform.99static.com/S9puqahdzgHWx3silx23JyD_87U=/0x0:978x978/500x500/top/smart/99designs-contests-attachments/125/125098/attachment_125098802"
                title="GOL"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Java application simulating Conway's Game of Life using multi-thread.
                    The applications has a scalable grid system with a configurable number of rows and columns and
                    uses an input file the initialize the simulation grid.

                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" size="small"><a href="https://github.com/WilliamEricCastillo/Multi-Threaded-GOL" target="_blank" rel="noopener noreferrer">Code</a></Button>
            </CardActions>
        </Card>
    );
}
export default CardTemplate;