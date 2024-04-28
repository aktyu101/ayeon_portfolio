"use client";

import DetailTemplate from "../DetailTemplate";
import { twMerge } from "tailwind-merge";

export default function Detail1() {
  return <DetailTemplate id={1} contents={<Contents />} />;
}

const Contents = () => {
  const titleStyle = twMerge(
    "text-[20px] mb-[30px] leading-[40px] indent-5 bg-slate-200"
  );
  const listTitleStyle = twMerge("text-[18px] leading-[40px] text-[#2742BE] ");
  const descriptionStyle = twMerge("text-[#333] indent-5 leading-[25px]");
  const numberingSrtyle = twMerge("text-[17px] pb-[5px]");
  const groupListStyle = twMerge("pb-[30px]");
  const pointTextStyle = twMerge("text-[red]");
  const sgroupListStyle = twMerge("pb-[15px]");

  return (
    <>
      <ul>
        <li>
          <p className={titleStyle}>PART1. 데이터 모델의 이해</p>
          <ul className="pl-[10px]">
            {/* 1 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>모델링의 정의</h2>
              <p className={descriptionStyle}>
                -복잡한 현실세계를 일정한 표기법에 따라 단순화해 표현하는 일
              </p>
              <p className={descriptionStyle}>
                -현실 세계의 비즈니스 프로세스와 데이터 요구 사항을 추상적이고
                구조화된 형태로 표현하는 과정
              </p>
              <p className={descriptionStyle}>
                -데이터 베이스의 구조와 관계를 정의하며, 이를 통해 데이터의
                저장, 조작, 관리 방법을 명확하게 정의
              </p>
            </li>
            {/* 2 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>모델링의 특징</h2>
              <ul>
                {/* 단순화 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>1. 단순화(Simplification)</p>
                  <p className={descriptionStyle}>
                    -현실을 단순화하여 핵심 요소에 집중하고
                    <span className={pointTextStyle}>
                      {" "}
                      불필요한 세부 사항을 제거
                    </span>
                  </p>
                  <p className={descriptionStyle}>
                    -단순화를 통해 복잡한 현실 세계를 이해하고 표현하기 쉬워짐
                  </p>
                </li>
                {/* 추상화 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>2. 추상화(Abstraction)</p>
                  <p className={descriptionStyle}>
                    -현실세계를 일정한 형식에 맞추어{" "}
                    <span className={pointTextStyle}> 간략하게</span> 대략적으로
                    표현하는 과정
                  </p>
                  <p className={descriptionStyle}>
                    -다양한 현상을 일정한 양식인 표기법에 따라 표현
                  </p>
                </li>
                {/* 명확화 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>3. 명확화(Clarity)</p>
                  <p className={descriptionStyle}>
                    -대상에 대한 애매모호함을 최대한 제거하고
                    <span className={pointTextStyle}>
                      {" "}
                      정확하게 현상을 기술
                    </span>
                    하는 과정
                  </p>
                  <p className={descriptionStyle}>
                    -명확화를 통해 모델을 이해하는 이들의 의사소통을 원활히 함
                  </p>
                </li>
              </ul>
            </li>
            {/* 3 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>데이터 모델링 유의점</h2>
              <ul>
                {/* 중복 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>1. 중복(Duplication)</p>
                  <p className={descriptionStyle}>
                    -한 테이블 또는 여러 테이블에 같은 정보를 저장하지 않도록
                    설계
                  </p>
                </li>
                {/* 비유연성 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>2. 비유연성(Inflexibility)</p>
                  <p className={descriptionStyle}>
                    -사소한 업무 변화에 대해서도 잦은 모델 변경이 되지 않도록
                    주의
                  </p>
                  <p className={descriptionStyle}>
                    -데이터 정의를 프로세스와 분리
                  </p>
                </li>
                {/* 비일관성 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>3. 비일관성(Inconsistency)</p>
                  <p className={descriptionStyle}>
                    -데이터베이스 내의 정보가 모순되거나 상반된 내용을 갖는
                    상태를 의미
                  </p>
                  <p className={descriptionStyle}>
                    -데이터간 상호연관 관계를 명확히 정의
                  </p>
                  <p className={descriptionStyle}>-데이터 품질 관리 필요</p>
                  <p className={descriptionStyle}>
                    -데이터의 중복이 없더라도 비일관성은 발생할 수 있음
                  </p>
                </li>
              </ul>
            </li>
            {/* 4 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>데이터 모델링의 3가지 요소</h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    -대상(Entity): 업무가 관리하고자 하는 대상(객체)
                  </p>
                  <p className={descriptionStyle}>
                    -속성(Attribute): 대상들이 갖는 속성(하나의 특징으로 정의될
                    수 있는 것)
                  </p>{" "}
                  <p className={descriptionStyle}>
                    -관계(Relationship): 대상들 간의 관계
                  </p>
                </li>
              </ul>
            </li>
            {/* 5 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>데이터 모델링의 3단계</h2>
              <ul>
                {/* 개념적 모델링 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>1. 개념적 모델링</p>
                  <p className={descriptionStyle}>
                    -업무 중심적이고 포괄적(전사적)인 수준의 모델링
                  </p>
                  <p className={descriptionStyle}>
                    <span className={pointTextStyle}>
                      -추상화 수준이 가장 높음
                    </span>
                  </p>
                  <p className={descriptionStyle}>
                    -업무를 분석한 뒤 업무의 핵심 엔터티(Entity)를 추출하는 단계
                  </p>
                  <p className={descriptionStyle}>
                    -도출된 핵심 엔터티(Entity)들과의 관계들을 표현하기 위해 ERD
                    작성
                  </p>
                </li>
                {/* 논리적 모델링 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>2. 논리적 모델링</p>
                  <p className={descriptionStyle}>
                    -개념적 모델링의 결과를 토대로 세부속성, 식별자, 관계 등을
                    표현하는 단계
                  </p>
                  <p className={descriptionStyle}>
                    -데이터 구조를 정의하기 때문에 비슷한 업무나 프로젝트에서
                    동일한 형태의 데이터 사용
                  </p>
                  <p className={descriptionStyle}>
                    -동일한 논리적 모델을 사용하는 경우 쿼리도 재사용 가능
                  </p>
                  <p className={descriptionStyle}>-데이터 정규화 수행</p>
                  <p className={descriptionStyle}>
                    -재사용성이 높은 논리적 모델은 유지보수가 용이해짐
                  </p>
                </li>
                {/* 물리적 모델링 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>3. 물리적 모델링</p>
                  <p className={descriptionStyle}>
                    -논리 모델링이 끝나면 이를 직접 물리적으로 생성하는 과정
                  </p>
                  <p className={descriptionStyle}>
                    -데이터베이스 성능, 디스크 저장구조, 하드웨어의 보안성,
                    가용성 등을 고려
                  </p>
                  <p className={descriptionStyle}>
                    -가장 구체적인 데이터 모델링
                  </p>
                  <p className={descriptionStyle}>
                    -데이터의 중복이 없더라도 비일관성은 발생할 수 있음
                  </p>
                  <p className={descriptionStyle}>
                    <span className={pointTextStyle}>
                      -추상화 수준이 가장 낮음(가장 구체적인 모델링이므로)
                    </span>
                  </p>
                </li>
              </ul>
            </li>
            {/* 6 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>
                데이터 모델의 표기법(ERD : Entity Relationship Diagram)
              </h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    -엔터티와 엔터티 간의 관계를 시각적으로 표현한 다이어그램
                  </p>
                  <p className={descriptionStyle}>
                    -1976년 피터 첸이 만든 표기법, 데이터 모델링 표준으로 사용
                  </p>
                </li>
              </ul>
            </li>
            {/* 7 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>ERD 작성 절차(6단계)</h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    1. 엔터티를 도출한 후 그린다
                  </p>
                  <p className={descriptionStyle}>2. 엔터티 배치</p>
                  <p className={descriptionStyle}>3. 엔터티 간의 관계를 설정</p>
                  <p className={descriptionStyle}>4. 관계명을 서술</p>
                  <p className={descriptionStyle}>5. 관계의 참여도 기술</p>
                  <p className={descriptionStyle}>6. 관계의 필수 여부를 확인</p>
                </li>
              </ul>
            </li>
            {/* 8 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>엔터티의 개념</h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    -현실 세계에서 독립적으로 식별 가능한 객체나 사물을 나타냄
                  </p>
                  <p className={descriptionStyle}>
                    -엔터티는 업무상 분석해야 하는 대상(Instance)들로 이루어진
                    집합
                  </p>
                  <p className={descriptionStyle}>
                    -인스턴스는 엔터티의 특정한 속성 값들로 구성되며, 엔터티의
                    개념을 현실에서 구체적으로 나타낸 것 (예) 엔터티와 속성,
                    인스턴스 등의 관계)
                  </p>
                  <p className="rounded-lg bg-slate-100 p-[20px] my-[10px] w-auto">
                    <p className={descriptionStyle}>-엔터티(Entity) : 학생</p>
                    <p className={descriptionStyle}>
                      -속성(Attribute) : 학번, 이름, 학과 등
                    </p>
                    <p className={descriptionStyle}>
                      -식별자(Identifier) : 학번(고유한 학번으로 각 학생을 식별)
                    </p>
                    <p className={descriptionStyle}>
                      -인스턴스 : 특정 학생의
                      데이터(학번:32181528/이름:홍길동/학과:컴퓨터공학)
                    </p>
                  </p>
                </li>
              </ul>
            </li>
            {/* 9 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>엔터티의 특징</h2>
              <ul>
                {/* 01 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>
                    1. 유일한 식별자에 의해 식별 가능
                  </p>
                  <p className={descriptionStyle}>
                    -인스턴스가 식별자에 의해 한 개씩만 존재하는 지 검증 필요
                  </p>
                  <p className={descriptionStyle}>
                    -유일한 식별자는 그 엔터이의 인스턴스만의 고유 이름(ex.
                    이름은 동명이인이 있을 수 있으므로 사번, 학번 등이
                    고유식별자)
                  </p>
                </li>
                {/* 02 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>
                    2. 해당 업무에 필요하고 관리하고자 하는 정보
                  </p>
                  <p className={descriptionStyle}>
                    -설계하는 업무의 시스템 구축에 필요한 정보여야 함(ex. 학교
                    시스템 구축 시 학생 정보 필요, 다른 업무엔 학생 정보 불필요)
                  </p>
                </li>
                {/* 03 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>3. 인스턴스들의 집합</p>
                  <p className={descriptionStyle}>
                    -영속적으로 존재하는 2개 이상의 인스턴스의 집합
                  </p>
                  <p className={descriptionStyle}>
                    -인스턴스가 한 개 밖에 없는 엔터티는 집합이 아니므로 성립이
                    안 됨
                  </p>
                </li>
                {/* 04 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>
                    4. 엔터티는 반드시 속성을 지님
                  </p>
                  <p className={descriptionStyle}>
                    -각 엔터티는 2개 이상의 속성을 지님
                  </p>
                  <p className={descriptionStyle}>
                    -하나의 인스턴스는 각각의 속성들에 대한 1개의 속성 값만을
                    가짐
                  </p>
                  <p className={descriptionStyle}>
                    {""}(ex. 학생 엔터티에서 한 학생의 데이터(인스턴스)의
                    이름(속성)정보에는 반드시 한 값만 저장됨)
                  </p>
                </li>
                {/* 05 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>
                    5.엔터티는 업무 프로세스에 의해 이용
                  </p>
                  <p className={descriptionStyle}>
                    -업무적으로 필요해 선정했지만 실제 이용되지 않으면 잘못
                    설계된 것
                  </p>
                  <p className={descriptionStyle}>
                    -모델링 시 발견하기 어려운 경우 데이터 모델 검증이나 상관
                    모델링 시 단위 프로세스 교차검증으로 문제 도출
                  </p>
                  <p className={descriptionStyle}>
                    -누락된 프로세스의 경우 추후 해당 프로세스 추가
                  </p>
                  <p className={descriptionStyle}>
                    -반대로 사용되지 않는 고립 엔터티는 제거 필요
                  </p>
                </li>
                {/* 06 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>
                    6. 다른 엔터티와 최소 1개 이상의 관계 성립
                  </p>
                  <p className={descriptionStyle}>
                    -엔터티는 업무적 연관성을 갖고 다른 엔터티와 연관의 의미를
                    가짐
                  </p>
                  <p className={descriptionStyle}>
                    -관계가 없는 엔터티 도출은 부적절한 엔터티이거나 적절한
                    관계를 찾지 못한 것
                  </p>
                </li>
              </ul>
            </li>
            {/* 10 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>엔터티의 분류</h2>
              <h2 className={listTitleStyle + "block text-[red]"}>
                {"1)"} 유형과 무형에 따른 분류
              </h2>
              <ul>
                {/* 01 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>1. 유형엔터티</p>
                  <p className={descriptionStyle}>
                    -물리적 형태가 있음(실체가 있는 대상)
                  </p>
                  <p className={descriptionStyle}>
                    -안정적이며 지속적으로 활용되는 엔터티
                  </p>
                  <p className={descriptionStyle}>
                    -업무적으로 구분하기가 가장 용이한 엔터티(ex. 사원, 물품,
                    감사 등)
                  </p>
                </li>
                {/* 02 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>2. 개념엔터티</p>
                  <p className={descriptionStyle}>-물리적인 형태 없음</p>
                  <p className={descriptionStyle}>
                    -관리해야 할 개념적 정보로부터 구분되는 엔터티(ex. 조직,
                    보험상품 등)
                  </p>
                </li>
                {/* 03 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>3. 사건엔터티</p>
                  <p className={descriptionStyle}>
                    -업무 수행에 따라 발생하는 엔터티
                  </p>
                  <p className={descriptionStyle}>
                    -발생량이 많고 각종 통계자료에 이용(ex. 주문, 청구, 미납 등)
                  </p>
                </li>
              </ul>
              <h2 className={listTitleStyle + "block text-[red]"}>
                {"2)"} 발생 시점에 따른 분류
              </h2>
              <ul>
                {/* 01 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>1. 기본엔터티</p>
                  <p className={descriptionStyle}>
                    -그 업무에 원래 존재하는 정보
                  </p>
                  <p className={descriptionStyle}>
                    -다른 엔터티와 관계에 의해 생성되지 않고 독립적으로 생성
                  </p>
                  <p className={descriptionStyle}>
                    -타 엔터티의 부모 역할을 하는 엔터티
                  </p>
                  <p className={descriptionStyle}>
                    -다른 엔터티로부터 주식별자를 상속받지 않고 자신의 고유한
                    주식별자를 가짐(ex. 사원, 부서, 고객, 상품 등)
                  </p>
                </li>
                {/* 02 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>2. 중심엔터티</p>
                  <p className={descriptionStyle}>
                    -기본엔터티로부터 발생되고 그 업무에서 중심적인 역할
                  </p>
                  <p className={descriptionStyle}>
                    -많은 데이터가 발생되고 다른 엔터티와의 관계를 통해 많은
                    행위 엔터티를 생성(ex. 계약, 사고, 청구, 주문, 매출 등)
                  </p>
                </li>
                {/* 03 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>3. 행위엔터티</p>
                  <p className={descriptionStyle}>
                    -2개 이상의 부모엔터티로부터 발생
                  </p>
                  <p className={descriptionStyle}>
                    -자주 내용이 바뀌거나 데이터 양이 증가
                  </p>
                  <p className={descriptionStyle}>
                    -분석 초기 단계보다는 상세 설계 단계나 프로세스와
                    상관모델링을 진행하면서 도출
                  </p>
                  <p className={descriptionStyle}>
                    {""}ex. 주문(고객과 상품 엔터티로 부터 발생하므로
                    행위엔터티이기도 함), 사원변경이력, 이력 등
                  </p>
                </li>
              </ul>
            </li>
            {/* 11 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>엔터티의 명명</h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    1. 현업에서 사용하는 용어 사용
                  </p>
                  <p className={descriptionStyle}>
                    2. 가능하면 약자 사용은 자제
                  </p>
                  <p className={descriptionStyle}>3. 단수 명사 사용</p>
                  <p className={descriptionStyle}>
                    4. 모든 엔터티에서 유일하게 이름 부여
                  </p>
                  <p className={descriptionStyle}>
                    5. 엔터티 생성 의미대로 이름 부어
                  </p>
                </li>
              </ul>
            </li>
            {/* 12 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>
                엔터티, 인스턴스, 속성값의 관계
              </h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    -한 개의 엔터티는 2개 이상의 인스턴스의 집합이어야
                    한다(하나의 테이블은 두 개 이상의 행을 가짐)
                  </p>
                  <p className={descriptionStyle}>
                    -한 개의 엔터티는 2개 이상의 속성을 갖는다(하나의 테이블은
                    두 개 이상의 컬럼으로 구성됨)
                  </p>
                  <p className={descriptionStyle}>
                    -한 개의 속성은 1개의 속성값을 갖는다(각 컬럼의 값은
                    하나씩만 삽입 가능)
                  </p>
                  <p className={descriptionStyle}>
                    -속성은 엔터티에 속한 엔터티에 대한 자세하고 구체적인 정보를
                    나타냄, 각 속성은 구체적인 값을 가짐
                  </p>
                </li>
              </ul>
            </li>
            {/* 13 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>속성의 특징</h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    -반드시 해당 업무에서 필요하고 관리하고자 하는 정보여야
                    한다.
                  </p>
                  <p className={descriptionStyle}>
                    -정해진 주식별자에 함수적 종속성을 가져야 한다.
                  </p>
                  <p className={descriptionStyle}>
                    -하나의 속성은 한 개의 값만을 가진다(한 컬럼의 값은 각
                    인스턴스마다 하나씩만 저장)
                  </p>
                  <p className={descriptionStyle}>
                    -하나의 속성에 여러 개의 값이 있는 다중값일 경우 별도의
                    엔터티를 이용하여 분리한다
                  </p>
                  <p className={descriptionStyle}>
                    -하나의 인스턴스는 속성마다 반드시 하나의 속성값을 가진다
                  </p>
                  <p className={descriptionStyle}>
                    {""}-{">"}각 속성이 하나의 값을 갖고 있음을 의미(속성의
                    원자성)
                  </p>
                </li>
              </ul>
            </li>
            {/* 14 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>함수적 종속성</h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    -한 속성의 값이 다른 속성의 값에 종속적인 관계를 갖는 특징을
                    말함
                  </p>
                  <p className={descriptionStyle}>
                    -즉 어떤 속성 A의 값에 의해 다른 속성 B도 유일하게
                    결정된다면, B는 A에 함수적으로 종속됐다 하고,
                  </p>
                  <p className={descriptionStyle}>
                    -이를 수식으로 나타내면 A-{">"}B라고 표현함
                  </p>
                </li>
              </ul>
              <h2 className={listTitleStyle + "block text-[red]"}>
                {"1)"} 완전 함수적 종속
              </h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    -특정 칼럼이 기본기에 대해 완전히 종속될 때를 말함
                  </p>
                  <p className={descriptionStyle}>
                    -PK를 구성하는 컬럼이 2개 이상일 경우 PK(중복되지 않는 값)
                    값 모두에 의한 중속관계를 나타낼 때 완전 함수 종속성 만족
                  </p>
                  <p className={descriptionStyle}>
                    {"ex"}(주문번호 + 제품번호)에 의해 수량 컬럼의 값이 결정됨
                  </p>
                </li>
              </ul>
              <h2 className={listTitleStyle + "block text-[red]"}>
                {"2)"} 부분 함수적 종속
              </h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    -기본키 전체가 아니라, 기본키 일부에 대해 종속될 때를 말함
                  </p>
                  <p className={descriptionStyle}>
                    {"ex"}.수강기록 테이블에서 학생번호와 과목이 PK라고 가정할
                    때, 과목에 의해서도 교수가 결정되면 부분 함수적 종속 관계
                  </p>
                </li>
              </ul>
            </li>
            {/* 15 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>속성의 분류</h2>
              <h2 className={listTitleStyle + "block text-[red]"}>
                {"1)"} 속성의 특징에 따른 분류
              </h2>
              <ul>
                {/* 01 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>1. 기본 속성</p>
                  <p className={descriptionStyle}>
                    -업무로부터 추출된 모든 속성
                  </p>
                  <p className={descriptionStyle}>
                    -엔터티에 가장 일반적으로 많이 존재하는 속성
                  </p>
                  <p className={descriptionStyle}>{""}ex. 원금, 예치기간 등</p>
                </li>
                {/* 02 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>2. 설계속성</p>
                  <p className={descriptionStyle}>
                    -기본 상품 외에 업무를 규칙화하기 위해 새로 만들어지거나
                    기본 속성을 변형하여 만들어지는 속성
                  </p>
                  <p className={descriptionStyle}>
                    {""}ex. 상품코드, 지점코드, 에금분류 등
                  </p>
                </li>
                {/* 03 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>3. 파생속성</p>
                  <p className={descriptionStyle}>
                    -다른 속성에 의해 만들어지는 속성
                  </p>
                  <p className={descriptionStyle}>
                    -일반적으로 계산된 값들이 해당
                  </p>
                  <p className={descriptionStyle}>
                    -데이터 정합성을 유지하기 위해 가급적 적게 정의하는 것이
                    좋음
                  </p>
                  <p className={descriptionStyle}>
                    {""}ex. 합계, 평균, 이자 등
                  </p>
                </li>
              </ul>
              <h2 className={listTitleStyle + "block text-[red]"}>
                {"2)"} 엔터티 구성방식에 따른 분류
              </h2>
              <ul>
                {/* 01 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>1. PK(Primary Key, 기본키)</p>
                  <p className={descriptionStyle}>
                    -인스턴스를 식별할 수 있는 속성
                  </p>
                  <p className={numberingSrtyle}>2. FK(Foreign Key, 외래키)</p>
                  <p className={descriptionStyle}>
                    -다른 엔터티와의 관계에서 포함된 속성(참조관계를 가질 때)
                  </p>
                  <p className={numberingSrtyle}>3. 일반 속성</p>
                  <p className={descriptionStyle}>
                    -엔터티에 포함되어 있고 Pk/FK에 포함되지 않는 속성
                  </p>
                </li>
                {/* 02 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>2. 중심엔터티</p>
                  <p className={descriptionStyle}>
                    -기본엔터티로부터 발생되고 그 업무에서 중심적인 역할
                  </p>
                  <p className={descriptionStyle}>
                    -많은 데이터가 발생되고 다른 엔터티와의 관계를 통해 많은
                    행위 엔터티를 생성(ex. 계약, 사고, 청구, 주문, 매출 등)
                  </p>
                </li>
                {/* 03 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>3. 행위엔터티</p>
                  <p className={descriptionStyle}>
                    -2개 이상의 부모엔터티로부터 발생
                  </p>
                  <p className={descriptionStyle}>
                    -자주 내용이 바뀌거나 데이터 양이 증가
                  </p>
                  <p className={descriptionStyle}>
                    -분석 초기 단계보다는 상세 설계 단계나 프로세스와
                    상관모델링을 진행하면서 도출
                  </p>
                  <p className={descriptionStyle}>
                    {""}ex. 주문(고객과 상품 엔터티로 부터 발생하므로
                    행위엔터티이기도 함), 사원변경이력, 이력 등
                  </p>
                </li>
              </ul>
              <h2 className={listTitleStyle + "block text-[red]"}>
                {"3)"} 분해 여부에 따른 속성
              </h2>
              <ul>
                {/* 01 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>1. 단일 속성</p>
                  <p className={descriptionStyle}>-하나의 의미로 구성된 경우</p>
                  <p className={descriptionStyle}>{""}ex. 회원 ID, 이름 등</p>
                  <p className={numberingSrtyle}>2. 복합 속성</p>
                  <p className={descriptionStyle}>
                    -여러개의 의미로 구성된 경우
                  </p>
                  <p className={descriptionStyle}>
                    {""}ex. 주소(시, 군, 구 등으로 분해 가능) 등
                  </p>
                  <p className={numberingSrtyle}>3. 다중값 속성</p>
                  <p className={descriptionStyle}>
                    -속성에 여러 개의 값을 가질 수 있는 경우
                  </p>
                  <p className={descriptionStyle}>
                    -다중값 속성은 엔터티로 분해
                  </p>
                  <p className={descriptionStyle}>{""}ex. 상품 리스트 등</p>
                </li>
              </ul>
            </li>
            {/* 16 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>속성의 명명규칙</h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    1. 해당 업무에서 사용하는 이름을 부여
                  </p>
                  <p className={descriptionStyle}>
                    2. 서술식 속성명은 사용하지 않음
                  </p>
                  <p className={descriptionStyle}>
                    3. 약어의 사용으 가급적 제한
                  </p>
                  <p className={descriptionStyle}>
                    4. 전체 데이터 모델에서 유일한 명칭
                  </p>
                </li>
              </ul>
            </li>
            {/* 17 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>도메인(Domain)</h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    -도메인은 각 속성이 가질 수 있는 값의 범위를 의미함
                  </p>
                  <p className={descriptionStyle}>
                    -엔터티 내에서 속성에 대한 데이터 타입과 크기, 제약사항을
                    지정하는 것이다.
                  </p>
                </li>
              </ul>
            </li>
            {/* 18 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>관계의 개념</h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    -관계는 엔터티간의 연관성을 나타낸 개념
                  </p>
                  <p className={descriptionStyle}>
                    -관계를 정의할 때는 인스턴스(각 행 데이터)간의 논리적인
                    연관성을 파악하여 정의
                  </p>
                  <p className={descriptionStyle}>
                    -엔터티를 어떻게 정의하느냐에 따라 변경되기도 함
                  </p>
                </li>
              </ul>
            </li>
            {/* 19 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>관계의 종류</h2>
              <ul>
                {/* 존재적 관계 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>1. 존재적 관계</p>
                  <p className={descriptionStyle}>
                    -한 엔터티의 존재가 다른 엔터티의 존재에 영향을 미치는 관계
                  </p>
                  <p className={descriptionStyle}>
                    -엔터티 간의 연관된 상태를 의미
                  </p>
                  <p className={descriptionStyle}>
                    {""} ex. 부서 엔터티가 삭제되면 사원 엔터티의 존재가 영향을
                    미침
                  </p>
                </li>
                {/* 행위적 관계 */}
                <li className={sgroupListStyle}>
                  <p className={numberingSrtyle}>2. 행위적 관계</p>
                  <p className={descriptionStyle}>
                    -엔터티 간의 어떤 행위가 있는 것을 의미
                  </p>
                  <p className={descriptionStyle}>
                    {""} ex. 고객 엔터티의 행동에 의해 주문 엔터티가 발생
                  </p>
                  <p className={descriptionStyle}>
                    * ERD 에서는 존재관계와 행위관계를 구분하지 않는다.
                  </p>
                </li>
              </ul>
            </li>
            {/* 20 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>관계의 구성</h2>
              <ul>
                {/* 존재적 관계 */}
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>1. 관계명</p>
                  <p className={descriptionStyle}>2. 차수(Cardinality)</p>
                  <p className={descriptionStyle}>3. 선택성(Optionality)</p>
                </li>
              </ul>
            </li>
            {/* 21 */}
            <li className={groupListStyle}>
              <h2 className={listTitleStyle}>관계의 차수(Cardinality)</h2>
              <ul>
                <li className={sgroupListStyle}>
                  <p className={descriptionStyle}>
                    -한 엔터티의 레코드(인스턴스)가 다른 엔터티의
                    레코드(인스턴스)와 어떻게 연결되는지를 나타내는 표현
                  </p>
                  <p className={descriptionStyle}>
                    -주로 1:1, 1:N, N:M 등으로 표현
                  </p>
                  {/* 1대 1 관계 */}
                  <p className="rounded-lg bg-slate-100 p-[20px] my-[10px] w-auto">
                    <p className={descriptionStyle}>1) 1 대 1 관계</p>
                    <p className={descriptionStyle}>완전 1 대 1 관계</p>
                    <p className={descriptionStyle}>
                      - 하나의 엔터티에 관계되는 엔터티가 반드시 하나로 존재하는
                      경우
                    </p>
                    <p className={descriptionStyle}>
                      {""}ex. 사원은 반드시 소속 부서가 있어야 함
                    </p>
                    <br />
                    <p className={descriptionStyle}>선택적 1대 1 관계</p>
                    <p className={descriptionStyle}>
                      - 하나의 엔터티에 관계되는 엔터티가 하나이거나 없을 수
                      있는 경우
                    </p>
                    <p className={descriptionStyle}>
                      {""}ex. 사원은 하나의 소속 부서가 있거나 아직 발령전이면
                      없을 수 있음
                    </p>
                  </p>
                  {/* 1대 N 관계 */}
                  <p className="rounded-lg bg-slate-100 p-[20px] my-[10px] w-auto">
                    <p className={descriptionStyle}>2) 1 대 N 관계</p>
                    <p className={descriptionStyle}>
                      엔터티 하나의 행에 다른 엔터티의 값이 여러 개 있을 수 있는
                      관계
                    </p>
                    <p className={descriptionStyle}>
                      {""}ex. 고객은 여러 개 계좌를 소유할 수 있음
                    </p>
                    <br />
                    <p className={descriptionStyle}>선택적 1대 1 관계</p>
                    <p className={descriptionStyle}>
                      - 하나의 엔터티에 관계되는 엔터티가 하나이거나 없을 수
                      있는 경우
                    </p>
                    <p className={descriptionStyle}>
                      {""}ex. 사원은 하나의 소속 부서가 있거나 아직 발령전이면
                      없을 수 있음
                    </p>
                  </p>
                  {/* M대 N 관계 */}
                  <p className="rounded-lg bg-slate-100 p-[20px] my-[10px] w-auto">
                    <p className={descriptionStyle}>3) M 대 N 관계</p>
                    <p className={descriptionStyle}>
                      -두 엔터티가 다대다의 연결 관계를 가지고 있음
                    </p>
                    <p className={descriptionStyle}>
                      -이 경우 조인 시 카테시안 곱이 발생하므로 두 엔터티를
                      연결하는 연결엔터티의 추가로 1 대 N 관계로 해소할 필요가
                      있음
                    </p>
                    <p className={descriptionStyle}>
                      {""}ex. 한 학생이 여러 강의를 수강할 수 있고, 한 강의
                      기준으로도 여러 학생이 보유할 수 있음
                    </p>
                    <p className={descriptionStyle}>
                      {""}-{">"}이 두 엔터티의 연결엔터티로는 구매이력 엔터티가
                      필요함
                    </p>
                  </p>
                </li>
              </ul>
              {/* 관계의 페어링 : 31*/}
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
