const quizData = {
  영화: [
  { question: "ㄱㅅㅊ", hint: "빈부 격차를 그린 블랙 코미디", answer: "기생충" },
  { question: "ㅁㄹ", hint: "이순신 장군의 명량해전을 그린 영화", answer: "명량" },
  { question: "ㄱㅎㅈㅇ", hint: "마약 수사를 그린 코미디 영화", answer: "극한직업" },
  { question: "ㅂㅅㅎ", hint: "좀비 바이러스를 소재로 한 액션 영화", answer: "부산행" },
  { question: "ㅂㅌㄹ", hint: "정의로운 형사의 활약을 그린 액션 영화", answer: "베테랑" },
  { question: "ㄱㅈㅅㅈ", hint: "한국 현대사를 배경으로 한 가족 이야기", answer: "국제시장" },
  { question: "ㅅㄱㅎㄲㅈㅇㅂ", hint: "사후 세계를 배경으로 한 판타지 영화", answer: "신과함께 죄와 벌" },
  { question: "ㅅㄱㅎㄲㅇㄱㅇ", hint: "사후 세계를 배경으로 한 판타지 영화의 후속편", answer: "신과함께 인과 연" },
  { question: "ㅇㅅ", hint: "일제강점기를 배경으로 한 첩보 액션 영화", answer: "암살" },
  { question: "ㅌㅅㅇㅈㅅ", hint: "1980년 광주 민주화 운동을 배경으로 한 영화", answer: "택시운전사" },
  { question: "ㅅㄱㅇㅊ", hint: "설국을 배경으로 한 SF 액션 영화", answer: "설국열차" },
  { question: "ㄱㅅ", hint: "조선 시대를 배경으로 한 역사 드라마", answer: "관상" },
  { question: "ㄱㅈ", hint: "남북한 형사의 공조 수사를 그린 액션 영화", answer: "공조" },
  { question: "ㅅㅅㅎㄱㄴ", hint: "젊음을 그린 감동적인 드라마", answer: "수상한 그녀" },
  { question: "ㅁㅇㅌ", hint: "장애를 가진 소년의 마라톤 도전을 그린 영화", answer: "말아톤" },
  { question: "ㅆㄴ", hint: "여성들의 우정을 그린 감동적인 영화", answer: "써니" },
  { question: "ㅎㄹㅎㅎㄱ", hint: "5.18 광주 민주화 운동을 다룬 영화", answer: "화려한 휴가" },
  { question: "ㅎㅅ", hint: "이순신 장군의 한산도 대첩을 그린 영화", answer: "한산" },
  { question: "ㅂㅎㅇ", hint: "변호사의 성장과 정의를 그린 법정 드라마", answer: "변호인" },
  { question: "ㅎㅇㄷ", hint: "부산을 배경으로 한 재난 영화", answer: "해운대" },
  { question: "ㅅㅁㄷ", hint: "실화를 바탕으로 한 군사 액션 영화", answer: "실미도" },
  { question: "ㄱㅇㅅㅈㄷ", hint: "악령 퇴치를 다룬 오컬트 영화", answer: "검은 사제들" },
  { question: "ㅈㅇㅊ", hint: "도술을 부리는 도사의 이야기를 그린 영화", answer: "전우치" },
  { question: "ㅅㅇㅇㅊㅇ", hint: "연쇄 살인마를 추적하는 스릴러 영화", answer: "살인의 추억" },
  { question: "ㅊㄱㅈ", hint: "연쇄 살인마를 추적하는 형사의 이야기", answer: "추격자" },
  { question: "ㅇㅈㅆ", hint: "어린 소녀와 아저씨의 감동적인 이야기", answer: "아저씨" },
  { question: "ㅇㅇㄴㅈ", hint: "조선 시대의 왕과 광대의 이야기를 그린 영화", answer: "왕의 남자" },
  { question: "ㅈㅅㅁㅌㅈ", hint: "조선 시대의 명탐정 이야기를 그린 영화", answer: "조선명탐정" },
  { question: "ㅅㅇㅇㅂ", hint: "12.12 군사반란을 다룬 정치 드라마", answer: "서울의 봄" },
  { question: "ㅂㅈㄷㅅ", hint: "형사의 활약을 그린 범죄 액션 영화", answer: "범죄도시" },
  { question: "ㅇㅂㅌ", hint: "판도라 행성을 배경으로 한 SF 블록버스터", answer: "아바타" },
  { question: "ㅇㅂㅌㅁㅇㄱ", hint: "물의 길을 따라 펼쳐지는 새로운 이야기", answer: "아바타 물의 길" },
  { question: "ㅌㅇㅌㄴ", hint: "빙산과의 충돌을 그린 로맨스 영화", answer: "타이타닉" },
  { question: "ㅅㅍㅇㄷㅁ", hint: "스파이더맨의 활약을 그린 슈퍼히어로 영화", answer: "스파이더맨" },
  { question: "ㅇㅂㅈㅅ", hint: "슈퍼히어로들의 연합을 그린 액션 영화", answer: "어벤져스" },
  { question: "ㅇㅂㅈㅅㅇㄷㄱㅇ", hint: "어벤져스의 마지막 전투를 그린 영화", answer: "어벤져스 엔드게임" },
  { question: "ㅅㅌㅇㅈ", hint: "우주 전쟁을 그린 SF 영화", answer: "스타워즈" },
  { question: "ㅂㅌㅁㄷㅅㅍㅁ", hint: "배트맨과 슈퍼맨의 대결을 그린 영화", answer: "배트맨 대 슈퍼맨" },
  { question: "ㅁㅅㅌ", hint: "금융 사기를 다룬 범죄 액션 영화", answer: "마스터" },
  { question: "ㅂㄹㄹ", hint: "스파이의 활약을 그린 첩보 액션 영화", answer: "베를린" },
  { question: "ㅌㄴ", hint: "터널 붕괴 사고를 다룬 재난 영화", answer: "터널" },
  { question: "ㄴㄷㅅㄴ", hint: "늑대 소년과 소녀의 사랑을 그린 판타지 영화", answer: "늑대소년" },
  { question: "ㅇㅍㅎㅈ", hint: "북한과 남한의 대립을 그린 전쟁 영화", answer: "연평해전" },
  { question: "ㄱㄷㄱㅂㄱㅇJSA", hint: "남북한 군인의 우정을 그린 영화", answer: "공동경비구역 JSA" },
  { question: "ㅅㄹ", hint: "북한과 남한의 스파이 전쟁을 그린 영화", answer: "쉬리" }
  ],
  음식: [
    { question: "ㄱㅊㅉㄲ", hint: "한국인이 가장 좋아하는 찌개", answer: "김치찌개" },
  { question: "ㄷㅈㅉㄲ", hint: "된장으로 끓인 구수한 찌개", answer: "된장찌개" },
  { question: "ㅂㄱㄱ", hint: "달콤한 간장 양념의 대표 고기 요리", answer: "불고기" },
  { question: "ㅂㅂㅂ", hint: "채소와 고기를 비벼 먹는 대표적인 한 그릇 음식", answer: "비빔밥" },
  { question: "ㅅㄱㅅ", hint: "소금구이 또는 쌈과 함께 먹는 인기 돼지고기", answer: "삼겹살" },
  { question: "ㄱㅂ", hint: "다양한 재료를 밥과 김으로 말아 만든 음식", answer: "김밥" },
  { question: "ㅈㅊ", hint: "당면과 채소, 고기를 볶아 만든 음식", answer: "잡채" },
  { question: "ㄱㅂㅉ", hint: "양념한 갈비를 부드럽게 익힌 고급 요리", answer: "갈비찜" },
  { question: "ㄷㄱㅂ", hint: "매콤한 닭고기와 채소를 볶은 강원도 음식", answer: "닭갈비" },
  { question: "ㄸㅂㅇ", hint: "매콤달콤한 고추장 양념 떡 요리", answer: "떡볶이" },
  { question: "ㅇㅈㅇㅂㅇ", hint: "매콤하게 볶은 오징어와 채소", answer: "오징어볶음" },
  { question: "ㅅㄷㅂㅉㄲ", hint: "부드러운 순두부가 들어간 매운 찌개", answer: "순두부찌개" },
  { question: "ㅇㄱㅈ", hint: "얼큰한 소고기 국물에 대파, 고사리 등이 들어간 국", answer: "육개장" },
  { question: "ㄱㅂㅌ", hint: "갈비를 푹 고아 만든 국물 요리", answer: "갈비탕" },
  { question: "ㅅㄹㅌ", hint: "사골을 오랜 시간 끓인 담백한 국물", answer: "설렁탕" },
  { question: "ㅅㄱㅌ", hint: "닭에 찹쌀, 인삼 등을 넣고 끓인 보양식", answer: "삼계탕" },
  { question: "ㅎㅈㄱ", hint: "숙취 해소용 국물 요리", answer: "해장국" },
  { question: "ㅋㄴㅁㄱㅂ", hint: "콩나물과 밥이 들어간 따뜻한 국밥", answer: "콩나물국밥" },
  { question: "ㅂㄷㅉㄲ", hint: "햄과 소시지, 김치가 들어간 퓨전 찌개", answer: "부대찌개" },
  { question: "ㅁㅇㅌ", hint: "생선과 채소를 넣고 매콤하게 끓인 국", answer: "매운탕" },
  { question: "ㄱㅊㅈ", hint: "김치와 부침가루로 만든 전", answer: "김치전" },
  { question: "ㅍㅈ", hint: "파와 해물이 들어간 부침개", answer: "파전" },
  { question: "ㅅㄷㄱ", hint: "순대와 다양한 내장이 들어간 국밥", answer: "순대국" },
  { question: "ㄸㄱ", hint: "얇게 썬 떡을 넣고 끓인 국물 음식", answer: "떡국" },
  { question: "ㅁㄷㄱ", hint: "만두와 떡이 함께 들어간 국물 요리", answer: "만두국" },
  { question: "ㅁㄴㅁ", hint: "시원한 육수와 면이 어우러진 냉면", answer: "물냉면" },
  { question: "ㅂㅂㄴㅁ", hint: "양념장에 비벼 먹는 냉면", answer: "비빔냉면" },
  { question: "ㅉㅁ", hint: "매콤새콤하게 비벼 먹는 쫄깃한 면 요리", answer: "쫄면" },
  { question: "ㄹㅁ", hint: "국민 간편식, 다양한 브랜드 존재", answer: "라면" },
  { question: "ㅇㄷ", hint: "진한 국물에 굵은 면발이 특징", answer: "우동" },
  { question: "ㅋㄱㅅ", hint: "손으로 썬 국수가 들어간 탕 요리", answer: "칼국수" },
  { question: "ㅅㅈㅂ", hint: "반죽을 뜯어 끓인 국물 요리", answer: "수제비" },
  { question: "ㄱㅈㅌ", hint: "감자와 돼지 등뼈를 넣은 얼큰한 탕", answer: "감자탕" },
  { question: "ㅈㅇㄱㅇ", hint: "영양 보충용 스태미나 음식", answer: "장어구이" },
  { question: "ㄱㄷㅇㅈㄹ", hint: "양념에 졸인 고등어 요리", answer: "고등어조림" },
  { question: "ㅁㅊㅂㅇ", hint: "잔멸치를 간장과 설탕으로 볶은 반찬", answer: "멸치볶음" },
  { question: "ㅂㄷㅂㅇㅁ", hint: "매운 라면의 대표주자", answer: "불닭볶음면" },
  { question: "ㅊㅋ", hint: "프라이드 또는 양념으로 먹는 인기 음식", answer: "치킨" },
  { question: "ㄷㅂ", hint: "매운 양념에 볶아 먹는 별미", answer: "닭발" },
  { question: "ㄱㅊ", hint: "구이나 전골로 먹는 고소한 내장 요리", answer: "곱창" },
  { question: "ㄷㅈㅂㅂ", hint: "불에 구운 돼지고기 백반", answer: "돼지불백" },
  { question: "ㅎㅂㄱ", hint: "빵 사이에 패티를 넣은 서양 음식", answer: "햄버거" },
  { question: "ㅍㅈ", hint: "치즈와 토핑을 얹은 빵", answer: "피자" },
  { question: "ㅅㅍㄱㅌ", hint: "이탈리아 면 요리", answer: "스파게티" },
  { question: "ㅂㅇㅂ", hint: "남은 밥을 이용한 간단한 볶음 요리", answer: "볶음밥" },
  { question: "ㅋㄹㄹㅇㅅ", hint: "커리 소스를 얹은 밥", answer: "카레라이스" },
  { question: "ㄱㅊㅂㄲㅂ", hint: "김치와 밥을 함께 볶아낸 음식", answer: "김치볶음밥" },
  { question: "ㄱㄹㅁㅇ", hint: "달걀을 말아서 만든 반찬", answer: "계란말이" },
  { question: "ㅇㅁㅌ", hint: "어묵과 국물이 어우러진 간편한 국물 요리", answer: "어묵탕" },
  { question: "ㅍㅈ", hint: "이탈리아 대표 음식, 도우 위에 치즈와 토핑", answer: "피자" },
  { question: "ㅅㅍㄱㅌ", hint: "이탈리아의 면 요리, 다양한 소스와 함께 제공", answer: "스파게티" },
  { question: "ㅂㅂㅋㄹ", hint: "미국 남부 스타일의 고기 바비큐 요리", answer: "바비큐립" },
  { question: "ㅌㅋㅂㄱㄱ", hint: "멕시코의 전통적인 또르띠야 감싼 고기 요리", answer: "타코불고기" },
  { question: "ㅂㅌㅊㅋ", hint: "인도식 전통 커리 요리", answer: "버터치킨" },
  { question: "ㅅㅌㅇㅋ", hint: "서양식 고기 스테이크 요리", answer: "스테이크" },
  { question: "ㅎㅂㄱ", hint: "미국식 패스트푸드 대표 메뉴", answer: "햄버거" },
  { question: "ㅅㅅ", hint: "일본의 대표적인 생선 초밥 요리", answer: "스시" },
  { question: "ㄴ", hint: "인도 전통 빵, 커리와 함께 먹음", answer: "난" },
  { question: "ㅍㅌㅇ", hint: "태국 대표 면 요리, 숙주와 땅콩 소스", answer: "팟타이" },
  { question: "ㅋㅂ", hint: "중동의 전통 고기 꼬치 요리", answer: "케밥" },
  { question: "ㅁㅅㅋ", hint: "그리스 전통 고기 오븐 요리", answer: "무사카" },
  { question: "ㅃㅇㅇ", hint: "스페인식 샤프란 향미 쌀 요리", answer: "빠에야" },
  { question: "ㅅㅇㄹㅂㅇ", hint: "중국식 육즙 가득한 만두 요리", answer: "샤오롱바오" },
  { question: "ㅍㄹㅊㅌㅅㅌ", hint: "프랑스식 샌드위치 스타일의 달걀 빵 요리", answer: "프렌치토스트" },
  { question: "ㅂㄹㅂㅇㅅㅌ", hint: "독일식 소시지 요리", answer: "브랏부어스트" },
  { question: "ㅋㅋㅇㅋ", hint: "미국식 달콤한 케이크 요리", answer: "컵케이크" },
  { question: "ㄷㄴ", hint: "미국식 도넛 형태의 디저트", answer: "도넛" },
  { question: "ㅂㅇㅍㅍㅅㅌㄹ", hint: "프랑스식 패스트리로 만든 디저트", answer: "베이퍼페이스트리" },
  { question: "ㅅㅌㅇㅋㅇㅍㄹㅇ", hint: "미국식 고기요리와 프랑스식 감자요리를 담은 요리", answer: "스테이크 앤 프라이" },
  { question: "ㅍㅇㄱㄹ", hint: "프랑스의 전통식 굽는 디저트 요리", answer: "푸아그라" },
  { question: "ㅅㅎㅅㅋ", hint: "브라질식 고기 꼬치 그릴 요리", answer: "슈하스코" },
  { question: "ㅌㄹㅁㅅ", hint: "이탈리아의 달콤한 디저트 치즈 케이크", answer: "티라미수" },
  { question: "ㅅㅅ", hint: "남미 스타일의 옥수수 반죽 요리", answer: "살사" },
  { question: "ㄸㄹㄸㅇ", hint: "스페인의 감자 오믈렛 요리", answer: "또르띠야" },
  { question: "ㅍ", hint: "베트남의 쌀국수 요리", answer: "퍼" },
  { question: "ㅁㄱㄹ", hint: "말레이시아식 볶음 국수", answer: "미고렝" },
  { question: "ㅊㅋㅇㅇㅇ", hint: "미국식 치킨과 와플 조합", answer: "치킨앤와플" },
  { question: "ㅂㄹㅅㅊ", hint: "러시아 전통 수프 요리", answer: "보르시치" },
  { question: "ㅋㅅㄹ", hint: "이집트의 국수 요리", answer: "코샤리" },
  { question: "ㄱㄹㅍㅌ", hint: "중남미의 삶은 콩과 밥 요리", answer: "갈로핀토" },
  { question: "ㅅㅂㅊ", hint: "페루의 생선 요리", answer: "세비체" },
  { question: "ㅊㄹㅅ", hint: "이란 전통 쌀 요리", answer: "체로스" },
  { question: "ㅊㄹㅋㅋㄹㄴ", hint: "멕시코의 매운 고기 스튜", answer: "칠리콘카르네" },
  { question: "ㅈㅈㄱㅋ", hint: "터키의 요거트와 향신료 요리", answer: "자즈기크" },
  { question: "ㅇㅇㅅ", hint: "태국의 새콤매콤한 국수", answer: "얌운센" },
  { question: "ㄴㅅㄱㄹ", hint: "인도네시아 볶음밥 요리", answer: "나시고렝" },
  { question: "ㅂㅂㅌ", hint: "남아공의 고기 스튜 요리", answer: "보보티" },
  { question: "ㅂㅅㅋㅌ", hint: "이탈리아식 바삭한 빵 과자", answer: "비스코티" },
  { question: "ㅅㄷㅇㅇㅅㅋㄹ", hint: "미국식 패스트푸드의 상징적 디저트", answer: "선데 아이스크림" },
  { question: "ㅇㄷㅂ", hint: "필리핀식 고기 간장 스튜", answer: "아도보" },
  { question: "ㅋㅍㅌ", hint: "중동식 고기 완자 요리", answer: "코프타" },
  { question: "ㄷㅁ", hint: "그리스식 속을 채운 포도잎 요리", answer: "돌마" },
  { question: "ㅂㄱㅌ", hint: "프랑스식 빵 샌드위치 요리", answer: "바게트" },
  { question: "ㅇㅍㄴㄷ", hint: "아르헨티나식 고기 파이", answer: "엠파나다" },
  { question: "ㅍㅅㅌㄷㅊㅋㄹ", hint: "칠레식 고기 옥수수 파이", answer: "파스텔 데 초클로" },
  { question: "ㅅㄱㄹㅇ", hint: "스페인식 과일 음료", answer: "상그리아" }
  ],
  연예인: [
    { question: "ㄱㄴㅈ", hint: "방탄소년단의 리더", answer: "김남준" },
  { question: "ㅈㅈㄱ", hint: "방탄소년단의 막내", answer: "전정국" },
  { question: "ㅁㅇㄱ", hint: "방탄소년단의 메인 래퍼", answer: "민윤기" },
  { question: "ㅂㅈㅁ", hint: "방탄소년단의 보컬", answer: "박지민" },
  { question: "ㄱㅅㅈ", hint: "방탄소년단의 비주얼", answer: "김석진" },
  { question: "ㅈㅎㅅ", hint: "방탄소년단의 메인 댄서", answer: "정호석" },
  { question: "ㄱㅌㅎ", hint: "방탄소년단의 V", answer: "김태형" },
  { question: "ㄱㅈㅅ", hint: "블랙핑크의 리더", answer: "김지수" },
  { question: "ㅂㅊㅇ", hint: "블랙핑크의 메인 보컬, 로제", answer: "박채영" },
  { question: "ㅈㄴ", hint: "블랙핑크의 래퍼", answer: "제니" },
  { question: "ㄹㅅ", hint: "블랙핑크의 메인 댄서", answer: "리사" },
  { question: "ㅋㄹㄴ", hint: "에스파 리더", answer: "카리나" },
  { question: "ㅇㅌ", hint: "에스파 메인 보컬", answer: "윈터" },
  { question: "ㅌㅇ", hint: "소녀시대 리더, 보컬", answer: "태연" },
  { question: "ㅇㅇ", hint: "소녀시대 멤버, 배우 활동도", answer: "윤아" },
  { question: "ㅅㅈ", hint: "가수 겸 배우, 국민 첫사랑", answer: "수지" },
  { question: "ㅇㅇㅇ", hint: "가수 겸 배우, '호텔 델루나' 주연", answer: "아이유" },
  { question: "ㅈㄱ", hint: "BTS의 메인 보컬", answer: "정국" },
  { question: "ㅈㅁ", hint: "BTS의 메인 댄서", answer: "지민" },
  { question: "ㅂ", hint: "BTS의 비주얼", answer: "뷔" },
  { question: "ㄱㄷㄴㅇ", hint: "Wanna One 출신, 솔로 가수", answer: "강다니엘" },
  { question: "ㅎㅁㅎ", hint: "뉴이스트 & 워너원 출신, 배우 활동", answer: "황민현" },
  { question: "ㅂㅂㄱ", hint: "청춘 스타, 배우", answer: "박보검" },
  { question: "ㅅㄱㅎ", hint: "기생충, 밀정 주연 배우", answer: "송강호" },
  { question: "ㅇㅈㅈ", hint: "오징어 게임 주연", answer: "이정재" },
  { question: "ㅈㅎㅇ", hint: "밥 잘 사주는 예쁜 누나 주연", answer: "정해인" },
  { question: "ㄴㅈㅎ", hint: "스물다섯 스물하나 배우", answer: "남주혁" },
  { question: "ㅇㅎㅅ", hint: "낭만닥터 김사부 출연", answer: "안효섭" },
  { question: "ㅂㅅㅈ", hint: "이태원 클라쓰 주연", answer: "박서준" },
  { question: "ㅂㅇㅂ", hint: "이상한 변호사 우영우 주연", answer: "박은빈" },
  { question: "ㄱㅎㅅ", hint: "시그널, 슈룹 주연", answer: "김혜수" },
  { question: "ㅈㄷㅇ", hint: "길복순, 라이브 주연", answer: "전도연" },
  { question: "ㅈㅈㅅ", hint: "슬기로운 의사생활 주연", answer: "조정석" },
  { question: "ㅇㅇㅅ", hint: "슬기로운 의사생활 출연", answer: "유연석" },
  { question: "ㅈㅇㅁ", hint: "82년생 김지영 주연", answer: "정유미" },
  { question: "ㄱㅇ", hint: "도깨비, 부산행 주연", answer: "공유" },
  { question: "ㄱㄱㅇ", hint: "도깨비, 유미의 세포들 주연", answer: "김고은" },
  { question: "ㄱㅌㄹ", hint: "스물다섯 스물하나 주연", answer: "김태리" },
  { question: "ㅎㅅㅎ", hint: "마이네임, 알고있지만 주연", answer: "한소희" },
  { question: "ㅇㄷㅎ", hint: "더 글로리, 슬의생 시즌2", answer: "이도현" },
  { question: "ㅅㅈㄱ", hint: "재벌집 막내아들, 빈센조", answer: "송중기" },
  { question: "ㄱㅅㅎ", hint: "별에서 온 그대, 사이코지만 괜찮아", answer: "김수현" },
  { question: "ㅅㅎㅈ", hint: "또 오해영, 뷰티 인사이드", answer: "서현진" },
  { question: "ㅈㅅㅁ", hint: "환혼, 이번 생은 처음이라", answer: "정소민" },
  { question: "ㅅㅇㄱ", hint: "응답하라 1997, 오 마이 비너스", answer: "서인국" },
  { question: "ㅇㅅㄱ", hint: "낭만닥터 김사부 2, 멈블", answer: "이성경" },
  { question: "ㄴㄱㅁ", hint: "검은 태양, 닥터 프리즈너", answer: "남궁민" },
  { question: "ㅈㄱㅇ", hint: "나의 해방일지, 고백부부", answer: "장기용" },
  { question: "ㄱㅈㅇ", hint: "쌈 마이웨이, 태양의 후예", answer: "김지원" },
  { question: "ㅇㅈㅎ", hint: "킹더랜드, 옷소매 붉은 끝동", answer: "이준호" },
  { question: "ㅋㄹㅅㅇㅂㅅ", hint: "캡틴 아메리카 역", answer: "크리스 에반스" },
  { question: "ㅋㄹㅅㅎㅅㅇㅅ", hint: "토르 역", answer: "크리스 헴스워스" },
  { question: "ㅅㅋㄹㅇㅎㅅ", hint: "블랙 위도우 역", answer: "스칼렛 요한슨" },
  { question: "ㅁㅋㄹㅍㄹ", hint: "헐크 역", answer: "마크 러팔로" },
  { question: "ㅈㄹㅁㄹㄴ", hint: "호크아이 역", answer: "제레미 레너" },
  { question: "ㅅㅁㅇㅈㅅ", hint: "닉 퓨리 역", answer: "사무엘 잭슨" },
  { question: "ㅌㅎㄷㅅㅌ", hint: "로키 역", answer: "톰 히들스턴" },
  { question: "ㅍㅂㅌㄴ", hint: "비전 역", answer: "폴 베타니" },
  { question: "ㅇㄹㅈㅂㅅㅇㅅ", hint: "완다 역", answer: "엘리자베스 올슨" },
  { question: "ㅍㄹㄷ", hint: "앤트맨 역", answer: "폴 러드" },
  { question: "ㅂㄴㄷㅌㅋㅂㅂㅊ", hint: "닥터 스트레인지 역", answer: "베네딕트 컴버배치" },
  { question: "ㅊㄷㅇㅂㅅㅁ", hint: "블랙 팬서 역", answer: "채드윅 보스만" },
  { question: "ㅌㅎㄹㄷ", hint: "스파이더맨 역", answer: "톰 홀랜드" },
  { question: "ㅋㄹㅅㅍㄹ", hint: "스타로드 역", answer: "크리스 프랫" },
  { question: "ㅈㅅㄷㄴ", hint: "가모라 역", answer: "조 샐다나" },
  { question: "ㄷㅇㅂㅂㅌㅅㅌ", hint: "드랙스 역", answer: "데이브 바티스타" },
  { question: "ㅂㄷㅈ", hint: "그루트 목소리", answer: "빈 디젤" },
  { question: "ㅂㄹㄷㄹㅋㅍ", hint: "로켓 목소리", answer: "브래들리 쿠퍼" },
  { question: "ㅋㄹㄱㄹ", hint: "네뷸라 역", answer: "카렌 길런" },
  { question: "ㅍㅋㄹㅁㅌㅇㅍ", hint: "맨티스 역", answer: "폼 클레멘티에프" },
  { question: "ㅁㅇㅋㄹㅋ", hint: "욘두 역", answer: "마이클 루커" },
  { question: "ㅈㅅㅂㄹㄹ", hint: "타노스 역", answer: "조쉬 브롤린" },
  { question: "ㄷㄴㅇㄱㄹㄹ", hint: "오코예 역", answer: "다나이 구리라" },
  { question: "ㄹㅌㅌㅇㄹㅇㅌ", hint: "슈리 역", answer: "레티티아 라이트" },
  { question: "ㅁㅌㅍㄹㅁ", hint: "에버렛 로스 역", answer: "마틴 프리먼" },
  { question: "ㅌㄴㅋㅎㅇㄹㅌ", hint: "네이머 역", answer: "테노크 후에르타" },
  { question: "ㅂㄹㄹㅅ", hint: "캡틴 마블 역", answer: "브리 라슨" },
  { question: "ㄷㅊㄷ", hint: "워 머신 역", answer: "돈 치들" },
  { question: "ㅇㅅㄴㅁㅋ", hint: "팔콘 역", answer: "앤서니 매키" },
  { question: "ㅅㅂㅅㅊㅅㅌ", hint: "윈터 솔저 역", answer: "세바스찬 스탠" },
  { question: "ㅇㅂㅈㄹㄹㄹ", hint: "호프 반 다인 역", answer: "에반젤린 릴리" },
  { question: "ㅁㅇㅋㄷㄱㄹㅅ", hint: "행크 핌 역", answer: "마이클 더글라스" },
  { question: "ㅁㅅㅍㅇㅍ", hint: "자넷 반 다인 역", answer: "미셸 파이퍼" },
  { question: "ㅋㅅㄹㄴㅌ", hint: "캐시 랭 역", answer: "캐서린 뉴튼" },
  { question: "ㅈㄴㄷㅁㅇㅈㅅ", hint: "캉 역", answer: "조나단 메이저스" },
  { question: "ㅋㄹㅅㅌ", hint: "모독 역", answer: "코리 스톨" },
  { question: "ㅂㅁㄹㅇ", hint: "양자 영역 인물", answer: "빌 머레이" },
  { question: "ㅇㄹㅇㄴㄱㄹㄷ", hint: "Problem, 7 rings 등으로 유명한 팝가수", answer: "아리아나 그란데" },
  { question: "ㅂㄹㅇㅇㄹㅅ", hint: "bad guy로 유명한 팝스타", answer: "빌리 아일리시" },
  { question: "ㅌㅇㄹㅅㅇㅍㅌ", hint: "Love Story, Anti-Hero 등 수많은 히트곡 보유", answer: "테일러 스위프트" },
  { question: "ㄷㅇㄹㅍ", hint: "Don't Start Now, Levitating 등의 곡으로 유명", answer: "두아 리파" },
  { question: "ㅂㄹㄴㅁㅅ", hint: "Just the Way You Are, Uptown Funk 등", answer: "브루노 마스" },
  { question: "ㅇㄷㅅㄹ", hint: "Thinking Out Loud, Shape of You 등으로 유명", answer: "에드시런" },
  { question: "ㄹㅇㄷㄱㄱ", hint: "Poker Face, Shallow 등 세계적 팝스타", answer: "레이디 가가" },
  { question: "ㅅㅅㅁㅅ", hint: "Stay With Me, Unholy 등 감성적인 보컬", answer: "샘 스미스" },
  { question: "ㅈㅅㅌㅂㅂ", hint: "Baby, Peaches 등으로 전 세계적인 인기", answer: "저스틴 비버" },
  { question: "ㅂㅇㅅ", hint: "Single Ladies, Halo 등 R&B 팝의 여왕", answer: "비욘세" }
  ]
};

