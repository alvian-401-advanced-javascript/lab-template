'use strict';

const proofOfLife = module.exports = {};

proofOfLife.isAlive = function(dead) {
    return !(!!dead);
};

