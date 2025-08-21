const myMeloReact = [
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa0.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa1.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa2.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa3.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa4.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa5.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa6.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymelo2t.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa8.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa9.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa10.png",
  "https://raw.githubusercontent.com/cCalic04/MyMeloApoyo/refs/heads/main/mymeloa11.png"
];

const myMeloHelp = [
  {
    text: "Sure! Let's try together and see what we can do :). We can take notes so you can keep track of the way you are feeling now :D. Let's try to narrow it down, do you feel more...", //nodo 1
    answers:[
      {text: "High energy", faceIndex: 0, next:1},
      {text: "Low energy", faceIndex: 4, next:2},
      {text: "Neutral energy", faceIndex: 1, next:3},
    ]
  },
  {
    text: "Alright, feeling on a rush, eh :D? Do you feel pleased or unpleased with all this energy?", //nodo 1
    answers:[    
    {text: "Pleased", faceIndex: 7, next: 4},
    {text: "Unpleased", faceIndex: 5, next:5},
    ]
  },
  {
    text: "Ohh, low battery :0? Do you feel calm or uncomfortable?", //nodo 2
    answers:[
      {text: "Calm", faceIndex: 7, next: 6},
      {text: "Uncomfortable", faceIndex: 5, next: 7},
    ]
  },
  {
    text: "Just hanging in there, eh? What's going on :)?", //nodo 3
    answers:[
      {text: "Feeling alright", faceIndex: 1, next: 8},
      {text: "Feeling kinda down", faceIndex: 3, next: 9},

    ]
  },
  {
    text: "Nice! :D All pumped up!! Which of these sounds more like you right now?", //nodo 4
    answers:[
      {text: "Excited -I am feeling nice for an upcoming event", faceIndex:0, next: 10},
      {text: "Euphoric -I feel great! Just really happy!", faceIndex:7, next: 10},
      {text: "Inspired -I amlooking forward to making something of my own!", faceIndex:0, next: 10},
      {text: "Pleasantly surprised -Something unexpected happened and it makes me really happy!", faceIndex: 0, next: 10},
      {text: "Cheerful -I just did something really funny, I can't stop laughing and smiling!", faceIndex: 7, next: 10},
      {text: "Focused -I am really invested in something I'm doing!", faceIndex: 0, next: 10},
    ]
  },
  {
    text: "Oh, sorry to hear that :( Which of these sounds more like you right now?", //nodo 5
    answers: [
      {text: "Enraged -Something is really bugging me off!", faceIndex:9, next: 10},
      {text: "Anxious -I can't stop thinking about something...", faceIndex:5, next: 10},
      {text: "Frustrated -I can't do anything right!", faceIndex:8, next: 10},
      {text: "Defensive -I don't deserve the way people are treating me, it's not fair!", faceIndex: 5, next: 10},
      {text: "Panicked -Something really threw me off and I am having trouble staying on track",faceIndex: 6, next: 10},
      {text: "In a hurry -So much stuff to do!! I need to do it all as soon as possible", faceIndex: 3, next: 10},
    ]
  },
  {
    text: "Good to hear you are feeling cozy :) Which of these sounds more like you right now?", //nodo 6
    answers: [
      {text: "Fulfilled -Something I did is paying off, feels good", faceIndex: 10, next: 10},
      {text: "Relieved -In the end, everything was alright...", faceIndex: 11, next: 10},
      {text: "Carefree -Nothing to do at the moment, I can relax for a bit", faceIndex: 0, next: 10},
      {text: "Sleepy -Finally time to rest after a long day", faceIndex: 10, next: 10},
      {text: "Content -I am just feeling alright at the moment", faceIndex: 10, next: 10},
      {text: "Grateful -Something came out just the way I needed it to!", faceIndex: 10, next: 10},
    ]
  },
  {
    text: "Oh, long day :(? Which of these sounds more like you right now?", //nodo 7
    answers: [
      {text: "Melancholic -I am feeling contemplative and introspective", faceIndex: 4, next: 10},
      {text: "Apathetic -Nothing seems to interests me right now, I don't want to engage in anything", faceIndex: 11, next: 10},
      {text: "Overwhelmed -There's too much to do and I don't have energy left for any of it", faceIndex: 11, next: 10},
      {text: "Despair -I feel hopeless about my future, I'm lost", faceIndex: 11, next: 10},
      {text: "Drained -I am about to go out of battery...", faceIndex: 6, next: 10},
      {text: "Miserable -I am feeling just desperately sad and I can't seem to be able to overcome it", faceIndex: 6, next: 10},
    ]  
  },
    {
    text: "Glad to hear that :) Which of these sounds more like you right now?", //nodo 8
    answers: [
      {text: "Pleasant -Things are coming along nicely today", faceIndex: 0, next: 10},
      {text: "Easygoing -I am worriless, just vibing", faceIndex: 10, next: 10},
      {text: "Secure -Things have been going my way lately", faceIndex: 0, next: 10},
      {text: "Comfy -This place is very nice...", faceIndex: 10, next: 10},
      {text: "Hopeful -I am positive about my future", faceIndex: 7, next: 10},
      {text: "Restful -I have just the right amount of energy", faceIndex: 8, next: 10},
    ]
  },
  {
    text: "Oh okay :( Which of these sounds more like you right now?", //nodo 9
    answers: [
      {text: "Bored -Nothing to do right now...", faceIndex: 4, next: 10},
      {text: "Dissapointed -Something didn't came out the way I expected it to", faceIndex: 5, next: 10},
      {text: "Irritated -Most things seem to be annoying me right now", faceIndex: 8, next: 10},
      {text: "Annoyed -Something in particular threw me off, not enough to make me mad, but still", faceIndex: 8, next: 10},
      {text: "Nervous -I am feeling a bit agitated", faceIndex: 4, next: 10},
      {text: "Startled -Something sudden surprised me! I'm still processing it", faceIndex: 3, next: 10},
    ]
  },
  {
    text: "Now we know how you are feeling :D, but what made you feel like this?", //nodo 10
    answers: [
      {text: "A person or their actions -Somebody did something particularly to me", faceIndex: 0, next: 11},
      {text: "The place I'm at -Being here really changes how I feel", faceIndex: 0, next: 11},
      {text: "Something I saw -This object seemed to have an impact in me, either that or it made me remember something emotional", faceIndex: 0, next: 11},
      {text: "The day I've been having -My current emotions are the sum of this whole day", faceIndex: 0, next: 11},
      {text: "Something I was told -A story (a tv show, a book, a song, gossip, etc) made me feel a particular way", faceIndex: 0, next: 11},
      {text: "A memory -I remembered something that happened to me", faceIndex: 0, next: 11},
    ]
  },
  {
    text: "Okay, now, how would you feel about being with other people right now?", //nodo 11
    answers:[
        {text: "I strongly want to be with someone in particular right now", faceIndex: 0, next: 12},
        {text: "I want to be with someone in particular right now", faceIndex: 0, next: 12},
        {text: "Right now, I don't feel any particular way about company", faceIndex: 0, next: 12},
        {text: "I don't want to be alone, but I don't really care who I am with at the moment", faceIndex: 0, next: 12},
        {text: "I want to have some time for myself right now", faceIndex: 0, next: 12},
        {text: "I strongly want to have some time for myself right now", faceIndex: 0, next: 12},
        {text: "I want to avoid someone in particular right now", faceIndex: 0, next: 12},
    ]
  },
  ]
