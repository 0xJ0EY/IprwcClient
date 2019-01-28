export const environment = {
  production: true,

  routes: {
    auth: {
      login: '/api/auth/login'
    },
    categories: '/api/category',
    subcategories: '/api/subcategory/:subcategory'
  }
};
