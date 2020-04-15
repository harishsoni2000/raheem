  const submit=document.querySelector(".selected Radio button");

function quizOver(){
    document.querySelector(".").classList.add("show");
    correctAnswerSpan.innerHTML=score;
    totalQuestionSpan2.innerHTML=questions.length;
    percentage.innerHTML=(score/questions.length)*100 + "%";
 }