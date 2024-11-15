// Flashcards data
const flashcards = [
    { word: 'Hola', translation: 'Hello', audio: 'audio/hello.mp3' },
    { word: 'Adiós', translation: 'Goodbye', audio: 'audio/goodbye.mp3' },
    { word: 'Gracias', translation: 'Thank you', audio: 'audio/thankyou.mp3' },
    { word: 'Por favor', translation: 'Please', audio: 'audio/please.mp3' }
  ];
  
  // Quiz data
  const quizQuestions = [
    {
      question: 'What is the translation of "Hola"?',
      options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
      answer: 'Hello'
    },
    {
      question: 'What is the translation of "Gracias"?',
      options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
      answer: 'Thank you'
    },
    // More questions can be added
  ];
  
  let currentCardIndex = 0;
  let currentQuizIndex = 0;
  let score = 0;
  let wordsLearned = 0;
  
  // Display flashcard
  function showFlashcard() {
    const flashcard = flashcards[currentCardIndex];
    document.getElementById('word').textContent = flashcard.word;
    document.getElementById('translation').textContent = flashcard.translation;
    document.getElementById('translation').classList.add('hidden');
  }
  
  // Flip flashcard
  document.getElementById('flip-card-btn').addEventListener('click', () => {
    document.getElementById('translation').classList.toggle('hidden');
  });
  
  // Next flashcard
  document.getElementById('next-card-btn').addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    showFlashcard();
    updateProgress();
  });
  
  // Play pronunciation
  document.getElementById('audio-btn').addEventListener('click', () => {
    const audio = new Audio(flashcards[currentCardIndex].audio);
    audio.play();
  });
  
  // Start Quiz
  function startQuiz() {
    const question = quizQuestions[currentQuizIndex];
    document.getElementById('quiz-question').textContent = question.question;
    document.getElementById('option1').textContent = question.options[0];
    document.getElementById('option2').textContent = question.options[1];
    document.getElementById('option3').textContent = question.options[2];
    document.getElementById('option4').textContent = question.options[3];
    document.getElementById('quiz-result').textContent = '';
  }
  
  document.getElementById('option1').addEventListener('click', () => checkAnswer('Hello'));
  document.getElementById('option2').addEventListener('click', () => checkAnswer('Goodbye'));
  document.getElementById('option3').addEventListener('click', () => checkAnswer('Thank you'));
  document.getElementById('option4').addEventListener('click', () => checkAnswer('Please'));
  
  // Check answer
  function checkAnswer(answer) {
    const correctAnswer = quizQuestions[currentQuizIndex].answer;
    if (answer === correctAnswer) {
      score++;
      document.getElementById('quiz-result').textContent = 'Correct!';
    } else {
      document.getElementById('quiz-result').textContent = `Wrong! The correct answer is ${correctAnswer}.`;
    }
  
    currentQuizIndex = (currentQuizIndex + 1) % quizQuestions.length;
    setTimeout(startQuiz, 2000);
    updateProgress();
  }
  
  // Update progress
  function updateProgress() {
    document.getElementById('words-learned').textContent = wordsLearned;
    document.getElementById('quiz-score').textContent = score;
  }
  
  // Initialize the app
  function init() {
    showFlashcard();
    startQuiz();
  }
  
  init();
  