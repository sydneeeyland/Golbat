import { NoSsr, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Call } from '@mui/icons-material';

import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from '../../Middleware/ErrorFallback';

type Props = {
  contacts: {
    id: number;
    phone: string;
    name: string;
    company: string;
    agent: string;
    lastOrderDate: string;
    datePL: string;
    isCalling: boolean;
  }[];
};

const columns: GridColDef[] = [
  { field: 'phone', headerName: 'Phone', sortable: false },
  { field: 'name', headerName: 'Name', sortable: false },
  { field: 'company', headerName: 'Company', sortable: false },
  { field: 'agent', headerName: 'Agent', sortable: false },
  {
    field: 'lastOrderDate',
    headerName: 'Last order',
    sortable: false,
  },
  {
    field: 'datePL',
    headerName: 'Packinglist Date',
    sortable: false,
  },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    renderCell: () => {
      return (
        <Button variant="csi-secondary" startIcon={<Call />} size="small">
          Call
        </Button>
      );
    },
  },
];

function ContactList({ contacts }: Props) {
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataGrid
          rows={contacts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          autoHeight
        />
      </ErrorBoundary>
    </NoSsr>
  );
}

export default ContactList;
