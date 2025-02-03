import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DailyMatchCard from "../Components/GameTypeCard/DailyMatchCard/DailyMatchCard";
import Error404 from "../pages/Error/Error404";
import Users from "../pages/Users/Users";
import AddMony from "../pages/AddMony/AddMony";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error404></Error404>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/classicmatch",
                element: <DailyMatchCard></DailyMatchCard>
            },
            {
                path: "/users",
                element: <Users></Users>
            },
            {
                path: "/users/addmony",
                element: <AddMony></AddMony>
            }
        ]
    },
]);