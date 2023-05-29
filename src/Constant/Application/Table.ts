/* eslint-disable @typescript-eslint/no-explicit-any */
export const tableColumnConfig = {
  packinglist: [
    {
      accessorKey: 'origin',
      header: 'Origin',
      maxSize: 180,
      minSize: 180,
    },
    {
      accessorKey: 'company',
      header: 'Company',
      maxSize: 190,
      minSize: 190,
    },
    {
      accessorKey: 'agent',
      header: 'Agent',
      maxSize: 190,
      minSize: 190,
    },
    {
      accessorKey: 'boxNumber',
      header: 'Box #',
      maxSize: 150,
      minSize: 150,
    },
    {
      accessorKey: 'size',
      header: 'Size',
      maxSize: 100,
      minSize: 100,
    },
    {
      accessorKey: 'equivalent',
      header: 'Equivalent',
      maxSize: 160,
      minSize: 160,
    },
    {
      accessorFn: (row: any) =>
        `${row.lastName_s}, ${row.firstName_s} | ${row.contactNumber_s} | ${row.prefecture}, ${row.city_jp}, ${row.town_jp}, ${row.adderss_s}`,
      header: 'Sender',
      maxSize: 550,
      minSize: 550,
    },
  ],
  emptybox: [],
  dispatch: [
    {
      accessorKey: 'dispatchId',
      header: 'Dispatch #',
    },
    {
      accessorKey: 'isWhseToPier',
      header: 'Warehouse > Pier',
    },
    {
      accessorKey: 'boxCount',
      header: 'Boxes Carried',
    },
    {
      accessorFn: (row: any) => `${row.startDate} | ${row.endDate}`,
      header: 'Delivery',
    },
    {
      accessorKey: 'fleet',
      header: 'Fleet #',
    },
    {
      accessorKey: 'truckingCompany',
      header: 'Trucking Company',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
  ],
  fleet: [
    {
      accessorKey: 'truckingCompany',
      header: 'Company',
    },
    {
      accessorKey: 'plateNumber',
      header: 'Plate #',
    },
    {
      accessorFn: (row: any) => `${row.driver} | ${row.driverContactNumber}`,
      header: 'Driver',
    },
    {
      accessorFn: (row: any) => `${row.helper} | ${row.helperContactNumber}`,
      header: 'Helper',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
  ],
};
