const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const routes = require('./index');
// const AuthService = require('../service/auth.service');
const Constants = require('../constants');
const HTTP = Constants.HTTP;
const VALIDATIONS = Constants.INPUT_VALIDATION;
const fs = require('fs');
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');


let autorizacionesALiquidar = [
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 12,
        nombreAsociado: "Sadura Pablo",
        plan: "Sancor 3500",
        importeTotal: 100,
        diagnostico: 'Código',
        checked: true
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 13,
        nombreAsociado: "Freire Mariano",
        plan: "Sancor 3500",
        importeTotal: 200,
        diagnostico: 'Código',
        checked: true
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 14,
        nombreAsociado: "Flebus Karina",
        plan: "Sancor 3500",
        diagnostico: 'Código',
        importeTotal: 100
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 15,
        nombreAsociado: "Ingaramo Dario",
        plan: "Sancor 3500",
        importeTotal: 100,
        diagnostico: 'Código',
        checked: false
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 16,
        nombreAsociado: "Sadura Pablo",
        plan: "Sancor 3500",
        importeTotal: 100,
        checked: false
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 17,
        nombreAsociado: "Sadura Pablo",
        plan: "Sancor 3500",
        importeTotal: 100,
        diagnostico: 'Código',
        checked: false
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 18,
        nombreAsociado: "Freire Mariano",
        plan: "Sancor 3500",
        importeTotal: 200,
        diagnostico: 'Código',
        checked: false
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 19,
        nombreAsociado: "Flebus Karina",
        plan: "Sancor 3500",
        importeTotal: 175,
        diagnostico: 'Código',
        checked: false
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 20,
        nombreAsociado: "Ingaramo Dario",
        plan: "Sancor 3500",
        importeTotal: 500,
        diagnostico: 'Código',
        checked: false
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 21,
        nombreAsociado: "Sadura Pablo",
        plan: "Sancor 3500",
        importeTotal: 100,
        diagnostico: 'Código',
        checked: false
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 22,
        nombreAsociado: "Flebus Karina",
        plan: "Sancor 3500",
        importeTotal: 175,
        diagnostico: 'Código',
        checked: false
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 23,
        nombreAsociado: "Ingaramo Dario",
        plan: "Sancor 3500",
        importeTotal: 500,
        diagnostico: 'Código',
        checked: false
    },
    {
        fechaAutorizacion: "12/12/2019",
        numeroAutorizacion: 24,
        nombreAsociado: "Sadura Pablo",
        plan: "Sancor 3500",
        importeTotal: 100,
        diagnostico: 'Código',
        checked: false
    }
];

