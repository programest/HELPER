// Этот код служит как дополнение его можо заменить валидацией но главное что бы там были add и display:none;
document.querySelector('.authorization-button').addEventListener('click', function(){
  FetchResetPassword(document.querySelector('.authorization-button').value, true)
  document.querySelector('.loadersum').classList.add('load-sum');
  document.querySelector('.loader__mb').style.display = 'none';
  document.querySelector('.insurance__more-bottom').classList.add('insurance__more-bottom--active');
 
})
function FetchResetPassword(Elvalue, loaderVis){

    setTimeout(() => {
                document.querySelector('.loadersum').classList.remove('load-sum');
        document.querySelector('.loader__mb').style.display = 'block';
        document.querySelector('.insurance__more-bottom').classList.remove('insurance__more-bottom--active');
      }, 1000);

    const formData = new FormData();
   
    const login = Elvalue
    formData.append('login', login);
    
    fetch('Заменить на свой путь', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          
            .then(data => {
              //Нужен ли Loader или нет
                if(loaderVis){
                    setTimeout(() => {
                        convert(data);
                        document.querySelector('.loadersum').classList.remove('load-sum');
                        document.querySelector('.loader__mb').style.display = 'block';
                        document.querySelector('.insurance__more-bottom').classList.remove('insurance__more-bottom--active');
                      }, 1000);
                }else{
                    convert(data);
                }
             
            })
            .catch(error => {
              console.error(error);
            });
}



function convert(data){
    //convert - преобразует ответ от сервера для продолжения использования его на фронте 
}