
let numberOfButtonsClicked = document.querySelectorAll('.key').length

 
for(let i = 0; i< numberOfButtonsClicked; i++) {
    document.querySelectorAll('.key')[i].addEventListener('click', function (){

        
        var pianoButtonInnerHTML = this.innerHTML
        pianoKeyIsPressed(pianoButtonInnerHTML)

            document.addEventListener('keydown', function(event) { 
                
            pianoKeyIsPressed(event.key)
  
            })
        
        
        
        function pianoKeyIsPressed(key) {

            switch (key) {
                
                case 'C':
                    var sound0 = new Audio ('./sounds/040.mp3')
                    sound0.play()
                    break;

                case 'Q':
                    var sound1 = new Audio ('./sounds/041.mp3')
                    sound1.play()
                    break;

                 case 'D':
                    var sound2 = new Audio ('./sounds/042.mp3')
                    sound2.play()
                    break;

                case 'W':
                    var sound3 = new Audio ('./sounds/043.mp3')
                    sound3.play()
                    break;

                case 'E':
                    var sound4 = new Audio ('./sounds/044.mp3')
                    sound4.play()
                    break;

                case 'F':
                    var sound5 = new Audio ('./sounds/045.mp3')
                    sound5.play()
                    break;

                case 'R':
                    var sound6 = new Audio ('./sounds/046.mp3')
                    sound6.play()
                    break;

                case 'G':
                    var sound7 = new Audio ('./sounds/047.mp3')
                    sound7.play()
                    break;

                 case 'T':
                    var soun8 = new Audio ('./sounds/048.mp3')
                    soun8.play()
                    break;

                case 'A':
                    var sound9 = new Audio ('./sounds/049.mp3')
                    sound9.play()
                    break;

                 case 'Y':
                    var sound10 = new Audio ('./sounds/050.mp3')
                    sound10.play()
                    break;

                case 'B':
                    var sound11 = new Audio ('./sounds/051.mp3')
                    sound11.play()
                    break;

            
            
                default:console.log(pianoButtonInnerHTML)
                    
            }

        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        })}