router.get('/obtenerLugarRealizacion',

    (req, res) => {

        let lugarRealizacion = {
            "efectores": [
                {
                    "razonSocial": "Ctro. Priv. de Radiaciones S.",
                    "numeroPrestador": "1"
                },
                {
                    "razonSocial": "ALASSIA, LUCIANA LORENA",
                    "numeroPrestador": "3008"
                },
                {
                    "razonSocial": "CHIARAVIGLIO, OSCAR MANUEL",
                    "numeroPrestador": "7096"
                },
                {
                    "razonSocial": "GRIBAUDO, ALDO RAMON",
                    "numeroPrestador": "7100"
                },
                {
                    "razonSocial": "MARIN, CLAUDIA BEATRIZ",
                    "numeroPrestador": "7103"
                },
                {
                    "razonSocial": "SIMONCINI, DANIEL VICENTE",
                    "numeroPrestador": "7104"
                },
                {
                    "razonSocial": "DEMONTE, RAQUEL CRISTINA DE T.",
                    "numeroPrestador": "7106"
                },
                {
                    "razonSocial": "MARTINEZ, MARIA GRACIELA",
                    "numeroPrestador": "7114"
                },
                {
                    "razonSocial": "BERGESIO, GRACIELA MOLINA DE",
                    "numeroPrestador": "7115"
                },
                {
                    "razonSocial": "RUFFINER, MONICA CATALINA",
                    "numeroPrestador": "7116"
                },
                {
                    "razonSocial": "WILLINER, NORBERTO ALEJANDRO",
                    "numeroPrestador": "7122"
                },
                {
                    "razonSocial": "ARAGON, CAROLINA ANDREA",
                    "numeroPrestador": "7142"
                },
                {
                    "razonSocial": "VANZINI, LUCIANA PAOLA",
                    "numeroPrestador": "7865"
                },
                {
                    "razonSocial": "MARCON, JORGELINA SOLEDAD",
                    "numeroPrestador": "8645"
                },
                {
                    "razonSocial": "VICENTIN, LILIA MONDINO DE",
                    "numeroPrestador": "9765"
                },
                {
                    "razonSocial": "VELEZ, FERNANDO JORGE",
                    "numeroPrestador": "9778"
                },
                {
                    "razonSocial": "CURMONA, ANGEL JOSE JORGE",
                    "numeroPrestador": "9854"
                },
                {
                    "razonSocial": "DELBINO, MARIA INES KARLEN",
                    "numeroPrestador": "10252"
                },
                {
                    "razonSocial": "LORENZONE, NYDIA EUGENIA",
                    "numeroPrestador": "11284"
                },
                {
                    "razonSocial": "VECCHIETTI, ALEJANDRA",
                    "numeroPrestador": "13178"
                },
                {
                    "razonSocial": "SADONIO, ALFREDO MANUEL",
                    "numeroPrestador": "13714"
                },
                {
                    "razonSocial": "GIACOSSA, ANA ALEJANDRINA",
                    "numeroPrestador": "14855"
                },
                {
                    "razonSocial": "ZURBRIGGEN, MARIA TERESA",
                    "numeroPrestador": "15563"
                },
                {
                    "razonSocial": "ZURBRIGGEN, RAQUEL TERESA",
                    "numeroPrestador": "15648"
                },
                {
                    "razonSocial": "PIOVANO, PATRICIA IMELDA",
                    "numeroPrestador": "16238"
                },
                {
                    "razonSocial": "MARCHETTI, SUSANA ZEGAIB",
                    "numeroPrestador": "17275"
                },
                {
                    "razonSocial": "BERTON, WALTER",
                    "numeroPrestador": "18123"
                },
                {
                    "razonSocial": "MITRI, HORACIO",
                    "numeroPrestador": "18255"
                },
                {
                    "razonSocial": "ALARCON, OSCAR DANIEL",
                    "numeroPrestador": "19938"
                },
                {
                    "razonSocial": "MACCALLINI, GRACIELA AMALIA",
                    "numeroPrestador": "22645"
                },
                {
                    "razonSocial": "MINACORI, HUGO DELVO",
                    "numeroPrestador": "24134"
                },
                {
                    "razonSocial": "ALTINA, ALBERTO JULIO",
                    "numeroPrestador": "24911"
                },
                {
                    "razonSocial": "INGARAMO, SILVANA LORENA",
                    "numeroPrestador": "26574"
                },
                {
                    "razonSocial": "RINALDI, ALICIA SUSANA",
                    "numeroPrestador": "26680"
                },
                {
                    "razonSocial": "GARETTO, ANALIA LIDIA",
                    "numeroPrestador": "26692"
                },
                {
                    "razonSocial": "ZABALA, HORACIO EDUARDO",
                    "numeroPrestador": "27465"
                },
                {
                    "razonSocial": "TORASSA, ADRIAN",
                    "numeroPrestador": "28501"
                },
                {
                    "razonSocial": "RINALDI, MABEL GUADALUPE",
                    "numeroPrestador": "29002"
                },
                {
                    "razonSocial": "BERTERO, MARTA SUSANA",
                    "numeroPrestador": "29012"
                },
                {
                    "razonSocial": "GIOVENALE, SUSANA CATALINA",
                    "numeroPrestador": "29031"
                },
                {
                    "razonSocial": "CRISPIN, CECILIA",
                    "numeroPrestador": "30226"
                },
                {
                    "razonSocial": "A.M.S. - POSICION SAN FRANCISC",
                    "numeroPrestador": "31637"
                },
                {
                    "razonSocial": "CASTAGNO, HECTOR PALMIRO",
                    "numeroPrestador": "37513"
                },
                {
                    "razonSocial": "SOLDANO, JOSE MARIA",
                    "numeroPrestador": "37907"
                },
                {
                    "razonSocial": "DELLAROSSA, NORBERTO HUGO",
                    "numeroPrestador": "37908"
                },
                {
                    "razonSocial": "WALKER, ANALIA INES",
                    "numeroPrestador": "37910"
                },
                {
                    "razonSocial": "MAROZZI, LUIS OSCAR",
                    "numeroPrestador": "37911"
                },
                {
                    "razonSocial": "BIANCO, JOSE CARLOS",
                    "numeroPrestador": "37912"
                },
                {
                    "razonSocial": "CORAGLIA, SANDRA DEL CARMEN",
                    "numeroPrestador": "37913"
                },
                {
                    "razonSocial": "BERGESE, ADRIANA GABRIELA",
                    "numeroPrestador": "38301"
                },
                {
                    "razonSocial": "VISINTINI, MARIA LAURA",
                    "numeroPrestador": "43468"
                },
                {
                    "razonSocial": "FERPOZZI, ALEJANDRO ALBERTO",
                    "numeroPrestador": "43966"
                },
                {
                    "razonSocial": "MATA, SONIA DEL CARMEN",
                    "numeroPrestador": "44434"
                },
                {
                    "razonSocial": "DE MARCO, GABRIELA ALEJANDRA",
                    "numeroPrestador": "45791"
                },
                {
                    "razonSocial": "RIEGE, MARTIN",
                    "numeroPrestador": "46216"
                },
                {
                    "razonSocial": "MASSONI, HECTOR FRANCISCO",
                    "numeroPrestador": "47363"
                },
                {
                    "razonSocial": "LORENZETTI, SUSANA GRACIELA",
                    "numeroPrestador": "48608"
                },
                {
                    "razonSocial": "HAUSWIRTH, SUSANA PATRICIA",
                    "numeroPrestador": "49160"
                },
                {
                    "razonSocial": "SCARAFIA, LUIS MARIO",
                    "numeroPrestador": "49986"
                },
                {
                    "razonSocial": "LEONARDINI, ALEJANDRA IRMA",
                    "numeroPrestador": "50000"
                },
                {
                    "razonSocial": "DELPONTE, MARTA",
                    "numeroPrestador": "50165"
                },
                {
                    "razonSocial": "ALFARO, GRACIELA BEATRIZ",
                    "numeroPrestador": "51224"
                },
                {
                    "razonSocial": "RACCA, RAQUEL CARINA",
                    "numeroPrestador": "51869"
                },
                {
                    "razonSocial": "SOLDANO, VALERIA CECILIA",
                    "numeroPrestador": "52098"
                },
                {
                    "razonSocial": "CENA, MIRTA BEATRIZ",
                    "numeroPrestador": "53286"
                },
                {
                    "razonSocial": "MONDINO, LILIA ANA MARIA",
                    "numeroPrestador": "53635"
                },
                {
                    "razonSocial": "REGGI, JORGELINA ANDREA",
                    "numeroPrestador": "63217"
                },
                {
                    "razonSocial": "VIMO, MARIA LAURA GUADALUPE",
                    "numeroPrestador": "63220"
                },
                {
                    "razonSocial": "FACINO, MARIA ANTONIA",
                    "numeroPrestador": "65801"
                },
                {
                    "razonSocial": "GRIBAUDO CASTELLANO, GERMAN",
                    "numeroPrestador": "67508"
                },
                {
                    "razonSocial": "KARLEN M.I. Y ARAGON C. S.H.",
                    "numeroPrestador": "67530"
                },
                {
                    "razonSocial": "LAB. MEGA S.A.",
                    "numeroPrestador": "67547"
                },
                {
                    "razonSocial": "ALBRECHT, ANDRES ANGEL",
                    "numeroPrestador": "68000"
                },
                {
                    "razonSocial": "VIERI, JAVIER MARTIN",
                    "numeroPrestador": "68500"
                },
                {
                    "razonSocial": "TANTERA, ANDREA ALICIA",
                    "numeroPrestador": "72140"
                },
                {
                    "razonSocial": "FAZZOLA, PATRICIA",
                    "numeroPrestador": "72402"
                },
                {
                    "razonSocial": "RUIZ DIAZ, RUBEN DARIO",
                    "numeroPrestador": "73791"
                },
                {
                    "razonSocial": "BALDO, NATALIA JOSEFINA",
                    "numeroPrestador": "74451"
                },
                {
                    "razonSocial": "ROSA, MARICEL",
                    "numeroPrestador": "74452"
                },
                {
                    "razonSocial": "FOGOLIN, NATALIA RITA",
                    "numeroPrestador": "83260"
                },
                {
                    "razonSocial": "VIMO M.L,ALBRECHT A,RUIZ DIAZ,",
                    "numeroPrestador": "100831"
                },
                {
                    "razonSocial": "DE MARCO G.Y BERGESE A. S.H.",
                    "numeroPrestador": "108345"
                },
                {
                    "razonSocial": "SORATI, ROMINA VANESA",
                    "numeroPrestador": "112666"
                },
                {
                    "razonSocial": "FERRERO, CLAUDIA MARIA",
                    "numeroPrestador": "122032"
                },
                {
                    "razonSocial": "PISCIOLARI, MARIA LAURA",
                    "numeroPrestador": "123970"
                },
                {
                    "razonSocial": "BARBERIS, JESICA NANCY",
                    "numeroPrestador": "128835"
                },
                {
                    "razonSocial": "FERRERO, LUCAS GERMAN",
                    "numeroPrestador": "134023"
                },
                {
                    "razonSocial": "PARAJON, GABRIEL JOSE",
                    "numeroPrestador": "135480"
                },
                {
                    "razonSocial": "ORTIZ ZAVALLA, NICOLAS",
                    "numeroPrestador": "145897"
                },
                {
                    "razonSocial": "SIGNORINI, MARIA DE LOS M.",
                    "numeroPrestador": "156274"
                },
                {
                    "razonSocial": "GIACOSA, RITA MARIA",
                    "numeroPrestador": "158737"
                },
                {
                    "razonSocial": "LEITES, AGUSTIN HORACIO",
                    "numeroPrestador": "159099"
                },
                {
                    "razonSocial": "LUSCHER, SERGIO HUGO",
                    "numeroPrestador": "159434"
                },
                {
                    "razonSocial": "CERUTTI, VICTORIA SOLEDAD",
                    "numeroPrestador": "159496"
                },
                {
                    "razonSocial": "LEIGGENER, LUCIANO PABLO",
                    "numeroPrestador": "178610"
                },
                {
                    "razonSocial": "AIRALDO, ALEJANDRA L.",
                    "numeroPrestador": "179179"
                },
                {
                    "razonSocial": "TARDIVO, FLORENCIA",
                    "numeroPrestador": "190468"
                },
                {
                    "razonSocial": "SOLDA, LAURA BEATRIZ",
                    "numeroPrestador": "190469"
                },
                {
                    "razonSocial": "DELLAROSA, NORBERTO HUGO",
                    "numeroPrestador": "195688"
                },
                {
                    "razonSocial": "SUJEROS, GONZALO ALBERTO",
                    "numeroPrestador": "196397"
                },
                {
                    "razonSocial": "CASTILLO, NICOLAS",
                    "numeroPrestador": "196398"
                },
                {
                    "razonSocial": "ROMERO, BRUNO OSCAR ALBERTO",
                    "numeroPrestador": "196399"
                },
                {
                    "razonSocial": "GERMIR, PATRICIA",
                    "numeroPrestador": "604025"
                },
                {
                    "razonSocial": "CERUTTI, JULIA C.",
                    "numeroPrestador": "604156"
                },
                {
                    "razonSocial": "PANTALEY, MARIA BELEN",
                    "numeroPrestador": "604236"
                },
                {
                    "razonSocial": "LORENZONE N. Y MONDINO L. S.H.",
                    "numeroPrestador": "606984"
                },
                {
                    "razonSocial": "GRIBAUDO A. Y GRIBAUDO G. S.H.",
                    "numeroPrestador": "606986"
                },
                {
                    "razonSocial": "FOGOLIN N. Y SIMONCINO DANIEL",
                    "numeroPrestador": "606987"
                },
                {
                    "razonSocial": "PAN, LIONELA GUADALUPE",
                    "numeroPrestador": "608441"
                },
                {
                    "razonSocial": "SOLDANO, LETICIA ELSA",
                    "numeroPrestador": "616737"
                },
                {
                    "razonSocial": "ALFARO GRACIELA B.Y DELPONTE M",
                    "numeroPrestador": "619211"
                },
                {
                    "razonSocial": "SCARAFIA LUIS M Y MARTINEZ G.",
                    "numeroPrestador": "619282"
                },
                {
                    "razonSocial": "FERRERO L. Y LORENZETTI S.",
                    "numeroPrestador": "621216"
                },
                {
                    "razonSocial": "DEMONTE RAQUEL Y CRISPIN CECIL",
                    "numeroPrestador": "621217"
                },
                {
                    "razonSocial": "MARCON J. Y ALBRECHT A.",
                    "numeroPrestador": "621977"
                },
                {
                    "razonSocial": "BONZI, MARILINA",
                    "numeroPrestador": "660243"
                },
                {
                    "razonSocial": "AZUZ, HUGO NICOLAS",
                    "numeroPrestador": "661450"
                }
            ]
        };

        return routes.doResponse(res, HTTP.SUCCESS, lugarRealizacion);
    });

