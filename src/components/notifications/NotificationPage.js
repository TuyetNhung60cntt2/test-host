import * as React from 'react';
import { Typography } from '@mui/material';
import './Notification.scss';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Custom style table 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#eee',
        fontWeight: 'bold'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const notifications = [
    {
        no: 1,
        postedDate: "14-Apr-2022",
        postedBy: "	To To Phan",
        content: "DOC100191 has just updated a new revision follow to the new change of the 24h Meeting. Everyone read it and follows the procedure until we get the new document replaces. Any feedback, comments, or questions you can contact me via chat or post in the P&E.",
        deadline: "18-Apr-2022"
    },
    {
        no: 1,
        postedDate: "14-Apr-2022",
        postedBy: "	To To Phan",
        content: "DOC100191 has just updated a new revision follow to the new change of the 24h Meeting. Everyone read it and follows the procedure until we get the new document replaces. Any feedback, comments, or questions you can contact me via chat or post in the P&E.",
        deadline: "18-Apr-2022"
    },
    {
        no: 1,
        postedDate: "14-Apr-2022",
        postedBy: "	To To Phan",
        content: "DOC100191 has just updated a new revision follow to the new change of the 24h Meeting. Everyone read it and follows the procedure until we get the new document replaces. Any feedback, comments, or questions you can contact me via chat or post in the P&E.",
        deadline: "18-Apr-2022"
    },
    {
        no: 1,
        postedDate: "14-Apr-2022",
        postedBy: "	To To Phan",
        content: "DOC100191 has just updated a new revision follow to the new change of the 24h Meeting. Everyone read it and follows the procedure until we get the new document replaces. Any feedback, comments, or questions you can contact me via chat or post in the P&E.",
        deadline: "18-Apr-2022"
    },
    {
        no: 1,
        postedDate: "14-Apr-2022",
        postedBy: "	To To Phan",
        content: "DOC100191 has just updated a new revision follow to the new change of the 24h Meeting. Everyone read it and follows the procedure until we get the new document replaces. Any feedback, comments, or questions you can contact me via chat or post in the P&E.",
        deadline: "18-Apr-2022"
    },
]

const NotificationPage = () => {
    return (
        <div>
            <Typography sx={{ fontSize: '1.5rem', color: '#185382', margin: '2rem 0 1rem 1rem' }}>Notifications</Typography>
            <TableContainer component={Paper}>
                <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">No.</StyledTableCell>
                            <StyledTableCell align="center">Posted Date</StyledTableCell>
                            <StyledTableCell align="center">Posted By</StyledTableCell>
                            <StyledTableCell align="center">Content</StyledTableCell>
                            <StyledTableCell align="center">Deadline</StyledTableCell>
                            <StyledTableCell align="center">Who Have Not Confirmed Yet</StyledTableCell>
                            <StyledTableCell align="center">Confirm</StyledTableCell>
                            <StyledTableCell align="center">Edit/Remove</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notifications.map((row, index) => (
                            <StyledTableRow
                                key={index}
                                hover
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell align="center">{row.no}</StyledTableCell>
                                <StyledTableCell align="center">{row.postedDate}</StyledTableCell>
                                <StyledTableCell align="center">{row.postedBy}</StyledTableCell>
                                <StyledTableCell align="center">{row.content}</StyledTableCell>
                                <StyledTableCell align="center">{row.deadline}</StyledTableCell>
                                <StyledTableCell align="center"><img className='emp-img' src="./Image/Logo/icon.png" alt="" /></StyledTableCell>
                                <StyledTableCell align="center"> <Checkbox defaultChecked /></StyledTableCell>
                                <StyledTableCell align="center">
                                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={0.5}>
                                        <EditIcon color='primary' />
                                        <DeleteIcon color='error' />
                                    </Stack>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}
export default NotificationPage