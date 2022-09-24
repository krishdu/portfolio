import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./about";
import Posts from "./blog/posts";
import RepositoriesList from "./repositories-list";
import Home from "./home";
import TechStack from "./tech-stack";
import MyStory from "./my-story";
import ProjectDemo from "./project/project-app/project-demo";

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/about", exact: true, name: "About", component: About },
  {
    path: "/project",
    exact: true,
    name: "Project",
    component: ProjectDemo
  },
  {
    path: "/project/:id",
    exact: true,
    name: "Project",
    component: ProjectDemo
  },
  {
    path: "/github",
    exact: true,
    name: "Github",
    component: RepositoriesList
  },
  { path: "/blog", exact: true, name: "Blog", component: Posts },
  { path: "/tech-stack", exact: true, name: "Tools", component: TechStack },
  { path: "/story-timeline", exact: true, name: "My Story", component: MyStory }

];
const Navigation = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={props => <route.component {...props} />}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Navigation;
