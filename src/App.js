const App = {};
App.getElementById = (id) => document.getElementById(id);
App.correctAnswer = 0;
App.chancesRemain = 0;
App.randomNumberGenerator = function () {
  let randomNumber;
  for (let i = 1; i; i++) {
    randomNumber = ~~(Math.random() * 11);
    if (randomNumber > 0) break;
  }
  return randomNumber;
};
App.checkResult = function () {
  const infoHTMLElement = this.getElementById("info");
  if (this.chancesRemain === 0) {
    infoHTMLElement.innerHTML = `<h3 class="text-danger">You lose! Try again!</h3>`;
    this.getElementById("submit-btn").disabled = true;
  } else {
    this.chancesRemain = this.chancesRemain - 1;
    const inputValue = parseInt(this.getElementById("input").value);
    if (inputValue === this.correctAnswer) {
      infoHTMLElement.innerHTML = `<h3 class="text-success">You Win</h3>`;
    } else if (inputValue > this.correctAnswer) {
      infoHTMLElement.innerHTML = `<h3 class="text-warning">Correct answer is smaller!</h3>`;
    } else if (inputValue < this.correctAnswer) {
      infoHTMLElement.innerHTML = `<h3 class="text-warning">Correct answer is greater!</h3>`;
    }
    this.getElementById("previous-guesses").innerText = inputValue;
    this.getElementById("guesses-remaining").innerText = this.chancesRemain;
  }
};
App.onload = function () {
  const randomNumber = this.randomNumberGenerator();
  this.correctAnswer = randomNumber;
  this.chancesRemain = 3;
};
