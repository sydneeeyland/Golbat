/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';

import { tableColumnConfig } from '../../Constant/Application/Common';

type FormTableProps = {
  module: string;
};

function FormTable({ module }: FormTableProps) {
  // TODO ADD API CALL MUTATION THEN FETCH DATA VIA STORE
  const data = useSelector((store: any) => store?.application[module]);
  const [loading, setLoading] = useState(true);

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => tableColumnConfig[module as keyof typeof tableColumnConfig],
    [module]
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableDensityToggle={false}
      enableFullScreenToggle={false}
      enableHiding={false}
      enableGlobalFilter={false}
      enableRowSelection
      enableStickyHeader
      state={{ isLoading: loading }}
      initialState={{ density: 'compact', showColumnFilters: true }}
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
