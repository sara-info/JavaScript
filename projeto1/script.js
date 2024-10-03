const key = '39af2abf'
const searchButton = document.getElementById('search-button')
const overlay = document.getElementById('modal-overlay')
const movieName = document.getElementById('movie-name')
const movieYear = document.getElementById('movie-year')
const movieListContainer = document.getElementById('movie-list')

let movieList = []

async function searchButtonClickHandler() {
    try {
        let url = `https://www.omdbapi.com/?apikey=${key}&t=${movieNameParameterGenerator()}&y=${movieYearParameterGenerator()}`
        const response = await fetch(url)
        const data = await response.json()
        console.log('data', data)
        if (data.Error) {
            throw new Error('Filme não encontrado')
        }
        createModal(data)
        overlay.classList.add('open')
    } catch (error) {
        /* console.error(error.message) */
        notie.alert({ type: 'error', text: error.message })
    }
    /* console.log(response)
    console.log(data) */
}

function movieNameParameterGenerator() {
    if (movieName.value === '') {
        throw new Error('O nome do filme deve ser informado')
    }
    return movieName.value.split(' ').join('+')
}

function movieYearParameterGenerator() {
    if (movieYear.value === '') {
        return ''
    }
    if (movieYear.value.length != 4 || Number.isNaN(Number(movieYear.value))) {
        throw new Error('Ano do filme inválido.')
    }
    return movieYear.value
}

function addToList(movieObject) {
    movieList.push(movieObject)
}

function updateUI(movieObject) {
    movieListContainer.innerHTML += `
    <article>
        <img
            src="${movieObject.Poster}"
            alt="Poster do filme ${movieObject.Title}"
        />
        <button class="remove-button">
            <i class="bi bi-trash"></i>Remover
        </button>
    </article>`
}

searchButton.addEventListener('click', searchButtonClickHandler)
