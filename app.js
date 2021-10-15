let clickUpgrades = {
  pickaxes: {
    price: 10,
    quantity: 0,
    multiplier: 2
  }, cart: {
    price: 50,
    quantity: 0,
    multiplier: 5
  }
};

let automaticUpgrades = {
  rover: {
    price: 500,
    quantity: 0,
    multiplier: 30
  }, miner: {
    price: 200,
    quantity: 0,
    multiplier: 10
  }
};

let rovers = automaticUpgrades.rover.quantity
let miners = automaticUpgrades.miner.quantity
let carts = clickUpgrades.cart.quantity
let pickaxes = clickUpgrades.pickaxes.quantity
let roverMult = automaticUpgrades.rover.multiplier
let minerMult = automaticUpgrades.miner.multiplier
let pickMulti = clickUpgrades.pickaxes.multiplier
let cartMulti = clickUpgrades.cart.multiplier
let roverCost = automaticUpgrades.rover.price
let cartCost = clickUpgrades.cart.price
let minerCost = automaticUpgrades.miner.price
let pickaxeCost = clickUpgrades.pickaxes.price
let cheese = 0

function mine() {
  let cheeseClick = 1

  let currentClick = (pickaxes * pickMulti) + (carts * cartMulti)

  if (pickaxes > 0 || carts > 0) {
    cheese += currentClick * cheeseClick
  } else {
    cheese++
  }
  console.log(cheese)
  update()
}

function update() {
  document.getElementById('chzinv').innerText = `Cheese: ${cheese}`
  document.getElementById('chzpickinv').innerText = `Pickaxes: ${pickaxes}`
  document.getElementById('chzcrtinv').innerText = `Cheese Carts: ${carts}`
  document.getElementById('mstrinv').innerText = `Miners: ${miners}`
  document.getElementById('roverinv').innerText = `Rovers: ${rovers}`
  if (pickaxes > 0 || carts > 0 || miners > 0 || rovers > 0) {
    document.getElementById('buy-pickaxe').innerText = `${pickaxeCost}`
    document.getElementById('buy-cart').innerText = `${cartCost}`
    document.getElementById('buy-miner').innerText = `${minerCost}`
    document.getElementById('buy-rover').innerText = `${roverCost}`
  }


}

function buyPickaxe() {

  if (cheese >= pickaxeCost) {
    pickaxes++
    cheese -= pickaxeCost
    pickaxeCost += Math.floor(pickaxeCost *= 0.15)

    update()

  }
}

function buyCart() {

  if (cheese >= cartCost) {
    carts++
    cheese -= cartCost
    cartCost += Math.floor(cartCost *= 0.15)


    update()
  }
}

function buyMiner() {

  if (cheese >= minerCost) {
    miners++
    cheese -= minerCost
    minerCost += Math.floor(minerCost *= 0.15)


    update()
  }
}

function buyRover() {

  if (cheese >= roverCost) {
    rovers++
    cheese -= roverCost
    roverCost += Math.floor(roverCost *= 0.15)

    update()
  }
}

function autoCheesePerSec() {
  let cps = (rovers * roverMult) + (miners * minerMult)
  let tcm = (roverMult * rovers) + (carts * cartMulti) + (pickaxes * pickMulti) + (miners * minerMult)
  let cpk = (pickaxes * pickMulti) + (carts * cartMulti)
  if (pickaxes > 0 || carts > 0 || miners > 0 || rovers > 0) {
    document.getElementById('cheese-per').innerText = `CPS: Cheese Per Second = ${cps}`

    document.getElementById('total-cheese-auto').innerText = `ATCM: Automatic Total Cheese Multiplier = ${cps}`

    document.getElementById('total-cheese-multi').innerText = `TCM: Total Cheese Multipler = ${tcm}`

    document.getElementById('cheese-per-click').innerText = `CPC: Cheese Per Click = ${cpk}`





    update()
  }
}

function startInterval() {
  setInterval(function () {
    cheese += (roverMult * rovers) + (minerMult * miners)
    autoCheesePerSec()
    update()
  }, 1000)

}

startInterval()
