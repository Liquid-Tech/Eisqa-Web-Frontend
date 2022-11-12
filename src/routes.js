import { BarChart, Dashboard } from "@mui/icons-material";
import Stats from "./Pages/Stats/Stats";
import Users from "./Pages/Users/Users";

export const routes = [
  {
    path: "/admin/statistics",
    name: "Statistics",
    description: "Dashboard",
    icon: () => <Dashboard />,
    component: <Stats />,
  },
  {
    path: "/admin/users",
    name: "Users",
    icon: () => <BarChart />,
    component: <Users />,
  },
];
