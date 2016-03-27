/**
 * Created by Miguel Angel Angulo on 3/19/2016.
 */
(function () {
  'use strict';

  angular
    .module('app.newEmp')
    .factory('utilsDataFunctions', utilsDataFunctions);

  /* @ngInject */
  function utilsDataFunctions($mdToast) {

    var utils = {};

    utils.countries = [
      {
        "name":"Afganistán",
        "code":"AF"
      },
      {
        "name":"Albania",
        "code":"AL"
      },
      {
        "name":"Argelia",
        "code":"DZ"
      },
      {
        "name":"Samoa Americana",
        "code":"AS"
      },
      {
        "name":"Andorra",
        "code":"AD"
      },
      {
        "name":"Angola",
        "code":"AO"
      },
      {
        "name":"Anguila",
        "code":"AI"
      },
      {
        "name":"Antártida",
        "code":"AQ"
      },
      {
        "name":"Antigua y Barbuda",
        "code":"AG"
      },
      {
        "name":"Argentina",
        "code":"AR"
      },
      {
        "name":"Armenia",
        "code":"AM"
      },
      {
        "name":"Aruba",
        "code":"AW"
      },
      {
        "name":"Australia",
        "code":"AU"
      },
      {
        "name":"Austria",
        "code":"AT"
      },
      {
        "name":"Azerbaiyán",
        "code":"AZ"
      },
      {
        "name":"Bahamas",
        "code":"BS"
      },
      {
        "name":"Bahrein",
        "code":"BH"
      },
      {
        "name":"Bangladesh",
        "code":"BD"
      },
      {
        "name":"Barbados",
        "code":"BB"
      },
      {
        "name":"Belarús",
        "code":"BY"
      },
      {
        "name":"Bélgica",
        "code":"BE"
      },
      {
        "name":"Belice",
        "code":"BZ"
      },
      {
        "name":"Benin",
        "code":"BJ"
      },
      {
        "name":"Bermudas",
        "code":"BM"
      },
      {
        "name":"Bhután",
        "code":"BT"
      },
      {
        "name":"Bolivia",
        "code":"BO"
      },
      {
        "name":"Bosnia y Herzegovina",
        "code":"BA"
      },
      {
        "name":"Botswana",
        "code":"BW"
      },
      {
        "name":"Isla Bouvet",
        "code":"BV"
      },
      {
        "name":"Brasil",
        "code":"BR"
      },
      {
        "name":"Territorio Británico del Océano Índico",
        "code":"IO"
      },
      {
        "name":"Brunei Darussalam",
        "code":"BN"
      },
      {
        "name":"Bulgaria",
        "code":"BG"
      },
      {
        "name":"Burkina Faso",
        "code":"BF"
      },
      {
        "name":"Burundi",
        "code":"BI"
      },
      {
        "name":"Camboya",
        "code":"KH"
      },
      {
        "name":"Camerún",
        "code":"CM"
      },
      {
        "name":"Canadá",
        "code":"CA"
      },
      {
        "name":"Cabo Verde",
        "code":"CV"
      },
      {
        "name":"Islas Caimán",
        "code":"KY"
      },
      {
        "name":"República Centroafricana",
        "code":"CF"
      },
      {
        "name":"Chad",
        "code":"TD"
      },
      {
        "name":"Chile",
        "code":"CL"
      },
      {
        "name":"China",
        "code":"CN"
      },
      {
        "name":"Isla de Navidad",
        "code":"CX"
      },
      {
        "name":"Islas Cocos (Keeling)",
        "code":"CC"
      },
      {
        "name":"Colombia",
        "code":"CO"
      },
      {
        "name":"Comoras",
        "code":"KM"
      },
      {
        "name":"Congo",
        "code":"CG"
      },
      {
        "name":"Congo",
        "code":"CD"
      },
      {
        "name":"Islas Cook",
        "code":"CK"
      },
      {
        "name":"Costa Rica",
        "code":"CR"
      },
      {
        "name":"Côte d'Ivoire",
        "code":"CI"
      },
      {
        "name":"Croacia",
        "code":"HR"
      },
      {
        "name":"Cuba",
        "code":"CU"
      },
      {
        "name":"Chipre",
        "code":"CY"
      },
      {
        "name":"República Checa",
        "code":"CZ"
      },
      {
        "name":"Dinamarca",
        "code":"DK"
      },
      {
        "name":"Djibouti",
        "code":"DJ"
      },
      {
        "name":"Dominica",
        "code":"DM"
      },
      {
        "name":"República Dominicana",
        "code":"DO"
      },
      {
        "name":"Ecuador",
        "code":"EC"
      },
      {
        "name":"Egipto",
        "code":"EG"
      },
      {
        "name":"El Salvador",
        "code":"SV"
      },
      {
        "name":"Guinea Ecuatorial",
        "code":"GQ"
      },
      {
        "name":"Eritrea",
        "code":"ER"
      },
      {
        "name":"Estonia",
        "code":"EE"
      },
      {
        "name":"Etiopía",
        "code":"ET"
      },
      {
        "name":"Islas Malvinas",
        "code":"FK"
      },
      {
        "name":"Islas Feroe",
        "code":"FO"
      },
      {
        "name":"Fiji",
        "code":"FJ"
      },
      {
        "name":"Finlandia",
        "code":"FI"
      },
      {
        "name":"Francia",
        "code":"FR"
      },
      {
        "name":"Guayana Francesa",
        "code":"GF"
      },
      {
        "name":"Polinesia Francesa",
        "code":"PF"
      },
      {
        "name":"Tierras Australes Francesas",
        "code":"TF"
      },
      {
        "name":"Gabón",
        "code":"GA"
      },
      {
        "name":"Gambia",
        "code":"GM"
      },
      {
        "name":"Georgia",
        "code":"GE"
      },
      {
        "name":"Alemania",
        "code":"DE"
      },
      {
        "name":"Ghana",
        "code":"GH"
      },
      {
        "name":"Gibraltar",
        "code":"GI"
      },
      {
        "name":"Grecia",
        "code":"GR"
      },
      {
        "name":"Groenlandia",
        "code":"GL"
      },
      {
        "name":"Granada",
        "code":"GD"
      },
      {
        "name":"Guadeloupe",
        "code":"GP"
      },
      {
        "name":"Guam",
        "code":"GU"
      },
      {
        "name":"Guatemala",
        "code":"GT"
      },
      {
        "name":"Guinea",
        "code":"GN"
      },
      {
        "name":"Guinea Bissau",
        "code":"GW"
      },
      {
        "name":"Guyana",
        "code":"GY"
      },
      {
        "name":"Haití",
        "code":"HT"
      },
      {
        "name":"Heard e Islas McDonald",
        "code":"HM"
      },
      {
        "name":"Santa Sede",
        "code":"VA"
      },
      {
        "name":"Honduras",
        "code":"HN"
      },
      {
        "name":"Hong Kong",
        "code":"HK"
      },
      {
        "name":"Hungría",
        "code":"HU"
      },
      {
        "name":"Islandia",
        "code":"IS"
      },
      {
        "name":"India",
        "code":"IN"
      },
      {
        "name":"Indonesia",
        "code":"ID"
      },
      {
        "name":"Irán",
        "code":"IR"
      },
      {
        "name":"Iraq",
        "code":"IQ"
      },
      {
        "name":"Irlanda",
        "code":"IE"
      },
      {
        "name":"Israel",
        "code":"IL"
      },
      {
        "name":"Italia",
        "code":"IT"
      },
      {
        "name":"Jamaica",
        "code":"JM"
      },
      {
        "name":"Japón",
        "code":"JP"
      },
      {
        "name":"Jordania",
        "code":"JO"
      },
      {
        "name":"Kazajstán",
        "code":"KZ"
      },
      {
        "name":"Kenya",
        "code":"KE"
      },
      {
        "name":"Kiribati",
        "code":"KI"
      },
      {
        "name":"Corea, La República Popular Democrática de",
        "code":"KP"
      },
      {
        "name":"Corea, La República de",
        "code":"KR"
      },
      {
        "name":"Kuwait",
        "code":"KW"
      },
      {
        "name":"Kirguistán",
        "code":"KG"
      },
      {
        "name":"Lao, República Democrática Popular",
        "code":"LA"
      },
      {
        "name":"Letonia",
        "code":"LV"
      },
      {
        "name":"Líbano",
        "code":"LB"
      },
      {
        "name":"Lesotho",
        "code":"LS"
      },
      {
        "name":"Liberia",
        "code":"LR"
      },
      {
        "name":"Libia",
        "code":"LY"
      },
      {
        "name":"Liechtenstein",
        "code":"LI"
      },
      {
        "name":"Lituania",
        "code":"LT"
      },
      {
        "name":"Luxemburgo",
        "code":"LU"
      },
      {
        "name":"Macao",
        "code":"MO"
      },
      {
        "name":"Macedonia",
        "code":"MK"
      },
      {
        "name":"Madagascar",
        "code":"MG"
      },
      {
        "name":"Malawi",
        "code":"MW"
      },
      {
        "name":"Malasia",
        "code":"MY"
      },
      {
        "name":"Maldivas",
        "code":"MV"
      },
      {
        "name":"Malí",
        "code":"ML"
      },
      {
        "name":"Malta",
        "code":"MT"
      },
      {
        "name":"Islas Marshall",
        "code":"MH"
      },
      {
        "name":"Martinique",
        "code":"MQ"
      },
      {
        "name":"Mauritania",
        "code":"MR"
      },
      {
        "name":"Mauricio",
        "code":"MU"
      },
      {
        "name":"Mayotte",
        "code":"YT"
      },
      {
        "name":"México",
        "code":"MX"
      },
      {
        "name":"Micronesia",
        "code":"FM"
      },
      {
        "name":"Moldova",
        "code":"MD"
      },
      {
        "name":"Mónaco",
        "code":"MC"
      },
      {
        "name":"Mongolia",
        "code":"MN"
      },
      {
        "name":"Montserrat",
        "code":"MS"
      },
      {
        "name":"Marruecos",
        "code":"MA"
      },
      {
        "name":"Mozambique",
        "code":"MZ"
      },
      {
        "name":"Myanmar",
        "code":"MM"
      },
      {
        "name":"Namibia",
        "code":"NA"
      },
      {
        "name":"Nauru",
        "code":"NR"
      },
      {
        "name":"Nepal",
        "code":"NP"
      },
      {
        "name":"Países Bajos",
        "code":"NL"
      },
      {
        "name":"Nueva Caledonia",
        "code":"NC"
      },
      {
        "name":"Nueva Zelandia",
        "code":"NZ"
      },
      {
        "name":"Nicaragua",
        "code":"NI"
      },
      {
        "name":"Níger",
        "code":"NE"
      },
      {
        "name":"Nigeria",
        "code":"NG"
      },
      {
        "name":"Niue",
        "code":"NU"
      },
      {
        "name":"Isla Norfolk",
        "code":"NF"
      },
      {
        "name":"Isla Marianas del Norte",
        "code":"MP"
      },
      {
        "name":"Noruega",
        "code":"NO"
      },
      {
        "name":"Omán",
        "code":"OM"
      },
      {
        "name":"Pakistán",
        "code":"PK"
      },
      {
        "name":"Palau",
        "code":"PW"
      },
      {
        "name":"Estado de Palestina",
        "code":"PS"
      },
      {
        "name":"Panamá",
        "code":"PA"
      },
      {
        "name":"Papua Nueva Guinea",
        "code":"PG"
      },
      {
        "name":"Paraguay",
        "code":"PY"
      },
      {
        "name":"Perú",
        "code":"PE"
      },
      {
        "name":"Filipinas",
        "code":"PH"
      },
      {
        "name":"Pitcairn",
        "code":"PN"
      },
      {
        "name":"Polonia",
        "code":"PL"
      },
      {
        "name":"Portugal",
        "code":"PT"
      },
      {
        "name":"Puerto Rico",
        "code":"PR"
      },
      {
        "name":"Qatar",
        "code":"QA"
      },
      {
        "name":"Reunión",
        "code":"RE"
      },
      {
        "name":"Rumania",
        "code":"RO"
      },
      {
        "name":"Federación de Rusia",
        "code":"RU"
      },
      {
        "name":"Rwanda",
        "code":"RW"
      },
      {
        "name":"Santa Helena, Ascensión y Tristán de Acuña",
        "code":"SH"
      },
      {
        "name":"Saint Kitts y Nevis",
        "code":"KN"
      },
      {
        "name":"Santa Lucía",
        "code":"LC"
      },
      {
        "name":"San Pedro y Miquelón",
        "code":"PM"
      },
      {
        "name":"San Vicente y las Granadinas",
        "code":"VC"
      },
      {
        "name":"Samoa",
        "code":"WS"
      },
      {
        "name":"San Marino",
        "code":"SM"
      },
      {
        "name":"Santo Tomé y Príncipe",
        "code":"ST"
      },
      {
        "name":"Arabia Saudita",
        "code":"SA"
      },
      {
        "name":"Senegal",
        "code":"SN"
      },
      {
        "name":"Seychelles",
        "code":"SC"
      },
      {
        "name":"Sierra Leona",
        "code":"SL"
      },
      {
        "name":"Singapur",
        "code":"SG"
      },
      {
        "name":"Eslovaquia",
        "code":"SK"
      },
      {
        "name":"Eslovenia",
        "code":"SI"
      },
      {
        "name":"Islas Salomón",
        "code":"SB"
      },
      {
        "name":"Somalia",
        "code":"SO"
      },
      {
        "name":"Sudáfrica",
        "code":"ZA"
      },
      {
        "name":"Georgia del Sur y las Islas Sandwich del Sur",
        "code":"GS"
      },
      {
        "name":"España",
        "code":"ES"
      },
      {
        "name":"Sri Lanka",
        "code":"LK"
      },
      {
        "name":"Sudan",
        "code":"SD"
      },
      {
        "name":"Suriname",
        "code":"SR"
      },
      {
        "name":"Svalbard y Jan Mayen",
        "code":"SJ"
      },
      {
        "name":"Swazilandia",
        "code":"SZ"
      },
      {
        "name":"Suecia",
        "code":"SE"
      },
      {
        "name":"Suiza",
        "code":"CH"
      },
      {
        "name":"República Árabe Siria",
        "code":"SY"
      },
      {
        "name":"Taiwán (Provincia de China)",
        "code":"TW"
      },
      {
        "name":"Tayikistán",
        "code":"TJ"
      },
      {
        "name":"Tanzania",
        "code":"TZ"
      },
      {
        "name":"Tailandia",
        "code":"TH"
      },
      {
        "name":"Timor-Leste",
        "code":"TL"
      },
      {
        "name":"Togo",
        "code":"TG"
      },
      {
        "name":"Tokelau",
        "code":"TK"
      },
      {
        "name":"Tonga",
        "code":"TO"
      },
      {
        "name":"Trinidad y Tobago",
        "code":"TT"
      },
      {
        "name":"Túnez",
        "code":"TN"
      },
      {
        "name":"Turquía",
        "code":"TR"
      },
      {
        "name":"Turkmenistán",
        "code":"TM"
      },
      {
        "name":"Islas Turcas y Caicos",
        "code":"TC"
      },
      {
        "name":"Tuvalu",
        "code":"TV"
      },
      {
        "name":"Uganda",
        "code":"UG"
      },
      {
        "name":"Ucrania",
        "code":"UA"
      },
      {
        "name":"Emiratos Árabes Unido",
        "code":"AE"
      },
      {
        "name":"Reino Unido de Gran Bretaña e Irlanda del Norte",
        "code":"GB"
      },
      {
        "name":"Estados Unidos de América ",
        "code":"US"
      },
      {
        "name":"Islas Ultramarinas Menores de los Estados Unidos",
        "code":"UM"
      },
      {
        "name":"Uruguay",
        "code":"UY"
      },
      {
        "name":"Uzbekistán",
        "code":"UZ"
      },
      {
        "name":"Vanuatu",
        "code":"VU"
      },
      {
        "name":"Venezuela",
        "code":"VE"
      },
      {
        "name":"Viet Nam",
        "code":"VN"
      },
      {
        "name":"Islas Vírgenes británicas",
        "code":"VG"
      },
      {
        "name":"Islas Vírgenes de los Estados Unidos",
        "code":"VI"
      },
      {
        "name":"Wallis y Futuna",
        "code":"WF"
      },
      {
        "name":"Sahara Occidental",
        "code":"EH"
      },
      {
        "name":"Yemen",
        "code":"YE"
      },
      {
        "name":"Zambia",
        "code":"ZM"
      },
      {
        "name":"Zimbabwe",
        "code":"ZW"
      },
      {
        "name":"Islas Åland",
        "code":"AX"
      },
      {
        "name":"Bonaire, San Eustaquio y Saba",
        "code":"BQ"
      },
      {
        "name":"Curaçao",
        "code":"CW"
      },
      {
        "name":"Guernsey",
        "code":"GG"
      },
      {
        "name":"Isla de Man",
        "code":"IM"
      },
      {
        "name":"Jersey",
        "code":"JE"
      },
      {
        "name":"Montenegro",
        "code":"ME"
      },
      {
        "name":"Saint Barthélemy",
        "code":"BL"
      },
      {
        "name":"Saint Martin (parte francesa)",
        "code":"MF"
      },
      {
        "name":"Serbia",
        "code":"RS"
      },
      {
        "name":"Sint Maarten (parte neerlandesa)",
        "code":"SX"
      },
      {
        "name":"Sudán del Sur",
        "code":"SS"
      }
    ];
    utils.getCountries = function(){
      return utils.countries;
    };
    utils.encoding64 = function(string){
      if(string){
        return btoa(string)
      }
    };
    utils.decoding64 = function(hash){
      if(hash){
        return atob(hash);
      }
    };

    utils.openCustomToast = function(params){
      $mdToast.show({
        hideDelay: params.delay,
        position: 'top right',
        controller: function ToastCtrl($scope, $mdToast, $state, params) {
          $scope.objParam = params;
        },
        locals: {params: params},
        templateUrl: '../app/newEmp/factories/templates/toast-template.html'
      });
    };
    return utils;
  }
})();