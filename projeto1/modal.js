const background = document.getElementById('modal-backgroud')
const modalContainer = document.getElementById('modal-container')

let currentMovie = {}

function closeModal() {
    overlay.classList.remove('open')
}

function addCurrentMovie() {
    addToList(currentMovie)
    updateUI(currentMovie)
    closeModal()
}

function createModal(data) {
    currentMovie = data
    modalContainer.innerHTML = `<h2 id="movie-title">${data.Title}</h2>
    <section id="modal-body">
        <img
            id="movie-poster"
            src=${data.Poster}
            alt="Poster do filme."
        />
        <div id="movie-info">
            <div id="movie-plot">
                <h3>
                    ${data.Plot}
                </h3>
            </div>
            <div id="movie-cast">
                <h4>Elenco:</h4>
                <h5>${data.Actors}</h5>
            </div>
            <div id="movie-genre">
                <h4>Gênero:</h4>
                <h5>${data.Genre}</h5>
            </div>
        </div>
    </section>
    <section id="modal-footer">
        <button id="add-to-list" onclick="addCurrentMovie()">Adicionar à lista</button>
    </section>`
}

background.addEventListener('click', function () {
    overlay.classList.remove('open')
})
