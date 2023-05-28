/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import MaterialReactTable, {
  MRT_ColumnDef,
  // MRT_ColumnFiltersState,
} from 'material-react-table';

import { tableColumnConfig } from '../../Constant/Application/Common';

type FormTableProps = {
  module: string;
};

function FormTable({ module }: FormTableProps) {
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
      enableGrouping
      enableColumnVirtualization
      enableRowVirtualization
      enableRowSelection
      enableStickyHeader
      // onColumnFiltersChange={setColumnFilters}
      state={{ isLoading: loading }}
      initialState={{ density: 'compact', showColumnFilters: true }}
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
    />
  );
}

export default FormTable;
