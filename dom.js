    
        function changeText() {
            document.getElementById('dinu1').innerHTML = 'Text has been changed!';
        }

        
        function changeBackgroundColor(){
            console.log("testing");
            document.getElementById('dinu2').style.backgroundColor ='green';
        }

    
        function toggleParagraph() {
            const boom = document.getElementById('dinu3');
            if (boom.style.display === 'none') {
                boom.style.display = 'block';
            } else {
                boom.style.display = 'none';                         
                
            }
        }

    
        function addListItem() {
            const ul = document.getElementById('dinu4');
            const li = document.createElement('li');
            li.textContent = 'New Item';
            ul.appendChild(li);
        }

     
        function changeImageSource() {
            document.getElementById('dinu5').src = 'https://via.placeholder.com/200';
        }

        function countParagraphs() {
            const paragraphs = document.getElementsByTagName('p');
            alert('Number of paragraphs: ' + paragraphs.length);
        }

      
        function deleteListItem() {
            const ul = document.getElementById('dinu6');
            ul.removeChild(ul.lastElementChild);
        }
        

        
