document.addEventListener("DOMContentLoaded", function() {
    const voteButtons = document.querySelectorAll('.vote-btn');
    const feedbackSection = document.getElementById('feedback-section');
    const votingSection = document.getElementById('voting-section');

    voteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const candidateName = this.getAttribute('data-candidate');
            submitVote(candidateName);
        });
    });

    function submitVote(candidateName) {
        // Simulate an API call to submit the vote
        console.log(`Vote submitted for ${candidateName}`);
        
        // Hide voting section and show feedback section
        if (votingSection) votingSection.style.display = 'none';
        feedbackSection.classList.add('visible');
        
        // Redirect to the home page after a delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    }
});
