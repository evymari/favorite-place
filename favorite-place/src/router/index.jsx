import { createBrowserRouter } from 'react-router-dom';
import Layout1 from '../layout/layout1';
import Home from '../pages/Home';
import Welcome from '../components/fontPage/Welcome';
import Login from '../components/login/Login';
import SignUp from '../components/login/SignUp';
import Pages1 from '../pages/Pages1';
import Account from '../pages/Account';

import EditSignUp from '../components/editPage/EditSignUp';



 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout1/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'welcome',
                element: <Welcome></Welcome>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'SignUp',
                element: <SignUp />
            },
            {
                path: 'Pages1',
                element: <Pages1 />
            },
            {
                path: 'Account',
                element:<Account/>
            },
            {
                path: 'EditSignUp',
                element:<EditSignUp/>
            },
           
           {
            path: 'Post',
            element:<Post />
           }
            
           
        ],
    },
]);

export default router;