let currentCategory = "영화";
let currentQuestion = null;

// 각 카테고리별로 남은 문제 추적용
let remainingQuestions = {
  영화: [...quizData.영화],
  음식: [...quizData.음식],
  연예인: [...quizData.연예인]
};


const categorySelect = document.getElementById("category");
const questionEl = document.getElementById("question");
const hintEl = document.getElementById("hint");
const inputEl = document.getElementById("answerInput");
const resultEl = document.getElementById("resultArea");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");

// 문제 불러오기
function loadQuestion() {
  const list = remainingQuestions[currentCategory];

  // 문제 다 풀었을 경우
  if (list.length === 0) {
    questionEl.textContent = "🎉 모든 문제를 풀었습니다!";
    hintEl.style.display = "none";
    hintBtn.style.display = "none";
    submitBtn.style.display = "none";
    inputEl.style.display = "none";
    nextBtn.style.display = "none";
    resultEl.textContent = "";
    return;
  }

  // 랜덤 문제 선택 & 제거
  const randomIndex = Math.floor(Math.random() * list.length);
  currentQuestion = list[randomIndex];
  list.splice(randomIndex, 1); // 이미 낸 문제는 제거

  questionEl.textContent = currentQuestion.question;
  hintEl.textContent = "힌트: " + currentQuestion.hint;
  hintEl.style.display = "none";
  hintBtn.style.display = "inline-block";
  inputEl.value = "";
  inputEl.style.display = "inline-block";
  resultEl.textContent = "";
  submitBtn.style.display = "inline-block";
  nextBtn.style.display = "none";
}


