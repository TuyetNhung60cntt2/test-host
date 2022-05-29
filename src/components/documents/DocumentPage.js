import * as React from 'react';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListDocument from './ListDocument'
import Select from '@mui/material/Select';

const DocumentPage = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={0.5} sx={{ margin: '2rem 1rem 1rem 1rem' }}>
        <Typography sx={{ fontSize: '1.5rem', color: '#185382' }}>Documents</Typography>
        <Box>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Button variant="contained" sx={{ backgroundColor: '#185382' }}>Probem</Button>
            <Button variant="contained" sx={{ backgroundColor: '#185382' }}>Add note</Button>
          </Stack>
        </Box>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        marginBottom={1}
      >
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
          <InputLabel id="demo-select1-small" sx={{ fontSize: '0.95rem' }}>Projects</InputLabel>
          <Select
            sx={{ height: '33px' }}
            labelId="demo-select1-small"
            id="demo-select1-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
          <InputLabel id="demo-select2-small" sx={{ fontSize: '0.95rem' }}>Iterations</InputLabel>
          <Select
            sx={{ height: '33px' }}
            labelId="demo-select2-small"
            id="demo-select2-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
          <InputLabel id="demo-select3-small" sx={{ fontSize: '0.95rem' }}>Types</InputLabel>
          <Select
            sx={{ height: '33px' }}
            labelId="demo-select3-small"
            id="demo-select3-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <ListDocument />

    </div>
  );
}
export default DocumentPage