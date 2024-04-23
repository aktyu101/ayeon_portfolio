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
              <h2 className={listTitleStyle}>데이터 모델링 3가지 요소</h2>
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
                      {" "}
                      추상화 수준이 가장 높음
                    </span>
                  </p>
                  <p className={descriptionStyle}>
                    -업무를 분석 뒤 업무의 핵심 엔터티(Entity)를 추출하는 단계
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
                      {" "}
                      추상화 수준이 가장 낮음(가장 구체적인 모델링이므로)
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
                    1. 엔터티를 도출한 후 그린다.
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
            {/* /12:04 */}
          </ul>
        </li>
      </ul>
    </>
  );
};
