// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let valid = true;

    if (name === "") {
        valid = false;
        alert("Name is required");
    }

    if (email === "") {
        valid = false;
        alert("Email is required");
    }

    if (message === "") {
        valid = false;
        alert("Message is required");
    }

    if (valid) {
        alert("Form submitted successfully!");
        // Here you can add AJAX code to send the form data to your server
    }
});

// Project modal
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
        let projectTitle = this.querySelector('h3').textContent;
        let projectDescription = this.querySelector('p').textContent;

        let modalHtml = `
            <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="projectModalLabel">${projectTitle}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ${projectDescription}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
        $('#projectModal').modal('show');

        $('#projectModal').on('hidden.bs.modal', function () {
            $(this).remove();
        });
    });
});
