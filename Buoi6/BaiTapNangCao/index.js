



function bai5 () {
     var num = document.getElementById("txtNum").value;
   
     var contentHTML = '';
     for(var i = 2; i <= num; i++)
     {
          let j = 2;
          let tmp = 0;
          while (j < i) {
               if (i % j == 0) { //Là ước số
                    tmp = 1;
                    break;
               }
               j++
          }
          if(tmp == 0) {
               contentHTML = contentHTML + i + ' ';
          }
     }
     document.getElementById("resultBT").innerHTML = contentHTML ;
}

