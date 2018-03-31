(function() {
  const secondHand = document.querySelector('.watch__hand--seconds');
  const minutesHand = document.querySelector('.watch__hand--minutes');
  const hoursHand = document.querySelector('.watch__hand--hours');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + (mins / 2) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }
  setInterval(setDate, 1000);

})();


