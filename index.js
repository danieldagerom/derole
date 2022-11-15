let mudanca = document.getElementById('text')
let botao = document.getElementById('btn-muda')
let local = document.getElementById('button-two-local')
var role
let roleRandom
let tmp
let count = 0
var roles = [
    'Bombinha?',
    'São Paulo Pizzaria?',
    'Miquéias?',
    'Master?',
    'Bomba da QNL?'
]

for (let i = roles.length; i;) {
    roleRandom = Math.random() * i-- | 0;
    tmp = roles[roleRandom]
    roles[roleRandom] = roles[i]
    roles[i] = tmp
}

local.style.display = "none"

botao.addEventListener('click', () => {

    local.style.display = "block"
    mudanca.innerHTML = roles[count]
    count++

    if(count == roles.length)
        count = 0
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






