export const main = {
  accentColor: '#3f51b5',
  buttonHoverColor: '#303f9f',
  buttonActiveColor: '#1c2769',
  mainTextColor: '#000000',
  secondaryTextColor: '#ffffff',
  mainBackgroundColor: '#cccccc',
  secondaryBackgroundColor: '#ffffff',
  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  appBarBoxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
  itemBoxShadow: `0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)`,
  buttonBoxShadow: `0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)`,
};

export const dark = {
  ...main,
  mainTextColor: '#ffffff',
  secondaryTextColor: '#000000',
  mainBackgroundColor: '#282c34',
  secondaryBackgroundColor: '#000000',
};
