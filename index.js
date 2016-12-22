exports.decorateConfig = (config) => {
  var defaultCSS = `
    .header_header {
      top: 0;
      right: 0;
      left: 0;
    }
    .tabs_borderShim {
      display: none;
    }
    .tabs_title {
      display: none;
    }
    .tabs_list {
      margin-left: 0;
    }
  `
  var windowsCSS = `
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

  return Object.assign({}, config, {
  css: `
      ${config.css || ''}
      ${process.platform === 'win32' ? windowsCSS : defaultCSS}
    `
  });
}

// Hide window controls on macOS
exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
  titleBarStyle: '',
  transparent: true,
  frame: false
})
