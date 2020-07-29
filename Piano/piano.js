const keys = document.querySelectorAll('.key')
keys.forEach(key => {
    key.addEventListener('click', () => PlayNote(key))
})

function PlayNote(key) {
    const NoteAudio = document.getElementById(key.dataset.note)
    NoteAudio.currentTime = 0
    NoteAudio.play()
    key.classList.add('active')
    NoteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })

}