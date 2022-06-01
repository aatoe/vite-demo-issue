module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', '> 1%']
      // grid: true
    }),
    require('postcss-pxtorem')({
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      // selectorBlackList: ['border', /.adm-*/, '.adm-tabs-tab-line']
      selectorBlackList: [
        // 'border',
        // 'adm-auto-center-content',
        // 'adm-toast-main',
        // 'adm-toast-main-text',
        // '.adm-tabs-tab-line'
        'adm'
      ]
    })
  ]
};
