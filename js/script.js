function openPage() {
    let name = document.querySelector('#name').value.trim();
    if(name === '') {
        alert('Пожалуйста, введите имя');
        return false;
    } else {
        if ((/^([а-яА-ЯёЁa-zA-Z ]*)$/.test(name))){
            if(name.length >= 20){
                alert('Максимальное количество символов - 20');
                return false;
            }
            else{
                localStorage.setItem('userName', name);
            }
        }
        else {
            alert('Введите корректное имя');
            return false;
        }
    }
}
 
