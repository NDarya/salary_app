let users = [
    { name: 'Сохиб Курбон', salary: 800, increase: false, rise: true, id: 1 },
    { name: 'Шахзод Хамидов', salary: 3000, increase: true, rise: false, id: 2 },
    { name: 'Далер Шарифкулов', salary: 5000, increase: false, rise: false, id: 3 },
    { name: 'Бекзод Хамидов', salary: 5000, increase: false, rise: false, id: 4 },
    { name: 'Алишер Мардиев', salary: 5000, increase: false, rise: false, id: 5 },
    { name: 'Мухаммад', salary: 5000, increase: false, rise: false, id: 6 },
    { name: 'Сабина Яковлева', salary: 5000, increase: false, rise: false, id: 7 },
    { name: 'Руфина', salary: 5000, increase: false, rise: false, id: 8 },
    { name: 'Хуршида', salary: 5000, increase: false, rise: false, id: 9 },
    { name: 'Дилшод Муртазоев', salary: 5000, increase: false, rise: false, id: 10 },
    { name: 'Ориф', salary: 5000, increase: false, rise: false, id: 11 },
    { name: 'Улугбек', salary: 5000, increase: false, rise: false, id: 12 },
    { name: 'Влад Цой', salary: 5000, increase: false, rise: false, id: 13 },
    { name: 'Алина', salary: 5000, increase: false, rise: false, id: 14 },
]

let search_inp = document.querySelector('.search')
let collaborators = document.querySelector(".collaborators")
let form = document.forms
let main = document.querySelector('main')
let all = document.querySelector("#all")
let incre = document.querySelector("#to_premium")
let more = document.querySelector("#more_than")
let premium = document.querySelector('.premium')
let btns = document.querySelector('.btns')
let bottom = document.querySelector('.bottom_box')

collaborators.innerHTML = users.length

search_inp.onkeyup = () => {
    let key = search_inp.value.toLowerCase().trim()
    let filtered = users.filter(item => {
        let name = item.name.toLowerCase()
        if (name.includes(key)) {
            return item
        }
    })
    reload(filtered);
}
form.onsubmit = (event) => {
    event.preventDefault()

    let user = {
        id: Math.random(),
        rise: false,
        increase: false,
    }
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user)
    users.push(user)
    reload(users)
}


function reload(arr) {
 
    arr.innerHTML = ""
    for (let item of arr) {
        let user_name = document.createElement('h3')
        let user_salary = document.createElement('input')
        let cookie = document.createElement('button')
        let cookie_img = document.createElement('img')
        let bin_img = document.createElement('img')
        let delete_btn = document.createElement('button')
        let prem = document.createElement('img')
        let user_box = document.createElement('div')
        let btns = document.createElement('div')

        user_name.innerHTML = item.name
        user_salary.value = item.salary + "$"
        user_name.classList.add("user_name")
        cookie.classList.add('get_prem')
        delete_btn.classList.add('del')
        cookie_img.src = './public/cookie.svg'
        bin_img.src = './public/bin.svg'

        cookie.append(cookie_img)
        delete_btn.append(bin_img)
        btns.append(cookie, delete_btn, prem)
        user_box.append(user_name, user_salary, btns)
        bottom.prepend(user_box)

        user_name.onclick = () => {
            if (item.rise = true) {

                reload(users)
            }
            if (item.rise === true) {
                star.src = "./public/star.svg"
            }

        }
            cookie.onclick = () => {
                h3.classList.toggle("golden")
                user_salary.classList.toggle("golden")
                item.increase = true
                if (h3.classList.contains('golden')) {
                    premium.innerHTML = count++
                } else {
                    premium.innerHTML = count--
                }
            }

            delete_btn.onclick = () => {
                data = users.filter(el => el.id !== item.id)
                reload(users)
            }

            more.onclick = () => {
                let mr = users.filter(el => el.salary >= 1000)
                reload(mr)

            }

            all.onclick = () => {
                reload(users)
            }

            premium.onclick = () => {
                let pr = users.filter(el => el.rise === true)
                reload(pr)
            }
        
    }}
    


reload(users)

