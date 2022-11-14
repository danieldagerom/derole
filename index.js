let mudanca = document.getElementById('text')
let botao = document.getElementById('btn-muda')
let local = document.getElementById('button-two-local')
var role
var roles = [
    'Bombinha?',
    'São Paulo Pizzaria?',
    'Miquéias?',
    'Master?',
    'Bomba da QNL?'
]

local.style.display = "none"

botao.addEventListener('click', () => {
    local.style.display = "block"
    role = roles[Math.floor(Math.random() * roles.length)]
    mudanca.innerHTML = role
})

local.addEventListener('click', () => {
    if (role === 'Bombinha?') 
        local.href = 'https://goo.gl/maps/FToQX8QXPxC4GW4eA'
        
    if (role === 'Master?') 
        local.href = 'https://goo.gl/maps/JZbuDzEJBKXicFWj8'

    if (role === 'São Paulo Pizzaria?') 
        local.href = 'https://goo.gl/maps/G5uua93um893EHVU9'

    if (role === 'Miquéias?') 
        local.href = 'https://goo.gl/maps/H4K8ughaTVHHU9CQ7'

    if (role === 'Bomba da QNL?') 
        local.href = 'https://goo.gl/maps/Wd2dvugcvWsfh7H38'
})






