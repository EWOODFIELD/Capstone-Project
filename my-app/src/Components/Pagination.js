import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (
    <Stack spacing={2} id="page-stack">
      <Pagination count={10} variant="outlined" shape="rounded" id="my-pages" />
    </Stack>
  );
}