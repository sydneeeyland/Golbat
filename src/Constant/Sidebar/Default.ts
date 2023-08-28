export const Default = [
  {
    name: 'Dashboard',
    icon: 'bi bi-speedometer2',
    withChildren: false,
    url: '/',
    isHidden: false,
    target: 'null',
    children: [],
  },
  {
    name: 'Data entry',
    alias: 'dataentry',
    icon: 'bi bi-clipboard-data',
    withChildren: true,
    target: 'dataentry-nav',
    children: [
      {
        name: 'Pick ups',
        url: '/entry/pickups',
      },
      {
        name: 'Emptybox',
        url: '/entry/emptybox',
      },
      {
        name: 'Packinglist',
        url: '/entry/packinglist',
      },
      {
        name: 'Invoice',
        url: '/entry/invoice',
      },
    ],
  },
  {
    name: 'Departure',
    icon: 'bi bi-ui-checks-grid',
    withChildren: false,
    url: '/Departure',
    isHidden: false,
    target: 'null',
    children: [],
  },
  {
    name: 'Warehouse',
    alias: 'warehouse',
    icon: 'bi bi-truck',
    withChildren: true,
    target: 'warehouse-nav',
    children: [
      {
        name: 'Dispatch & Delivery',
        url: '/warehouse/dispatch',
      },
      {
        name: 'Fleet',
        url: '/warehouse/fleet',
      },
      {
        name: 'Roaming',
        url: '/warehouse/roaming',
      },
    ],
  },
  {
    name: 'Telemarketing',
    icon: 'bi bi-telephone-outbound',
    withChildren: false,
    url: '/telemarketing',
    isHidden: false,
    target: 'null',
    children: [],
  },
  {
    name: 'Settings',
    alias: 'settings',
    icon: 'bi bi-sliders',
    withChildren: true,
    target: 'settings-nav',
    children: [
      {
        name: 'Common',
        url: '/settings/common',
      },
      {
        name: 'Accounts',
        url: '/settings/accounts',
      },
    ],
  },
];