router.get('/facturadores',

    (req, res) => {
        const facturadores = {
            "listaResultado": [
                {
                    "id": "8481",
                    "cuil": "0",
                    "razonSocial": "USAR - PARA PRUEBAS CONECT.",
                    "nombreFantasia": "USAR - PARA PRUEBAS CONECT.",
                    "tipoRelacion": 1
                }
            ],
            "cantidadRegistrosTotales": 1,
            "numeroPagina": null,
            "tamanoPagina": null,
            "errores": []
        };
        return routes.doResponse(res, HTTP.SUCCESS, facturadores);
    });


router.get('/obtenerPrescriptor',

    (req, res) => {

        console.log(req.query);
        let prescriptores = [];
        if (req.query.matricula == '1') {
            prescriptores = [
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '635658', nombrePrescriptor: 'ABOSALECH BETSABE, ALEJANDRA'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '140165', nombrePrescriptor: 'ADOS'},
                {nroMatricula: '1', especialidad: 'ÓPTICAS', provincia: 'Nacional', nroPrescriptor: '645952', nombrePrescriptor: 'ALANDA, MAGALI BELEN'},
                {nroMatricula: '1', especialidad: '', provincia: 'Nacional', nroPrescriptor: '604841', nombrePrescriptor: 'ALCEC'},
                {nroMatricula: '1', especialidad: 'ÓPTICAS', provincia: 'Nacional', nroPrescriptor: '74616', nombrePrescriptor: 'AMBORT, BIBIANA MARIA'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '34312', nombrePrescriptor: 'AMPLITONE S.R.L.'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '663388', nombrePrescriptor: 'ANITA Y CARO :P'},
                {nroMatricula: '1', especialidad: 'ÓPTICAS', provincia: 'Nacional', nroPrescriptor: '46677', nombrePrescriptor: 'AREVALO, CLAUDIO FABIAN'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '617565', nombrePrescriptor: 'AS. CIVIL COL. MED. EL BOLSON'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '31339', nombrePrescriptor: 'AS. CIVIL DE LUCHA DES.ALIMENT'},
                {nroMatricula: '1', especialidad: 'ODONTOLOGÍA', provincia: 'Nacional', nroPrescriptor: '620821', nombrePrescriptor: 'AS. ODONT. MARPLATENSE'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '47884', nombrePrescriptor: 'AS. SANTAFESINA NUEVA CULTURA'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '207', nombrePrescriptor: 'ASOC.CIVIL SOC.MEDICA HIPOCRAT'},
                {nroMatricula: '1', especialidad: 'ÓPTICAS', provincia: 'Nacional', nroPrescriptor: '644477', nombrePrescriptor: 'ASOCIACION MUTUAL RURALISTA'},
                {nroMatricula: '1', especialidad: 'CIRUGÍA GENERAL', provincia: 'Nacional', nroPrescriptor: '67078', nombrePrescriptor: 'BARIATRICA S.A.'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '607061', nombrePrescriptor: 'BECCACECI, RICARDO'},
                {nroMatricula: '1', especialidad: 'ÓPTICAS', provincia: 'Nacional', nroPrescriptor: '631815', nombrePrescriptor: 'BRAYER, NOEMI'},
                {nroMatricula: '1', especialidad: 'LAB. DE ANÁLISIS CLÍNICOS', provincia: 'Nacional', nroPrescriptor: '658198', nombrePrescriptor: 'BYS ANALISISI BIOQ. SOC.SIMPLE'},
                {nroMatricula: '1', especialidad: 'CIRUGÍA GENERAL', provincia: 'Nacional', nroPrescriptor: '142212', nombrePrescriptor: 'CAMINOS, ULISES ABELARDO'},
                {nroMatricula: '1', especialidad: 'PSICOLOGÍA', provincia: 'Nacional', nroPrescriptor: '661828', nombrePrescriptor: 'CAMISAY, SILVANA'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '648542', nombrePrescriptor: 'CARRICONDO, SILVIO ARIEL'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '659235', nombrePrescriptor: 'CARTELLE, ROSANA I.'},
                {nroMatricula: '1', especialidad: 'ÓPTICAS', provincia: 'Nacional', nroPrescriptor: '645138', nombrePrescriptor: 'CASSIS, JUAN PABLO'},
                {nroMatricula: '1', especialidad: 'NEFROLOGÍA', provincia: 'Nacional', nroPrescriptor: '635379', nombrePrescriptor: 'CEREHA S.A.'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '45486', nombrePrescriptor: 'CETRAMOR S.R.L.'},
                {nroMatricula: '1', especialidad: 'ÓPTICAS', provincia: 'Nacional', nroPrescriptor: '646087', nombrePrescriptor: 'CHOMYK, NOELIA ALJANDRA'},
                {nroMatricula: '1', especialidad: 'TERAPIA OCUPACIONAL', provincia: 'Nacional', nroPrescriptor: '174971', nombrePrescriptor: 'CINALLI DULCICH, LUCIANA V.'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '620073', nombrePrescriptor: 'CIRC. MED. DE BALCARCE'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '165888', nombrePrescriptor: 'CIRC. MED. GOYA'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '88659', nombrePrescriptor: 'CIRC. MED. OLAVARRIA'},
                {nroMatricula: '1', especialidad: 'ODONTOLOGÍA', provincia: 'Nacional', nroPrescriptor: '77374', nombrePrescriptor: 'CL. DEL NIÑO Y LA MADRE S.A.'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '645670', nombrePrescriptor: 'CL. ENDOSCOPICA LINCOLN'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '659178', nombrePrescriptor: 'CL. FELICI'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '66214', nombrePrescriptor: 'CL. NTRA. SRA. DESATANUDOS SRL'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '659181', nombrePrescriptor: 'CL. OFTA. DEL ESTE'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '659330', nombrePrescriptor: 'CL. PRIV. SALUD MENTAL SANTA I'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '645464', nombrePrescriptor: 'CL. RENACER'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '659182', nombrePrescriptor: 'CL. RIVADAVIA'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '614042', nombrePrescriptor: 'CL. SAN MARCOS'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '614040', nombrePrescriptor: 'CL. SANTA MARIA'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '626990', nombrePrescriptor: 'COL. MED. GOLFO SAN MATIAS'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '48672', nombrePrescriptor: 'COL. MED. MONTE CASEROS'},
                {nroMatricula: '1', especialidad: 'PSICOLOGÍA', provincia: 'Nacional', nroPrescriptor: '47028', nombrePrescriptor: 'COL. PSIC. DE SGO. DEL ESTERO'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '168976', nombrePrescriptor: 'COMUNA DE ESTANCIA VIEJA'},
                {nroMatricula: '1', especialidad: 'TRAUMATOLOGÍA Y ORTOPEDIA', provincia: 'Nacional', nroPrescriptor: '194100', nombrePrescriptor: 'CONS. MEDICOS MAIPU SA'},
                {nroMatricula: '1', especialidad: 'ÓPTICAS', provincia: 'Nacional', nroPrescriptor: '646295', nombrePrescriptor: 'CONTRUCCI, VALERIA'},
                {nroMatricula: '1', especialidad: 'LAB. DE ANÁLISIS CLÍNICOS', provincia: 'Nacional', nroPrescriptor: '7685', nombrePrescriptor: 'COOP. PROV.SERV.BIOQ.LABOULAYE'},
                {nroMatricula: '1', especialidad: 'ODONTOLOGÍA', provincia: 'Nacional', nroPrescriptor: '647555', nombrePrescriptor: 'CRIOCE, GERMAN'},
                {nroMatricula: '1', especialidad: 'FLEBOLOGÍA', provincia: 'Nacional', nroPrescriptor: '614044', nombrePrescriptor: 'CTRO. DE FLEBOLOGIA GUEMES'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '169122', nombrePrescriptor: 'CTRO. DE SALUD MUNIC. DE CHARR'},
                {nroMatricula: '1', especialidad: '', provincia: 'Nacional', nroPrescriptor: '7494', nombrePrescriptor: 'CTRO. MED. DE RADIACIONES S.A.'},
                {nroMatricula: '1', especialidad: '', provincia: 'Nacional', nroPrescriptor: '7494', nombrePrescriptor: 'CTRO. MED. DE RADIACIONES S.A.'},
                {nroMatricula: '1', especialidad: 'PEDIATRÍA', provincia: 'Nacional', nroPrescriptor: '655561', nombrePrescriptor: 'CTRO. MED. DR. CANTOR'},
                {nroMatricula: '1', especialidad: 'ÓPTICAS', provincia: 'Nacional', nroPrescriptor: '646090', nombrePrescriptor: 'CTRO. OPTICO ALCARAZ II'},
                {nroMatricula: '1', especialidad: 'ÓPTICAS', provincia: 'Nacional', nroPrescriptor: '654724', nombrePrescriptor: 'CTRO. OPTICO MARIAN'},
                {nroMatricula: '1', especialidad: 'ÓPTICAS', provincia: 'Nacional', nroPrescriptor: '646162', nombrePrescriptor: 'CTRO. OPTICO VER BIEN'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '19682', nombrePrescriptor: 'CTRO. TOMOGRAFICO URUGUAY SRL'},
                {nroMatricula: '1', especialidad: 'PSICOPEDAGOGÍA', provincia: 'Nacional', nroPrescriptor: '631846', nombrePrescriptor: 'DABIN, DARIEL DE LOURDES'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '635458', nombrePrescriptor: 'DEL PINO SALUD S.A.'},
                {nroMatricula: '1', especialidad: 'ODONTOLOGÍA', provincia: 'Nacional', nroPrescriptor: '33282', nombrePrescriptor: 'DENTAL SYSTEM - BELGRANO'},
                {nroMatricula: '1', especialidad: 'LAB. DE ANÁLISIS CLÍNICOS', provincia: 'Nacional', nroPrescriptor: '166219', nombrePrescriptor: 'DIAG. MAIPU POR IMAGENES'},
                {nroMatricula: '1', especialidad: 'LAB. DE ANÁLISIS CLÍNICOS', provincia: 'Nacional', nroPrescriptor: '41005', nombrePrescriptor: 'DIAG. MAIPU POR IMAGENES SA'},
                {nroMatricula: '1', especialidad: 'Nacional', nroPrescriptor: '604847', nombrePrescriptor: 'DIAG. MED. ESPECIALIZADO'},
                {nroMatricula: '1', especialidad: 'Nacional', nroPrescriptor: '604847', nombrePrescriptor: 'DIAG. MED. ESPECIALIZADO'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '659372', nombrePrescriptor: 'DISP. MUN. DR. SAIED SALEG'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '168945', nombrePrescriptor: 'DISPENSARIO MUNIC. ANISACATE'},
                {nroMatricula: '1', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '635439', nombrePrescriptor: 'FACOEP S.E'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '659224', nombrePrescriptor: 'FARMACITY GRANADEROS'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '648056', nombrePrescriptor: 'FARMACITY SUC. 208'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '636278', nombrePrescriptor: 'FARMACITY SUC. CBA. ELIAS YOFR'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '632403', nombrePrescriptor: 'FARMACITY SUC. DONATO'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '629164', nombrePrescriptor: 'FARMACITY SUC. EVA PERON'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '633151', nombrePrescriptor: 'FARMACITY SUC. PASTEUR'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '632852', nombrePrescriptor: 'FARMACITY SUC. SAN MARTIN'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '635582', nombrePrescriptor: 'FARMAPLUS'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '634416', nombrePrescriptor: 'FCIA. 9 DE JULIO'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '633835', nombrePrescriptor: 'FCIA. ADELINA HUE'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '608551', nombrePrescriptor: 'FCIA. ALMADA'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '634383', nombrePrescriptor: 'FCIA. ALONSO'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '634412', nombrePrescriptor: 'FCIA. ALTHEA'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '656988', nombrePrescriptor: 'FCIA. AMENT III'},
                {nroMatricula: '1', especialidad: 'FARMACIA', provincia: 'Nacional', nroPrescriptor: '48634', nombrePrescriptor: 'FCIA. ANA'},
                {nroMatricula: '1', especialidad: '', provincia: 'Nacional', nroPrescriptor: '37270', nombrePrescriptor: 'AREBALO, PATRICIA M.'},
                {nroMatricula: '1', especialidad: '', provincia: 'Nacional', nroPrescriptor: '30901', nombrePrescriptor: 'MASSEY, DANIELA'},
                {nroMatricula: '1', especialidad: '', provincia: 'Nacional', nroPrescriptor: '31601', nombrePrescriptor: 'PEUCHEOT, ROSA EMA'},
                {nroMatricula: '1', especialidad: '', provincia: 'Nacional', nroPrescriptor: '36178', nombrePrescriptor: 'SEREDAY, CARLOS'}];
        } else if (req.query.matricula == '2') {
            prescriptores = [
                {nroMatricula: '2', especialidad: 'KINESIOLOGÍA Y FISIOTERAPIA', provincia: 'Nacional', nroPrescriptor: '128267', nombrePrescriptor: 'GONZALEZ, MONICA'},
                {nroMatricula: '2', especialidad: '', provincia: 'Nacional', nroPrescriptor: '40539', nombrePrescriptor: 'I.G.O.M. INST. DE GIN, OBS Y M'},
                {nroMatricula: '2', especialidad: 'GINECOLOGÍA', provincia: 'Nacional', nroPrescriptor: '40539', nombrePrescriptor: 'I.G.O.M. INST. DE GIN, OBS Y M'}
            ]
        } else if (req.query.matricula == '3') {
            prescriptores = [
                {nroMatricula: '33', especialidad: 'CLÍNICA MÉDICA', provincia: 'Nacional', nroPrescriptor: '40536', nombrePrescriptor: 'CL. VIRGEN DEL VALLE S.R.L.'}
            ]
        }

        return routes.doResponse(res, HTTP.SUCCESS, prescriptores);
    });

