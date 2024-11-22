    // تولید عدد تصادفی بین 1 تا 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function checkGuess() {
      const guessInput = document.getElementById('guess');
      const message = document.getElementById('message');
      const userGuess = parseInt(guessInput.value);
      
      attempts++;

      if (userGuess === randomNumber) {
        message.textContent = `تبریک! عدد ${randomNumber} را حدس زدید در ${attempts} بار تلاش`;
        guessInput.disabled = true;
      } else if (userGuess < randomNumber) {
        message.textContent = 'عدد بیشتری را حدس بزنید';
      } else {
        message.textContent = 'عدد کمتری را حدس بزنید';
      }

      guessInput.value = '';
      guessInput.focus();
    }