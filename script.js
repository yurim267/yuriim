
const quizData = [
  { question: "6월 5일은 환경의 날이다", answer: "O" },
  { question: "플라스틱이 매립되었을 때, 썩는 기간은 300년이다", answer: "X" },
  { question: "에코백은 7,100번을 재사용해야 환경 보호 효과가 있다", answer: "O" },
  { question: "연평균 기온이 3℃ 상승할 경우, 전지구적으로 가뭄, 홍수, 산불, 해수면 상승 등의 위험한 상태에 빠지게 된다", answer: "X" },
  { question: "환경오염의 종류에는 대기오염, 수질오염, 소음공해 등이 있다", answer: "O" },
  { question: "일회용 컵은 투명페트병 수거함에 배출해야한다", answer: "X" },
  { question: "지난 100여년간 연평균 기온은 10년마다 약 0.2℃씩 증가하고있다", answer: "O" },
  { question: "4월 20일은 지구의 날이다", answer: "X" }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledQuizData = shuffleArray(quizData);

let currentQuestion = 0;
let score = 0;
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

function loadQuestion() {
  questionElement.textContent = shuffledQuizData[currentQuestion].question;
}

function startQuiz() {
  document.getElementById('cover').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  loadQuestion();
}

function checkAnswer(userAnswer) {
  if (userAnswer === shuffledQuizData[currentQuestion].answer) {
      resultElement.textContent = "정답입니다!";
      score++;
  } else {
      resultElement.textContent = "틀렸습니다!";
  }
  
  currentQuestion++;
  if (currentQuestion < shuffledQuizData.length) {
      setTimeout(() => {
          resultElement.textContent = "";
          loadQuestion();
      }, 1000);
  } else {
      resultElement.textContent = "퀴즈가 종료되었습니다.";
      document.getElementById('options').style.display = 'none';
      scoreElement.textContent = "점수: " + score + "/" + shuffledQuizData.length;
  }
}