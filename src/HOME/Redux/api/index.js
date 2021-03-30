import axios from 'axios';
const url = 'https://know-your-college.herokuapp.com';
export const fetchcollege =()=>axios.get(`${url}/sec`);
export const fetchone=(id)=>axios.get(`${url}/overview/${'KYC001'}`)
export const fetchfees=(id)=>axios.get(`${url}/fees/${'KYC001'}`)
export const fetchcourse=(id)=>axios.get(`${url}/course/${'KYC001'}`)
export const fetchcutoff=(raw)=>axios.get(`${url}/cutoff/${'KYC001'}/${raw.year}/${raw.cate}`)
