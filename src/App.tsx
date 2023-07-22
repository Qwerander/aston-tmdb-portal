import { apiRequest } from './api/instanceApi';
import { Header } from './components/header/Header';
import { Layout } from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  
//   const url = 'https://jsonplaceholder.typicode.com/posts';
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmI4OWY0ZmQyMjM2NTBmZGUyOGJiOGRlYTNiOGVmNyIsInN1YiI6IjY0YmE3NjFlMTEzODZjMDBhZTBmOWJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nyhHVMdllzn1Dx5hw-b2nO17PrpMe1B6GKfDwYE3gR0'
//     },
//   };

// //   const url = 'https://api.themoviedb.org/3/movie/changes';
// // const options = {
// //   method: 'GET',
// //   headers: {
// //     accept: 'application/json',
// //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmI4OWY0ZmQyMjM2NTBmZGUyOGJiOGRlYTNiOGVmNyIsInN1YiI6IjY0YmE3NjFlMTEzODZjMDBhZTBmOWJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nyhHVMdllzn1Dx5hw-b2nO17PrpMe1B6GKfDwYE3gR0'
// //   }
// // };
  
//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error('error:' + err));
//   // async function getMovie() {
//   //   const movie = await apiRequest.get('/discover/movie')
//   //   return movie
//   // }
//   // console.log(getMovie());



const url = 'https://api.themoviedb.org/3/movie/changes';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmI4OWY0ZmQyMjM2NTBmZGUyOGJiOGRlYTNiOGVmNyIsInN1YiI6IjY0YmE3NjFlMTEzODZjMDBhZTBmOWJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nyhHVMdllzn1Dx5hw-b2nO17PrpMe1B6GKfDwYE3gR0'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path='a' element={<div>a</div>} />
          <Route path='b' element={<div>b</div>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
