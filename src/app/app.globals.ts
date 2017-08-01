'use strict'

export const appName = 'Speedrunners';

// API principal de ultimos speedruns de todos los juegos
export const apiEndpoint = 'http://www.speedrun.com/api/v1/games';
// URL para datos de los speedruns del juego seleccionado - debe terminar en ?game=
export const apiEndpointDetails = 'http://www.speedrun.com/api/v1/runs?game=';
// URL para data de usuario - debe terminar en /
export const apiEndpointUser = 'http://www.speedrun.com/api/v1/users/';
