function showdeployment() {
    var cpod=document.getElementById("dep_name");
    cpod.style.display="none";
    
    var cpod=document.getElementById("replica_up");
    cpod.style.display="none";

    var cpod=document.getElementById("replica_down");
    cpod.style.display="none";

    var cpod=document.getElementById("sc1");
    cpod.style.display="none";  
    
    var cpod=document.getElementById("sc2");
    cpod.style.display="none";  

    var sl = "kubectl --kubeconfig /kubernetes/admin.conf  get deploy  " 
    var xhr= new XMLHttpRequest();
    //document.write(cm);
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+sl, true);
    xhr.send();
    
    xhr.onload = function(){
    var  output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    } 
}

function scale_up_form() {
    var cpod=document.getElementById("dep_name");
    cpod.style.display="block";
    
    var cpod=document.getElementById("replica_up");
    cpod.style.display="block";

    var cpod=document.getElementById("replica_down");
    cpod.style.display="none";

    var cpod=document.getElementById("sc1");
    cpod.style.display="block";

    var cpod=document.getElementById("sc2");
    cpod.style.display="none";

    
}

function scale_down_form() {
    var cpod=document.getElementById("dep_name");
    cpod.style.display="block";
    
    var cpod=document.getElementById("replica_up");
    cpod.style.display="none";

    var cpod=document.getElementById("replica_down");
    cpod.style.display="block";

    var cpod=document.getElementById("sc1");
    cpod.style.display="none";

    var cpod=document.getElementById("sc2");
    cpod.style.display="block";
}

function scale_up(){
    var i = document.getElementById("nmdep").value
    var j = document.getElementById("rup").value
    var xhr= new XMLHttpRequest();
    //document.write(i);
    //document.write(j);
    //var cm = "kubectl --kubeconfig /kubernetes/admin.conf run b2 --image=vimal13/apache-webserver-php "
    var sl = "kubectl --kubeconfig /kubernetes/admin.conf  scale deployment  " +i+ " --replicas="+j
    //document.write(cm);
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+sl, true);
    xhr.send();
    
    xhr.onload = function(){
    var  output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    } 
}

function scale_down(){
    var i = document.getElementById("nmdep").value
    var j = document.getElementById("rdn").value
    var xhr= new XMLHttpRequest();
    //document.write(i);
    //document.write(j);
    //var cm = "kubectl --kubeconfig /kubernetes/admin.conf run b2 --image=vimal13/apache-webserver-php "
    var sl = "kubectl --kubeconfig /kubernetes/admin.conf  scale deployment  " +i+ " --replicas="+j
    //document.write(cm);
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+sl, true);
    xhr.send();
    
    xhr.onload = function(){
    var  output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    } 
}