function del_env(){
    var z = "kubectl --kubeconfig /kubernetes/admin.conf delete all --all"
    var xhr= new XMLHttpRequest();
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+ z , true);
    xhr.send();
    
    xhr.onload = function(){
    console.log(xhr.status);
    }    
    //alert("deleted successfully");
    
}

