const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const routes = require('./index');
// const AuthService = require('../service/auth.service');
const Constants = require('../constants');
const HTTP = Constants.HTTP;
const VALIDATIONS = Constants.INPUT_VALIDATION;
const fs = require('fs');

let prestaciones = [
    {
        "id": 1,
        "idPrestador": 8481,
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
        "esInternacion": false,
        "fechaDesde": '12/06/2019',
        "fechaHasta": '03/03/2020',
        "fecha": '03/03/2020',
        "cantidadF4": 5
    },
    {
        "id": 2,
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
        "esInternacion": true,
        "fechaDesde": '12/06/2019',
        "fechaHasta": '03/01/2020',
        "fecha": '03/01/2020',
        "cantidadF4": 5
    },
    {
        "id": 3,
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
        "esInternacion": false,
        "fechaDesde": '12/02/2020',
        "fechaHasta": '12/03/2020',
        "fecha": '12/03/2020',
        "cantidadF4": 2
    }
];

let id = 4;

router.get('/buscarAsociado',

    (req, res) => {

        let asociado = {
            nombre: 'karina',
            apellido: 'flebus',
            restringida: 's',
            posicionAfiliado: 'car morteros sancor 40000 - ams gravado',
            dni: '23044813',
            asociado: '345454'
        };

        if (req.query.dni == '1' || req.query.carnet == '1') {
            asociado = {
                nombre: null,
                apellido: null,
                restringida: null,
                posicionAfiliado: null,
                dni: null,
                asociado: null
            }
        }

        setTimeout(function() {
            return routes.doResponse(res, HTTP.SUCCESS, asociado);
        }, 3000);


    });

router.get('/buscarPrestacionesDelAsociado',

    (req, res) => {
        let response = {
            "listaResultado": prestaciones,
            "cantidadRegistrosTotales": 2,
            "numeroPagina": null,
            "tamanoPagina": null,
            "errores": []
        };

        return routes.doResponse(res, HTTP.SUCCESS, response);

    });

router.post('/agregarPrestacionesDelAsociado',

    (req, res) => {

        let nuevasPrestaciones = req.body;
        nuevasPrestaciones.forEach(prestacion => {
            let aux = {
                "id": id,
                "idPrestador": prestacion.idPrestador,
                "nomencladorPropio": {
                    "codigo": prestacion.nomencladorPropio.codigo,
                    "descripcion": prestacion.nomencladorPropio.descripcion
                },
                "codigoPropio": prestacion.codigoPropio,
                "empresa": prestacion.empresa,
                "nomencladorSancor": {
                    "codigo": prestacion.nomencladorSancor.codigo,
                    "descripcion": prestacion.nomencladorSancor.descripcion
                },
                "codigoSancor": prestacion.codigoSancor,
                "descripcionPropia": prestacion.descripcionPropia,
                "descripcionSancor": prestacion.descripcionSancor,
                "esInternacion": prestacion.esInternacion,
                "fechaDesde": prestacion.fechaDesde,
                "fechaHasta": prestacion.fechaHasta,
                "fecha": prestacion.fecha,
                "cantidadF4": prestacion.cantidadF4
            };
            id ++;
            prestaciones.push(aux);
        });
        return routes.doResponse(res, HTTP.SUCCESS, {ok: true});

    });

router.put('/eliminarPrestacionesDelAsociado',

    (req, res) => {

        let prestacionesAEliminar = req.body;
        prestacionesAEliminar.forEach(prestacion => {
            prestaciones = prestaciones.filter(prest => prest.id !== prestacion.id);
        });
        return routes.doResponse(res, HTTP.SUCCESS, {ok: true});

    });

router.put('/modificarPrestacionesDelAsociado',

    (req, res) => {

        let prestacionesAEliminar = req.body;
        prestacionesAEliminar.forEach(prestacion => {
            aux = prestaciones.find(prest => prest.id === prestacion.id);
            aux.fecha = prestacion.fecha;
        });

        return routes.doResponse(res, HTTP.SUCCESS, {ok: true});

    });

router.get('/buscarReporteF4ProtesisGenerados',

    (req, res) => {

        let formulariosF4 = [
            {
                numero: 1873587,
                vencimiento: '12/11/2019',
                fecha: '12/09/2019',
                estado: 'Estado 1',
                tipoDocumento: 'dni',
                documento: '32060042',
                carnet: '745740/00',
                apellido: 'Sadura',
                nombre: 'Pablo'
            },
            {
                numero: 1873587,
                vencimiento: '30/01/2020',
                fecha: '10/01/2020',
                estado: 'Estado 4',
                tipoDocumento: 'dni',
                documento: '23044813',
                carnet: '345454',
                apellido: 'Flebus',
                nombre: 'Karina'
            },
            {
                numero: 1873587,
                vencimiento: '20/03/2020',
                fecha: '12/04/2020',
                estado: 'Estado 1',
                tipoDocumento: 'dni',
                documento: '23044813',
                carnet: '345454',
                apellido: 'Flebus',
                nombre: 'Karina'
            }
        ];

        let response = {
            "listaResultado": req.query.dni == '1' ? [] : formulariosF4,
            "cantidadRegistrosTotales": req.query.dni == '1' ? 0 : formulariosF4.length,
            "numeroPagina": null,
            "tamanoPagina": null,
            "errores": []
        };

        return routes.doResponse(res, HTTP.SUCCESS, response);

    });

router.get('/buscarReporteF4ProtesisNoGenerados',

    (req, res) => {

        let formulariosF4 = [
            {
                fechaProceso: '14/11/2019',
                motivo: 'Mora del asociado',
                tipoDocumento: 'dni',
                documento: '23044813',
                carnet: '345454',
                apellido: 'Flebus',
                nombre: 'Karina'
            }
        ];

        let response = {
            "listaResultado": req.query.dni == '1' ? [] : formulariosF4,
            "cantidadRegistrosTotales": req.query.dni == '1' ? 0 : formulariosF4.length,
            "numeroPagina": null,
            "tamanoPagina": null,
            "errores": []
        };

        return routes.doResponse(res, HTTP.SUCCESS, response);

    });

module.exports = router;
