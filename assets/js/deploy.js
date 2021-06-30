function showdeploy() {
    var cpod=document.getElementById("dep_img_name");
    cpod.style.display="none";
    
    var cpod=document.getElementById("deploy_name");
    cpod.style.display="none";

    var cpod=document.getElementById("d1");
    cpod.style.display="none";

    var cpod=document.getElementById("d2");
    cpod.style.display="none";

    var cpod=document.getElementById("d3");
    cpod.style.display="none";

    var xhr= new XMLHttpRequest();
    var dp = "kubectl --kubeconfig /kubernetes/admin.conf get deploy"
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+dp, true);
    xhr.send();
    
    xhr.onload = function(){
    var output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    }     
}

function create_deploy_form() {
    var cpod=document.getElementById("dep_img_name");
    cpod.style.display="block";
    
    var cpod=document.getElementById("deploy_name");
    cpod.style.display="block";

    var cpod=document.getElementById("d1");
    cpod.style.display="block";

    var cpod=document.getElementById("d2");
    cpod.style.display="none";

    var cpod=document.getElementById("d3");
    cpod.style.display="none";
    
}

function describe_deploy_form() {
    var cpod=document.getElementById("dep_img_name");
    cpod.style.display="none";
    
    var cpod=document.getElementById("deploy_name");
    cpod.style.display="block";

    var cpod=document.getElementById("d1");
    cpod.style.display="none";

    var cpod=document.getElementById("d2");
    cpod.style.display="block";

    var cpod=document.getElementById("d3");
    cpod.style.display="none";
}

function delete_deploy_form() {
    var cpod=document.getElementById("dep_img_name");
    cpod.style.display="none";
    
    var cpod=document.getElementById("deploy_name");
    cpod.style.display="block";

    var cpod=document.getElementById("d1");
    cpod.style.display="none";

    var cpod=document.getElementById("d2");
    cpod.style.display="none";

    var cpod=document.getElementById("d3");
    cpod.style.display="block";
}



function create_deploy(){
    var i = document.getElementById("dim1").value
    var j = document.getElementById("dn1").value
    var xhr= new XMLHttpRequest();
    //document.write(i);
    //document.write(j);
    //var cm = "kubectl --kubeconfig /kubernetes/admin.conf run b2 --image=vimal13/apache-webserver-php "
    var dp = "kubectl --kubeconfig /kubernetes/admin.conf  create deployment " +j+ " --image="+i
    //document.write(cm);
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+dp, true);
    xhr.send();
    
    xhr.onload = function(){
    var  output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    } 
}

function describe_deploy(){
    var j = document.getElementById("dn1").value
    var xhr= new XMLHttpRequest();
    var dp = "kubectl --kubeconfig /kubernetes/admin.conf describe deploy "+ j
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+dp, true);
    xhr.send();
    
    xhr.onload = function(){
    var output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    } 
}

function del_deploy(){
    var j = document.getElementById("dn1").value
    var xhr= new XMLHttpRequest();
    var dp = "kubectl --kubeconfig /kubernetes/admin.conf delete deploy "+j
    var xhr= new XMLHttpRequest();
    xhr.open("GET","http://192.168.29.247/cgi-bin/back.py?x="+dp, true);
    xhr.send();
    
    xhr.onload = function(){
    var output  = xhr.responseText;
    document.getElementById("pre1").innerHTML=output;
    } 
}
    
    
    