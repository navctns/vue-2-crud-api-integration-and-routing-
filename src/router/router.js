import Vue from 'vue';
import VueRouter from 'vue-router';
import EmployeeDetailsPage from '../views/EmployeeDetailsPage';
import Employees from '../views/TheEmployees';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Employees },
    { path: '/employee-details/:id', component: EmployeeDetailsPage, props: true }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
