import Dashboard from "./Pages/Seller/Dashboard/Dashboard";
import Analytics from "./Pages/Seller/Analytics/Analytics";
import Gigs from "./Pages/Seller/Gigs/Gigs";
import TaskList from "./Pages/Seller/TaskList/TaskList";
import FindJob from "./Pages/Seller/FindJob/FindJob";
import History from "./Pages/Seller/History/History";
import Messages from "./Pages/Seller/Messages/Messages";
import UserProfile from "./Pages/Seller/UserProfile/UserProfile";

export const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: <Dashboard />,
    seller: true,
    sellerHeader: true,
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: <Analytics />,
    seller: true,
    sellerHeader: true,
  },
  {
    path: "/gigs",
    name: "Gigs",
    component: <Gigs />,
    seller: true,
    sellerHeader: true,
  },
  {
    path: "/task-list",
    name: "Task List",
    component: <TaskList />,
    seller: true,
    sellerHeader: true,
  },
  {
    path: "/find-job",
    name: "Find job",
    component: <FindJob />,
    seller: true,
    sellerHeader: true,
  },
  {
    path: "/history",
    name: "History",
    component: <History />,
    seller: true,
    sellerHeader: true,
  },
  {
    path: "/messages",
    name: "Messages",
    component: <Messages />,
    seller: true,
    sellerHeader: true,
  },
  {
    path: "/user-profile",
    name: "User Profile",
    component: <UserProfile />,
    seller: true,
    sellerHeader: false,
  },
];

export const sellerdRoutes = routes.filter((route) => route.seller === true);
export const sellerdHeaderNav = routes.filter(
  (route) => route.sellerHeader === true
);
