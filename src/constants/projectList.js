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
    "4007df3296384d86ac5db140298c13fe",
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
    "839ef992abbe406dbbfc39e6b7daab3b",
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
    "e10bf9bc4b55474aaa3410d181a59619",
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
    "0e7911b9341c4a5b9f3cc1bb0e05eb2d",
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
    "2-36c0e837aa3348c89dcf930df9db0c8f",
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
    "1ec067788d984c2b9f8261294090aae5",
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
    "f4d381614ec443dba7ea8eb89f8a2e72",
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
    "d36dad9ea2bf4e28ae79e7ec245b0d6f",
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
    "39648fbe0b7c497ab6dc7c313cf7bd01",
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
    "5c21f24bd7ce4e5294ad1be104ad17af",
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
    "f314595bf5c94da69a4f0c59ffa68541",
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
    "21e32bbff4864968889b2e271a890606",
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
    "e4800f588bca4d7880db842915c12f3a",
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
    "a67e4395c256451797a1baa1e99cf69c",
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
    "614f874700ff465599f2d17f0043efac",
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
    "14b7a5fb02e3497a949dd1169edc87d6",
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
    "25967203c5734d94ba18d769415c0962",
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
    "244e0ed73529467db5e36c2ca21c660c",
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
    "30697dd30de742fdbc4bf14fd3031997",
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
    "00fb334fe5df40118c6ca7bcc3df36e0",
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
    "93149eb4fd8c4703b6f0c520127cf367",
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
    "980c8ba772ed454081ed629d898de866",
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
    "e5f888c3dc2e4b96816043bab4f79d69",
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
    "7b8e5dbdc67643fc89c4d42a53119f9a",
    "자사 사이트 견적문의 페이지 리뉴얼",
    "hiseang.svg",
    "2024.01",
    "2022.03",
    "자체 호스팅",
    "기획&PM",
    "https://www.designwib.co.kr/web/estimate/estimatew.php",
    true,
    "자사 사이트 개편"
  ),
]);

// ■ 프로젝트명 :
// 담당 업무 :
// – 국/영문 스토리보드 기획, 정보구조(IA) 등 문서 작성
// – UX 개선을 고려하여 사용자 특성별로(학생, 교수, 방문객 등) 빠른 정보를 찾을 수 있도록 구성
