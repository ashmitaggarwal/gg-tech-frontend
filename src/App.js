import React from 'react';
import TransactionList from './components/TransactionList';
import {Container, Typography, Box} from '@mui/material';

const App = () => (
    <Container>
        <Box sx={{my: 4}}>
            <Typography variant="h4" component="h1" gutterBottom>
                Transaction List
            </Typography>
            <TransactionList/>
        </Box>
    </Container>
);

export default App;