router.get('/obtenerEfectores',

    (req, res) => {

        let efectores = [
            {
                "numeroPrestador": 123,
                "cuit": "20235493422",
                "razonSocial": "FLAMINI, CESAR ADRIAN",
                "especialidades": [{
                    "id": 123,
                    "detalle": "ONCOLOGÍA INFANTIL"
                }]
            },
            {"numeroPrestador": "985", "cuit": "20248483322", "razonSocial": 'AVAKIAN, CECILIA', "especialidades": [{"id": 124, "detalle": 'Kinesiología y Sisioterapia'}]},
            {"numeroPrestador": "989", "cuit": "20249887852", "razonSocial": 'BALMACEDA, ELEANA N', "especialidades": [{"id": 125, "detalle": 'Kinesiología y Sisioterapia'}, {"id": 112, "detalle": 'Fisioterapia'}]}
        ];

        return routes.doResponse(res, HTTP.SUCCESS, efectores);
    });

router.get('/obtenerAutorizacionesAmbulatorio',

    (req, res) => {

        let response = {
            "listaResultado": [],
            "cantidadRegistrosTotales": null,
            "numeroPagina": null,
            "tamanoPagina": null,
            "totalElementos": null,
            "errores": []
        };


        let pageIndex = parseInt(req.query.pageIndex);
        let pageSize = parseInt(req.query.pageSize);

        let autorizaciones = [
            {
                estado: "AUTORIZADO",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "ORTIZ, MAYRA ALEJANDRA",
                nroAutorizacion: "9011033",
                plan: "SANCOR 4000",
                anulacion: true
            },
            {
                estado: "AUTORIZADO",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "GIORDANA, JOAQUIN FABIAN",
                nroAutorizacion: "9011031",
                plan: "SANCOR 2000",
                anulacion: false
            },
            {
                estado: "AUTORIZADO",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "GIORDANA, JOAQUIN FABIAN",
                nroAutorizacion: "9011029",
                plan: "SANCOR 2000",
                anulacion: false
            },
            {
                estado: "AUTORIZADO",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "GIORDANA, JOAQUIN FABIAN",
                nroAutorizacion: "9011027",
                plan: "SANCOR 2000",
                anulacion: false
            },
            {
                estado: "Autorización anulada",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "GIORDANA, JOAQUIN FABIAN",
                nroAutorizacion: "9011025",
                plan: "SANCOR 2000",
                anulacion: true
            },
            {
                estado: "AUTORIZADO",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "GIORDANA, JOAQUIN FABIAN",
                nroAutorizacion: "9011023",
                plan: "SANCOR 2000",
                anulacion: false
            },
            {
                estado: "AUTORIZADO",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "ORTIZ, MAYRA ALEJANDRA",
                nroAutorizacion: "9011021",
                plan: "SANCOR 4000",
                anulacion: false
            },
            {
                estado: "AUTORIZADO",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "GIORDANA, JOAQUIN FABIAN",
                nroAutorizacion: "9011017",
                plan: "SANCOR 2000",
                anulacion: false
            },
            {
                estado: "Autorización anulada",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "GUELI, CAROLINA NATALIA",
                nroAutorizacion: "9011014",
                plan: "SANCOR 3500",
                anulacion: false
            },
            {
                estado: "AUTORIZADO",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "27/11/19",
                nombre: "GUELI, CAROLINA NATALIA",
                nroAutorizacion: "9011008",
                plan: "SANCOR 3500",
                anulacion: true
            },
            {
                estado: "AUTORIZADO",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "27/11/19",
                nombre: "GUELI, CAROLINA NATALIA",
                nroAutorizacion: "9011005",
                plan: "SANCOR 3500",
                anulacion: false
            },
            {
                estado: "AUTORIZADO",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "ORTIZ, MAYRA ALEJANDRA",
                nroAutorizacion: "9011002",
                plan: "SANCOR 4000",
                anulacion: false
            },
            {
                estado: "Autorización anulada",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "ORTIZ, MAYRA ALEJANDRA",
                nroAutorizacion: "9010999",
                plan: "SANCOR 4000",
                anulacion: false
            },
            {
                estado: "Autorización anulada",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "KLOSTER, KEVIN",
                nroAutorizacion: "9010992",
                plan: "SANCOR 3500",
                anulacion: false
            },
            {
                estado: "AUTORIZADO",
                mensaje: "Procesado Sancor Salud",
                fechaAutorizacion: "28/11/19",
                nombre: "COMBINA, GIMENA",
                nroAutorizacion: "9010950",
                plan: "SANCOR 1000",
                anulacion: false
            }
        ];

        response["listaResultado"] = autorizaciones.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
        response["numeroPagina"] = pageIndex;
        response["tamanoPagina"] = pageSize;
        response["totalElementos"] = autorizaciones.length;

        return routes.doResponse(res, HTTP.SUCCESS, response);
    });


