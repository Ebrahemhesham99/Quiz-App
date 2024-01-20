const quizData = [
    {
        question: 'ما هو العضو الموجود في جسم الإنسان، والمسؤول عن إنتاج كرات الدم الحمراء؟',
        a: 'المريء',
        b: 'الكبد',
        c: 'الطحال',
        d: 'المعده',
        correct: 'c'
    },
    {
        question: 'ما هي المدينة الملقبة بلقب التلال السبعة؟',
        a: 'روما',
        b: 'باريس',
        c: 'لندن',
        d: 'جنيف',
        correct: 'a'
    },
    {
        question: 'ما هي الدولة التي لها 3 عواصم	؟',
        a: 'الصين',
        b: 'الهند',
        c: 'جنوب افريقيا',
        d: 'مدغشقر',
        correct: 'c'
    },
    {
        question: 'ماذا يطلق على الغاز الذي يخرج مع عوادم السيارات؟',
        a: 'ثاني اكسيد الكربون',
        b: 'النيتروجين',
        c: 'الميثان',
        d: 'اول اكسيد الكربون',
        correct: 'd'
    },
    {
        question: 'ما هي الدولة التي تعرف عاصمتها بتبليسي',
        a: 'جورجيا',
        b: 'قيرغيزستان',
        c: 'طاجيكستان',
        d: 'ارمينيا',
        correct: 'a'
    }
];
let current_quiz = 0;
let score = 0;
const quiz = document.getElementById('quiz');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answerELS = document. querySelectorAll(".answer");
const submitBtn = document.getElementById('submit');

loadQuiz();
function loadQuiz() {
    deslectAnswers();
    const CurrentQuizData = quizData[current_quiz];
    questionE1.innerText = CurrentQuizData.question;
    a_text.innerText = CurrentQuizData.a;
    b_text.innerText = CurrentQuizData.b;
    c_text.innerText = CurrentQuizData.c;
    d_text.innerText = CurrentQuizData.d;
}



function getSelected() {
    let answer = undefined;
    answerELS.forEach((answerE1) => {
        if (answerE1.checked) {
           submitBtn.disabled = false;
            answer = answerE1.id;
        }
    });
    return answer;
}
function deslectAnswers(){
    answerELS.forEach((answerE1) => {
        answerE1.checked = false;
    });
}
    submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer)
    {
        if(answer===quizData[current_quiz].correct){
            score ++;
        }
        current_quiz++;
        if (current_quiz < quizData.length) {
            loadQuiz();
        }
        else{
            quiz.innerHTML=`<h2 dir="rtl">لقد أجبت علي ${score}/${quizData.length}</h2><button onclick="location.reload()">أعد الأختبار مره أخري </button>`;
        }
    }
});