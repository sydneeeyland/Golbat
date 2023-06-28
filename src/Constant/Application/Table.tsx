/* eslint-disable @typescript-eslint/no-explicit-any */
export const tableColumnConfig = {
  packinglist: [
    {
      accessorKey: 'origin',
      header: 'Origin',
    },
    {
      accessorKey: 'company',
      header: 'Company',
    },
    {
      accessorKey: 'agent',
      header: 'Agent',
    },
    {
      accessorKey: 'boxNumber',
      header: 'Box #',

      enableClickToCopy: true,
    },
    {
      accessorKey: 'size',
      header: 'Size',

      // Cell: ({ cell }: any) => (
      //   <div
      //     style={{
      //       backgroundColor: '#E1E3EA',
      //       padding: '0.25rem',
      //       borderRadius: '6px',
      //       color: 'black',
      //     }}
      //   >
      //     {cell.getValue()}
      //   </div>
      // ),
    },
    {
      accessorKey: 'equivalent',
      header: 'Equivalent',
    },
    {
      accessorFn: (row: any) =>
        `${row.lastName_s}, ${row.firstName_s} | ${row.contactNumber_s} | ${row.prefecture}, ${row.city_jp}, ${row.town_jp}, ${row.adderss_s}`,
      header: 'Sender',
      enableClickToCopy: true,
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
  departure: [
    {
      accessorKey: 'shipmentId',
      header: 'Shipment',
    },
    {
      accessorKey: 'vessel',
      header: 'Vessel',
    },
    {
      accessorFn: (row: any) => `${row.departed} | ${row.departureDate}`,
      header: 'Departed',
    },
    {
      accessorKey: 'eta',
      header: 'Estimated Arrival',
    },
    {
      accessorFn: (row: any) => `${row.arrived} | ${row.arrivedDate}`,
      header: 'Arrived',
    },
    {
      accessorKey: 'billed',
      header: 'Billed',
    },
    {
      accessorKey: 'boxes',
      header: 'No. of Boxes',
    },
    {
      accessorKey: 'origin',
      header: 'Origin',
    },
    {
      accessorKey: 'destination',
      header: 'Destination',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
  ],
};
