class NavBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML =
        `<nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background: #0a2a43;">
            <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link page-scroll" href="#home">Home</a></li>
                <li class="nav-item"><a class="nav-link page-scroll" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link page-scroll" href="#search-surah">Search Surah</a></li>
                </ul>
            </div>
            </div>
        </nav>`;
    }
}

customElements.define("nav-bar",NavBar);