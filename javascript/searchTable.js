const searchInput = document.getElementById('searchInput');
const tableBody = document.getElementById('tableBody');

searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const courseName = rows[i].getElementsByTagName('td')[0].innerText.toLowerCase();
        const instructor = rows[i].getElementsByTagName('td')[1].innerText.toLowerCase();

        if (courseName.includes(searchValue) || instructor.includes(searchValue)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
});