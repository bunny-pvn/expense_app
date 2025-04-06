
export default {
  basePath: 'https://bunny-pvn.github.io/expense_app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
