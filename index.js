exports.decorateConfig = (config) => {
  var macosCSS = `
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
      padding-left: 0;
    }
    .tabs_list::before {
      display: none;
    }
    .tab_tab::after {
      display: none;
    }
  `
  var defaultCSS = `
    .header_windowHeader {
      display: none;
    }
    .tabs_nav {
      top: 0;
    }
    .tabs_list {
      padding-left: 0;
    }
    .tabs_list::before {
      display: none;
    }
    .terms_terms {
      margin-top: 0;
    }
    .terms_termsShifted {
      margin-top: 34px;
    }
    .tab_tab::after {
      display: none;
    }
  `

  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      ${process.platform === 'darwin' ? macosCSS : defaultCSS}
    `
  });
}

// Hide window controls on macOS
exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
  titleBarStyle: '',
  transparent: true,
  frame: false
})

// Removes the redundant space on mac if there is only one tab
exports.getTabsProps = (parentProps, props) => {
  if (process.platform === 'darwin') {
    var classTermsList = document.getElementsByClassName('terms_terms')
    if (classTermsList.length > 0) {
      var classTerms = classTermsList[0]
      if (props.tabs.length <= 1) {
        classTerms.setAttribute('style', 'margin-top: 0')
      } else {
        classTerms.setAttribute('style', '')
      }
    }
  }
  return Object.assign({}, parentProps, props)
}
