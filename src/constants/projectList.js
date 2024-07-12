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
    6,
    "시세이가구",
    "portfolio01.png",
    "2024.03",
    "2024.06",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    1,
    "아로셀",
    "portfolio01.png",
    "2024.03",
    "2024.04",
    "HTML&CSS",
    "기획&PM"
  ),
  new ProjectItem(
    1,
    "윤현몰",
    "portfolio01.png",
    "2023.04",
    "2023.05",
    "HTML&CSS",
    "필터기능 추가 개발"
  ),
  new ProjectItem(
    1,
    "국립아시아문화전당재단",
    "portfolio01.png",
    "2024.04",
    "2024.06",
    "HTML&CSS",
    "기획&PM"
  ),
  new ProjectItem(
    2,
    "브론테",
    "portfolio01.png",
    "2022.01",
    "2024.06",
    "JAVASCRIPT",
    "기획&PM"
  ),
  new ProjectItem(
    3,
    "나인위시스",
    "portfolio01.png",
    "2024.04",
    "2024.05",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    4,
    "가림",
    "portfolio01.png",
    "2024.02",
    "2024.04",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    5,
    "라프리마몰",
    "portfolio01.png",
    "2024.03",
    "2024.04",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    6,
    "무슈제이",
    "portfolio01.png",
    "2024.01",
    "2024.03",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    1,
    "밀크바오밥",
    "portfolio01.png",
    "2024.01",
    "2024.03",
    "HTML&CSS",
    "des"
  ),
  new ProjectItem(
    2,
    "굽네몰",
    "portfolio01.png",
    "2023.05",
    "2023.11",
    "JAVASCRIPT",
    "기획&PM"
  ),
  new ProjectItem(
    3,
    "월드트로피",
    "portfolio01.png",
    "2023.04",
    "2023.11",
    "HTML&CSS",
    "기획&PM"
  ),
  new ProjectItem(
    4,
    "나인위시스",
    "portfolio01.png",
    "2023.03",
    "2023.05",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    5,
    "알집매트",
    "portfolio01.png",
    "2023.02",
    "2023.05",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    6,
    "한국갤러리",
    "portfolio01.png",
    "2023.02",
    "2023.04",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    6,
    "엘리케이파크",
    "portfolio01.png",
    "2022.12",
    "2023.02",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    6,
    "호호에미",
    "portfolio01.png",
    "2022.10",
    "2022.12",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    6,
    "셀티브코리아",
    "portfolio01.png",
    "2022.09",
    "2022.12",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    6,
    "바이브랩",
    "portfolio01.png",
    "2022.09",
    "2022.11",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    6,
    "비비드로우",
    "portfolio01.png",
    "2022.09",
    "2022.12",
    "HTML&CSS",
    "기획&PM"
  ),
  new ProjectItem(
    6,
    "하이생",
    "portfolio01.png",
    "2022.08",
    "2022.12",
    "HTML&CSS",
    "기획&PM"
  ),
  new ProjectItem(
    6,
    "뉴틴몰",
    "portfolio01.png",
    "2022.08",
    "2022.09",
    "HTML&CSS",
    "PM"
  ),
  new ProjectItem(
    6,
    "로베르타피에리",
    "portfolio01.png",
    "2022.04",
    "2022.05",
    "HTML&CSS",
    "기획"
  ),
  new ProjectItem(
    6,
    "위드한옥",
    "portfolio01.png",
    "2022.04",
    "2022.05",
    "HTML&CSS",
    "기획"
  ),
]);
