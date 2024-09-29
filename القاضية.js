function calculateDateDifference() {
    const targetDate = new Date('2020-11-27T22:41:12'); // Static target date
    const currentDate = new Date();


    const difference = currentDate - targetDate; // Difference in milliseconds

    // Convert difference to various units
    const totalSeconds = Math.floor(difference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24); 
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    // Display the results
    document.getElementById("weeks").textContent = weeks;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

function updateCounter() {
    calculateDateDifference();
    setTimeout(updateCounter, 1000); // Update every second
}

// Start the counter immediately
updateCounter();
