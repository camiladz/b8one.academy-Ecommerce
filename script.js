// contador

    const minusButton = document.querySelector(".minus-button");
    const plusButton = document.querySelector(".plus-button");
    const counterValueSpan = document.querySelector(".counter-value");
    
    function counterButtonHandler(operation) {

        let counterCurrentValue = +counterValueSpan.innerHTML

        switch (operation) {
            case "+":
                if (counterCurrentValue < 3)
                counterCurrentValue++
                counterValueSpan.innerHTML = counterCurrentValue
                break;
            case "-":
                if (counterCurrentValue > 1) {
                    counterCurrentValue--
                    counterValueSpan.innerHTML = counterCurrentValue
                }
                break;
            default:
                break;
        }
    }

    minusButton.addEventListener("click", () => counterButtonHandler("-"))
    plusButton.addEventListener("click", () => counterButtonHandler("+"))

//adicionar a bag 

    const amountCart = document.querySelector("#amount-cart");
    const addToCart = document.querySelector(".payment-button");
    console.log(addToCart);
    let newAmountCart = 0;

    addToCart.addEventListener("click", () => {
        if (newAmountCart < 1 ) {
            newAmountCart += 1

            amountCart.innerHTML = newAmountCart 
        }
       
    })