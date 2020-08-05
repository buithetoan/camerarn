// Components and pages for routes
import Home from "./screens/Home";
import Camera from './screens/Camera';
import Show from "./screens/Show";


// Configure main authenticated routes

const routes = [
  {
    name: "Home",
    label: "Home",
    screen: Home,
  },
  {
    name: "Camera",
    label: "Camera",
    screen: Camera
  },
  {
    name: "Show",
    label: "Show",
    screen: Show
  }
];


let routesMap = {};
for(let r of routes){
  routesMap[r.name] = {
    screen: r.screen,
    navigationOptions: ({ navigation }) => ({
      title: r.label,
      drawerLabel: r.label
    })
  }
}

export {routes, routesMap};