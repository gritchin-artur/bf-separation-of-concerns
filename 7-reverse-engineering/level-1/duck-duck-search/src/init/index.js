// this file is the program's Entry Point
debugger;

document.getElementById('button').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput) {
        const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(
            searchInput,
        )}`;
        window.open(searchUrl, '_blank');
    } else {
        alert('Please enter a search term!');
    }
});
