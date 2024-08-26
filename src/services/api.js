import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchTotalSales = () => axios.get(`${API_URL}/sales/total`);
export const fetchSalesGrowthRate = () => axios.get(`${API_URL}/sales/growth-rate`);
export const fetchNewCustomers = () => axios.get(`${API_URL}/customers/new`);
export const fetchRepeatCustomers = () => axios.get(`${API_URL}/customers/repeat`);
export const fetchCustomerGeography = () => axios.get(`${API_URL}/customers/geography`);
export const fetchCustomerLifetimeValue = () => axios.get(`${API_URL}/customers/lifetime-value`);
