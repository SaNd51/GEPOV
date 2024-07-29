/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -30%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
//function modal1(){
//    var html =``;
//    $('#modal1').html(html);};

function modal1(){
    var html =`<div class="container d-flex align-items-center flex-column text-secondary text-center">
                      <h2 class="text-uppercase">DISSERTAÇÕES DE MESTRADO</h2>
                      <img style="width: 6rem; margin-bottom: 5px;" src="assets/img/uva.jpg" alt="..."/>
                      <h3>ANO: 2013</h3>
                      <a href="https://ww2.uva.ce.gov.br/apps/common/documentos_mestrazoo/dissertacao_fa032ab41b6ae5b7973745a6d807b212.pdf" target="_black">
                        <p class="masthead-subheading font-weight-light mb-0">
                        DESEMPENHO E CARACTERÍSTICAS DE CARCACA DE OVINOS MORADA NOVA
                        SUBMETIDOS A DIFERENTES MANEJOS ALIMENTARES.             
                      </p>
                      <p class="font-weight-light">Autor: MARIA CLAUDETE RODRIGUES PERES</p>
                     </a> 
                      <h3>ANO: 2014</h3>
                      <a href="https://ww2.uva.ce.gov.br/apps/common/documentos_mestrazoo/dissertacao_9764a22226ba7eb3e17a6efa551d35c6.pdf" target="_black">
                        <p class="masthead-subheading font-weight-light mb-0">
                        QUALIDADE DA CARNE DE OVINOS MORADA NOVA SUBMETIDOS A DIFERENTES
                        MANEJOS ALIMENTARES. 
                      </p>
                      <p class="font-weight-light">Autor: ANTÔNIO CLÉBIO FERREIRA DA SILVA</p>
                      </a>
                      <h3>ANO: 2015</h3>
                      <a href="https://ww2.uva.ce.gov.br/apps/common/documentos_mestrazoo/dissertacao_dce1aeddb3a6832294d144a3d5189880.pdf" target="_black">
                        <p class="masthead-subheading font-weight-light mb-0">
                        CARACTERÍSTICAS DE CARCAÇA DE CORDEIROS MORADA NOVA PUROS E CRUZADOS CRIADOS NO SEMIÁRIDO BRASILEIRO. 
                      </p>
                      <p class="font-weight-light">Autor: NATAN DONATO RORIZ</p>
                      </a>
                      <h3>ANO: 2016</h3>
                      <a href="https://ainfo.cnptia.embrapa.br/digital/bitstream/item/147389/1/CNPC-2016-Qualidade.pdf" target="_black">
                        <p class="masthead-subheading font-weight-light mb-0">
                        QUALIDADE DA CARNE DE OVINOS PUROS E CRUZADOS CRIADOS NO SEMIÁRIDO
                        NORDESTINO BRASILEIRO.
                      </p>
                      <p class="font-weight-light">Autor: ROMENIA REGINA PIRES LAGE</p>
                      </a>
                      
                      <h3>ANO: 2017</h3>
                      <a href="https://ww2.uva.ce.gov.br/apps/common/documentos_mestrazoo/dissertacao_be876a0c943822ca28046043b50ddd92.pdf" target="_black">
                        <p class="masthead-subheading font-weight-light mb-0">
                        EXPRESSAO DE GENES NO MÚSCULO (LONGISSIMUS DORSI) RELACIONADOS COM A
                        COMPOSIÇÃO TECIDUAL E FÍSICOQUÍMICA DA CARNE DE BORREGOS DE
                        DIFERENTES GRUPOS GENÉTICOS TERMINADOS EM SISTEMA DE INTEGRACAO
                        LAVOURA PECUÁRIA.
                      </p> 
                      <p class="font-weight-light">Autor: THYARLON BERGSON CHAVES LIMA</p>
                      </a>
                      <h3>ANO: 2018</h3>
                        <a href="https://ww2.uva.ce.gov.br/apps/common/documentos_mestrazoo/dissertacao_97d2af51f4eb72ae57ac3c2b3a710293.pdf" target="_black">
                          <p class="masthead-subheading font-weight-light mb-0">
                        TERMINAÇÃO DE OVELHAS DA RACA MORADA NOVA SUBMETIDAS A DIETAS
                        CONTENDO FARELO DE BISCOITO E FARELO DE AMENDOAS DE CASTANHA DE CAJÚ.
                      </p>
                      <p class="font-weight-light">Autor: PAULO DE TASSO VASCONCELOS FILHO</p>
                      </a>
                      <h3>ANO: 2019</h3>
                      <a href="https://ww2.uva.ce.gov.br/apps/common/documentos_mestrazoo/dissertacao_83ea0377a4431fbd964f087f9ef2640f.pdf" target="_black">
                        <p class="masthead-subheading font-weight-light mb-0">
                        PARÂMETROS QUALITATIVOS DA CARNE DE OVINOS MORADA NOVA ALIMENTADOS
                        COM FARELO DE BISCOITO.
                      </p>
                      <p class="font-weight-light">Autor: RENATA TEIXEIRA ALENCAR</p>
                      </a>
                      <a href="https://ww2.uva.ce.gov.br/apps/common/documentos_mestrazoo/dissertacao_cc8a5ac9194577bf34fd9c186c972e6a.pdf" target="_black">
                        <p class="masthead-subheading font-weight-light mb-0">
                        FARELO DE BISCOITO COMO ALTERNATIVA ENERGÉTICA EM DIETAS PARA OVINOS
                        MORADA NOVA
                      </p>
                      <p class="font-weight-light">Autor: LUIZA DE NAZARÉ CARNEIRO DA SILVA</p>
                      </a>
                    </div>
                    <div class="d-grid">
                      <button class="btn btn-outline-dark" data-bs-dismiss="modal" type="button" aria-label="Close">voltar</button>
                    </div>`;
    $('#modal1').html(html);};

