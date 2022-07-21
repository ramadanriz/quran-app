class FooterSection extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML =
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L288,64L576,224L864,160L1152,256L1440,224L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
        <footer class="text-white text-center py-2" style="background: #0099ff;">
            <h5 class="fw-light">© 2022 Rizky Ramadan</h5>
        </footer>`;
    }
}

customElements.define("footer-section",FooterSection);