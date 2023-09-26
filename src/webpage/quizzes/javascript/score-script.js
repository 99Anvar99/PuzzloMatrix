// Array to store high scores
var highScores = [];

// Reference to the score table element
var scoreTableEl = document.querySelector("#score-table");

// Function to load scores from local storage
var loadScores = function() { 
    highScores = localStorage.getItem("scores");

    // If no scores are found, display a message and return
    if (!highScores) {
        highScores = [];
        var noScores = document.createElement("div");
        noScores.setAttribute("style", "text-align: center");
        noScores.textContent = "No scores found! Play the quiz to add your score!";
        document.querySelector("#score-card").appendChild(noScores);
        return false;
    }

    highScores = JSON.parse(highScores);
    highScores.sort(compare);
};

// Comparison function to sort scores in descending order
var compare = function(a, b) {
    var scoreA = parseInt(a.score);
    var scoreB = parseInt(b.score);
    var comparison = 0;
    if (scoreA < scoreB) {
        comparison = 1;
    } else if (scoreA > scoreB) {
        comparison = -1;
    }
    return comparison;
};

// Function to create the score table
var createScoreTable = function() {
    for (var i = 0; i < highScores.length; i++){ 
        var scoreRow = document.createElement("tr");
        scoreTableEl.appendChild(scoreRow);

        // Create and append table cells for name and score
        var nameCell = document.createElement("td");
        nameCell.className = "table-name-data";
        nameCell.textContent = highScores[i].name;
        scoreRow.appendChild(nameCell);

        var scoreCell = document.createElement("td");
        scoreCell.className = "table-score-data";
        scoreCell.setAttribute("style", "text-align: right");
        scoreCell.textContent = highScores[i].score;
        scoreRow.appendChild(scoreCell);
    }
};

// Load scores from local storage and create the score table
loadScores();
createScoreTable();