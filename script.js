const myMeloReact = [
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa0.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa1.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa2.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa3.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa4.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa5.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa6.png"
];

const dialogues = [
  {
    text: "Hi :DDD. How are you feeling today?",
    answers: [
      { text: "Feeling fine, actually", faceIndex: 0, next: 1 },
      { text: "Feeling okay, kind of", faceIndex: 1, next: 2 },
      { text: "Feeling uneasy", faceIndex: 2, next: 3 },
      { text: "Struggling with the day", faceIndex: 3, next: 4 },
      { text: "Not feeling like myself today", faceIndex: 4, next: 5 },
      { text: "Barely keeping it together", faceIndex: 5, next: 6 }
    ]
  },
  {
    text: "Yay, I'm glad to hear that :D. What are you up to :)", //nodo 1
    answers: [
      { text: "Just vibing", faceIndex: 0, next: 7 },
      { text: "Did something cool today", faceIndex: 0, next: 8 },
      { text: "Was with somebody special", faceIndex: 0, next: 9 }
    ]
  },
  {
    text: "Hmm, okay. Wanna talk about it :)?", //nodo 2
    answers: [
      { text: "Woke up feeling a bit off", faceIndex: 1, next: 10 },
      { text: "A bad memory came back to me", faceIndex: 3, next: 11 },
      { text: "I've been on a rush the whole day!", faceIndex: 2, next: 12}
    ]
  },
  {
    text: "Oh, what's wrong :)? I'm sure talking about it can help :D", //nodo 3
    answers: [
        {text: "Nobody has asked me how I feel today", faceIndex: 4, next: 13},
        {text: "Somebody made fun of me", faceIndex: 4, next: 14},
        {text: "I really can't shake off a bad memory", faceIndex: 3, next: 15},
        {text: "I didn't catch any sleep", faceIndex: 2, next: 16},
    ]
  },
  {
    text: "I'm sorry to hear that :( What's wrong?", //nodo 4
    answers: [
        {text: "I feel like I can't do anything right", faceIndex: 3, next: 17},
        {text: "I really miss someone that is special to me", faceIndex: 4, next: 18},
        {text: "I keep feeling like I'm about to cry", faceIndex: 5, next: 19},
        {text: "I feel like I'm not enough", faceIndex: 3, next: 20},
    ]
  },
  {
    text: "Oh, why is that :(? You are great the way you are!", //nodo 5
    answers: [
        {text: "I hurt somebody I really care about", faceIndex: 5, next: 21},
        {text: "I am tired! I really need to rest", faceIndex: 4, next: 22},
        {text: "I am really mad at somebody I care about",  faceIndex: 4, next: 23},
        {text: "I haven't done any of my chores", faceIndex: 5, next: 24},
        {text: "I am sick of the way I am", faceIndex: 4, next: 25},
        {text: "I can't stop crying", faceIndex: 5, next: 26},
    ]
  },
  {
    text: "Oh dear, I am really sorry. Please, tell me what is making you feel that way...", //nodo 6
    answers: [
        {text: "I want to hurt myself",  faceIndex: 6, next: 27},
        {text: "I can't keep going today, I'm at my limit",  faceIndex: 4, next: 28},
        {text: "I had a big fight with somebody special to me",  faceIndex: 4, next: 29},
        {text: "I failed at something that was really important to me",  faceIndex: 5, next: 30},
        {text: "I can't stop comparing myself to others",  faceIndex: 4, next: 31},
        {text: "I dissapointed somebody who is really important to me",  faceIndex: 5, next: 32},
        {text: "I feel like a burden to the people around me",  faceIndex: 6, next: 33},
    ]
  },
];


/*const melodyImg = document.getElementById("melodystart");

// Loop through all the answers
myMeloReact.forEach((url, index) => {
  const answer = document.getElementById(`ans${index}`);

  if (answer) {
    // When you hover over an answer → change image
    answer.addEventListener("mouseenter", () => {
      melodyImg.src = url;
    });

    // When you leave the answer → reset image
    answer.addEventListener("mouseleave", () => {
      melodyImg.src = "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymelo1.png";
    });
  }
});*/

const dialogueEl = document.querySelector(".dialogue");
const answersContainer = document.querySelector(".mymelotext");

function showDialogue(index) {
  const node = dialogues[index];
  
  // Update Melody’s line
  dialogueEl.textContent = node.text;

  // Remove old answers (but keep the dialogue line)
  answersContainer.querySelectorAll(".answer1").forEach(el => el.remove());

  // Add new answers
  node.answers.forEach((answer, i) => {
    const h2 = document.createElement("h2");
    h2.className = "answer1";
    h2.textContent = answer.text;

    h2.addEventListener("mouseover", () => {
      document.getElementById("melodystart").src = myMeloReact[answer.faceIndex];
    });

    h2.addEventListener("click", () => {
        document.getElementById("melodystart").src = myMeloReact[answer.faceIndex];
      showDialogue(answer.next); // jump to next node
    });

    answersContainer.appendChild(h2);
  });
}

const resetBtn = document.getElementById("resetBtn"); // NEW
resetBtn.textContent = "🔄 Reset"; // NEW
resetBtn.className = "reset-btn"; // NEW (style it in CSS)

// NEW: Reset button logic
resetBtn.addEventListener("click", () => { // NEW
  showDialogue(0); // NEW
}); // NEW

// Start with the first dialogue
showDialogue(0);


const melody = document.getElementById("melodystart");
let currentFace = myMeloReact[1]; // start happy
let blinkFace = "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymelo2t.png"; 

melody.src = currentFace;

// blink on hover
melody.addEventListener("mouseover", () => {
  melody.src = blinkFace;
});

melody.addEventListener("mouseout", () => {
  melody.src = currentFace; // go back to the *last set* face
});

// whenever you change her face via dialogue:
function setMelodyFace(index) {
  currentFace = myMeloReact[index];
  melody.src = currentFace;
}
