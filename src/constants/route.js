import { projectList } from "./projectList";
import { studyList } from "./studyList";

class RouteItem {
  constructor(name, link = null, children = null) {
    this.name = name;
    this.link = link;
    this.children = children;
  }
}

export const information = new RouteItem(
  "INFORMATION",
  "/information"
  // [
  //   new RouteItem("Skills", "/information"),
  //   new RouteItem("Education & Career", "/information"),
  //   new RouteItem("Licence", "/information"),
  // ]
);

// export const portfolio = new RouteItem("PORTFOLIO", "/portfolio", [
//   projectList.listSortedByDate.map(
//     ({ id, name }, index) =>
//       new RouteItem(`${index + 1}` + `. ${name}`, `project/${id}`)
//   ),
// ]);
// export const projectManager = new RouteItem(
//   "PROJECT MANAGER",
//   "https://iced-harrier-d67.notion.site/170c4b0fd5d4428d83090945d7faf62a?pvs=4"
// );

export const portfolio = new RouteItem("PROJECT", "/portfolio", [
  new RouteItem(
    "Develop Project",
    "/portfolio/project",
    projectList.listSortedByDate.map(
      ({ id, name }, index) =>
        new RouteItem(`${index + 1}` + `. ${name}`, `/portfolio/project/${id}`)
    )
  ),
]);

export const study = new RouteItem("STUDY", "/study", [
  new RouteItem(
    "study",
    "/sutdy/project",
    studyList.listSortedByDate.map(
      ({ id, name }, index) =>
        new RouteItem(`${index + 1}` + `. ${name}`, `/study/project/${id}`)
    )
  ),
]);

export const routes = [information, portfolio, study];
