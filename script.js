window.onload = function(){
    let zodis = "java";
    let atvirksciai = ZodziaiAtvirksciai(zodis);
    console.log(atvirksciai);

}
function ZodziaiAtvirksciai(zodis){
    return zodis[3] + zodis[2] +zodis[1] + zodis[0];
}