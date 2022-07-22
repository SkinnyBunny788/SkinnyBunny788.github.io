function startTimer() {
    setInterval(function timer() { 
        const timerTitle = document.getElementById('input').value,
              goalDate = new Date(document.getElementById('input').value),
              currentDate = new Date(),
              diff = goalDate - currentDate,
              days = Math.floor(diff / (1000 * 60 * 60 * 24)),
              hours = Math.floor((diff / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((diff / (1000 * 60) % 60)),
              seconds = Math.round((diff / 1000) % 60);
              
        document.getElementById('timerTitle').style = 'visibility: visible'
        document.getElementById('timerTitle').innerText = timerTitle.slice(0,timerTitle.indexOf('T'));
        document.getElementById('days').innerHTML = days
        if (hours < 10) document.getElementById('hours').innerHTML = `0${hours}`
        else document.getElementById('hours').innerHTML = hours
        if (minutes < 10)document.getElementById('minutes').innerHTML = `0${minutes}`
        else document.getElementById('minutes').innerHTML = minutes
        if (seconds < 10) document.getElementById('seconds').innerHTML = `0${seconds}`
        else document.getElementById('seconds').innerHTML = seconds
    }, 1000);
}