router.get('/prestacionesAutorizacion',
    (req, res) => {
        let response = {
            "listaResultado": [],
            "cantidadRegistrosTotales": null,
            "numeroPagina": null,
            "tamanoPagina": null,
            "totalElementos": null,
            "errores": []
        };

        let prestaciones = [
            {
                "codigoPrestacion": "NM 45248",
                "descripcion": "ECOGRAFÍA DE PARTES BLANDAS",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 080773",
                "descripcion": "DRENAJE DE VESICULA Y VIAS BILIARES BAJO ECOGRAFIA / TOMOGRAFIA",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 100177",
                "descripcion": "NEFROSTOMIA PERCUTANEA BAJO ECOGRAFIA",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 45248",
                "descripcion": "ECOGRAFÍA DE PARTES BLANDAS",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 180104",
                "descripcion": "ECOGRAFIA TOCOGINECOLOGICA CON O SIN TRASDUCTOR VAGINAL",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 45248",
                "descripcion": "ECOGRAFÍA DE PARTES BLANDAS",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 080773",
                "descripcion": "DRENAJE DE VESICULA Y VIAS BILIARES BAJO ECOGRAFIA / TOMOGRAFIA",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 100177",
                "descripcion": "NEFROSTOMIA PERCUTANEA BAJO ECOGRAFIA",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 45248",
                "descripcion": "ECOGRAFÍA DE PARTES BLANDAS",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 180104",
                "descripcion": "ECOGRAFIA TOCOGINECOLOGICA CON O SIN TRASDUCTOR VAGINAL",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 45248",
                "descripcion": "ECOGRAFÍA DE PARTES BLANDAS",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 080773",
                "descripcion": "DRENAJE DE VESICULA Y VIAS BILIARES BAJO ECOGRAFIA / TOMOGRAFIA",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 100177",
                "descripcion": "NEFROSTOMIA PERCUTANEA BAJO ECOGRAFIA",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 45248",
                "descripcion": "ECOGRAFÍA DE PARTES BLANDAS",
                "cantidad": 4,
            },
            {
                "codigoPrestacion": "NM 180104",
                "descripcion": "ECOGRAFIA TOCOGINECOLOGICA CON O SIN TRASDUCTOR VAGINAL",
                "cantidad": 4,
            },
        ];

        response["listaResultado"] = prestaciones;
        response["totalElementos"] = prestaciones.length;

        return routes.doResponse(res, HTTP.SUCCESS, response);
    });

