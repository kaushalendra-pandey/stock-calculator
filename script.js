const buyPriceBox = document.getElementById("buy-price")
const buyQuantBox = document.getElementById("buy-quantity")
const curPriceBox = document.getElementById("sell-price")
const answer = document.querySelector("p")

const getPercentage = (final,initial) => {
    const diff = Math.abs(final - initial)
    const ratio = diff / initial
    return  (ratio * 100).toFixed(2)
}

const getProfitOrLoss = () => {
    answer.innerHTML = ""
    const buyPrice = buyPriceBox.value
    const buyQuant = buyQuantBox.value
    const curPrice = curPriceBox.value

    if (!buyPrice || !buyQuant || !curPrice){
        answer.innerHTML = "Ye scheme aapke liye h hi nahi! Please make sure all the filds must be filled and must be non-zero"
        answer.className = "alert"
        return
    }

    const totalBuy = buyPrice * buyQuant
    const totalSell = curPrice * buyQuant

    console.log(totalSell,totalBuy)

    const gross = totalSell - totalBuy
    console.log(gross)
    if(gross < 0) {
        lossPercentage = getPercentage(totalSell,totalBuy)
        answer.innerHTML = `OOPS!! Not a good time to sell!. You will loose Rs. ${Math.abs(gross)} i,e ${lossPercentage}% 👎`
        answer.className = "alert"
    } else if(gross > 0){
        profitPercentage = getPercentage(totalSell,totalBuy)
        answer.innerHTML = `Hurray!! You can sell them to earn a profit of Rs. ${gross} i.e ${profitPercentage}% 👍`
        answer.className = "success"
    } else {
        answer.innerHTML = "Hold on Macha... Its a no-gaianer!!"
    }

}