class ProjectItemList {
  constructor(list = []) {
    this.list = list;
  }

  get listSortedByDate() {
    return [...this.list].sort((a, b) => {
      if (new Date(a.startPeriod) === new Date(b.startPeriod)) return 0;
      if (new Date(a.startPeriod) > new Date(b.startPeriod)) return -1;
      if (new Date(a.startPeriod) < new Date(b.startPeriod)) return 1;
    });
  }

  findListById(id) {
    return this.list.find((item) => item.id === id);
  }
}

class ProjectItem {
  constructor(
    id,
    name = "",
    imageUrl = null,
    startPeriod = null,
    endPeriod = null,
    type = null,
    description
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.startPeriod = startPeriod;
    this.endPeriod = endPeriod;
    this.type = type;
    this.description = description;
  }

  get url() {
    return `images/portfolio/${this.imageUrl}`;
  }

  get period() {
    return `${this.startPeriod}~${this.endPeriod}`;
  }
}

export const projectList = new ProjectItemList([
  new ProjectItem(
    1,
    "project01",
    "portfolio01.png",
    "2024.04.04",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new ProjectItem(
    2,
    "project02",
    "portfolio01.png",
    "2024.01.01",
    "2024.04.05",
    "JAVASCRIPT",
    "des"
  ),
  new ProjectItem(
    3,
    "project03",
    "portfolio01.png",
    "2024.04.05",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new ProjectItem(
    4,
    "project04",
    "portfolio01.png",
    "2024.04.02",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new ProjectItem(
    5,
    "project05",
    "portfolio01.png",
    "2024.04.03",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new ProjectItem(
    6,
    "project06",
    "portfolio01.png",
    "2023.12.04",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
]);
