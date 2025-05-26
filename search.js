
let fuse;
fetch('jobs.json')
  .then(res => res.json())
  .then(data => {
    fuse = new Fuse(data, { keys: ['title'] });
    document.getElementById('search').addEventListener('input', (e) => {
      const result = fuse.search(e.target.value);
      const container = document.getElementById('results');
      container.innerHTML = "";
      result.forEach(r => {
        container.innerHTML += `<div><a href="${r.item.link}" target="_blank">${r.item.title}</a></div>`;
      });
    });
  });
