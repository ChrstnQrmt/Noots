function deleteNote(noteId) {
    fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
    window.location.href = "/";
    });
}

function updateNote(noteId, newText) {
    fetch("/update-note", {
        method: "POST",
        body: JSON.stringify({ noteId: noteId, newText: newText }),
    }).then((_res) => {
        window.location.href = "/";
    });
}