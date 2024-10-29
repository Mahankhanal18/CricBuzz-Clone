// Placeholder for live data fetching (if API available in the future)
console.log("JavaScript loaded - ready to add dynamic features");

// Example hover effect (optional)
document.querySelectorAll('.score-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    });
    card.addEventListener('mouseout', () => {
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
});
// Function to generate random scores
function generateRandomScore() {
    const runs = Math.floor(Math.random() * 400) + 50;  // Random runs between 50 and 450
    const wickets = Math.floor(Math.random() * 10);      // Random wickets between 0 and 9
    return `${runs}-${wickets}`;
}

// Function to update scores at random intervals
function updateScores() {
    document.getElementById("score1").innerText = `RSA ${generateRandomScore()}`;
    document.getElementById("score2").innerText = `IND ${generateRandomScore()}`;
    document.getElementById("score3").innerText = `SYD ${generateRandomScore()}`;
    document.getElementById("score4").innerText = `MUM ${generateRandomScore()}`;
}

// Update scores every 5 seconds
setInterval(updateScores, 5000);
