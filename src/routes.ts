import Dashboard from "./pages/Dashboard.svelte";
import Welcome from "./pages/Welcome.svelte";
import NewTask from "./pages/NewTask.svelte";
import TaskDetail from "./pages/TaskDetail.svelte";
import Licenses from "./pages/Licenses.svelte";

import Empty from "./components/Empty.svelte";

export const masterRoutes = {
    "/welcome": Welcome,
    "/tasks": Dashboard,
    "/tasks/*": Dashboard,
    "/licenses": Licenses,
    // Catch-all
    // This is optional, but if present it must be the last
    "*": Dashboard
};

export const detailRoutes = {
    "/tasks/new": NewTask,
    "/tasks/:id": TaskDetail,
    "*": Empty
};