function modal3(){
    var html = `<div class="container d-flex  flex-column text-secondary text-center">
                      <h2 class="text-uppercase mb-4">artigos</h2>
                      
                      <a class="d-flex justify-content-around align-items-center" 
                      href="https://drive.google.com/file/d/1nAozQMozMEdfZDuaOI6wc_c66VE_eMJ5/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Adaptive, morphometric and productive responses of Brazilian hair lambs: Crossing between indigenous breeds -
                          A machine learning approach
                        </p>
                        <i class="fas fa-download"></i>             
                      </a>
                      <a class="d-flex justify-content-around align-items-center" 
                      href="https://drive.google.com/file/d/1rqwzPBb_Z4NXdjFmXOnBi3-UNHtbKt_S/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Assessment of FecG genotypes on reproductive traits in Brazilian Morada Nova and Santa Ines sheep
                        </p>
                        <i class="fas fa-download"></i> 
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1IGnX822-0XSuFYFf8OGDTeF1PSH4Ce8H/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Bioeconomic analysis of total replacement of corn grain
                          with by‐product from biscuit manufacture for purebred and crossbred
                          Morada Nova lambs in feedlot system in the Brazilian semi‐arid region
                        </p>
                        <i class="fas fa-download"></i> 
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1BRj_Zx8CktsDxf6WHl0B7_0KFfMcwazU/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Carcass traits and morphometry, typifcation of the Longissimus dorsi
                          muscle and non‐carcass components of hair lambs: can biscuit bran
                          completely replace corn? A machine learning approach
                        </p>
                        <i class="fas fa-download"></i>
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/13EL2MquZ5mp7FxN6ysqo7RfzjTfSx_sf/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Changes on the physicochemical and
                          fatty acid profile of meat induced by
                          inclusion of biscuit bran in lamb diet
                        </p>
                        <i class="fas fa-download"></i>
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1OH9duPtCgDU_nASDrCY0FiEBjL5evDs9/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          CUSTOS E RECEITA BRUTA COM O PROCESSAMENTO DE OVINOS
                          MORADA NOVA SUBMETIDOS A DIFERENTES MANEJOS
                          ALIMENTARES NO SEMIÁRIDO NORDESTINO
                        </p>
                        <i class="fas fa-download"></i>
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/12V0jLW9-mR8I5RGVbqlPoxyxAitrZOuO/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Desempenho produtivo e características de carcaça de cordeiros
                          Rabo Largo puro e cruzados com Santa Inês
                        </p>
                        <i class="fas fa-download"></i>
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1rwboWdHeJNOBV7fU2ta0cFd3bmq86PvY/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Análise econômico-financeira do uso de farelo de biscoito como alternativa energética em dietas para cordeiros confinados 
                        </p>
                        <i class="fas fa-download"></i>
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1mzi2XYGHdFxTq4Fwl0t8JLql1cY9Qa2N/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Effect of breed on meat quality and global acceptance of native lambs and their crosses
                        </p>
                        <i class="fas fa-download"></i>
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1xW7fEbh75a5HYsljVBEJuOqAtYB1QWiR/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Efects of by‐product from biscuit industry on performance
                          and carcass traits of fattening Morada Nova lambs
                        </p>
                        <i class="fas fa-download"></i>
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/18Y6p2bj14xQpjfarv3ksv-mwkfk-ieH1/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Effects of dietary energy content and source using by-products on carcass
                          and meat quality traits of cull ewes
                        </p>
                        <i class="fas fa-download"></i>
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1ySUPiX8jHYRuDsmxDWB0f7_B17NZbdD9/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Efects of replacing corn with by‐product from biscuit manufacture
                          on feed intake, digestibility, nitrogen balance, ingestive behavior,
                          and growth performance of pure or crossbred Morada Nova sheep
                        </p>
                        <i class="fas fa-download"></i>
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1lqP8ni_gxC0agCVM7PYHKwcIKQH3rZOB/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Feeding restriction in the pre and postpartum period of hair
                          ewes raised in the semi‐arid region: implications on performance
                          and carcass traits of the progeny  
                        </p>
                        <i class="fas fa-download"></i>
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1Js6cV_H6hbwY8aw-5rgZNBKfdLFY98Je/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Gene expression in the Longissimus dorsi muscle related to meat
                          quality from tropical hair lambs
                        </p>
                        <i class="fas fa-download"></i>
                      </a>             
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1MYr_3Atmi2Z-R_Rvfk83QXY_BG1p34ll/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Machine learning applied to understand perceptions, habits and
                          preferences of lamb meat consumers in the Brazilian semi-arid region
                        </p>
                        <i class="fas fa-download"></i>
                      </a>
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1aK7o4XT07sZFMDeRfWXv0pzAwS68WhSY/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Qualidade de carne de ovinos Morada Nova submetidos diferents manejos alimentares
                        </p>
                        <i class="fas fa-download"></i>
                      </a> 
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1PsBRdL1Ig_95mmaIcJuw6pA5zstk_t54/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Morada Nova lambs’ meat production potential description through morphometric
                          evaluation
                        </p>
                        <i class="fas fa-download"></i>
                      </a>
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/12wR0LXbAIcRSNS7HDRcyGSPfTPxd29gS/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Nutritional efects and feeding behavior in ewes fed with biscuit bran
                          and cashew nut bran, with diferent energy levels
                        </p>
                        <i class="fas fa-download"></i>
                      </a>
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1URL8b2tbq9N-3MqK17Od2JtSlA7tN6tp/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Seep meat production in the Brazilian semi-arid region:crossing between indigenous breeds
                        </p>
                        <i class="fas fa-download"></i>
                      </a> 
                      <a class="d-flex justify-content-around align-items-center"
                      href="https://drive.google.com/file/d/1Dwdw_JAkhbI-hBCp5INTlSH7aDOnuR6A/view?usp=sharing" target="_black">
                        <p class="masthead-subheading font-weight-light mb-3 w-50">
                          Tissue and centesimal composition of the 12th rib of lambs from genetic groups different
                        </p>
                        <i class="fas fa-download"></i>
                      </a>                
                      
                    </div>
                    <div class="d-grid">
                      <button class="btn btn-outline-dark" data-bs-dismiss="modal" type="button" aria-label="Close">voltar</button>
                    </div>`;
                    $('#modal3').html(html);
};


