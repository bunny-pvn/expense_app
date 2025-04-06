
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://bunny-pvn.github.io/expense_app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/expense_app"
  },
  {
    "renderMode": 2,
    "route": "/expense_app/AddExpense"
  },
  {
    "renderMode": 2,
    "route": "/expense_app/login"
  },
  {
    "renderMode": 2,
    "route": "/expense_app/viewexpense"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 537, hash: '6f8e77ffc38c4a67c3420db62f0720a59b7d459dfcf437e56d7b012c83288dc9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: 'f928634e6d419e205210fc4d9314de7efd444f77f9db0b9088e0ea355fdbef3f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'AddExpense/index.html': {size: 6877, hash: '87b30892570bf59862dc20a2912a836d9110dbacb523734862717de652c14bf3', text: () => import('./assets-chunks/AddExpense_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5000, hash: '07212a02e7debfb0ccfff913a65d0f36fdd8ada9e08e69847936efb6058ab78c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6877, hash: '87b30892570bf59862dc20a2912a836d9110dbacb523734862717de652c14bf3', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'viewexpense/index.html': {size: 6877, hash: '87b30892570bf59862dc20a2912a836d9110dbacb523734862717de652c14bf3', text: () => import('./assets-chunks/viewexpense_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
