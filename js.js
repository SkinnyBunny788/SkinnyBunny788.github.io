
function startTimer() {
    document.getElementById('timerTitle').style = 'visibility: visible'
    document.getElementById('timerTitle').innerText = document.getElementById('input').value;
    setInterval(function timer() { 
        let currentDate = new Date()
        let goalDate = new Date(document.getElementById('input').value)
        let diff = goalDate - currentDate;


        let days = Math.round(diff / (1000 * 60 * 60 * 24));
        let hours = Math.round((diff / (1000 * 60 * 60) % 24));
        let minutes = Math.round((diff / (1000 * 60) % 60));
        let seconds = Math.round((diff / 1000) % 60);

        document.getElementById('days').innerHTML = days
        document.getElementById('hours').innerHTML = hours
        document.getElementById('minutes').innerHTML = minutes
        document.getElementById('seconds').innerHTML = seconds    
    }, 1000);
}
 