router.get('/obtenerPreliquidacion',

    (req, res) => {

        let response = {
            "listaResultado": [],
            "cantidadRegistrosTotales": null,
            "numeroPagina": null,
            "tamanoPagina": null,
            "totalElementos": null,
            "errores": []
        };


        let pageIndex = parseInt(req.query.pageIndex);
        let pageSize = parseInt(req.query.pageSize);

        response["listaResultado"] = autorizacionesALiquidar.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
        response["numeroPagina"] = pageIndex;
        response["tamanoPagina"] = pageSize;
        response["totalElementos"] = autorizacionesALiquidar.length;

        return routes.doResponse(res, HTTP.SUCCESS, response);
    });

router.get('/importeTotalAutorizaciones',
    (req, res) => {
        let importeTotal = 0;
        autorizacionesALiquidar.forEach(autorizacion => {
            if (autorizacion.checked)
                importeTotal += autorizacion.importeTotal;
        });

        return routes.doResponse(res, HTTP.SUCCESS, {total: importeTotal});
    });


router.put('/seleccionarAutorizacion',
    (req, res) => {
        let numeroAutorizacion = parseInt(req.body.numeroAutorizacion);
        autorizacionesALiquidar.forEach(autorizacion => {
            if (autorizacion.numeroAutorizacion == numeroAutorizacion) {
                autorizacion.checked = true;
            }
        });
        return routes.doResponse(res, HTTP.SUCCESS, {ok: 'ok'});
    });

router.put('/deseleccionarAutorizacion',
    (req, res) => {
        let numeroAutorizacion = parseInt(req.body.numeroAutorizacion);
        autorizacionesALiquidar.forEach(autorizacion => {
            if (autorizacion.numeroAutorizacion == numeroAutorizacion) {
                autorizacion.checked = false;
            }
        });
        return routes.doResponse(res, HTTP.SUCCESS, {ok: 'ok'});
    });

