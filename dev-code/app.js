/* your code should go here */

var tmpl =' <li>' +
          '<div class="selfie">' +
           ' <img src="IMG">'  +        
          '</div>'+
          '<div class="stats">'+  
        '    <h2>NAME <small>CAT</small></h2>'+
         '   <strong>Time</strong>  TIME mins '+
          '  <strong>Selfies</strong> SELFIE    '+
          '</div> '+
          '<div class="badge">'+ 
          '  #I'+
          '</div>'+
        '</li>' 

var Model = {
    
   init : function(){
      this.runners=data;
   },
    
   filterAmateur : function(){
      arrayama = [];
      for(var k=0; k<this.runners.length; k++){
         if(this.runners[k].category=="amateur"){
            arrayama.push(this.runners[k]);
         }
      }
       
    this.runners = arrayama;
      return this.runners;
   },

  filterPro : function(){
      arraypro = [];
      for(var k=0; k<this.runners.length; k++){
         if(this.runners[k].category=="pro"){
            arraypro.push(this.runners[k]);
         }
      }
       
    this.runners = arraypro;
      return this.runners;
   }    
};

var Controller = {
    
   init : function(){
      Model.init();
      View.init();
   },
    
   getRunners : function(){
      return Model.runners;
   }   
};

var View = {
    
   init : function(){
      $("#top-selfiers").empty();
      $("#selfiers").empty();
       
      array = Controller.getRunners();   
      
       for(var i=0; i<array.length; i++){
       
           if(i<3){$("#top-selfiers").append(tmpl.replace("NAME",array[i].name)
                                       .replace("IMG",array[i].pic)
                                        .replace("CAT",array[i].category)
                                        .replace("TIME",array[i].time)
                                        .replace("SELFIE",array[i].sefies)
                                        .replace("I",i+1))
       }else{
       $("#selfiers").append(tmpl.replace("NAME",array[i].name)
                                       .replace("IMG",array[i].pic)
                                        .replace("CAT",array[i].category)
                                        .replace("TIME",array[i].time)
                                        .replace("SELFIE",array[i].selfies)
                                        .replace("I",i+1))};
       
       }  
   }
};



$(document).ready(function(){
  
    Controller.init();
    
    $("#btn-filter").click(function(){
       var sel=$(".options option:selected").val();
        
        if(sel=="all"){
           $("#top-selfiers").empty();
           $("#selfiers").empty();
           Controller.init();  
        }
        
        if(sel=="pro"){
           Controller.init();
           Model.filterPro();
           View.init();    
        }
        
        if(sel=="amateur"){
           Controller.init();
           Model.filterAmateur();
           View.init();    
        }
    })
    
    
  
});







