export const Countries = [
  { label: 'Japan', value: 116 },
  { label: 'Australia', value: 12 },
  { label: 'South Korea', value: 122 },
  { label: 'Philippines', value: 178 },
];

export const CargoType = [
  { label: 'Personal Effects', value: 1 },
  { label: 'Ramen', value: 2 },
];

export const Company = [
  { label: 'Subarashi', value: 1 },
  { label: 'Chenvel', value: 2 },
];

export const cargoSize = [
  { label: '0.125', value: '0.125' },
  { label: '0.250', value: '0.250' },
  { label: '0.375', value: '0.375' },
  { label: '0.500', value: '0.500' },
  { label: '0.625', value: '0.625' },
  { label: '0.750', value: '0.750' },
  { label: '0.825', value: '0.825' },
  { label: '1.00', value: '1.00' },
  { label: '1.125', value: '1.125' },
  { label: '1.250', value: '1.250' },
];

export const TextInputTypes = {
  DEFAULT: 'default',
  BOX_NO: 'boxno',
  CONTACT_PH: 'contact_ph',
};

export const RegexByInputType = {
  default: '([A-Z])',
  boxno: '^([0-9]{3}[A-Z]{2}[0-9]{3})',
  contact_ph: '',
};

export const InvalidFeedback = {
  boxno: 'example: 123AB123',
};

export const reduxModule = {
  PACKINGLIST: 'packinglist',
  EMPTYBOX: '',
  PICKUPS: '',
};

export const moduleInitialState = {
  packinglist: {
    origin: 116,
    cargoType: 1,
    company: null,
    agent: null,
    boxNumber: null,
    trackingNumber: null,
    forwarder: null,
    size: null,
    equivalent: null,
    lengthWidthHeight: null,
    cbm: null,
    serialNumber: null,
    lastName_s: null,
    firstName_s: null,
    contactNumber_s: null,
    postalCode_s: null,
    prefecture: null,
    city_jp: null,
    town_jp: null,
    adderss_s: null,
    lastName_c: null,
    firstName_c: null,
    contactNumber_c: null,
    postalCode_c: null,
    province: null,
    city_ph: null,
    address_c: null,
    memo: null,
    deliveryNotes: null,
  },
};

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
    },
    {
      accessorKey: 'size',
      header: 'Size',
    },
    {
      accessorKey: 'equivalent',
      header: 'Equivalent',
    },
  ],
};
