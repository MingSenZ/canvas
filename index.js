window.onload=function(){
    var canvas=document.querySelector('#canvas');
    if (!canvas.getContext)return;
    var obj=canvas.getContext('2d');
    var arr=[];
    var scale=100;


       setInterval(function(){
           obj.clearRect(0,0,canvas.width,canvas.height);
           for (var i = 0; i < arr.length; i++) {
               arr[i].deg+=20;
               arr[i].y = arr[i].startY - arr[i].deg*Math.PI / 180*circle.A*scale/2 ;
               arr[i].x = arr[i].startX + Math.sin(arr[i].deg*Math.PI / 180) *circle.A*scale;
               if (arr[i].y<=30){
                   arr.splice(i,1);
               }
           }


           for (var i = 0; i <arr.length ; i++) {
               obj.save();
               // obj.fillStyle='rgba('+circle.colorR +','+circle.colorG+','+circle.colorB+',1)';
               obj.fillStyle=`rgba(${arr[i].ColorR},${arr[i].ColorG},${arr[i].ColorB},1)`;
               obj.beginPath();
               obj.arc(arr[i].x,arr[i].y,arr[i].r,0,Math.PI*2);
               obj.fill();
               obj.restore();
           }
       },50)



        setInterval(function(){
            var circle={};
            circle.r=Math.random()*8+3;
            circle.y=canvas.height-circle.r;
            circle.x=Math.random()*canvas.width;
            circle.ColorR=Math.random()*255;
            circle.ColorG=Math.random()*255;
            circle.ColorB=Math.random()*255;
            circle.deg=0;
            circle.A=Math.random()*50;
            circle.startX=circle.x;
            circle.startY=circle.y;


            arr.push(circle);
        },100)

}