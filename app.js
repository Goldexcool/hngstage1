document.addEventListener("DOMContentLoaded", function() {
  const displayTime = () => {
      const now = new Date();
      const utcString = now.toISOString().split('T')[1].split('.')[0];
      document.getElementById('currentTime').textContent = utcString;
  }

  displayTime();
  setInterval(displayTime, 1000); // Update time every second
});

document.addEventListener("DOMContentLoaded", function() {
  const displayDateTime = () => {
      const now = new Date();

      // Display current day of the week
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayOfWeek = days[now.getUTCDay()];
      document.getElementById('currentDay').textContent = dayOfWeek;

      // Display Slack email
      const slackEmail = "ogunseitangold105@gmail.com"; 
      document.getElementById('slackEmail').textContent = slackEmail;
  }

  displayDateTime();
});
