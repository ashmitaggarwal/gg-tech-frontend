import React, { useState } from 'react';
import { TableCell, TableRow, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box } from '@mui/material';

const TransactionItem = ({ transaction }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
console.log(transaction.sender)
    return (
        <>
            <TableRow>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                <TableCell>{transaction.comments}</TableCell>
                <TableCell>
                    <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        View
                    </Button>
                </TableCell>
            </TableRow>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Transaction Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box>
                            <strong>ID:</strong> {transaction.id}
                        </Box>
                        <Box>
                            <strong>Date:</strong> {new Date(transaction.date).toLocaleDateString()}
                        </Box>
                        <Box>
                            <strong>Sender:</strong> {transaction?.sender.firstName} {transaction?.sender.lastName}
                        </Box>
                        <Box>
                            <strong>Recipient:</strong> {transaction?.recipient.firstName} {transaction?.recipient.lastName}
                        </Box>
                        <Box>
                            <strong>Amount:</strong> {transaction?.amount} {transaction?.currencyCd}
                        </Box>
                        <Box>
                            <strong>Comments:</strong> {transaction.comments}
                        </Box>
                        <Box>
                            <strong>Status:</strong> {transaction.status}
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default TransactionItem;
