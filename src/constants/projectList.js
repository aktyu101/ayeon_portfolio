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
    role,
    siteUrl = null,
    mainDisplay = false,
    description = ""
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.startPeriod = startPeriod;
    this.endPeriod = endPeriod;
    this.type = type;
    this.role = role;
    this.siteUrl = siteUrl;
    this.mainDisplay = mainDisplay;
    this.description = description;
  }

  get url() {
    return `images/main/${this.imageUrl}`;
  }
  get period() {
    return `${this.startPeriod}~${this.endPeriod}`;
  }
}

export const projectList = new ProjectItemList([
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "시세이가구",
    "hiseang.svg",
    "2024.03",
    "2024.06",
    "카페24",
    "PM",
    "https://seesay.co.kr/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "아로셀",
    "hiseang.svg",
    "2024.03",
    "2024.04",
    "카페24",
    "기획&PM",
    "https://www.arocell.co.kr/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "윤현몰",
    "hiseang.svg",
    "2023.04",
    "2023.05",
    "고도몰",
    "필터기능 추가 개발",
    "https://www.younhyunmall.com/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "국립아시아문화전당재단",
    "hiseang.svg",
    "2024.04",
    "2024.06",
    "카페24",
    "기획&PM",
    "https://accdlacshop.cafe24.com/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "브론테",
    "hiseang.svg",
    "2023.02",
    "2024.06",
    "고도몰",
    "기획&PM",
    "https://bronteshop.co.kr/",
    true,
    "Website Renewal Project"
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "나인위시스 2차",
    "hiseang.svg",
    "2024.04",
    "2024.05",
    "카페24",
    "PM",
    "https://ninewishes9.cafe24.com/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "가림",
    "hiseang.svg",
    "2024.02",
    "2024.04",
    "카페24",
    "PM",
    "https://gareem.com/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "라프리마몰",
    "hiseang.svg",
    "2024.03",
    "2024.04",
    "카페24",
    "PM",
    "https://laprima.co.kr/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "무슈제이",
    "hiseang.svg",
    "2024.01",
    "2024.03",
    "카페24",
    "PM",
    "https://m.monsieurj.co.kr/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "밀크바오밥",
    "hiseang.svg",
    "2024.01",
    "2024.03",
    "카페24",
    "기획&PM",
    "https://taenamstore.com/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "굽네몰",
    "hiseang.svg",
    "2023.05",
    "2023.11",
    "메이크샵",
    "기획&PM",
    "https://www.goobnemall.com/",
    true,
    "Website Renewal Project"
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "월드트로피",
    "hiseang.svg",
    "2023.04",
    "2023.11",
    "고도몰",
    "기획&PM",
    "http://www.wtrophy.com/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "나인위시스",
    "hiseang.svg",
    "2023.03",
    "2023.05",
    "메이크샵",
    "PM",
    null,
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "알집매트",
    "hiseang.svg",
    "2023.02",
    "2023.05",
    "고도몰",
    "기획&PM",
    "alzipmat.com",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "한국갤러리",
    "hiseang.svg",
    "2023.02",
    "2023.04",
    "고도몰",
    "PM",
    "https://www.hankookgallery.com/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "엘리케이파크",
    "hiseang.svg",
    "2022.12",
    "2023.02",
    "고도몰",
    "PM",
    "https://www.ellikbeauty.kr/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "호호에미",
    "hiseang.svg",
    "2022.10",
    "2022.12",
    "카페24",
    "PM",
    "https://hohoemis.com/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "셀티브코리아",
    "hiseang.svg",
    "2022.09",
    "2022.12",
    "고도몰",
    "기획&PM",
    "https://www.cellmall.co.kr/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "바이브랩",
    "hiseang.svg",
    "2022.09",
    "2022.11",
    "카페24",
    "PM",
    "https://vivelab.kr/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "비비드로우",
    "hiseang.svg",
    "2022.09",
    "2022.12",
    "고도몰",
    "기획&PM",
    null,
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "하이생",
    "hiseang.svg",
    "2022.08",
    "2022.12",
    "카페24",
    "기획&PM",
    "https://www.hisaeng.co.kr/",
    true,
    "Website Renewal Project"
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "뉴틴몰",
    "hiseang.svg",
    "2022.08",
    "2022.09",
    "고도몰",
    "PM",
    "https://www.mynutine.com/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "로베르타피에리",
    "hiseang.svg",
    "2022.04",
    "2022.05",
    "고도몰",
    "기획",
    "https://www.robertapieri.kr/",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "위드한옥",
    "hiseang.svg",
    "2022.04",
    "2022.04",
    "고도몰",
    "기획",
    "withhanok.com",
    false
  ),
  new ProjectItem(
    "fc629b849ed848c291baf888d4cd6a1a",
    "test",
    "hiseang.svg",
    "2024.01",
    "2022.06",
    "고도몰",
    "기획&PM",
    "buzzbetr4446.godomall.com",
    true,
    "자사 사이트 개편"
  ),
]);

// ■ 프로젝트명 :
// 담당 업무 :
// – 국/영문 스토리보드 기획, 정보구조(IA) 등 문서 작성
// – UX 개선을 고려하여 사용자 특성별로(학생, 교수, 방문객 등) 빠른 정보를 찾을 수 있도록 구성