const dialogues = [
  {
    text: "Hi :DDD. How are you feeling today?",
    answers: [
      { text: "Feeling fine, actually", faceIndex: 0, next: 1 },
      { text: "Feeling okay, kind of", faceIndex: 1, next: 2 },
      { text: "Feeling uneasy", faceIndex: 2, next: 3 },
      { text: "Struggling with the day", faceIndex: 3, next: 4 },
      { text: "Not feeling like myself today", faceIndex: 4, next: 5 },
      { text: "Barely keeping it together", faceIndex: 5, next: 6 },
      {text: "I need help putting my feelings into words", faceIndex: 7, next: {map: myMeloHelp, index: 0}}
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

function showDialogue(index, map = dialogues) {
  const node = map[index];
  
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
if (typeof answer.next === "number") {
        showDialogue(answer.next, map);
      }
      // if next is an object → jump to another map
      else if (typeof answer.next === "object") {
        showDialogue(answer.next.index, answer.next.map);
      }
      
    });

    answersContainer.appendChild(h2);
  });
}

const resetBtn = document.getElementById("resetBtn"); // NEW
resetBtn.textContent = "Reset"; // NEW
resetBtn.className = "reset-btn"; // NEW (style it in CSS)

// NEW: Reset button logic
resetBtn.addEventListener("click", () => { // NEW
  showDialogue(0); // NEW
}); // NEW

// Start with the first dialogue
showDialogue(0, dialogues);


const melody = document.getElementById("melodystart");
let currentFace = myMeloReact[1]; // start happy
let blinkFace = myMeloReact[7]; 

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
