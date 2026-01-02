const quizData = [
    {
        scenario: "You receive an SMS from 'DBS Bank' saying your account is locked. It includes a link to 'verify' your account. The URL looks similar to the real DBS website but slightly different.",
        options: ["Legitimate bank message", "SMS Phishing Scam", "Marketing promotion"],
        correct: 1,
        explanation: "Banks never send links via SMS asking you to verify accounts. This is SMS phishing. Always go to the official bank app or website directly, never click links in messages."
    },
    {
        scenario: "You see a job posting on LinkedIn offering SGD 3,500/month for 5 hours/week from home with no experience needed. After applying, they ask for SGD 200 for 'training materials'.",
        options: ["Legitimate job offer", "Fake Job Offer Scam", "Real opportunity"],
        correct: 1,
        explanation: "Legitimate jobs never ask for upfront payments for training. This is a fake job scam. Real employers never request money before hiring you."
    },
    {
        scenario: "You receive a Telegram message from someone claiming to be an investment expert. They invite you to a 'private crypto group' and pressure you to buy XYZ cryptocurrency, promising 200% returns in 3 months.",
        options: ["Real investment opportunity", "Telegram Investment Scam", "Legitimate broker"],
        correct: 1,
        explanation: "Telegram investment groups promising unrealistic returns are scams. No legitimate investment guarantees 200% returns. Scammers create urgency and FOMO to pressure you into investing."
    },
    {
        scenario: "You get a call claiming to be from 'IRAS' (Inland Revenue Authority of Singapore) saying you owe back taxes and must pay SGD 5,000 via bank transfer today or face arrest.",
        options: ["Legitimate government call", "Government Impersonation Scam", "Real tax notice"],
        correct: 1,
        explanation: "IRAS never calls demanding immediate payment via bank transfer or threatening arrest. Government agencies send official letters first. Hang up and call IRAS directly at 1800-356-8888."
    },
    {
        scenario: "Someone calls claiming to be from Microsoft Support saying your computer has a virus. They ask you to download a remote access tool so they can 'fix' your computer for a fee.",
        options: ["Legitimate tech support", "Tech Support Scam", "Real Microsoft call"],
        correct: 1,
        explanation: "Microsoft never calls unsolicited about viruses. This is a tech support scam. They gain access to steal your banking info and personal data. Hang up and call Microsoft directly if concerned."
    },
    {
        scenario: "You get a Facebook friend request from someone who looks familiar. They message saying they accidentally sent you money and ask you to send back the OTP code you just received from your bank.",
        options: ["Genuine friend", "Fake Friend Request Scam", "Real payment error"],
        correct: 1,
        explanation: "Never share OTP codes with anyone, even people you think you know. This is a fake friend scam. Scammers impersonate friends to steal your money. OTP codes are for YOUR protection only."
    },
    {
        scenario: "You receive a call from someone claiming to be a bank officer offering a 'special loan approval' of SGD 10,000 with no collateral and low interest. They ask for SGD 500 upfront processing fee.",
        options: ["Legitimate loan offer", "Loan Scam", "Real bank product"],
        correct: 1,
        explanation: "Banks don't offer unsecured loans via unsolicited calls or ask for upfront fees. This is a loan scam. Legitimate banks assess your creditworthiness and never demand money before approval."
    },
    {
        scenario: "You get a distressing call saying your child was in an accident and needs SGD 15,000 immediately for medical treatment. The voice sounds panicked and you're told not to tell anyone.",
        options: ["Real emergency", "Fake Kidnapper/Kidnapping Scam", "Genuine situation"],
        correct: 1,
        explanation: "This is a fake kidnapping/emergency scam using emotional manipulation. Verify directly by calling your family member. Real emergencies allow time to verify. Scammers demand urgency to prevent you from thinking clearly."
    },
    {
        scenario: "You receive an email saying you've won a prize in a lottery you never entered. To claim your SGD 50,000 prize, you need to pay SGD 500 for 'processing and verification fees'.",
        options: ["Legitimate prize", "Advance-Fee Lottery Scam", "Real win"],
        correct: 1,
        explanation: "You cannot win a lottery you never entered. Legitimate lotteries never ask winners to pay fees to claim prizes. This is an advance-fee scam designed to steal your money."
    },
    {
        scenario: "A company emails saying your Shopee/Lazada account is 'compromised' and you need to update your payment details immediately by clicking a link. The email looks official.",
        options: ["Legitimate notification", "Shopping Platform Phishing Scam", "Real security alert"],
        correct: 1,
        explanation: "Shopee and Lazada never ask for password/payment updates via email links. This is phishing. Always go directly to the app or official website, never click email links."
    },
    {
        scenario: "You find an old Samsung phone in the MRT. It powers on and you see banking apps. You try to help by calling the 'owner' via WhatsApp but they ask you to transfer them money for a ride home.",
        options: ["Helping someone", "Lost Phone/Money Scam", "Good deed"],
        correct: 1,
        explanation: "This is a lost phone scam. The 'owner' will ask you to transfer money, which you lose when they block you. Or they use the found phone to steal data. Return phones to MRT Lost & Found."
    },
    {
        scenario: "You receive a message saying 'Congratulations! You've been shortlisted for a high-paying overseas job in Dubai. Send SGD 1,200 for visa processing and we'll hire you immediately.'",
        options: ["Legitimate overseas job", "Overseas Job/Visa Scam", "Real employment"],
        correct: 1,
        explanation: "Legitimate overseas employers don't ask for visa fees upfront. Official visa processes go through proper government channels. This is a common overseas job scam targeting job seekers."
    },
    {
        scenario: "Someone messages on Instagram saying 'Hi! Are you interested in making SGD 500/day? Join our business opportunity - limited slots available!' They link you to a website with a pyramid structure.",
        options: ["Real business", "Pyramid/MLM Scam", "Legitimate opportunity"],
        correct: 1,
        explanation: "If it promises quick money with little work, it's likely a pyramid or MLM scam. They make money from recruiting, not actual products. You'll lose money. Avoid schemes promising unrealistic returns."
    },
    {
        scenario: "You see a Facebook ad offering to 'buy' Singtel/Starhub vouchers at 50% discount. You pay SGD 200 via bank transfer and never receive the vouchers. The seller blocks you.",
        options: ["Great deal", "Discount Voucher Scam", "Legitimate seller"],
        correct: 1,
        explanation: "If a deal seems too good to be true, it is. Never transfer money for vouchers or goods from strangers online. Use official retailers or trusted platforms like Carousell with verified sellers."
    }
];
//TODO : pull highscore from database
// temporary highscore
let highScore = [
    {
        userId: "john",
        score: 140,
    },
    {
        userId: "tom",
        score: 50,
    },
    {
        userId: "mary",
        score: 120,
    },
    {
        userId: "dick",
        score: 110,
    },
    {
        userId: "harry",
        score: 130,
    },
];

