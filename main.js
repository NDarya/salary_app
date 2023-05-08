import axios from "axios"
import { getData } from "/modules/http.request"
let user_name = document.querySelector('.user_name')

let user = JSON.parse(localStorage.getItem('user'))