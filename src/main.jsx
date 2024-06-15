import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import TodosPage from './pages/TodosPage.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <TodosPage />,
//       },
//     ],
//   },
//   {
//     path: '/loginpage',
//     element: <App />,
//     children: [
//       {
//         path: '/loginpage',
//         element: <LoginPage />,
//       },
//     ],
//   },
//   {
//     path: '/registerpage',
//     element: <App />,
//     children: [
//       {
//         path: '/registerpage',
//         element: <RegisterPage />,
//       },
//     ],
//   },
// ]);

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <TodosPage />,
      },
      {
        path: '/loginpage',
        element: <LoginPage />,
      },
      {
        path: '/registerpage',
        element: <RegisterPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
