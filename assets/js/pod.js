function showpods() {
    var cpod=document.getElementById("Image_name");
    cpod.style.display="none";
    
    var cpod=document.getElementById("Pod_name");
    cpod.style.display="none";

    var cpod=document.getElementById("b1");
    cpod.style.display="none";

    var cpod=document.getElementById("b2");
    cpod.style.display="none";

    var cpod=document.getElementById("b3");
    cpod.style.display="none";

    var xhr= new XMLHttpRequest();
    var cm = "kubectl --kubeconfig /kubernetes/admin.conf get pods"
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+cm, true);
    xhr.send();
    
    xhr.onload = function(){
    var output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    }     
}

function create_pod() {
    var cpod=document.getElementById("Image_name");
    cpod.style.display="block";
    
    var cpod=document.getElementById("Pod_name");
    cpod.style.display="block";

    var cpod=document.getElementById("b1");
    cpod.style.display="block";

    var cpod=document.getElementById("b2");
    cpod.style.display="none";

    var cpod=document.getElementById("b3");
    cpod.style.display="none";
    
}

function describe_pod() {
    var cpod=document.getElementById("Image_name");
    cpod.style.display="none";
    
    var cpod=document.getElementById("Pod_name");
    cpod.style.display="block";
    
    
    var cpod=document.getElementById("b1");
    cpod.style.display="none";

    var cpod=document.getElementById("b2");
    cpod.style.display="block";

    var cpod=document.getElementById("b3");
    cpod.style.display="none";
}

function delete_pod() {
    var cpod=document.getElementById("Image_name");
    cpod.style.display="none";
    
    var cpod=document.getElementById("Pod_name");
    cpod.style.display="block";
    
    
    var cpod=document.getElementById("b1");
    cpod.style.display="none";

    var cpod=document.getElementById("b2");
    cpod.style.display="none";

    var cpod=document.getElementById("b3");
    cpod.style.display="block";
}



function create(){
    var i = document.getElementById("em1").value
    var j = document.getElementById("p1").value
    var xhr= new XMLHttpRequest();
    //document.write(i);
    //document.write(j);
    //var cm = "kubectl --kubeconfig /kubernetes/admin.conf run b2 --image=vimal13/apache-webserver-php "
    var cm = "kubectl --kubeconfig /kubernetes/admin.conf  run " +j+ " --image="+i
    document
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+cm, true);
    xhr.send();
    
    xhr.onload = function(){
    var  output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    } 
}

function describe(){
    var j = document.getElementById("p1").value
    var xhr= new XMLHttpRequest();
    var cm = "kubectl --kubeconfig /kubernetes/admin.conf describe pod "+ j
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+cm, true);
    xhr.send();
    
    xhr.onload = function(){
    var output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    } 
}

function del(){
    var j = document.getElementById("p1").value
    var xhr= new XMLHttpRequest();
    var cm = "kubectl --kubeconfig /kubernetes/admin.conf delete pod "+j
    var xhr= new XMLHttpRequest();
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+cm, true);
    xhr.send();
    
    xhr.onload = function(){
    var output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    } 
}
    
    
    