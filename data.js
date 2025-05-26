
fetch('jobs.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('job-section');
    data.forEach(item => {
      const card = `
        <div class="job-card">
          <h3>${item.title}</h3>
          <p>${item.date}</p>
          <a href="${item.link}" target="_blank">View</a>
        </div>`;
      container.innerHTML += card;
    });
  });