//힌트 관련
const hintBtn = document.getElementById("hintBtn");

// 힌트 버튼 클릭 시
hintBtn.addEventListener("click", () => {
  hintEl.style.display = "block";
  hintBtn.style.display = "none";
});

// 다음 문제
nextBtn.addEventListener("click", loadQuestion);

// 카테고리 변경 시
categorySelect.addEventListener("change", (e) => {
  currentCategory = e.target.value;

  // 해당 카테고리 문제 초기화
  remainingQuestions[currentCategory] = [...quizData[currentCategory]];
  loadQuestion();
});

// 정답시 버튼 사라짐
submitBtn.addEventListener("click", () => {
  const userAnswer = inputEl.value.trim();
  if (!userAnswer) return;

 if (checkAnswer(userAnswer, currentQuestion.answer)) {
    resultEl.textContent = "🎉 정답입니다!";
    resultEl.style.color = "#2e7d32";
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
    inputEl.style.display = "none";

    // ✅ 힌트 버튼을 안 눌렀다면 힌트 자동 표시
    if (hintEl.style.display === "none") {
      hintEl.style.display = "block";
      hintBtn.style.display = "none";
    }
  } else {
    resultEl.textContent = "❌ 오답입니다!";
    resultEl.style.color = "#d32f2f";
  }
});

// 띄어쓰기 제외
function checkAnswer(userInput, correctAnswer) {
  const normalize = str => str.replace(/\s+/g, '').trim();
  return normalize(userInput) === normalize(correctAnswer);
};


// 입력창에서 Enter 키 누르면 제출되게
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitBtn.click(); // 기존 제출 버튼 클릭 이벤트 호출
  }
});

// 첫 문제 로딩
loadQuestion();
