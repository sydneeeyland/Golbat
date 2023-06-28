/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import MaterialReactTable, {
  MRT_ColumnDef,
  // MRT_ColumnFiltersState,
} from 'material-react-table';

import { MenuItem, ListItemIcon } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

import { tableColumnConfig } from '../../Constant/Application/Table';

type FormTableProps = {
  module: string;
  rowActions: boolean;
  rowSelection: boolean;
  rowFilters: boolean;
};

function FormTable({
  module,
  rowActions,
  rowSelection,
  rowFilters,
}: FormTableProps) {
  const data = useSelector((store: any) => store?.application[module]);
  const { loading } = useSelector((store: any) => store.application);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => tableColumnConfig[module as keyof typeof tableColumnConfig],
    [module]
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableDensityToggle={false}
      enableFullScreenToggle={false}
      enableHiding={false}
      enableGlobalFilter={false}
      enableColumnResizing
      layoutMode="grid"
      enableColumnFilters={rowFilters}
      enableGrouping
      enableColumnVirtualization
      enableRowVirtualization
      enableRowActions={rowActions}
      enableRowSelection={rowSelection}
      enableStickyHeader
      // onColumnFiltersChange={setColumnFilters}
      state={{ isLoading: loading }}
      initialState={{ density: 'compact', showColumnFilters: rowFilters }}
      muiTableProps={{ sx: { tableLayout: 'fixed' } }}
      muiTopToolbarProps={{ sx: { borderRadius: 6 } }}
      muiBottomToolbarProps={{
        sx: { borderRadius: 6 },
      }}
      muiTablePaperProps={{
        elevation: 0,
        sx: {
          borderRadius: 6,
        },
      }}
      renderRowActionMenuItems={() => [
        <MenuItem key={0} sx={{ m: 0 }} onClick={() => {}}>
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          Edit
        </MenuItem>,
        <MenuItem key={1} sx={{ m: 0 }}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          Delete
        </MenuItem>,
      ]}
    />
  );
}

export default FormTable;
