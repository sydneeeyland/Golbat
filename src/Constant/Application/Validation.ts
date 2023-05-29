export const TextInputTypes = {
  DEFAULT: 'default',
  BOX_NO: 'boxno',
  CONTACT_PH: 'contact_ph',
};

export const RegexExpression = {
  default: '([A-Z])',
  boxno: '^([0-9]{3}[A-Z]{2}[0-9]{3})',
  contact_ph: `^(09)\\d{9}$`,
};

export const InvalidFeedback = {
  boxno: 'Incorrect Format, Example: 123AB123',
  contact_ph: 'Incorrect Format, Example: 09396341125',
};
