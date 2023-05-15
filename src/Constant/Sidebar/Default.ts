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
    icon: 'bi bi-sliders',
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
];
