  var count = 0;
  var titArr=[];
  var dCount=0;
  drop(dCount);
  $('#intrest').multiselect({
    nonSelectedText: 'Intrest Game',
    buttonWidth:'150px'
   });
   $('#intrestE').multiselect({
    nonSelectedText: 'Intrest Game',
    buttonWidth:'150px'
   });
  var formCon   =document.getElementById("form");
 var container  =document.getElementById("divMain");
  function counter(msg){
    document.getElementById('counter_div').innerHTML = msg.value.length+'/155';
}
formCon.addEventListener('submit', e =>{
  e.preventDefault();

  var tittle    =document.getElementById("vali").value.toUpperCase();
  if(titleRepeat(titArr,tittle) == false){
    swal({
      title: "Tittle Already Exist!",
      text: "Pleace Change the Title",
      icon: "error",   
    });
    document.getElementById("vali").value='';
    }else{
  checkInput();
    }
 
});
function checkInput(){
  var formCon   =document.getElementById("form");
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ')  { 
  if (minute===0 && second===0){ 
  hour=12;
  prepand=' Noon'; } 
  else{ 
  hour=12;
  prepand=' PM';} } 
  if (hour===0 && prepand===' AM ') { 
  if (minute===0 && second===0){ 
  hour=12;
  prepand=' Midnight'; } 
  else{  hour=12;prepand=' AM';} } 
var timeB= hour+prepand + ":" + minute + ":" + second ;
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<12) { dd='0'+dd;} 
if(mm<12) {    mm='0'+mm;} 
var todayB = dd+'-'+mm+'-'+yyyy;
   var cboxes = document.getElementsByName('mailId[]');
    var len = cboxes.length;
    for (var i=0; i<len; i++) {
          if(cboxes[i].checked){
            cboxes[i].value='active';    
          }else{
            cboxes[i].value='DeActive'; }
          var active  =cboxes[i].value;
    } 
  var imgSrc = document.getElementById("blah").getAttribute("src")
  var tittle    =document.getElementById("vali").value.toUpperCase();
  var para      =document.getElementById("text").value;
  var intrest=document.getElementById("intrest").value;
  console.log(intrest)
  titArr.push(tittle);
  
 
    const newDiv = document.createElement("div");
    newDiv.id='data'+count;
    newDiv.class='dat'
    newDiv.innerHTML="<div><img class='user' id='blah"+count+"' src='"+imgSrc+"'/></div><div class='name'><h1 class='tittle"+count+"' id='fn"+count+"'>"+ tittle +"</h1></div><div class='act'><span  id='ln"+count+"' value='"+active+"'>"+active+ "</span></div><br><p class='par' id='ph"+count+"'>"+para+"</p><b>Faviorite Game :  </b><span class='int' id='intrest"+count+"' value='"+intrest+"'>"+intrest+"</span><div class='date'><span>"+todayB+"<br>"+timeB+"</span></div><br><button class='btn btn-warning btn-sm btnd' id='edit' data-toggle='modal' data-target='#exampleModal1' onclick='edit"+count+"()'>Edit</button> "+"<button id='del' class='btn btn-danger btn-sm btnde' onclick='del"+count+"()'>delete</button>";
    newDiv.classList.add("div-shadow");
    container.appendChild(newDiv);
    count++;
    var formCon   =document.getElementById("form");
    formCon.reset()
    document.getElementById("blah").src='#'
    dCount = $(".div-shadow").length;  

    drop(dCount);

  swal({
    title: "Successfully Stored!",
    text: "Please Visit Again",
    icon: "success",
    button: "ok",
    
  });
  
}
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#blah')
        .attr('src',e.target.result)
        .width(62)
        .height(62);
    };
    reader.readAsDataURL(input.files[0]);
  }}
