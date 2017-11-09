function GenerateToken(){
    let key = document.getElementById('password').value;
    let content = document.getElementById('jsonContent').value;
    
    document.location.href = "/content/"+ key +"&" + content;  
 }