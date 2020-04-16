const clrs = {
  cPrimaryDark: '#0F8F98',
  cPrimaryLight: '#B3E5E1',
  cFontDark: '#252836',
  cWhite: '#fff',
};

const size = {
  tablet: '1199px',
  mobile: '767px',
  mobileSmall: '450px',
};

const device = {
  tablet: `screen and (max-width: ${size.tablet})`,
  mobile: `screen and (max-width: ${size.mobile})`,
  mobileSmall: `screen and (max-width: ${size.mobileSmall})`,
};

export default {
  clrs,
  size,
  device,
};