function edit0(){
  $("#intreastBar, #statusBar, #search").prop("enable");
    var tittleEdit0 = document.getElementById("fn0").innerHTML;
    var activeEdit0=  document.getElementById("ln0").innerHTML;
    var paraEdit0=  document.getElementById("ph0").innerHTML;
    var intrestEdit0= document.getElementById("intrest0").innerHTML;
    
    document.getElementById("tittleE").value =tittleEdit0;
    document.getElementById("intrestE").value =intrestEdit0;
    
    document.getElementById("textE").value =paraEdit0;
    for( var i=0 ;i<6 ; i++){ 
   $("#save"+i).hide();
    }
   $("#save0").show();
    $("#save0").click(function(){
             t0=document.getElementById("tittleE").value;
             intr0 =document.getElementById("intrestE").value ;
             pa0  = document.getElementById("textE").value ;
 document.getElementById("fn0").innerHTML = t0;

document.getElementById("ph0").innerHTML  = pa0;
document.getElementById("intrest0").innerHTML =intr0;
    }) }
    function edit1(){
      var tittleEdit1 = document.getElementById("fn1").innerHTML;
      // var activeEdit1=  document.getElementById("ln1").innerHTML;
      var paraEdit1  =  document.getElementById("ph1").innerHTML;
      var intrestEdit1= document.getElementById("intrest1").innerHTML;
      document.getElementById("tittleE").value =tittleEdit1;
      document.getElementById("intrestE").value =intrestEdit1;
      document.getElementById("textE").value =paraEdit1;
      for( var i=0 ;i<6 ; i++){ 
      $("#save"+i).hide();
      }
      $("#save1").show();
      $("#save1").click(function(){
               t1 =document.getElementById("tittleE").value;
               intr1 =document.getElementById("intrestE").value ;
               pa1  = document.getElementById("textE").value ;
   document.getElementById("fn1").innerHTML = t1;
  document.getElementById("ph1").innerHTML  = pa1;
  document.getElementById("intrest1").innerHTML =intr1;
      })
      }
      function edit2(){
        var tittleEdit2 = document.getElementById("fn2").innerHTML;
        // var activeEdit2=  document.getElementById("ln2").innerHTML;
        var paraEdit2 =  document.getElementById("ph2").innerHTML;
        var intrestEdit2= document.getElementById("intrest2").innerHTML;
        document.getElementById("tittleE").value =tittleEdit2;
        document.getElementById("intrestE").value =intrestEdit2;
        document.getElementById("textE").value =paraEdit2;
        for( var i=0 ;i<6 ; i++){ 
          $("#save"+i).hide();
          }
        $("#save2").show();
        $("#save2").click(function(){
                 t2 =document.getElementById("tittleE").value;
                 intr2 =document.getElementById("intrestE").value ;
                 pa2  = document.getElementById("textE").value ;
     document.getElementById("fn2").innerHTML = t2;
    document.getElementById("ph2").innerHTML  = pa2;
    document.getElementById("intrest2").innerHTML =intr2;
        })         }

    
