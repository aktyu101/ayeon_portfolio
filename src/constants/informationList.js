class InformationItemList {
  constructor(list = []) {
    this.list = list;
  }
}

class InformationItem {
  constructor(
    id,
    title = "",
    period = "",
    totalDuration = null,
    period2 = null,
    totalDuration2 = null
  ) {
    this.id = id;
    this.title = title;
    this.period = period;
    this.totalDuration = totalDuration;
    this.period2 = period2;
    this.totalDuration2 = totalDuration2;
  }
}

export const careerList = new InformationItemList([
  new InformationItem(
    1,
    "교내 근로장학(미래교육 2팀)·강의 촬영 보조",
    "2019.09~2019.12",
    "4개월",
    "2019.03~2019.06",
    "4개월"
  ),
  new InformationItem(
    2,
    "교내 근로장학(미래융합연구원)·사무보조",
    "2020.09~2021.07",
    "11개월",
    "2020.09~2021.07",
    "4개월"
  ),
  new InformationItem(
    3,
    "교내 근로장학(치과대학 교학행정팀)·사무보조",
    "2021.09~2021.11",
    "3개월"
  ),
  new InformationItem(
    4,
    "(주)아이마케팅·웹 기획&PM",
    "2022.04~2024.07",
    "2년 3개월"
  ),
]);

export const educationList = new InformationItemList([
  new InformationItem(1, "인천예술고등학교 미술과 졸업", "2014.03~2017.02"),
  new InformationItem(
    2,
    "단국대학교 예술 미술학부 동양화과 졸업",
    "2018.03~2022.02",
    "학점 : 4.33/4.5"
  ),
  new InformationItem(
    3,
    "반응형 웹디자인 & 웹퍼블리셔 디지털 실무 양성과정 수료",
    "2021.11~2022.04",
    "그린컴퓨터아카데미"
  ),
]);

export const ricenceList = new InformationItemList([
  new InformationItem(1, "MOS 엑셀", "2009.02"),
  new InformationItem(2, "MOS 파워포인트", "2010.08"),
  new InformationItem(3, "웹디자인기능사", "2022.03"),
  new InformationItem(4, "GTQ 그래픽 기술자격 1급", "2022.03"),
  new InformationItem(5, "문화예술교육사", "2022.10"),
  new InformationItem(6, "SQLD", "2024.06"),
]);

//
