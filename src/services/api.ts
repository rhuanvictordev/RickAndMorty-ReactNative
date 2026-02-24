import axios from "axios";

export const apiRickAndMorty = axios.create({
    baseURL:"https://rickandmortyapi.com/api/",
    timeout: 1000 // 1 segundos
});

export const apiLocal = axios.create({
    baseURL:"http://192.168.0.27:8080/api/",
    timeout: 1000 // 1 segundos
});