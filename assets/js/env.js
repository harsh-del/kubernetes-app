function upload(){
    AWS.config.region = 'ap-south-1'; // 1. Enter your region
    var bucketRegion= 'ap-south-1';

    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'ap-south-1:e01713c9-d670-4f5f-8eb6-bea07fe8f0f7' // 2. Enter your identity pool
    });
    AWS.config.credentials.get(function(err) {
        if (err) alert(err);
        console.log(AWS.config.credentials);
    });

    var bucketName = 'javascript-yml-buc'; // Enter your bucket name
    var bucket = new AWS.S3({
        params: {
            Bucket: bucketName
        }
    });

    var fileChooser = document.getElementById('file-chooser');
    var file = fileChooser.files[0];
    var button = document.getElementById('upload-button');
    var results = document.getElementById('pre1');
    button.addEventListener('click', function() {

        if (file) {

            results.innerHTML = '';
            var objKey = 'test/' + file.name;
            var params = {
                Key: objKey,
                ContentType: file.type,
                Body: file,
                ACL: 'public-read'
            };
            bucket.putObject(params, function(err, data) {
                if (err) {
                    results.innerHTML = 'ERROR: ' + err;
                } else {
                    listObjs();
                }
            });
        } else {
            results.innerHTML = 'Nothing to upload.';
        }
    }, false);

    function listObjs() {
        var prefix = 'testing';
        bucket.listObjects({
            Prefix: prefix
        }, function(err, data) {
            if (err) {
                results.innerHTML = 'ERROR: ' + err;
            } else {
                var objKeys = "";
                data.Contents.forEach(function(obj) {
                    objKeys += obj.Key + "<br>";
                });
                results.innerHTML = objKeys;
            }
        });
    }
    
    var filenm = file.name;
    //document.write(fileUrl);
    var xhr= new XMLHttpRequest();
    xhr.open("GET","http://192.168.29.247/cgi-bin/file.py?x="+filenm, true);
    xhr.send();
    
    xhr.onload = function(){
    var ot  = xhr.responseText;
    document.getElementById("pre1").innerHTML=ot;
    
    }    
    //alert("deleted successfully");
    
    
}