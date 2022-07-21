import $ from "jquery";
import "./style/style.css";
import "./script/app-bar.js";
import "./script/nav-bar.js";
import "./script/about-section.js";
import "./script/footer-section.js";

const background = document.getElementById("bg");
const moon = document.getElementById("moon");
const mountain = document.getElementById("mountain");
const road = document.getElementById("road");
const textHeader = document.getElementById("text-header");

$("window").on("scroll", () => {
    let value = window.scrollY;
    background.style.top = `${value*0.5}px`;
    moon.style.left = `${-value*0.5}px`;
    mountain.style.top = `${-value*0.15}px`;
    road.style.top = `${value*0.15}px`;
    textHeader.style.top = `${value*1}px`;
});

$(".page-scroll").on("click", function(p){
    const dest = $(this).attr("href");
    const destElement = $(dest);
    $("html, body").animate({
        scrollTop: destElement.offset().top-50
    },2000,'swing');
    p.preventDefault();
});


$(".search-button").on("click", () => {
    const inputSearch = document.querySelector(".input-search");
    fetch(`https://api-alquranid.herokuapp.com/surah/search/${inputSearch.value}`)
        .then(response => response.json())
        .then(response => {
            const surah = response.data;
            let cards = "";
            surah.forEach(s => cards+=showCard(s));
            const surahContainer = document.querySelector(".surah-container");
            surahContainer.innerHTML = cards;

            const modalSurahButton = document.querySelectorAll(".modal-surah-button");
            modalSurahButton.forEach(btn=>{
                btn.addEventListener("click",function(){
                    const namaSurah = this.dataset.namasurah;
                    fetch(`https://api-alquranid.herokuapp.com/surah/search/${namaSurah}`)
                        .then(response => response.json())
                        .then(response => {
                            const detail = response.data;
                            let surahDetail = "";
                            detail.forEach(s=>{
                                surahDetail += showDetail(s);
                            });
                            const modalBody = document.querySelector(".surah-detail");
                            modalBody.innerHTML = surahDetail;
                        })
                })
            });

            const modalAyatButton = document.querySelectorAll(".modal-ayat-button");
            modalAyatButton.forEach(btn => {
                btn.addEventListener("click",function(){
                    const nomorSurah = this.dataset.nomorsurah;
                    fetch(`https://api-alquranid.herokuapp.com/surah/${nomorSurah}`)
                        .then(response => response.json())
                        .then(response => {
                            const detail = response.data;
                            let ayatDetail = "";
                            detail.forEach(a => {
                                ayatDetail+= showAyatDetails(a);
                            })
                            const modalBody = document.querySelector(".ayat-detail");
                            modalBody.innerHTML = ayatDetail;
                        })
                })
            })
        })
});

const showCard = s => {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${s.nama}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${s.arti}</h6>
                        <a href="#" class="btn btn-primary modal-surah-button" data-bs-toggle="modal" data-bs-target="#surahDetailModal" data-namasurah="${s.nama}">Lihat Detail</a>
                        <a href="#" class="btn btn-success modal-ayat-button my-1" data-bs-toggle="modal" data-bs-target="#ayatDetailModal" data-nomorsurah="${s.nomor}">Lihat Ayat</a>
                    </div>
                </div>
            </div>`;
}

const showDetail = s => {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Nama Surah</strong>: ${s.nama} | ${s.asma}</li>
                            <li class="list-group-item"><strong>Arti</strong>: ${s.arti}</li>
                            <li class="list-group-item"><strong>Jumlah Ayat</strong>: ${s.ayat}</li>
                            <li class="list-group-item"><strong>Tempat Diturunkan</strong>: ${s.type}</li>
                            <li class="list-group-item"><strong>Keterangan</strong>: </br>${s.keterangan}</li>
                            <li class="list-group-item"><strong>Murottal</strong>: </br><audio controls><source src="${s.audio}" type="audio/mpeg"></audio>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`;
}

const showAyatDetails = a => {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <p class="fs-2 d-flex justify-content-between">
                                    <span>${a.nomor}.)</span>
                                    <span>${a.ar}</span>
                                </p>
                                <p class="fw-light text-end">${a.id}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`;
}