fetch('assets/data.json')
  .then(response => response.json())
  .then(data => {
    const outputDiv = document.getElementById('data-output');
    outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  })
  .catch(error => console.error('Error loading JSON:', error));
