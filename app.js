let numCount = 0

function incrementNum(){
           
      numCount++
        
      document.querySelector('P').innerHTML = numCount;


    }

    function decrementNum(){
           
      if (numCount > 0){
        numCount--
        
      document.querySelector('P').innerHTML = numCount;
      }

    }
    function resetNum(){
           
      numCount = 0
        
      document.querySelector('P').innerHTML = numCount;


    }