function modal6(){
    var html = `
            <div class="img-galeria">
              <img src="assets/img/eventos/zootecnia/IMG_20230508_174046.jpg"  alt="..." >
              <img src="assets/img/eventos/zootecnia/IMG_20230508_174015.jpg"  alt="..." >
              <img src="assets/img/eventos/zootecnia/IMG-20230508-WA0016.jpg"  alt="...">
              <img src="assets/img/eventos/zootecnia/IMG_20230508_173730.jpg"  alt="...">
              <img src="assets/img/eventos/zootecnia/IMG-20230508-WA0161.jpg" alt="...">
              <img src="assets/img/eventos/zootecnia/IMG-20230508-WA0060.jpg"  alt="...">
              <img src="assets/img/eventos/zootecnia/IMG-20230508-WA0168.jpg"  alt="...">
              <img src="assets/img/eventos/zootecnia/IMG-20230509-WA0014.jpg"  alt="...">
              <img src="assets/img/eventos/zootecnia/IMG_20230508_090711_1.jpg"  alt="...">
              <img src="assets/img/eventos/zootecnia/IMG_20230508_175539.jpg"  alt="...">
              <img src="assets/img/eventos/zootecnia/IMG_20230508_173918.jpg"  alt="...">
              <img src="assets/img/eventos/zootecnia/IMG_20230508_173949.jpg"  alt="...">
              <img src="assets/img/eventos/zootecnia/2023-12-29 at 23.33.03.jpeg"  alt="...">
              <img src="assets/img/eventos/zootecnia/2024-07-22 at 14.55.54.jpeg"  alt="...">
              <img src="assets/img/eventos/zootecnia/2024-07-22 at 14.55.55.jpeg"  alt="...">
              <img src="assets/img/eventos/zootecnia/2024-07-22 at 14.55.56.jpeg"  alt="...">
              <img src="assets/img/eventos/zootecnia/2024-07-22 at 14.55.57.jpeg"  alt="...">
            </div>
            <div class="d-grid">
              <button class="btn btn-outline-dark" data-bs-dismiss="modal" type="button" aria-label="Close">voltar</button>
            </div>
         `;
    $('#modal6').html(html);
};