router.get('/obtenerAutorizacionesInternacion',

    (req, res) => {

        let response = {
            "listaResultado": [],
            "cantidadRegistrosTotales": null,
            "numeroPagina": null,
            "tamanoPagina": null,
            "totalElementos": null,
            "errores": []
        };


        let pageIndex = parseInt(req.query.pageIndex);
        let pageSize = parseInt(req.query.pageSize);

        let autorizaciones = [
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'ORTIZ, MAYRA ALEJANDRA',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: true,
                nuevosMensajes: 5,
                registrarFechaAlta: true,
                administrarProrrogas: true,
                formularioDisponible: true
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de Autorizacion',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'DUARTE, JOANA LAURA',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: false,
                nuevosMensajes: 0,
                registrarFechaAlta: true,
                administrarProrrogas: true,
                formularioDisponible: false
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Autorizado',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'ORTIZ, MAYRA ALEJANDRA',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: false,
                nuevosMensajes: 0,
                registrarFechaAlta: true,
                administrarProrrogas: false,
                formularioDisponible: false
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'RAIMONDO, NESTOR RAMON',
                fechaVencimiento: '24/11/19',
                fechaAlta: '',
                mensajes: false,
                nuevosMensajes: 0,
                registrarFechaAlta: false,
                administrarProrrogas: false,
                formularioDisponible: false
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'ORTIZ, MAYRA ALEJANDRA',
                fechaVencimiento: '26/11/19',
                fechaAlta: '28/11/19',
                mensajes: true,
                nuevosMensajes: 8,
                registrarFechaAlta: true,
                administrarProrrogas: true,
                formularioDisponible: false
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'DUARTE, JOANA LAURA',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: true,
                nuevosMensajes: 3,
                registrarFechaAlta: false,
                administrarProrrogas: false,
                formularioDisponible: false
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'ORTIZ, MAYRA ALEJANDRA',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: false,
                nuevosMensajes: 0,
                registrarFechaAlta: false,
                administrarProrrogas: false,
                formularioDisponible: true
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'KLOSTER, KEVIN',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: false,
                nuevosMensajes: 0,
                registrarFechaAlta: false,
                administrarProrrogas: false,
                formularioDisponible: false
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'ORTIZ, MAYRA ALEJANDRA',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: false,
                nuevosMensajes: 0,
                registrarFechaAlta: true,
                administrarProrrogas: true,
                formularioDisponible: false
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'ORTIZ, MAYRA ALEJANDRA',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: false,
                nuevosMensajes: 0,
                registrarFechaAlta: false,
                administrarProrrogas: false,
                formularioDisponible: false
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'ORTIZ, MAYRA ALEJANDRA',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: false,
                nuevosMensajes: 0,
                registrarFechaAlta: true,
                administrarProrrogas: true,
                formularioDisponible: true
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'ORTIZ, MAYRA ALEJANDRA',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: false,
                nuevosMensajes: 0,
                registrarFechaAlta: true,
                administrarProrrogas: true,
                formularioDisponible: false
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'ORTIZ, MAYRA ALEJANDRA',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: false,
                nuevosMensajes: 0,
                registrarFechaAlta: false,
                administrarProrrogas: false,
                formularioDisponible: false
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'ORTIZ, MAYRA ALEJANDRA',
                fechaVencimiento: '',
                fechaAlta: '',
                mensajes: false,
                nuevosMensajes: 0,
                registrarFechaAlta: true,
                administrarProrrogas: true,
                formularioDisponible: false
            },
            {
                numeroGestion: '14012166',
                numeroInternacion: '1173',
                estado: 'Pendiente de carga',
                fechaInternacion: '28/11/19',
                formulario: '0 - 0',
                numeroAsociado: '821391/ 0',
                nombre: 'ORTIZ, MAYRA ALEJANDRA',
                fechaVencimiento: '12/08/19',
                fechaAlta: '12/05/19',
                mensajes: true,
                nuevosMensajes: 1,
                registrarFechaAlta: true,
                administrarProrrogas: true,
                formularioDisponible: false
            },
        ];

        response["listaResultado"] = autorizaciones.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
        response["numeroPagina"] = pageIndex;
        response["tamanoPagina"] = pageSize;
        response["totalElementos"] = autorizaciones.length;

        return routes.doResponse(res, HTTP.SUCCESS, response);
    });

router.get('/obtenerAutorizacionesInternacion/excel',

    (req, res) => {

        var data = fs.readFileSync('files/output.xlsx');
        res.contentType("application/vnd.ms-excel");
        res.send(data);

        // return routes.doResponse(res, HTTP.SUCCESS, response);
    });

router.get('/obtenerAutorizacionesInternacion/pdf',

    (req, res) => {

        var data = fs.readFileSync('files/output.pdf');
        res.contentType("application/pdf");
        res.send(data);

        // return routes.doResponse(res, HTTP.SUCCESS, response);
    });

router.get('/obtenerAutorizacionesAmbulatorio/excel',

    (req, res) => {

        var data = fs.readFileSync('files/output.xlsx');
        res.contentType("application/vnd.ms-excel");
        res.send(data);

        // return routes.doResponse(res, HTTP.SUCCESS, response);
    });

router.get('/obtenerAutorizacionesAmbulatorio/pdf',

    (req, res) => {

        var data = fs.readFileSync('files/output.pdf');
        res.contentType("application/pdf");
        res.send(data);

        // return routes.doResponse(res, HTTP.SUCCESS, response);
    });

router.get('/tipoArchivo',

    (req, res) => {

        let tipoDeArchivo = {
            "listaResultado": [
                {
                    "id": 1,
                    "descripcion": "Pedido Medico"
                },
                {
                    "id": 2,
                    "descripcion": "Historia Clinica"
                }
            ],
            "cantidadRegistrosTotales": 2,
            "numeroPagina": null,
            "tamanoPagina": null,
            "errores": []
        };
        return routes.doResponse(res, HTTP.SUCCESS, tipoDeArchivo);
    });

