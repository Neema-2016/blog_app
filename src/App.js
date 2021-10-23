// import React from 'react';
// import './App.css';
// import useFetch from './useFetch';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // // , BrowserRouter as Route, Switch
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import { CssBaseline } from '@mui/material';

// // import Footer from './components/Footer';
// // import Header from './components/Header';
// // import logo from './logo.svg';

// // const routing = (
// //   <Router>
// //     <React.StrictMode>
// //       <Header/>
// //       <Switch>
// //         <Route exact path='/' component={App}/>
// //       </Switch>
// //       <Footer/>
// //     </React.StrictMode>

// //   </Router>
// // );
// // class App extends React.Component{
// //   const {data, loading, error} = useFetch();
// //   componentDidMount(){
// //     const apiUrl = 'http://127.0.0.1:8000/backend_api/blog_api';
// //     fetch(apiUrl)Fetch
// //         .then((response) => response.json())
// //         .then((data) => console.log(data));
// //   }
// //   render(){
// //     return<div>Example Connection</div>;

// //   }
// // }

import React from 'react'
import useFetch from './useFetch';

function App(){
  // const BASE_URL = "https://inshortsapi.vercel.app/news?category=science";
  // const BASE_URL = "https://reqres.in/api/users/";
  const BASE_URL = "http://127.0.0.1:8000/backend_api/blog_api";
  const {data, loading, error} = useFetch(BASE_URL);
  return (
    <div className="App">
      <h1>Custom React Hook (Data Fetching)</h1>
      {loading && <h3>loading...</h3>}
      {error && <h3>Error: Something went wrong</h3>}
      {/* {data} */}
      <div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>

      {/* <button onClick={refetch}>Refetch</button> */}
    </div>
  )
}

export default App;



// import React, {useState, useReducer} from 'react';
// import './App.css';

// const initialState = [
//   { 
//     id: Date.now(),
//     name:"Neema",
//     email:"neemamuganga20@gmail.com",
//   }
// ];

// function reducer(state, action){
//   switch(action.type){
//     case "add":
//       return [...state, action.payload];

//     case "delete":
//       return state.filter(contact => {
//         return contact.id !== action.payload.id;
//       });

//     default:
//       throw new Error();
//   }
// }
// export default function App(){
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   console.log(state);
//   const addContact = (e) => {
//     e.preventDefault();
//     const contact = {
//       id: Date.now(),
//       name,
//       email,
//     }
//     setName("");
//     setEmail("");
//     dispatch({type:"add", payload:contact})
//   }
//   return (
//     <div className="App">
//       <h3>useReducer</h3>
//       <form action="" onSubmit={addContact}>
//         <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
//         <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <div>
//           <button>Add Contact</button> 
//           </div>
//       </form>
//       <div>
//         <ul>
//           {state.map((contact) => {
//             return(
//               <li key={contact.key}>
//               <h2>{contact.name}</h2>
//               <h3>{contact.email}</h3>
//               <div>
//                 <button onClick={() => dispatch({type:'delete', payload:{id:contact.id}})}>Delete</button>
//               </div>
//             </li>
//             )
            
//           })}
//         </ul>
//       </div>
      
//     </div>
//   )

// }