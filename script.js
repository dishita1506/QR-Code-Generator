var text=document.getElementById("text");
var sizes=document.getElementById("select-size");
var generate=document.getElementById("generate");
var downloadbutton=document.getElementById("downloadbtn");
var qrbody=document.querySelector(".qrbody");


//GENERATE QR CODE

let size=sizes.value;
//console.log(size);
generate.addEventListener('click',(e)=>{
    e.preventDefault();
    if(text.value.length>0){
    generateQR();
    }
    else{
        alert("Please enter the text/URL")
    }
});

sizes.addEventListener('change',(e)=>{
  size=e.target.value;
  generateQR();
})
function generateQR(){
    qrbody.innerHTML="";
    new QRCode(qrbody,{
        text:text.value,
        height:size,
        width:size,
        colorLight:"white",
        colorDark:"black"
    });
}

//DOWNLOAD QR CODE


downloadbutton.addEventListener('click', ()=>{
    let img = document.querySelector('.qrbody img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadbutton.setAttribute("href", imgAtrr);
    }
    else{
        downloadbutton.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }

    qrbody.innerHTML='';
});
