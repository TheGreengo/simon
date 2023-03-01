function loadScores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
  
    const tableBody = document.querySelector('#scores');
  
    if (scores.length) {
      for (const [i, score] of scores.entries()) {
        const positionEl = document.createElement('td');
        const nameEl = document.createElement('td');
        const scoreEl = document.createElement('td');
        const dateEl = document.createElement('td');
  
        positionEl.textContent = i + 1;
        nameEl.textContent = score.name;
        scoreEl.textContent = score.score;
        dateEl.textContent = score.date;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(positionEl);
        rowEl.appendChild(nameEl);
        rowEl.appendChild(scoreEl);
        rowEl.appendChild(dateEl);
  
        tableBody.appendChild(rowEl);
      }
    } else {
      tableBody.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
  }
  
  loadScores();