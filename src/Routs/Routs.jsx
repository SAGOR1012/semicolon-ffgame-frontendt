import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import DailyMatchCard from "../Components/GameTypeCard/DailyMatchCard/DailyMatchCard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/classicmatch",
                element: <DailyMatchCard></DailyMatchCard>
            }
        ]
    },
]);