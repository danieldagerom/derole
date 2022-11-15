let mudanca = document.getElementById('text')
let botao = document.getElementById('btn-muda')
let local = document.getElementById('button-two-local')
let roleRandom
let tmp
let count = 0
var roles = [
    'Bomba do DI?',
    'São Paulo Pizzaria?',
    'Miquéias?',
    'Master Burguer?',
    'Lifebox?',
    'Quatro Burguer?',
    'Monster Crepe?',
    'Garage Burguer?',
    'Madre Teresa?',
    'Reds?',
    'Kings Burguer?',
    'Pizza Cesar?',
    'Major?',
    'BK?',
    'Galo Zé Frango Frito?',
    'China Sushi?',
    'Made In Japan Sushi?',
    'Jerônimo?',
    'Sushiloko?',
    'Nona Pinna?',
    'Meatz?',
    'Gamaparo?',
    'Frango no pote?',
    'Parrilla 61?',
    'Santa Cruz Burguers?',
    'Pamonha Pura?',
    'Méqui?',
    'Bora pra casa msm?',
    'Bomba da QNL?',
]

local.style.display = "none"

for (let i = roles.length; i;) {
    roleRandom = Math.random() * i-- | 0;
    tmp = roles[roleRandom]
    roles[roleRandom] = roles[i]
    roles[i] = tmp
}


botao.addEventListener('click', () => {

    local.style.display = "block"
    mudanca.innerHTML = roles[count]
    count++

    if(count === roles.length)
        count = 0
})

local.addEventListener('click', () => {
    if (count === 0)
        count = count
    else
        count = count - 1


    if (roles[count] === 'Bomba do DI?') 
        local.href = 'https://goo.gl/maps/FToQX8QXPxC4GW4eA'
        
    if (roles[count] === 'Master Burguer?') 
        local.href = 'https://goo.gl/maps/JZbuDzEJBKXicFWj8'

    if (roles[count] === 'São Paulo Pizzaria?') 
        local.href = 'https://goo.gl/maps/G5uua93um893EHVU9'

    if (roles[count] === 'Miquéias?') 
        local.href = 'https://goo.gl/maps/H4K8ughaTVHHU9CQ7'

    if (roles[count] === 'Bomba da QNL?') 
        local.href = 'https://goo.gl/maps/Wd2dvugcvWsfh7H38'

    if (roles[count] === 'Lifebox?') 
        local.href = 'https://g.page/lifeboxburger?share'

    if (roles[count] === 'Quatro Burguer?') 
        local.href = 'https://goo.gl/maps/muyae7dWD1oEwQFP6'
        
    if (roles[count] === 'Monster Crepe?') 
        local.href = 'https://goo.gl/maps/dx7GjQ1B6HHGXo7H8'

    if (roles[count] === 'Garage Burguer?') 
        local.href = 'https://goo.gl/maps/yQi2Fwuxkat19Bun6'

    if (roles[count] === 'Madre Teresa?') 
        local.href = 'https://goo.gl/maps/Gg2Bkj3n9ygY9jEXA'

    if (roles[count] === 'Reds?') 
        local.href = 'https://goo.gl/maps/q4MduiFq8TUPwDm69'
        
    if (roles[count] === 'Kings Burguer?') 
        local.href = 'https://goo.gl/maps/NsvJaP1rRMR7Qshy5'

    if (roles[count] === 'Pizza Cesar?') 
        local.href = 'https://goo.gl/maps/QdeEvADJMxNbt8ML6'

    if (roles[count] === 'Major?') 
        local.href = 'https://goo.gl/maps/MSMD3rZbjYgyrkd77'
        
    if (roles[count] === 'BK?') 
        local.href = 'https://goo.gl/maps/J4UJT5WrFGha2jrn8'

    if (roles[count] === 'Galo Zé Frango Frito?') 
        local.href = 'https://goo.gl/maps/2RNYbifqw5AeBmB88'

    if (roles[count] === 'China Sushi?') 
        local.href = 'https://goo.gl/maps/KnxsY9AXD4ke2grn9'

    if (roles[count] === 'Made In Japan Sushi?') 
        local.href = 'https://g.page/madeinjapanceilandia?share'
        
    if (roles[count] === 'Jerônimo?') 
        local.href = 'https://goo.gl/maps/SFacRPvQhwiRtL1m6'

    if (roles[count] === 'Sushiloko?') 
        local.href = 'https://goo.gl/maps/oVdkJHtjDGSkfdg28'

    if (roles[count] === 'Nona Pinna?') 
        local.href = 'https://g.page/nonapinna-pizzaria?share'
        
    if (roles[count] === 'Meatz?') 
        local.href = 'https://g.page/meatzaguasclaras?share'

    if (roles[count] === 'Gamaparo?') 
        local.href = 'https://goo.gl/maps/QS4yLaTTwHKSRmDS8'

    if (roles[count] === 'Frango no pote?') 
        local.href = 'https://goo.gl/maps/KkfUoMbcsBf76bEb6'

    if (roles[count] === 'Parrilla 61?') 
        local.href = 'https://goo.gl/maps/gBnttg35S319kUZ37'
        
    if (roles[count] === 'Santa Cruz Burguers?') 
        local.href = 'https://g.page/santacruzburgers?share'

    if (roles[count] === 'Pamonha Pura?') 
        local.href = 'https://goo.gl/maps/dDNwfCBNT29CQB6s7'

    if (roles[count] === 'Méqui?') 
        local.href = 'https://g.page/mcdonalds-taguatingacentro?share'
        
    if (roles[count] === 'Bora pra casa msm?') 
        local.href = 'https://www.google.com/search?q=casa&rlz=1C1NDCM_pt-BRBR827BR827&oq=casa&aqs=chrome..69i57j69i59l3j69i60j69i61l3.535j0j7&sourceid=chrome&ie=UTF-8'
})






