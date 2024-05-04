class StudyItemList {
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

class StudyItem {
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
    return `/images/portfolio/${this.imageUrl}`;
  }

  get period() {
    return `${this.startPeriod}~${this.endPeriod}`;
  }
}

export const studyList = new StudyItemList([
  new StudyItem(
    1,
    "SQLD 1과목 요점 정리",
    "portfolio01.png",
    "2024.04.23",
    "2024.04.30",
    "SQL",
    "PART1 ~ PART5"
  ),
  new StudyItem(
    2,
    "study02",
    "portfolio01.png",
    "2024.01.01",
    "2024.04.05",
    "JAVASCRIPT",
    "des"
  ),
  new StudyItem(
    3,
    "study03",
    "portfolio01.png",
    "2024.04.05",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new StudyItem(
    4,
    "study04",
    "portfolio01.png",
    "2024.04.02",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new StudyItem(
    5,
    "study05",
    "portfolio01.png",
    "2024.04.03",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new StudyItem(
    6,
    "study06",
    "portfolio01.png",
    "2023.12.04",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new StudyItem(
    1,
    "study01",
    "portfolio01.png",
    "2024.04.04",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new StudyItem(
    2,
    "study02",
    "portfolio01.png",
    "2024.01.01",
    "2024.04.05",
    "JAVASCRIPT",
    "des"
  ),
  new StudyItem(
    3,
    "study03",
    "portfolio01.png",
    "2024.04.05",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new StudyItem(
    4,
    "study04",
    "portfolio01.png",
    "2024.04.02",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new StudyItem(
    5,
    "study05",
    "portfolio01.png",
    "2024.04.03",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
  new StudyItem(
    6,
    "study06",
    "portfolio01.png",
    "2023.12.04",
    "2024.04.05",
    "HTML&CSS",
    "des"
  ),
]);
