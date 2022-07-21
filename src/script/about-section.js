class AboutSection extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML =
        `<section id="about" class="text-white">
            <div class="container my-3">
            <div class="row">
                <div class="col-md">
                <h3 class="text-center">Tentang Al-Qur'an</h3>
                <div class="row justify-content-center my-5">
                    <div class="col-md-5">
                    <p>Al-Quran dalam bahasa arab yang memiliki arti bacaan. Al-Quran diturunkan oleh Allah melalui malaikat Jibril. Al-Quran diturunkan secara berangsur-angsur di kota besar Mekah dan Madinah sejak tahun 610 M sampai kematian Nabi Muhammad tiba yaitu pada tahun 632 M.</p>
                    </div>
                    <div class="col-md-5">
                    <p>Al-Quran memiliki isi yang lebih pendek dibandingkan dengan perjanjian baru atau juga kitab Ibrani. Al-Quran dibagi menjadi 114 surat, atau bisa disebut dengan bab. Dalam bab atau surat itu, memiliki ayat atau butir-butir yang berbeda-beda. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>`;
    }
}

customElements.define("about-section",AboutSection);