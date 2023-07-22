import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';

export const apiRequest = axios.create({
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmI4OWY0ZmQyMjM2NTBmZGUyOGJiOGRlYTNiOGVmNyIsInN1YiI6IjY0YmE3NjFlMTEzODZjMDBhZTBmOWJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nyhHVMdllzn1Dx5hw-b2nO17PrpMe1B6GKfDwYE3gR0'
  },
  baseURL: API_URL,
});


export interface IResponse<T> {
  data: T;
}