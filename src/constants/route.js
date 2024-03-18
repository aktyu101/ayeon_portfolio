class RouteItem {
  constructor(name, link = null, children = null) {
    this.name = name;
    this.link = link;
    this.children = children;
  }
}

export const information = new RouteItem("Information", "/information", [
  new RouteItem("Skills", "/information"),
  new RouteItem("Education & Career", "/information"),
  new RouteItem("Licence", "/information"),
]);

export const portfolio = new RouteItem("Portfolio", "/portfolio", [
  new RouteItem("Develop Project", "/portfolio/project", [
    new RouteItem("01", "/portfolio/project/1"),
    new RouteItem("02", "/portfolio/project/2"),
    new RouteItem("03", "/portfolio/project/3"),
    new RouteItem("04", "/portfolio/project/4"),
  ]),
  new RouteItem(
    "Project Manager",
    "https://iced-harrier-d67.notion.site/170c4b0fd5d4428d83090945d7faf62a?pvs=4"
  ),
]);

export const routes = [information, portfolio];
