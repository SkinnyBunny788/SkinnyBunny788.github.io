function startTimer() {
    setInterval(function timer() { 
        document.getElementById('timerTitle').style = 'visibility: visible'
        let timerTitle = document.getElementById('input').value
        document.getElementById('timerTitle').innerText = timerTitle.slice(0,timerTitle.indexOf('T'));
        let currentDate = new Date()
        let goalDate = new Date(document.getElementById('input').value)
        let diff = goalDate - currentDate;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff / (1000 * 60 * 60) % 24));
        let minutes = Math.floor((diff / (1000 * 60) % 60));
        let seconds = Math.round((diff / 1000) % 60);

        document.getElementById('days').innerHTML = days
        if (hours < 10) {
            document.getElementById('hours').innerHTML = `0${hours}`
        } else {
            document.getElementById('hours').innerHTML = hours
        }
        if (minutes < 10) {
            document.getElementById('minutes').innerHTML = `0${minutes}`
        } else {
            document.getElementById('minutes').innerHTML = minutes
        }
        if (seconds < 10) {
            document.getElementById('seconds').innerHTML = `0${seconds}`
        }  else {
            document.getElementById('seconds').innerHTML = seconds
        }
    }, 1000);
    console.log(new Date(document.getElementById('input').value))
}

