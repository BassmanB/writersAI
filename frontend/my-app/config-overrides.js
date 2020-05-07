const { addReactRefresh } = require('customize-cra-react-refresh')
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
   addLessLoader({
     javascriptEnabled: true,

    modifyVars: {
      '@layout-header-background': '#e4e9ee',  
      '@layout-body-background': '#fff',
      '@btn-primary-color': '#000000',
    },
     
   }),
   addReactRefresh({ disableRefreshCheck: true }),
  );









