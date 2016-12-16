exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .header_windowHeader {
        display: none;
      }
      .tabs_nav {
        top: 0;
      }
      .terms_terms {
        margin-top: 0;
      }
      .terms_termsShifted {
        margin-top: 34px;
      }
    `
  });
}
