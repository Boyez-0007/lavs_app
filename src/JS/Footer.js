import * as React from 'react';
import Pagination from '@mui/material/Pagination';
export default function PaginationOutlined() {
  return (
    <div spacing={2} > 
      <Pagination count={10} variant="outlined" color="primary" />
    </div>
  );
}