let currentQuestion = 0;
let score = 0;
let answered = false;
let startTime;
let bonusPoints = 0;
let availableQns = [];

const startbtn = document.getElementById('start-btn');
const nextbtn = document.getElementById('next-btn');
const feedback = document.getElementById('feedback');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('results-section');

function shuffle(array) {       //shuffle questions
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function loadQuestion() {
    const data = availableQns[currentQuestion];
    document.getElementById('question-label').textContent = `Question ${currentQuestion + 1}`;  //current question no.
    document.getElementById('question-text').textContent = data.scenario;                       // update question
    document.getElementById('current-question').textContent = currentQuestion + 1;             //current question no. progressbar
    document.getElementById('progress-bar').style.width = ((currentQuestion + 1) * 10) + '%';  // color on progressbar

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    data.options.forEach((option, index) => {       //insert answer option buttons
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });

    feedback.innerHTML = '';     // remove explanation
    feedback.classList.remove('show', 'correct', 'incorrect'); // remove correct/incorrect answer 
    nextbtn.disabled = true;
    answered = false;
}

function selectOption(index) {
    if (answered) return;

    const data = availableQns[currentQuestion];
    answered = true;

    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => btn.disabled = true);

    options[index].classList.add(index === data.correct ? 'correct' : 'incorrect');

    if (index === data.correct) { //check correct answer
        score += 10;
    }

    feedback.textContent = data.explanation;
    feedback.classList.add('show', index === data.correct ? 'correct' : 'incorrect');

    nextbtn.disabled = false;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < 10) { //qns to end page ,adjust here
        loadQuestion();
    } else {
        const endTime = performance.now();  // stop bonus timer
        bonusPoints = Math.max(0, Math.floor(100 - (endTime - startTime) / 1000)); //calculate bonus points
        showResults();
    }
}
// TODO : send score to backend to update, sort then pull for use
function updateHighscore() {
    highScore = highScore.sort((a, b) => a.score > b.score ? -1 : 1 );   // sort score by decending order
    let totalScore = score + bonusPoints
    if (totalScore > highScore[4].score){                //compare score of 5th place, replace if greater
    let userId = document.getElementById('userId').value;
    highScore[4].score = totalScore;
    highScore[4].userId = userId;
    }
    highScore = highScore.sort((a, b) => a.score > b.score ? -1 : 1 );
}
/*
async function updateHighscore() {
    let totalScore = score + bonusPoints;
    let userId = document.getElementById('userId').value;

    const newHighscore = {
        userId: userId,
        score: totalScore,
        timestamp: Date.now()
    };

    try {
        const response = await fetch('XXXX-API-domain.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newHighscore)
        });

        if (response.ok) {
            const updatedHighscore = await response.json(); 
            highscore = updatedHighscore ;
        } 
    } catch (error) {
       document.getElementById('scoreUpdate').textContent =  ' Error Occurred while Updating highscore' ;
    }
}
*/
//backend verify score within max possible limit,save score to data base

