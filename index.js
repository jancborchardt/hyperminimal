exports.decorateConfig = (config) => {
    if (process.platform === 'win32') {
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
    if (process.platform === 'darwin') {
        return Object.assign({}, config, {
            css: `
                ${config.css || ''}
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
        });
    }
}

// Hide window controls on macOS
exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
    titleBarStyle: '',
    transparent: true,
    frame: false
})
