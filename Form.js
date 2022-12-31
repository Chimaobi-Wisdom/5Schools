var selectElement = document.querySelector('#select1');
    let btn = document.getElementById('anchor');
    
    function myFunc(){
     btn.href = selectElement.value+'.html';   
    }