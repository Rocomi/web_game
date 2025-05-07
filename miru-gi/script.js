// 통합형 핑계 목록
const excuses = [
  "지금 하면 퀄리티 안 나와요.",
  "집중 안 되는 날은 안 하는 게 맞죠.",
  "이건 내일의 네가 해결해줄 거예요.",
  "날씨가 너무 더워서 힘이 안남.",
  "날씨가 너무 추워서 움직일 수가 없음.",
  "날씨가 너무 좋아서 집중이 안됨.",
  "의자랑 붙어서 안움지여지는 몸이 되었어...",
  "대뇌 서버가 멈춰서 못할 것 같아요…",
  "그것보다 중요한 건 지금 이 순간을 즐기는 거야.",
  "할일보다 우리가 왜 사는지 고민해야 할 때지.",
  "심리적으로 아직 준비가 안 되셨네요. 명상 좀 하고 오세요.",
  "엄마가 하지말래요, 하지마요.",
  "손에 커피 들고 있어서 못 해요.",
  "지금은 목성에서 자전이 일어나고 있어서 타이밍이 안 좋아요.",
  "코드에 오류가 발견되되됟었스ㅂ닏ㅏ. 휴식이피ㄹ욯ㅏㅂ니ㄷㅏ...",
  "AI가 다 해줄 때까지 기다려.",
  "내가 하면 우주의 균형이 깨질 수도 있어서 안됨.",
  "손톱부터 깎아야 해서요. (진짜 급함)",
  "공룡이랑 감정 싸움 중이라 못할거 같아요.",
  "그건 네 손가락과 인연이 아닌 작업이에요.",
  "그건 분명 누가 대신 해줄 거야. 우주는 그렇게 돌거든요.",
  "시간이 너를 시험하는 거야. 너는 아무것도 안 해야 이길 수 있음."
];

// 버튼과 출력 요소 연결
const generateBtn = document.getElementById("generateBtn");
const excuseOutput = document.getElementById("excuseOutput");

// 버튼 클릭 시 실행되는 함수
generateBtn.addEventListener("click", () => {
  const task = document.getElementById("taskInput").value.trim();

  if (!task) {
    excuseOutput.textContent = "할 일을 먼저 입력하세요!";
    return;
  }

  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  excuseOutput.textContent = `${randomExcuse}🙄`;
});
