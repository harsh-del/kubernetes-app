function showservices() {
    var cpod=document.getElementById("service_name");
    cpod.style.display="none";
    
    var cpod=document.getElementById("type_name");
    cpod.style.display="none";

    var cpod=document.getElementById("deployment_name");
    cpod.style.display="none";

    var cpod=document.getElementById("port_no");
    cpod.style.display="none";
    
    var cpod=document.getElementById("ser1");
    cpod.style.display="none";

    var cpod=document.getElementById("ser2");
    cpod.style.display="none";

    var cpod=document.getElementById("ser3");
    cpod.style.display="none"; 
    
    var xhr= new XMLHttpRequest();
    var ser = "kubectl --kubeconfig /kubernetes/admin.conf get svc"
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+ser, true);
    xhr.send();
    
    xhr.onload = function(){
    var output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    }     
    
}

function expose_service_form() {
    var cpod=document.getElementById("deployment_name");
    cpod.style.display="block";
    
    var cpod=document.getElementById("type_name");
    cpod.style.display="block";

    var cpod=document.getElementById("port_no");
    cpod.style.display="block";

    var cpod=document.getElementById("ser1");
    cpod.style.display="block";

    var cpod=document.getElementById("ser2");
    cpod.style.display="none";

    var cpod=document.getElementById("ser3");
    cpod.style.display="none";

    
}

function describe_service_form() {
    var cpod=document.getElementById("service_name");
    cpod.style.display="block";
    
    var cpod=document.getElementById("type_name");
    cpod.style.display="none";

    var cpod=document.getElementById("deployment_name");
    cpod.style.display="none";

    var cpod=document.getElementById("port_no");
    cpod.style.display="none";
    
    var cpod=document.getElementById("ser1");
    cpod.style.display="none";

    var cpod=document.getElementById("ser2");
    cpod.style.display="block";

    var cpod=document.getElementById("ser3");
    cpod.style.display="none";
}

function delete_service_form() {
    var cpod=document.getElementById("service_name");
    cpod.style.display="block";
    
    var cpod=document.getElementById("type_name");
    cpod.style.display="none";

    var cpod=document.getElementById("deployment_name");
    cpod.style.display="none";

    var cpod=document.getElementById("port_no");
    cpod.style.display="none";
    
    var cpod=document.getElementById("ser1");
    cpod.style.display="none";

    var cpod=document.getElementById("ser2");
    cpod.style.display="none";

    var cpod=document.getElementById("ser3");
    cpod.style.display="block";
} 


function expose_service(){
    var i = document.getElementById("dyp").value
    var j = document.getElementById("ld").value
    var m = document.getElementById("pt").value
    var xhr= new XMLHttpRequest();
    //document.write(i);
    //document.write(j);
    //var cm = "kubectl --kubeconfig /kubernetes/admin.conf run b2 --image=vimal13/apache-webserver-php "
    var ser = "kubectl --kubeconfig /kubernetes/admin.conf expose deployment "+i+ " --type="+j+ " --port=" + m 
    //document.write(cm);
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+ser, true);
    xhr.send();
    
    xhr.onload = function(){
    var  output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    } 
}

function describe_service(){
    var j = document.getElementById("serv").value
    var xhr= new XMLHttpRequest();
    var ser= "kubectl --kubeconfig /kubernetes/admin.conf describe svc "+ j
    //document.write(ser);
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+ser, true);
    xhr.send();
    
    xhr.onload = function(){
    var output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    } 
}

function del_service(){
    var j = document.getElementById("serv").value
    var xhr= new XMLHttpRequest();
    var ser= "kubectl --kubeconfig /kubernetes/admin.conf delete svc "+ j
    //document.write(ser);
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+ser, true);
    xhr.send();
    
    xhr.onload = function(){
    var output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    }  
}
    