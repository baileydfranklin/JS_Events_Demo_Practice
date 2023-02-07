function configureListeners(){
    let paintImages = [clr1, clr2, clr3, clr4, clr5, clr6, clr7, clr8, clr9]

    for(let i = 0; i < paintImages.length; i++){
        document.getElementById(paintImages[i].id).addEventListener('mouseover', addOpacity)
        document.getElementById(paintImages[i].id).addEventListener('mouseout', removeOpacity)
    }
}

function addOpacity(event){
    if(!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id)
}

function removeOpacity(event){
    if(this.classList.contains('dim')){
        this.classList.remove('dim')
    }

    let displayPrice = document.getElementById('color-price')
        displayPrice.textContent = ''

    let displayColor = document.getElementById('color-name')
        displayColor.textContent = ''

    event.preventDefault();
}

function getProductInfo(paintColor){
    let displayPrice;
    let displayColor;

    switch (paintColor) {
        case 'clr1':           
            // set variables for price and color name and invoke a function to update the price     
            displayPrice = '$14.99'
            displayColor = 'Lime Green'
            updatePrice(displayColor, displayPrice)
            break;           
        case 'clr2':
            // set variables for price and color name and invoke a function to update the price    
            displayPrice = '$11.14'
            displayColor = 'Medium Brown'
            updatePrice(displayColor, displayPrice)
            break;            
        case 'clr3':
            // set variables for price and color name and invoke a function to update the price  
            displayPrice = '$22.99'
            displayColor = 'Royal Blue'
            updatePrice(displayColor, displayPrice)
            break;   
        case 'clr4':
            // set variables for price and color name and invoke a function to update the price  
            displayPrice = '$4.99'
            displayColor = 'Solid Black'
            updatePrice(displayColor, displayPrice)
            break;   
        case 'clr5':
            // set variables for price and color name and invoke a function to update the price       
            displayPrice = '$8.22'
            displayColor = 'Solid Cyan'
            updatePrice(displayColor, displayPrice)
            break;   
        case 'clr6':
            // set variables for price and color name and invoke a function to update the price        
            displayPrice = '$11.99'
            displayColor = 'Solid Purple'
            updatePrice(displayColor, displayPrice)
            break;   
        case 'clr7':
            // set variables for price and color name and invoke a function to update the price 
            displayPrice = '$13.42'
            displayColor = 'Solid Red'
            updatePrice(displayColor, displayPrice)
            break;   
        case 'clr8':
            // set variables for price and color name and invoke a function to update the price   
            displayPrice = '$21.98'
            displayColor = 'Solid White'
            updatePrice(displayColor, displayPrice)
            break;   
        case 'clr9':
            // set variables for price and color name and invoke a function to update the price 
            displayPrice = '$14.99'
            displayColor = 'Solid Yellow'
            updatePrice(displayColor, displayPrice)
            break;   
          default:              
    }

    function updatePrice(displayColor, displayPrice){

        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = displayPrice

        let colorName = document.getElementById('color-name')
        colorName.textContent = displayColor
    }
}