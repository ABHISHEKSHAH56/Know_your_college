import axios from 'axios';
const url = 'https://know-your-college.herokuapp.com';
export const fetchcollege =()=>axios.get(`${url}/sec`);
export const fetchone=(id)=>axios.get(`${url}/overview/${id}`)
export const fetchfees=(id)=>axios.get(`${url}/fees/KYC004`)
export const fetchcourse=(id)=>axios.get(`${url}/course/KYC003`)
export const fetchcutoff=(raw)=>axios.get(`${url}/cutoff/KYC001/${raw.year}/${raw.cate}`)
