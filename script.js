function calculateFriendship() {
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();

  if (name1 === "" || name2 === "") {
    alert("Please enter both names!");
    return;
  }

  const percentage = Math.floor(Math.random() * 100) + 1;

  let message = '';
  if (percentage >= 80) {
    message = "💖 Besties Forever!";
  } else if (percentage >= 50) {
    message = "😊 Good Friends!";
  } else {
    message = "🤗 Just getting started!";
  }

  const resultText = `${name1} & ${name2} are ${percentage}% compatible as friends!\n${message}`;
  const resultDiv = document.getElementById('result');
  resultDiv.innerText = resultText;

  resultDiv.classList.remove('fade-in');
  void resultDiv.offsetWidth;
  resultDiv.classList.add('fade-in');
}

function resetCalculator() {
  document.getElementById('name1').value = '';
  document.getElementById('name2').value = '';
  document.getElementById('result').innerText = '';
}