function drop(dCount){
  if(dCount > 0){
    $("#div2,#search,#div1").removeClass('not-allowed');
    document.getElementById("intrestBar").disabled = false;
    document.getElementById("search").disabled = false;
    document.getElementById("statusBar").disabled = false;
    document.getElementById("norecord").style.display='none';
  }else{
    $("#div2,#search,#div1").addClass('not-allowed');
    document.getElementById("intrestBar").disabled = true;
    document.getElementById("search").disabled = true;
    document.getElementById("statusBar").disabled = true;
   
    document.getElementById("norecord").style.display='block';

  }
  return;
}
        function edit3(){
          var tittleEdit3= document.getElementById("fn3").innerHTML;
          var activeEdit3=  document.getElementById("ln3").innerHTML;
          var paraEdit3  =  document.getElementById("ph3").innerHTML;
          var intrestEdit3= document.getElementById("intrest3").innerHTML;
          document.getElementById("tittleE").value =tittleEdit3;
          document.getElementById("intrestE").value =intrestEdit3;       
          document.getElementById("textE").value =paraEdit3;
          for( var i=0 ;i<6 ; i++){ 
            $("#save"+i).hide();          }
          $("#save3").show();
          $("#save3").click(function(){
                   t =document.getElementById("tittleE").value;
                   intr =document.getElementById("intrestE").value ;
                   pa  = document.getElementById("textE").value ;
       document.getElementById("fn3").innerHTML = t;     
      document.getElementById("ph3").innerHTML  = pa;
      document.getElementById("intrest3").innerHTML =intr;
          })
        }
          function edit4(){
            $("#intreastBar, #statusBar, #search").prop("enable");
              var tittleEdit4 = document.getElementById("fn4").innerHTML;
              var activeEdit4=  document.getElementById("ln4").innerHTML;
              var paraEdit4=  document.getElementById("ph4").innerHTML;
              var intrestEdit4= document.getElementById("intrest4").innerHTML;         
              document.getElementById("tittleE").value =tittleEdit4;
              document.getElementById("intrestE").value =intrestEdit4;              
              document.getElementById("textE").value =paraEdit4;
              for( var i=0 ;i<6 ; i++){ 
                $("#save"+i).hide();
                }
             $("#save4").show();
              $("#save4").click(function(){
                       t4=document.getElementById("tittleE").value;
                       intr4 =document.getElementById("intrestE").value ;
                       pa4  = document.getElementById("textE").value ;
           document.getElementById("fn4").innerHTML = t4;          
          document.getElementById("ph4").innerHTML  = pa4;
          document.getElementById("intrest4").innerHTML =intr4;
              })
              }
          
          function edit5(){
            $("#intreastBar, #statusBar, #search").prop("enable");
              var tittleEdit5 = document.getElementById("fn5").innerHTML;
              var activeEdit5=  document.getElementById("ln5").innerHTML;
              var paraEdit5=  document.getElementById("ph5").innerHTML;
              var intrestEdit5= document.getElementById("intrest5").innerHTML;                         
              document.getElementById("tittleE").value =tittleEdit5;
              document.getElementById("intrestE").value =intrestEdit5;
              document.getElementById("textE").value =paraEdit5;
              for( var i=0 ;i<6 ; i++){ 
                $("#save"+i).hide();
                }
             $("#save5").show();
              $("#save5").click(function(){
                       t5=document.getElementById("tittleE").value;
                       intr5 =document.getElementById("intrestE").value ;
                       pa5  = document.getElementById("textE").value ;
           document.getElementById("fn5").innerHTML = t5;
          document.getElementById("ph5").innerHTML  = pa5;
          document.getElementById("intrest5").innerHTML =intr5;
              })
              }
         
          function del0(){
            document.getElementById("data0").remove();
            dCount=dCount-1; 
            drop(dCount);         
            }
            function del1(){
              document.getElementById("data1").remove();  
              dCount=dCount-1;  drop(dCount);             
              }
              function del2(){
                document.getElementById("data2").remove(); 
                dCount=dCount-1;   drop(dCount);             
                }         
                function del3(){
                  document.getElementById("data3").remove();    
                  dCount=dCount-1; drop(dCount);              
                  }      
                  function del4(){
                    document.getElementById("data4").remove();
                    dCount=dCount-1;   drop(dCount);
                    }     
                    function del5(){
                      document.getElementById("data5").remove();
                      dCount=dCount-1;  drop(dCount);              
                      }  
                     
                      $(document).ready(function(){
                      $("#allD").click(function(){
                        for( var i=0 ;i<dCount ; i++){
                        $("span[value='active']").parents("#data"+i).show(1000); 
                        $("span[value='DeActive']").parents("#data"+i).show(1000); 
                        }
                      })
                      $("#activeD").click(function(){
                        for( var i=0 ;i<dCount ; i++){
                         $("span[value='active']").parents("#data"+i).show(2000); 
                         $("span[value='DeActive']").parents("#data"+i).hide(2000);
                        }   
                      })
                      $("#inactiveD").click(function(){
                        for( var i=0 ;i<dCount ; i++){
                        $("span[value='DeActive']").parents("#data"+i).show(1000); 
                        $("span[value='active']").parents("#data"+i).hide(1000); 
                        }
                      });
                   
                $("#cri").click(function(){
                  var arr4=['volleyball','Hockey','Others'];
                  for( var i=0 ;i<dCount ; i++){
                    for( let z of arr4){
                  $("span[value='Cricket']").parents("#data"+i).show(1000); 
                  $("span[value='"+z+"']").parents("#data"+i).hide(1000);
                  }      
                }     
                });

                $("#vol").click(function(){
                  var arr=['Cricket','Hockey','Others'];

                  for( var i=0 ;i<dCount ; i++){
                    for( let y of arr){
                  $("span[value='volleyball']").parents("#data"+i).show(1000);
                  $("span[value='"+y+"']").parents("#data"+i).hide(1000);
                  }
                }
                });

                $("#hoc").click(function(){
                  var arr5=['Cricket','volleyball','Others'];

                  for( var i=0 ;i<dCount ; i++){
                    for( let y of arr5){
                    $("span[value='"+y+"']").parents("#data"+i).hide(1000);
                  $("span[value='Hockey']").parents("#data"+i).show(1000);
                  }
                }
                })

                $("#other").click(function(){
                  var arr1=['Cricket','volleyball','Hockey']
                  for( var i=0 ;i<dCount ; i++){
                    for( let y of arr1){
                  $("span[value='"+y+"']").parents("#data"+i).hide(1000);
                  $("span[value='Others']").parents("#data"+i).show(1000);
                    }
                  }
                });
                $("#all").click(function(){
                  var arr=['Cricket','volleyball','Hockey','Others'];
                  for( var i=0 ;i<dCount ; i++){ 
                    for( let x of arr){
                      console.log(x)
                  $("span[value='"+x+"']").parents("#data"+i).show(1000);
                    }
                  }
                });
              });

              function realSearch() {
                let inp = document.getElementById("search").value.toUpperCase();
                console.log(inp.length)
                
                if(inp.length == 0){
                        $(".div-shadow").show(1000);
                   }else{
                        for(let i = 0; i <= dCount; i++){
                            if($(`.tittle${i}`).text().indexOf(inp) > -1){
                                $(`.tittle${i}`).parents("#data"+i).show(1000);
                            }
                            else{
                                $(`.tittle${i}`).parents("#data"+i).hide(1000);
                            }
                        }
                   }
            }
          
            function titleRepeat(titArr,tittle){
              let result = true;
              let num = titArr.length;
              var i = 0;
              for(i = 0;i<num;i++){
                  if(tittle == titArr[i]){
                      result = false;
                  }
              }
              return result;
            }
          