document.addEventListener('DOMContentLoaded', function () {

    function getContainerAndInsertDataIntoIt(containerId, data) {
        var containerId = document.getElementById(containerId);
        let foodElement = '';
        let menuItem;
        if (containerId === 'menuSalads') {
            menuItem = '<div class="col-md-4 col-sm-4 saladsItem">';
        }
        menuItem = '<div class="col-md-4 col-sm-4 menuItem">';
        data.forEach(function (food) {
            foodElement += menuItem;
            foodElement += '<div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">';
            foodElement += '<img src="' + food.photo + '" class="img-responsive" alt="">';
            foodElement += '</div>';
            foodElement += '<div class="team-info">';
            foodElement += '<h3>' + food.name + '</h3>';
            foodElement += '<p>' + food.ingredients + '</p>';
            foodElement += '<h3>' + food.price + '</h3>';
            foodElement += '</div>';
            foodElement += '</div>';
        });
        containerId.innerHTML = foodElement;
    }


    function getPastaData() {
        return [
            {
                photo: 'images/boscaiola.jpg',
                name: 'Tagliatele Boscaiola',
                ingredients: 'SOS ALB, SPECK, HRIBI - 600g',
                price: '28 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/carbonara.jpg',
                name: 'Spaghete Cabonara',
                ingredients: 'SOS ALB, PARMEZAN, OU, Panceta - 500g',
                price: '26 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/trentini.jpg',
                name: 'Penne Trentine',
                ingredients: 'SOS ROȘII, BUSUIOC, LEGUME LA CUPTOR - 620g',
                price: '25 RON',
                oldPrice: '24,99'
            }, {
                photo: 'images/FUSILI.jpg',
                name: 'Fusili Al Tono',
                ingredients: 'SOS ROȘII, TON, PARMEZAN 500g',
                price: '25 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/bolognese.jpg',
                name: 'Ragu (Bolognese)',
                ingredients: 'SOS ROȘII, SOS RAGU, PARMEZAN, VIN ALB - 500g',
                price: '26 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/contandinep.jpg',
                name: 'Penne Contandine',
                ingredients: 'SOS ROȘII, SALVIA, CEAPĂ, BACON PARMEZAN, VIN ALB - 450g',
                price: '26 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/marep.jpg',
                name: 'Spaghete Maremonti',
                ingredients: 'SOS ROȘII, FRUCTE DE MARE, CREVEȚI, VIN ALB - 670g',
                price: '32 RON',
                oldPrice: '24,99'
            }
        ]
    }

    function getSaladsData() {
        return [
            {
                photo: 'images/nintarda.jpg',
                name: 'Salată Nintarda',
                ingredients: 'SALATĂ VERDE, RUCOLA,  ROȘII, CASTRAVEȚI, MORCOV, PORUMB, OU, TON, MĂSLINE, CEAPĂ, TELEMEA, CRUTOANE, ULEI DE MĂSLINE - 600g ',
                price: '25 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/veloces.jpg',
                name: 'Veloce E Gusto',
                ingredients: 'SALATĂ MIXTĂ, ROȘII, CASTRAVEȚI, PORUMB, PIEPT DE PUI, BRÂNZĂ FETA, CARTOFI PRĂJIȚI, ARDEI ROȘU, PARMEZAN, CRUTOANE, SOS ALB - 600g',
                price: '26 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/delicatas.jpg',
                name: 'Delicata',
                ingredients: 'SALATĂ MIXTĂ. ROȘII, OREGANO, ȘUNCĂ, CASTRAVEȚI, MOZARELLA, ULEI DE MASLIE, APIO, CRUTOANE, ARDEI, PROSCIUTTO CRUDO, SOS ALB, LĂMÂIE - 500g',
                price: '25 RON',
                oldPrice: '24,99'
            }, {
                photo: 'images/club.jpg',
                name: 'Salata Club',
                ingredients: 'VARZĂ, CARTOFI PRĂJIȚI, ȘUNCĂ, ROȘII, MAIONEZĂ - 540g',
                price: '20 RON',
                oldPrice: '24,99'
            }
            , {
                photo: 'images/caeser.jpg',
                name: 'Salata Caesar',
                ingredients: 'SALATĂ VERDE, CRUTOANE, PIEPT DE PUI, ROȘII, PARMEZAN, BRÂNZĂ TELEMEA, OREGANO, SOS ALB - 450g',
                price: '23 RON',
                oldPrice: '24,99'
            }
        ]
    }


    function getPizzaData() {
        return [
            {
                photo: 'images/SUNCA SI CIUPERCI.jpg',
                name: 'Șuncă și ciuperci',
                ingredients: 'SOS ROȘII, MOZZARELA, ȘUNCĂ COTTO ȘI CIUPERCI - 550g',
                price: '25 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/diavola.jpg',
                name: 'Diavola (Picantă)',
                ingredients: 'SOS ROȘII, MOZZARELA, SALAM PICANT, GORGONZZOLA - 560g',
                price: '27 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/ALTA VISTA.jpg',
                name: 'Alta Vista',
                ingredients: 'SOS ROȘII, MOZZARELA, PROSCIUTTO CRUDO ,  RUCOLLA, PARMEZAN,  GORGONZZOLA - 530g',
                price: '27 RON',
                oldPrice: '24,99'
            }, {
                photo: 'images/DELICATA.jpg',
                name: 'Delicata',
                ingredients: 'SOS ROȘII, MOZZARELA, OREGANO, ROȘII CHERRY, RUCOLA, PARMEZAN, MOZZARELLA BOCCONCINI, ULEI MĂSLINE -660g',
                price: '26 RON',
                oldPrice: '24,99'
            }
            , {
                photo: 'images/bomba.jpg',
                name: 'Bomba',
                ingredients: 'SOS ROȘII, MOZZARELA, ȘUNCĂ, SALAM PICANT, PROSCIUTTO CRUDO, DOVLECEL, MĂSLINE, BUSUIOC - 670g',
                price: '28 RON',
                oldPrice: '24,99'
            }
            , {
                photo: 'images/capriciosa.jpg',
                name: 'Capriciosa',
                ingredients: 'SOS ROȘII, MOZARELLA, BACON, ClUPERCI, OU, PORUMB, MĂSLINE -730g ',
                price: '25 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/salsicia.jpg',
                name: 'Salsicia e cipolla',
                ingredients: 'SOS ROȘII, MOZARELLA, SALSICIA, CEAPĂ - 600g',
                price: '24 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/quatrof.jpg',
                name: 'Quattro formagi',
                ingredients: 'MOZZARELA, CAȘ EMMENTAL, CAȘ AFUMAT, GORONZOLA - 500g',
                price: '25 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/patatosa.jpg',
                name: 'Patatossa',
                ingredients: 'SOS ROȘII, MOZARELLA, PIEP DE PUI, ULEI MĂSLINE CU AROMĂ DE USTUROI, CARTOFI PRĂJIȚI 560g',
                price: '27 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/veg.jpg',
                name: 'Vegetariană',
                ingredients: 'SOS ROȘII, MOZARELLA, LEGUME LA CUPTOR - 650g',
                price: '24 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/maremonti.jpg',
                name: 'Maremonti',
                ingredients: 'SOS ROȘII, MOZARELLA, FRUCTE DE MARE, CREVEȚI, ULEI DE MĂSLINE CU AROMA DE USTUROI - 650g',
                price: '29 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/veloce.jpg',
                name: 'Veloce E Gusto',
                ingredients: 'SOS ROȘII, MOZZARELLA, ȘUNCĂ, BACON, SALAM PICANT, CIUPERCI, PORUMB,PROSCIUTTO CRUDO, PARMEZAN -730g',
                price: '32 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/calzone.jpg',
                name: 'Calzone',
                ingredients: 'SOS ROȘII, MOZZARELLA, ȘUNCĂ, CIUPERCI - 530g',
                price: '25 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/CONTANDINE.jpg',
                name: 'Contadine',
                ingredients: 'SOS ROȘII, MOZZARELLA, ȘUNCĂ, BACON, SPEK, ROȘII CHERRY, RUCOLA, PARMEZAN - 660g',
                price: '29 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/barone.jpg',
                name: 'Barone Roso',
                ingredients: 'SOS ROȘII, MOZZARELLA, BACON, CIUPERCI, PEPERONCINO - 610g',
                price: '25 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/trevisana.jpg',
                name: 'Trevisana',
                ingredients: 'SOS ROȘII, MOZZARELLA, ANSOA, RADICHIO, PANCETTA -600g',
                price: '25 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/romana.jpg',
                name: 'Romana',
                ingredients: 'SOS ROȘII, MOZZARELLA, TON, ANSOA, CAPERI - 720g',
                price: '26 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/regina.jpg',
                name: 'Regina',
                ingredients: 'SOS ROȘII, MOZZARELLA, PROSCIUTTO CRUDO, BOCONCINNI, ROȘII CHERRY, PARMEZAN - 720g',
                price: '28 RON',
                oldPrice: '24,99'
            },

            {
                photo: 'images/pizzaprimavera.png',
                name: 'Pizza Primavera',
                ingredients: 'SOS ROȘII, MOZZARELLA, HRIBI, GORGONZOLLA -570g',
                price: '27 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/tono.jpg',
                name: 'Tono e Cipola',
                ingredients: 'SOS ROȘII, MOZARELLA, TON, CEAPĂ - 630g',
                price: '25 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/trentina.jpg',
                name: 'Trentina',
                ingredients: 'SOS ROȘII, MOZZARELLA, SPEK, HRIBI - 680g',
                price: '28 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/focaccia.jpg',
                name: 'Focaccia Rozmarin',
                ingredients: 'ULEI DE MĂSLINE ȘI ROZMARIN - 250g',
                price: '13 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/primaverafocaccia.jpg',
                name: 'Focaccia Rossa',
                ingredients: 'SOS ROȘII, BUSUIOC - 310g',
                price: '14 RON',
                oldPrice: '24,99'
            },
            {
                photo: 'images/gusto.jpg',
                name: 'Pizza Gusto',
                ingredients: 'SOS ROȘII, MOZZARELLA, ARDEI COPT, MĂSLINE, ROȘII USCATE, ANGHINARE, PORUMB, BUSUIOC, ClUPERCI - 790g',
                price: '27 RON',
                oldPrice: '24,99'
            }
        ]
    }

    getContainerAndInsertDataIntoIt('menuPizza', getPizzaData());
    getContainerAndInsertDataIntoIt('menuPasta', getPastaData());
    getContainerAndInsertDataIntoIt('menuSalads', getSaladsData());
});

