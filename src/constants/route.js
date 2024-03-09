class RouteItem {
  constructor(name, link = null, children = null) {
    this.name = name;
    this.link = link;
    this.children = children;
  }
}

export const information = new RouteItem("Information", "/information", [
  new RouteItem("Skills", "/skills"),
  new RouteItem("Education & Career", "/education & Career"),
  new RouteItem("Licence", "/licence"),
]);

export const portfolio = new RouteItem("Portfolio", "/portfolio", [
  new RouteItem("Develop Project", "/portfolio/project", [
    new RouteItem("1", "/portfolio/project/1"),
    new RouteItem("2", "/portfolio/project/2"),
    new RouteItem("3", "/portfolio/project/3"),
    new RouteItem("4", "/portfolio/project/4"),
  ]),
  new RouteItem("Project Manager", ""),
]);

export const routes = [information, portfolio];
