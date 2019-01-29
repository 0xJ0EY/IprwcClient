export const environment = {
  production: true,
  api: '/api/',

  routes: {
    auth: {
      login: '/api/auth/login'
    },
    categories: '/api/category',
    subcategories: '/api/subcategory/:subcategory'
  }
};
