const name = document.querySelector('#full-name').value;
const url = document.querySelector('#website').value;
const btn = document.querySelector('button');
const list = document.querySelector('.list');
const deleteA = document.querySelector('.delete');
const visit = document.querySelector('.visit');





const increament = () =>{

        const name = document.querySelector('#full-name');
        const url = document.querySelector('#website').value;
    
        if (name == '' || url == '') {
    
            console.log('no data to show');
        } else {
                const row = document.createElement('tr');
                const list = document.querySelector('.list');

                let indexS = 0;
                indexS += 1; 
    
                row.innerHTML = `
                <td>${indexS}</td>
                <td>${url}</td>
                <td><a href="#" class="visit"><i class="fa-solid fa-eye"></i>Visit</a></td>
                <td><a href="#" class="delete"><i class="fa-solid fa-trash"></i>Delete</a></td>`;
    
                list.appendChild(row);
            }
    
            clearData();
        
    };

    const clearData = () => {
        const name = document.querySelector('#full-name').value = "";
        const url = document.querySelector('#website').value = "";
    }


    document.addEventListener('click', function (e){
  
        //delete the task
        if(e.target.className == 'delete') {
      
          //delete current task
          e.target.parentElement.parentElement.remove();
        }
    });

    
    document.addEventListener('click', function goToLink(e) {
        if( e.target.className =='visit') {
            window.open(e.target.url, '_blank');
        }
    });

    btn.addEventListener('click', increament);
    