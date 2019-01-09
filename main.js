var data;


//document.write("stock ID");
var select = document.getElementById("selectNumber"); 

function addImage(){
    
    var strUser = select.options[select.selectedIndex].text;
    //console.log(strUser);
    //My first paragraph.
    //document.write();
    //document.getElementById("demo").innerHTML = 5 + 6;
    var line="<h2>Trancations:</h2>"+data[select.selectedIndex][1].toString()+"<br>"+" <h2>ROI:</h2>"+data[select.selectedIndex][2].toString()+"<br>"+" <h2>Win Rate:</h2>"+data[select.selectedIndex][3].toString();
    var image=document.getElementById("img").innerHTML = "<img src='"+strUser+".jpg' style='position:absolute;top:80px'/>";
    var line01 = document.getElementById("detail").innerHTML = "<p><br>"+line+"</p>"; 
    //This will overwrite previous image
    
}
$.ajax({
    url: "id.csv",
    async: false,
    success: function (csvd) {
        data = $.csv.toArrays(csvd);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete 
    }
});
for(var i=1;i<data.length;i++){
        
        var opt=Object.values(data[i])[0];
        var el= document.createElement("option");
        el.textContent=opt;
        el.value=opt;
        select.appendChild(el);
}

// d3.csv("id.csv", function(data) {
//     T=data;
//     datap(data);
    
    
    
//     //console.log(data[0].id);
// });

// function datap(data){
//     for(var i=0;i<data.length;i++){
//         //T.push(i.toString());
//         //T.push(Object.values(data[i])[1]);
//         //R.push(Object.values(data[i])[2]);
//         //W.push(Object.values(data[i])[3]);
//         //console.log(Object.values(data[i])[0]);
//         var opt=Object.values(data[i])[0];
//         var el= document.createElement("option");
//         el.textContent=opt;
//         el.value=opt;
//         select.appendChild(el);
//     }
// }

//console.log(T[8]);
console.log(data);



var options = ["1", "2", "3", "4", "5"]; 
console.log(options);
/*
for(var i=0;i<arr.length;i++){
    var opt=arr[i];
    var el= document.createElement("option");
    el.textContent=opt;
    el.value=opt;
    select.appendChild(el);
}
*/