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
                image="https://img.freepik.com/premium-vector/cyber-security-vector-logo-with-shield-check-mark-security-shield-concept_100456-3688.jpg"
                title="cipher"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Python applications showcasing the practical implementation/principles behind three cryptographic methods: Diffie-Hellman, Caesar cipher, and Hill cipher.
                    Applications are provided in Jupyter Notebook format.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" size="small"><a href="https://github.com/WilliamEricCastillo/ComputerSystemSecurity" target="_blank" rel="noopener noreferrer">Code</a></Button>
            </CardActions>
        </Card>
    );
}
export default CardTemplate;