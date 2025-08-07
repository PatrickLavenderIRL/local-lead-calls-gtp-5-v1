fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
        const output = document.getElementById('data-output');
        output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(err => console.error("Error loading data:", err));
