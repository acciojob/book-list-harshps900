//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit").addEventListener("click", function (e) {
        e.preventDefault();

        // Get input values
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let isbn = document.getElementById("isbn").value;

        if (title === "" || author === "" || isbn === "") {
            alert("Please fill in all fields");
            return;
        }

        // Get the book list table body
        let bookList = document.getElementById("book-list");

        // Create a new row
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Clear</button></td>
        `;

        // Append row to book list
        bookList.appendChild(row);

        // Clear input fields
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    });

    // Event delegation to handle delete button clicks
    document.getElementById("book-list").addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.parentElement.remove();
        }
    });
});
