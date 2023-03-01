function loadScores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
  
    const tableBody = document.querySelector('#scores');
  
    if (scores.length) {
      for (const [i, score] of scores.entries()) {
        const position = document.createElement('td');
        const name = document.createElement('td');
        const score = document.createElement('td');
        const date = document.createElement('td');
  
        position.textContent = i + 1;
        name.textContent = score.name;
        score.textContent = score.score;
        date.textContent = score.date;
  
        const row = document.createElement('tr');
        row.appendChild(position);
        row.appendChild(name);
        row.appendChild(score);
        row.appendChild(date);
  
        tableBody.appendChild(row);
      }
    } else {
      tableBody.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
  }
  
  loadScores();