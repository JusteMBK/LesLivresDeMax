document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const newContent = document.getElementById('newContent').value;
    if (newContent) {
        // Met à jour le contenu du roman directement sur la page
        document.querySelector('#roman p').textContent = newContent;

        // Envoie une requête AJAX au serveur pour sauvegarder le nouveau contenu
        fetch('/update-roman', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: newContent })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Le contenu du roman a été mis à jour avec succès !");
            } else {
                alert("Il y a eu une erreur lors de la mise à jour du roman.");
            }
        })
        .catch(error => console.error('Erreur:', error));
    }
});
document.getElementById('updateButton').addEventListener('click', function() {
    const newContent = prompt("Entrez le nouveau contenu de votre roman:");
    if (newContent) {
        document.querySelector('#roman p').textContent = newContent;
    }
});

// Animation de chargement
window.addEventListener('beforeunload', function() {
    document.body.classList.add('loading');
});
 