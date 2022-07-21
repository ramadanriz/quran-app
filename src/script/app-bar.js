class AppBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML =
        `<header>
            <img src="https://res.cloudinary.com/djjthto9l/image/upload/v1646626548/asset/bg_ozsqrr.jpg" id="bg">
            <img src="https://res.cloudinary.com/djjthto9l/image/upload/v1646626538/asset/moon_oj4dwe.png" id="moon">
            <img src="https://res.cloudinary.com/djjthto9l/image/upload/v1646626573/asset/mountain_mtz93z.png" id="mountain">
            <img src="https://res.cloudinary.com/djjthto9l/image/upload/v1646626561/asset/road_uiwvgm.png" id="road">
            <h2 id="text-header">القران الكريم</h2>
            <a href="#about" class="btn btn-outline-light page-scroll" id="scroll-btn">Scroll</a>
        </header>`;
    }
}

customElements.define("app-bar",AppBar);