router.post('/listarPrestacionesConvenidasCodDescWeb',

    (req, res) => {

        let prestaciones = {
            "listaResultado": [
                {
                    "idPrestador": 45248,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "000012",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180601",
                    "descripcionPropia": "ECOGRAFÍA DE PARTES BLANDAS",
                    "descripcionSancor": "ECOGRAFIA DE PARTES BLANDAS                                                                                                                                                                             ",
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "080773",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "080773",
                    "descripcionPropia": "DRENAJE DE VESICULA Y VIAS BILIARES BAJO ECOGRAFIA / TOMOGRAFIA",
                    "descripcionSancor": null,
                    "esInternacion": true
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "100177",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "100177",
                    "descripcionPropia": "NEFROSTOMIA PERCUTANEA BAJO ECOGRAFIA",
                    "descripcionSancor": null,
                    "esInternacion": true
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "ECOGRAFIA TOCOGINECOLOGICA CON O SIN TRASDUCTOR VAGINAL"
                    },
                    "codigoPropio": "180104",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180104",
                    "descripcionPropia": "ECOGRAFIA TOCOGINECOLOGICA CON O SIN TRASDUCTOR VAGINAL",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180106",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180106",
                    "descripcionPropia": "ECOGRAFIA MAMARIA BILATERAL",
                    "descripcionSancor": "",
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180107",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180107",
                    "descripcionPropia": "ECOGRAFIA CEREBRAL / TRANSFONTANELAR",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180109",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180109",
                    "descripcionPropia": "ECOGRAFIA OFTALMOLOGICA UNI O BILATERAL.",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180110",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180110",
                    "descripcionPropia": "ECOGRAFIA TIROIDEA.",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180111",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180111",
                    "descripcionPropia": "ECOGRAFIA DE TESTICULOS.",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180112",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180112",
                    "descripcionPropia": "ECOGRAFIA COMPLETA DE ABDOMEN.",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180113",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180113",
                    "descripcionPropia": "ECOGRAFIA HEPATO BILIAR, ESPLENICA O TORACICA.",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180114",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180114",
                    "descripcionPropia": "ECOGRAFIA DE VEJIGA O PROSTATA C/S TRANSDUCTOR RECTAL",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180116",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180116",
                    "descripcionPropia": "ECOGRAFIA RENAL BILATERAL.",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180117",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180117",
                    "descripcionPropia": "ECOGRAFIA DE AORTA ABDOMINAL DINAMICA Y ESTATICA.",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180118",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180118",
                    "descripcionPropia": "ECOGRAFIA PANCREATICA O SUPRARRENAL.",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180121",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180121",
                    "descripcionPropia": "ECOGRAFIA PARA LA AMNIOCENTESIS.",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180170",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180170",
                    "descripcionPropia": "ECOGRAFIA TRANSRECTAL",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180171",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180171",
                    "descripcionPropia": "ECOGRAFIA TRANSVAGINAL",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180172",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180172",
                    "descripcionPropia": "PUNCION BIOPSIA ASPIRATIVA BAJO CONTROL ECOGRAFICO",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180175",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180175",
                    "descripcionPropia": "ECOGRAFIA DE CADERA O PELVIS",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180177",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180177",
                    "descripcionPropia": "ECOGRAFIA DE CUELLO",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180178",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180178",
                    "descripcionPropia": "ECOGRAFIA DE ARTICULACIONES",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180179",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180179",
                    "descripcionPropia": "ECOGRAFIA VOLUMETRICA 3D",
                    "descripcionSancor": "",
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180181",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180181",
                    "descripcionPropia": "ECOGRAFIA TRANSLUCENCIA NUCAL",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180183",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180183",
                    "descripcionPropia": "ECOGRAFIA ENDOANAL 360º / VIDEO ECOENDOANAL",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180184",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180184",
                    "descripcionPropia": "ECOGRAFIA MORFOLOGICA",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180188",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180188",
                    "descripcionPropia": "ECOGRAFIA DE OTROS ORGANOS Y REGIONES",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180189",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180189",
                    "descripcionPropia": "ECO INTRAOPERATORIA / CONTROL ECOGRAFICO MULTIPLE",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180190",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180190",
                    "descripcionPropia": "ECOGRAFIA TRANSVAGINAL / TRANSRECTAL",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180191",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180191",
                    "descripcionPropia": "AMNIOCENTESIS BAJO ECOGRAFIA PARA DIAGNOSTICO PRENATAL EN LIQUIDO AMNIOTICO.",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180278",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180278",
                    "descripcionPropia": "ECOGRAFIA INTRAVASCULAR / REGISTRO DE PRESIONES CON GUIA DOPPLER (IVUS)",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "180601",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180601",
                    "descripcionPropia": "ECOGRAFIA DE PARTES BLANDAS",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "200571",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "200571",
                    "descripcionPropia": "VIDEO DEFECOGRAFIA",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "340606",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "340606",
                    "descripcionPropia": "GINECOGRAFIA.",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 8481,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "342095",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "342095",
                    "descripcionPropia": "RESONANCIA DINAMICA DE PELVIS / DEFECOGRAFIA (R.M.N.)",
                    "descripcionSancor": null,
                    "esInternacion": false
                },
                {
                    "idPrestador": 46562,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "ECOGRA",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180109",
                    "descripcionPropia": "ECOGRAFÍA OCULAR MODO A-B UNI O BILATERAL",
                    "descripcionSancor": "ECOGRAFIA OFTALMOLOGICA UNI O BILATERAL.                                                                                                                                                                ",
                    "esInternacion": false
                },
                {
                    "idPrestador": 8890,
                    "nomencladorPropio": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoPropio": "ECOGRAF",
                    "empresa": 5,
                    "nomencladorSancor": {
                        "codigo": "NM",
                        "descripcion": "NOMENCLADOR MEDICO"
                    },
                    "codigoSancor": "180104",
                    "descripcionPropia": "ECO TOCOGINECOLOGICA",
                    "descripcionSancor": "ECOGRAFIA TOCOGINECOLOGICA CON O SIN TRASDUCTOR VAGINAL                                                                                                                                                 ",
                    "esInternacion": false
                }
            ],
            "cantidadRegistrosTotales": 36,
            "numeroPagina": null,
            "tamanoPagina": null,
            "errores": []
        };
        return routes.doResponse(res, HTTP.SUCCESS, prestaciones);
    });

router.post('/validarPrestaciones',

    (req, res) => {

        let prestaciones = req.body;

        let i = 0;
        let prestacionesValidadas = prestaciones.map(prestacion => {
            i++;
            return {
                nomenclador: prestacion.nomencladorSancor.codigo,
                prestacion: prestacion.codigoSancor,
                descripcion: prestacion.descripcion,
                resultado: i % 2 === 0? 'NO REQUIERE AUTORIZACIÓN PREVIA': 'REQUIERE AUTORIZACIÓN PREVIA'
            }
        });

        let response = {
            "listaResultado": prestacionesValidadas,
            "cantidadRegistrosTotales": prestacionesValidadas.length,
            "numeroPagina": null,
            "tamanoPagina": null,
            "totalElementos": prestacionesValidadas.length,
            "errores": []
        };

        return routes.doResponse(res, HTTP.SUCCESS, response);
    });

router.get('/validarPrestador/pdf',

    (req, res) => {

        var data = fs.readFileSync('files/validacionAsociado.pdf');
        res.contentType("application/pdf");
        res.send(data);

        // return routes.doResponse(res, HTTP.SUCCESS, response);
    });

router.get('/validarPrestaciones/pdf',

    (req, res) => {

        var data = fs.readFileSync('files/validarPrestaciones.pdf');
        res.contentType("application/pdf");
        res.send(data);
        // return routes.doResponse(res, HTTP.SUCCESS, response);
    });

router.put('/validarFechaAutorizacion',
    (req, res) => {
        if (req.body.fechaDeAlta === '2020-01-30') {
            return routes.doResponse(res, HTTP.SUCCESS, {valido: true});
        } else {
            return routes.doResponse(res, HTTP.SUCCESS, {valido: false, mensaje: 'Fecha ingresada supera los días autorizados. Solicitar Prórroga.'});
        }
    });

router.get('/testLogin',
    (req, res) => {
        const params = new URLSearchParams();
        params.append('client_id', 'autogestionPrestadores');
        params.append('grant_type', 'password');
        params.append('username', 'admin');
        params.append('password', 'admin');

        fetch('http://172.22.111.117:8080/auth/realms/sancorsalud/protocol/openid-connect/token', { method: 'POST', body: params })
            .then(res => res.json())
            .then(json => console.log(json));
        return routes.doResponse(res, HTTP.SUCCESS, {ok: 'ok'});
    });
module.exports = router;