function printHighscore(){      // update the leaderboard with the new scores
    let leaderboardId = document.querySelectorAll('.leaderid');
    let leaderboardScore = document.querySelectorAll('.leaderscore');
    for (let i = 0; i < highScore.length; i++) {
        leaderboardId[i].textContent = highScore[i].userId;
        leaderboardScore[i].textContent = highScore[i].score;
    }
}


function showResults() {
    updateHighscore();
    printHighscore();
    quizSection.style.display = 'none';
    resultSection.classList.add('show');

    document.getElementById('final-score').innerText = `Score :${score} \nBonus Points : ${bonusPoints}`;

    let title, message;
    if (score >= 100) {
        title = "🏆 Perfect Score!";
        message = "You're a scam-spotting expert! You identified all scams correctly. You're well-protected!";
    } else if (score >= 80) {
        title = "🎉 Excellent!";
        message = "Great job! You caught most of the scams. Stay vigilant and keep learning!";
    } else if (score >= 70) {
        title = "👍 Good Effort!";
        message = "You got most right! Review the missed ones to strengthen your scam awareness.";
    } else if (score >= 50) {
        title = "📚 Learning!";
        message = "Keep learning about these scams to protect yourself and others!";
    } else {
        title = "⚠️ Stay Alert!";
        message = "Review all scenarios carefully. Scam awareness is important for your protection!";
    }

    document.getElementById('results-title').textContent = title;
    document.getElementById('results-text').textContent = message;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    bonusPoints = 0;
    answered = false;

    quizSection.style.display = 'block';
    resultSection.classList.remove('show');
    availableQns = shuffle(quizData);   //shuffle quiz
    loadQuestion();
    startTime = performance.now(); // start timer
}

nextbtn.onclick = nextQuestion;
document.getElementById('restart-btn').onclick = restartQuiz;

// Initialize
startbtn.addEventListener('click', function () {
    const userId = document.getElementById('userId').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if((!emailRegex.test(userId))|| userId === ""){
        document.getElementById('invalid-input').classList.remove("d-none");
        return;
    }
    availableQns = shuffle(quizData);   //shuffle quiz
    nextbtn.classList.remove("d-none");
    loadQuestion();
    document.getElementById('prequiz-section').classList = 'd-none'; // remove display of pre-quiz notice
    startTime = performance.now(); //start timer
});