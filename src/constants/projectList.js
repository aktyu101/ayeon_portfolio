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
    description,
    siteUrl = null
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.startPeriod = startPeriod;
    this.endPeriod = endPeriod;
    this.type = type;
    this.description = description;
    this.siteUrl = siteUrl;
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
    "카페24",
    "PM",
    "https://seesay.co.kr/"
  ),
  new ProjectItem(
    1,
    "아로셀",
    "portfolio01.png",
    "2024.03",
    "2024.04",
    "카페24",
    "기획&PM",
    "https://www.arocell.co.kr/"
  ),
  new ProjectItem(
    1,
    "윤현몰",
    "portfolio01.png",
    "2023.04",
    "2023.05",
    "고도몰",
    "필터기능 추가 개발",
    "https://www.younhyunmall.com/"
  ),
  new ProjectItem(
    1,
    "국립아시아문화전당재단",
    "portfolio01.png",
    "2024.04",
    "2024.06",
    "카페24",
    "기획&PM",
    "https://accdlacshop.cafe24.com/"
  ),
  new ProjectItem(
    2,
    "브론테",
    "portfolio01.png",
    "2023.02",
    "2024.06",
    "고도몰",
    "기획&PM",
    "https://bronteshop.co.kr/"
  ),
  new ProjectItem(
    3,
    "나인위시스 2차",
    "portfolio01.png",
    "2024.04",
    "2024.05",
    "카페24",
    "PM",
    "https://ninewishes9.cafe24.com/"
  ),
  new ProjectItem(
    4,
    "가림",
    "portfolio01.png",
    "2024.02",
    "2024.04",
    "카페24",
    "PM",
    "https://gareem.com/"
  ),
  new ProjectItem(
    5,
    "라프리마몰",
    "portfolio01.png",
    "2024.03",
    "2024.04",
    "카페24",
    "PM",
    "https://laprima.co.kr/"
  ),
  new ProjectItem(
    6,
    "무슈제이",
    "portfolio01.png",
    "2024.01",
    "2024.03",
    "카페24",
    "PM",
    "https://m.monsieurj.co.kr/"
  ),
  new ProjectItem(
    1,
    "밀크바오밥",
    "portfolio01.png",
    "2024.01",
    "2024.03",
    "카페24",
    "des",
    "https://taenamstore.com/"
  ),
  new ProjectItem(
    2,
    "굽네몰",
    "portfolio01.png",
    "2023.05",
    "2023.11",
    "메이크샵",
    "기획&PM",
    "https://www.goobnemall.com/"
  ),
  new ProjectItem(
    3,
    "월드트로피",
    "portfolio01.png",
    "2023.04",
    "2023.11",
    "고도몰",
    "기획&PM",
    "http://www.wtrophy.com/"
  ),
  new ProjectItem(
    4,
    "나인위시스",
    "portfolio01.png",
    "2023.03",
    "2023.05",
    "메이크샵",
    "PM",
    null
  ),
  new ProjectItem(
    5,
    "알집매트",
    "portfolio01.png",
    "2023.02",
    "2023.05",
    "고도몰",
    "기획&PM",
    "alzipmat.com"
  ),
  new ProjectItem(
    6,
    "한국갤러리",
    "portfolio01.png",
    "2023.02",
    "2023.04",
    "고도몰",
    "PM",
    "https://www.hankookgallery.com/"
  ),
  new ProjectItem(
    6,
    "엘리케이파크",
    "portfolio01.png",
    "2022.12",
    "2023.02",
    "고도몰",
    "PM",
    "https://www.ellikbeauty.kr/"
  ),
  new ProjectItem(
    6,
    "호호에미",
    "portfolio01.png",
    "2022.10",
    "2022.12",
    "카페24",
    "PM",
    "https://hohoemis.com/"
  ),
  new ProjectItem(
    6,
    "셀티브코리아",
    "portfolio01.png",
    "2022.09",
    "2022.12",
    "고도몰",
    "기획&PM",
    "https://www.cellmall.co.kr/"
  ),
  new ProjectItem(
    6,
    "바이브랩",
    "portfolio01.png",
    "2022.09",
    "2022.11",
    "카페24",
    "PM",
    "https://vivelab.kr/"
  ),
  new ProjectItem(
    6,
    "비비드로우",
    "portfolio01.png",
    "2022.09",
    "2022.12",
    "고도몰",
    "기획&PM",
    null
  ),
  new ProjectItem(
    6,
    "하이생",
    "portfolio01.png",
    "2022.08",
    "2022.12",
    "카페24",
    "기획&PM",
    "https://www.hisaeng.co.kr/"
  ),
  new ProjectItem(
    6,
    "뉴틴몰",
    "portfolio01.png",
    "2022.08",
    "2022.09",
    "고도몰",
    "PM",
    "https://www.mynutine.com/"
  ),
  new ProjectItem(
    6,
    "로베르타피에리",
    "portfolio01.png",
    "2022.04",
    "2022.05",
    "고도몰",
    "기획",
    "https://www.robertapieri.kr/"
  ),
  new ProjectItem(
    6,
    "위드한옥",
    "portfolio01.png",
    "2022.04",
    "2022.05",
    "고도몰",
    "기획",
    "withhanok.com"
  ),
]);

// ■ 프로젝트명 :
// 담당 업무 :
// – 국/영문 스토리보드 기획, 정보구조(IA) 등 문서 작성
// – UX 개선을 고려하여 사용자 특성별로(학생, 교수, 방문객 등) 빠른 정보를 찾을 수 있도록 구성
