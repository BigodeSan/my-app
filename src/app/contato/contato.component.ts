import { Component, OnInit } from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  // faCoffee = faCoffee;

  constructor() { }

  ngOnInit() {

    // Email
    $(function($){

      $("form").submit(function(event) {
    
        event.preventDefault();
    
        $.ajax({
          url: "https://simple-form.com/sensualmdintima@gmail.com?json",
          method: "POST",
          data: {
          nome: $("#nome").val(),
          email: $("#email").val(),
          telefone: $("#telefone").val(),
          mensagem: $("#mensagem").val()
          },
          dataType: "json",
                
        }).done(function(){
              
          $("#send").html("<div class='alert alert-success'>");
          $("#send > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
          $("#send > .alert-success").append($("<strong>").text("Email enviado com sucesso. Responderemos o mais breve possível."));
          $("#send > .alert-success").append('</div>');
    
          $('#form').trigger("reset");
          
        }).fail(function(){
          
          $("#send").html("<div class='alert alert-danger'>");
          $("#send > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
          .append("</button>");
          $("#send > .alert-danger").append($("<strong>").text("Desculpe, não foi possivel enviar seu email. Tente mais tarde!"));
          $("#send > .alert-danger").append('</div>');
                
                $('#form').trigger("reset");
          
        });
      });
    
    }) ;
    


    //  Telefone
    $(document).ready(function(){
			
			$("#telefone").mask("(00) 0000-00009")
			
			$("#telefone").blur(function(event){
				if ($(this).val().length == 15){
					$("#telefone").mask("(00) 00000-0009")
				}else{
					$("#telefone").mask("(00) 0000-00009")
				}
			});
		});

    // Navbar

$(document).ready(function(){ 
  $(".navbar-nav li a").click(function() {
     if ( !$(this).parent().hasClass('dropdown') ) {
     $(".navbar-collapse").collapse('hide');
   }
 });  
});

  }

}
