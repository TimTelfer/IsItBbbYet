var answerElement = document.getElementById("answer");
var countdownElement = document.getElementById("countdown");
var discoElement = document.getElementById("disco");
var daysLeftElement = document.getElementById("daysleft");

var countDownDate = new Date("Jun 7, 2019 00:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.ceil(distance / (1000 * 60 * 60 * 24));

if (days <= 0) {
	answerElement.innerHTML = "Yes!!!";
	countdownElement.style.display = "none";
	discoElement.style.display = "block";
}
else {
	daysLeftElement.innerHTML = days;
	answerElement.innerHTML = "Not yet!";
	countdownElement.style.display = "block";
	discoElement.style.display = "none";
}