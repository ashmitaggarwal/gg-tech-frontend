import React, {useState, useEffect} from 'react';
import {getTransactions} from '../services/api';
import TransactionItem from './TransactionItem';
import {
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,Box
} from '@mui/material';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        if (startDate && endDate) {
            fetchTransactions(startDate, endDate);
        }
    }, [startDate, endDate]);

    const fetchTransactions = async (startDate, endDate) => {
        try {
            const data = await getTransactions(startDate, endDate);
            setTransactions(data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const handleDateChange = (e) => {
        const {name, value} = e.target;
        if (name === 'startDate') setStartDate(value);
        if (name === 'endDate') setEndDate(value);
    };
    console.log(transactions, 'transactions');
    return (
        <div>
            <Box display="flex" flexDirection="row" alignItems="center" gap={2} mb={2}>

                <TextField
                    label="Start Date"
                    type="date"
                    InputLabelProps={{shrink: true}}
                    name="startDate"
                    value={startDate}
                    onChange={handleDateChange}
                />
                <TextField
                    label="End Date"
                    type="date"
                    InputLabelProps={{shrink: true}}
                    name="endDate"
                    value={endDate}
                    onChange={handleDateChange}
                />
                <Button variant="contained" color="primary" onClick={() => fetchTransactions(startDate, endDate)}>
                    Fetch Transactions
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions?.map((transaction) => (
                            <TransactionItem key={transaction.id} transaction={transaction}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TransactionList;
