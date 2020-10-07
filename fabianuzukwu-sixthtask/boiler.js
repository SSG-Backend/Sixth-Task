// GET Request

const getData = (url, headerData) =>{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        // only process if request is complete i.e if readyState == 4
        if (xhr.readyState !== 4) return;
        if (xhr.status == 200){
            console.log('success', JSON.parse(xhr.responseText));
        } else{
            console.log('error', xhr);
        }
    };

    xhr.open('GET',url, true);
    if  (headerData){
        xhr.setRequestHeader('Authrization','your-unique-id');
    }
    xhr.send();
}

// Post Request
let data = "some Strings";

const postData = (url, data)=>{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState !== 4) return;
        if (xhr.status == 200){
            console.log('success', JSON.parse(xhr.responseText));
        } else{
            console.log('error', xhr);
        }
    };
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");


    xhr.send(data);
}
