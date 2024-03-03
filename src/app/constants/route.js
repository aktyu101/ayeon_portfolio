class RouteItem {
  constructor(name, link = null, children = null) {
    this.name = name;
    this.link = link;
    this.children = children;
  }
}

export const routes = [
  new RouteItem("Information", "/information", [
    new RouteItem("Skills", ""),
    new RouteItem("Education & Career", ""),
    new RouteItem("Licence", ""),
  ]),
  new RouteItem("Portfolio", "/portfolio", [
    new RouteItem("Develop Project", "", [
      new RouteItem("01", ""),
      new RouteItem("02", ""),
      new RouteItem("03", ""),
      new RouteItem("04", ""),
    ]),
    new RouteItem("Project Manager", ""),
  ]),
];
