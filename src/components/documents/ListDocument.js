import * as React from 'react';
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


const documents = [
    {
        docId: 1,
        projectId: 1,
        iterationId: 1,
        title: "Test",
        createBy: 1,
        createAt: '2022/12/28',
        updateAt: '2022/12/28'
    },
    {
        docId: 1,
        projectId: 1,
        iterationId: 1,
        title: "Test",
        createBy: 1,
        createAt: '2022/12/28',
        updateAt: '2022/12/28'
    },
    {
        docId: 1,
        projectId: 1,
        iterationId: 1,
        title: "Test",
        createBy: 1,
        createAt: '2022/12/28',
        updateAt: '2022/12/28'
    },
    {
        docId: 1,
        projectId: 1,
        iterationId: 1,
        title: "Test",
        createBy: 1,
        createAt: '2022/12/28',
        updateAt: '2022/12/28'
    },
    {
        docId: 1,
        projectId: 1,
        iterationId: 1,
        title: "Test",
        createBy: 1,
        createAt: '2022/12/28',
        updateAt: '2022/12/28'
    }
]

export default function ListDocument() {
    return (
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Doc.Id</StyledTableCell>
                        <StyledTableCell align="center">Project</StyledTableCell>
                        <StyledTableCell align="center">Title</StyledTableCell>
                        <StyledTableCell align="center">Created By</StyledTableCell>
                        <StyledTableCell align="center">Created At</StyledTableCell>
                        <StyledTableCell align="center">Last Updated</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {documents.map((row, index) => (
                        <StyledTableRow
                            key={index}
                            hover
                        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell align="center">
                                {row.docId}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.projectId}</StyledTableCell>
                            <StyledTableCell align="center">{row.title}</StyledTableCell>
                            <StyledTableCell align="center">{row.createBy}</StyledTableCell>
                            <StyledTableCell align="center">{row.createAt}</StyledTableCell>
                            <StyledTableCell align="center">{row.updateAt}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}