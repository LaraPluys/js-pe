 // Start script.
    
     
        //alerts verbergen
         document.getElementById("errorAlert").style.display = "none";
         document.getElementById("succesAlert").style.display = "none";
         document.getElementById("infoAlert").style.display = "none";
        
        //array errors aanmaken
        let errors  = [];
    
        let noPayment = new Boolean(true);
        
        //formulier valideren door alle functies aan te roepen
        function validateForm(){
            
            checkEmptyField(document.getElementById("inputVoornaam").value, "Het veld voornaam is vereist.");
            checkEmptyField(document.getElementById("inputNaam").value, "Het veld naam is vereist.");
            checkEmptyField(document.getElementById("inputGebruikersnaam").value, "Het veld gebruikersnaam is vereist.");
            checkEmptyField(document.getElementById("inputAdres").value, "Het veld adres is vereist.");
            checkEmptyField(document.getElementById("inputLand").value, "Het veld land is vereist.");
            checkEmptyField(document.getElementById("inputProvincie").value, "Het veld provincie is vereist.");
            
                
            validateEmail(document.getElementById("inputEmail").value);
            

            validatePassword(document.getElementById("inputWachtwoord").value, document.getElementById("inputHerhaalWachtwoord").value);
                        
            
            checkPC(document.getElementById("inputPostcode").value);
            
            checkbox();
            
           validatePayment(document.getElementById("RadioBankingApp").value);
           validatePayment(document.getElementById("RadioOverschrijving").value);
           validatePayment(document.getElementById("RadioVisaCard").value);
           validatePayment(document.getElementById("RadioPayPal").value);
            
            if(noPayment == true){
                
                errors.push("Er is geen betalingswijze aangeduid.")
               
               }
       

            //als er errors zijn : tonen van het error alert met de array van errors, succes en info alert worden verborgen
            if (errors .length != 0)
            {
                document.getElementById("succesAlert").style.display = "none";
                document.getElementById("infoAlert").style.display = "none";
                
                document.getElementById("error").innerHTML = errors.join('<br>');     
                document.getElementById("errorAlert").style.display = "block";
                errors = [];

                
            }
            //als er geen errors zijn : tonen van het succes alert en het info alert, error alert is verborgen
            else
            {
                document.getElementById("errorAlert").style.display = "none";

                document.getElementById("succesAlert").style.display = "block";
                document.getElementById("infoAlert").style.display = "block";
                   
            }
            
        }
        
        
        function checkEmptyField(veld, melding){
            //https://www.w3schools.com/howto/howto_js_validation_empty_input.asp
            //checken of het veld dat meegegeven wordt in de parameter leeg is, als het leeg is wordt er een melding in de array errors gepusht
            
            if (veld == "")
                {
                    errors.push(melding);
                }          
            
        }
        
        
       
 
        function validateEmail(email)
        //https://www.w3resource.com/javascript/form/email-validation.php
        //checken of er een geldig emailadres is opgegeven, als dit niet het geval is wordt de melding "E-mailadres is niet correct." gepusht in de error array. Als er geen email is opgegeven wordt de melding "email is vereist" gepust naar de error array
        
        {
            let mailformat = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
            
            if(email == ""){
                
                errors.push("Het veld email is vereist.");
            }
            
           
            
            else if(email.match(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/))
            {
               
                return true;
            }
            else
            {
                errors.push("E-mailadres is niet correct.");

                return false;
            }
        }
        
        function validatePassword(wachtwoord, herhaalWachtwoord){
            
            //https://www.aspsnippets.com/Articles/Password-and-Confirm-Password-validation-using-JavaScript-and-jQuery.aspx
            //https://stackoverflow.com/questions/39740832/password-validation-is-at-least-6-character/39877688
            //https://discuss.codecademy.com/t/learning-javascript-password-validator-problems-with-if-then-statements/63466
            
            //checken of het veld wachtwoord en herhaal wachtwoord is ingevuld, als dit zo is dan wordt er gecheckt of het wachtwoord minstens 8 karakters heeft en of de velden wachtwoord en herhaal wachtwoord overeenkomen, als dit niet het geval is worden passende error melding gepusht in de error array
            
            
            if(wachtwoord == "")
            {
                errors.push("Het veld wachtwoord is vereist.");
            }
            else if(wachtwoord.length < 8)
            {
                errors.push("wachtwoord moet minstens 8 karakters hebben.");
            
            }
            
            if(herhaalWachtwoord == "")
            {
                errors.push("Het veld herhaal wachtwoord is vereist.");
            }
            
            else if(wachtwoord != herhaalWachtwoord){
                
                errors.push("wachtwoord komt niet overeen met herhaal wachtwoord.");
            }
            
        }
        
     
       
        
        
        function validatePayment(veld) 
        //https://www.geeksforgeeks.org/how-to-check-whether-a-radio-button-is-selected-with-javascript/
        //checken of er een betalingswijze is aangeduid, als er één is aangeduid wordt de waarde hiervan in het info alert gezet. Als er geen is aangeduid wordt de gepaste error melding gepusht in de error array
        
        { 
                  
            var checkRadio = document.querySelector(
                'input[name="customRadio"]:checked');
              
            if(checkRadio != null) 
            {
                document.getElementById("info").innerHTML
                    = "Je betalingswijze is " + checkRadio.value;
                
                noPayment = false;

                
            }
            
        }
    
            
            
        function checkPC(veld){
            //https://stackoverflow.com/questions/14718561/how-to-check-if-a-number-is-between-two-values
            //checken of er iets is ingevuld in het veld postcode, als er niets is ingevuld wordt de gepaste error melding gepusht in de error array. Als er wel iets is ingevuld wordt er gecheckt of de opgegeven waarde tussen 1000 en 9999 ligt, als dit niet het geval is wordt er een gepaste error melding gepusht in de error array
            
            if(veld == ""){
                
                errors.push("Het veld postcode is vereist.");
                                
            }
            
            else if(veld < 1000){
                
                errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.");

            }
            
            else if(veld > 10000){
                errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.");
                
            }
                    
        }
        
        function checkbox() {
        // https://stackoverflow.com/questions/9887360/how-can-i-check-if-a-checkbox-is-checked
        //checken of het vakje met de algemene voorwaarden is aangevinkt, als dit niet zo is wordt er een gepaste error melding gepusht in de error array
            
        if (document.getElementById("VoorwaardenCheck").checked == false) {

            errors.push("Je moet akkoord gaan met de algemene voorwaarden.");
        } 
    }
       
        
        
        //bij het klikken op de knop wordt de functie validateForm opgeroepen, dus wordt het formulier gevalideerd
        document.getElementById("waveWand").onclick = function() {validateForm()}
         
        

        // Einde script.