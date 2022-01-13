"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClientsById = exports.getClientsById = exports.getClients = exports.deleteClientsById = exports.createClient = void 0;

var createClient = function createClient(req, res) {
  console.log(req.body);
  res.json('Creating client');
};

exports.createClient = createClient;

var getClients = function getClients(req, res) {
  res.json('Clients general');
};

exports.getClients = getClients;

var getClientsById = function getClientsById(req, res) {};

exports.getClientsById = getClientsById;

var updateClientsById = function updateClientsById(req, res) {};

exports.updateClientsById = updateClientsById;

var deleteClientsById = function deleteClientsById(req, res) {};

exports.deleteClientsById = deleteClientsById;