function modal7() {
    var html = `<div class="img-galeria">
                  <img src="assets/img/eventos/zootec/WhatsApp Image 2024-07-22 at 14.55.45.jpeg" class=" " alt="..." >
                  <img src="assets/img/eventos/zootec/WhatsApp Image 2024-07-22 at 14.55.46 (1).jpeg"  alt="..." >
                  <img src="assets/img/eventos/zootec/WhatsApp Image 2024-07-22 at 14.55.46.jpeg"  alt="...">
                  <img src="assets/img/eventos/zootec/WhatsApp Image 2024-07-22 at 14.55.47 (1).jpeg"  alt="...">
                  <img src="assets/img/eventos/zootec/WhatsApp Image 2024-07-22 at 14.55.47.jpeg" alt="...">
                  <img src="assets/img/eventos/zootec/WhatsApp Image 2024-07-22 at 14.55.48.jpeg"  alt="...">
                  <img src="assets/img/eventos/zootec/WhatsApp Image 2024-07-22 at 14.55.51.jpeg"  alt="...">
                  <img src="assets/img/eventos/zootec/WhatsApp Image 2024-07-22 at 14.55.52 (2).jpeg"  alt="...">
                  <img src="assets/img/eventos/zootec/WhatsApp Image 2024-07-22 at 14.55.52.jpeg"  alt="...">
                </div>
                <div class="d-grid">
                  <button class="btn btn-outline-dark" data-bs-dismiss="modal" type="button" aria-label="Close">voltar</button>
                </div>`;
    $('#modal7').html(html);
};