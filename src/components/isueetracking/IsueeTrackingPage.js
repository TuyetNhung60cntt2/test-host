import * as React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

const IsueeTrackingPage = () => {
    return (
        <div>
            <Typography sx={{ fontSize: '1.5rem', color: '#185382', margin: '2rem 0 1rem 1rem' }}>Isuee Tracking</Typography>
            <Box>
                <Stack direction="row" spacing={1}>
                    <Button variant="outlined" size="small">All</Button>
                    <Button variant="outlined">Not standardized</Button>
                    <Button variant="outlined">Not started</Button>
                    <Button variant="outlined">Planned</Button>
                    <Button variant="outlined">Excuting</Button>
                    <Button variant="outlined">Completed</Button>
                    <Button variant="outlined">Standardized</Button>
                </Stack>
            </Box>
        </div>
    );
}
export default IsueeTrackingPage