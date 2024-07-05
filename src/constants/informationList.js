class InformationItemList {
  constructor(list = []) {
    this.list = list;
  }
}

class InformationItem {
  constructor(id, title = "", period = "") {
    this.id = id;
    this.title = title;
    this.period = period;
  }
}

export const careerList = new InformationItemList([
  new InformationItem(
    1,
    "인천예술고등학교 미술과 졸업",
    "2014년 03월 ~ 2017년 02월"
  ),
  new InformationItem(
    2,
    "단국대학교 예술 미술학부 동양화과 졸업 (학점 : 4.33/4.5)",
    "2018년 03월 ~ 2022년 02월"
  ),
  new InformationItem(
    3,
    "반응형 웹디자인 & 웹퍼블리셔 디지털 실무 양성과정 수료",
    "2021년 11월 ~ 2022년 04월"
  ),
  new InformationItem(
    4,
    "디자인위브 웹기획, PM (총 경력 : 2년 3개월)",
    "2022년 04월 ~ 2024년 07월"
  ),
]);
export const ricenceList = new InformationItemList([
  new InformationItem(1, "MOS 엑셀", "2009년 2월"),
  new InformationItem(2, "MOS 파워포인트", "2010년 8월"),
  new InformationItem(3, "웹디자인기능사", "2022년 03월"),
  new InformationItem(4, "GTQ 그래픽 기술자격 1급", "2022년 03월"),
  new InformationItem(5, "문화예술교육사", "2022년 10월"),
  new InformationItem(6, "SQLD", "2024년 6월"),
]);
