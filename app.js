function startRealTime(){
    setInterval(function(){
        fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USDT,BNB,ADA,XRP,DOGE,USDC,DOT,UNI,BUSD,BCH,LTC,LINK&tsyms=usd,sar `)
        .then((Result)=> Result.json())
        .then((data)=> {
            document.querySelector('#bUSD').innerHTML = `USD : ${data.BTC.USD}`
            document.querySelector('#bSAR').innerHTML = `SAR : ${data.BTC.SAR}`
            document.querySelector('#eUSD').innerHTML = `USD : ${data.ETH.USD}`
            document.querySelector('#eSAR').innerHTML = `SAR : ${data.ETH.SAR}`
            document.querySelector('#usD').innerHTML = `USD : ${data.USDT.USD}`
            document.querySelector('#usR').innerHTML = `SAR : ${data.USDT.SAR}`
            document.querySelector('#bnUSD').innerHTML = `USD : ${data.BNB.USD}`
            document.querySelector('#bnSAR').innerHTML = `SAR : ${data.BNB.SAR}`
            document.querySelector('#xUSD').innerHTML = `USD : ${data.XRP.USD}`
            document.querySelector('#xSAR').innerHTML = `SAR : ${data.XRP.SAR}`
            document.querySelector('#dgUSD').innerHTML = `USD : ${data.DOGE.USD}`
            document.querySelector('#dgSAR').innerHTML = `SAR : ${data.DOGE.SAR}`
            document.querySelector('#unUSD').innerHTML = `USD : ${data.UNI.USD}`
            document.querySelector('#unSAR').innerHTML = `SAR : ${data.UNI.SAR}`
        })

    }, 1000)

}
startRealTime()