let graph = [[0,3,6,999,999,999],[3,0,2,5,999,999],[6,2,0,3,2,999],[999,5,3,0,6,9],[999,999,2,6,0,5],[999,999,999,9,5,0]];
let temp=[0,999,999,999,999,999];
let visited= [false,false,false,false,false,false];
//let tem=0;
let v=6;
function dj(){
    const canvas=document.getElementById('canvas');
    const ctx=canvas.getContext('2d');
    //let graph = [[0,3,6,999,999,999],[3,0,2,5,999,999],[6,2,0,3,2,999],[999,5,3,0,6,9],[999,999,2,6,0,5],[999,999,999,9,5,0]];
    dijktas();
    shortestpath();
}
function dijktas(){
    //let temp=[0,999,999,999,999,999];
    for(let i=0;i<6;i++){
        //update_bar(bar_div[i],"green",bar_len[i]);
        let tempp=nextdest();
        visited[tempp]=true;
        //canvasfunction(tempp);
        updatevalues(tempp);
    }
}
function updatevalues(z){
    //tem=0;
    //let j=0;
    //for(let z=0;z<v;z++){
        for(let j=0;j<6;j++){
        if(visited[z]==true && temp[j]>temp[z]+graph[z][j]){
            temp[j]=temp[z]+graph[z][j];
            canvasfunction(z);
            update_bar(bar_div[j],"green",temp[j]);
            update_bar(bar_div[j],"skyblue",temp[j]);
        }
    }
    normalfunction(z);
    //}
}
function nextdest(){
    let minn=999;
    let tempp=0;
    for(let i=0;i<v;i++){
        if(visited[i]==false && temp[i]<minn){
            minn=temp[i];
            tempp=i;
        }
    }
    return tempp;
}
//ctx.beginPath();
   // ctx.fillStyle="red"
    //ctx.arc(50, 200, 20, 0, 2 * Math.PI);
   // ctx.fill();
   function canvasfunction(i){
       switch(i){
           case 0:
           {
            cleartimeout=setTimeout(()=>{
            ctx.beginPath();//1st circle
            ctx.fillStyle = "green";
            ctx.arc(50, 200, 20, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.strokeStyle="yellow";
            ctx.moveTo(50,190);
            ctx.lineTo(50,210);
            ctx.stroke();
            ctx.beginPath();//1st node lines
            ctx.strokeStyle = "#cccc00";
            ctx.moveTo(64,214);//1st line
            ctx.lineTo(136,286);
            ctx.moveTo(98,132);
        ctx.lineTo(106,132);
        ctx.lineTo(106,140);
        ctx.lineTo(98,140);
        ctx.moveTo(106,136);
        ctx.lineTo(98,136);//3(1,2)
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = "#cccc00";
            ctx.moveTo(106,260);
        ctx.lineTo(98,260);
        ctx.lineTo(98,268);
        ctx.lineTo(106,268);
        ctx.lineTo(106,264);
        ctx.lineTo(98,264);//6
            ctx.moveTo(64,186);//2nd line
            ctx.lineTo(136,114);
            ctx.stroke();
            },totdelay+=delay);
           }
           break;
           case 1:
           {
            cleartimeout=setTimeout(()=>{
                ctx.beginPath();//2nd circle
                ctx.fillStyle = "green";
                ctx.arc(150, 100, 20, 0, 2 * Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.strokeStyle="yellow";
                ctx.moveTo(145,90);
                ctx.lineTo(155,90);
                ctx.lineTo(155,100);
                ctx.lineTo(145,100);
                ctx.lineTo(145,110);
                ctx.lineTo(155,110);
                ctx.stroke();
                ctx.beginPath();//2nd node lines
                ctx.strokeStyle = "#cccc00";
                ctx.moveTo(156,196);
        ctx.lineTo(164,196);
        ctx.lineTo(164,200);
        ctx.lineTo(156,200);
        ctx.lineTo(156,204);
        ctx.lineTo(164,204);//2(2,3)
        ctx.moveTo(254,86);
        ctx.lineTo(246,86);
        ctx.lineTo(246,90);
        ctx.lineTo(254,90);
        ctx.lineTo(254,94);
        ctx.lineTo(246,94);//5(2,4)
                ctx.moveTo(150,120);
                ctx.lineTo(150,280);
                ctx.moveTo(170,100);
                ctx.lineTo(330,100);
                ctx.stroke();
            },totdelay+=delay);
           }
           break;
           case 2:
           {
            cleartimeout=setTimeout(()=>{
                ctx.beginPath();//3rd circle
                ctx.fillStyle = "green";
                ctx.arc(150, 300, 20, 0, 2 * Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.strokeStyle = "yellow";
                ctx.moveTo(145,290);
                ctx.lineTo(155,290);
                ctx.lineTo(155,310);
                ctx.lineTo(145,310);
                ctx.moveTo(155,300);
                ctx.lineTo(145,300);
                ctx.stroke();

                ctx.beginPath();//3rd node lines
                ctx.strokeStyle = "#cccc00";
                ctx.moveTo(246,306);
        ctx.lineTo(254,306);
        ctx.lineTo(254,310);
        ctx.lineTo(246,310);
        ctx.lineTo(246,314);
        ctx.lineTo(254,314);//2(3,5)
                ctx.moveTo(170,300);
                ctx.lineTo(330,300);
                ctx.stroke();
            },totdelay+=delay);
           }
           break;
           case 4:
           {
            cleartimeout=setTimeout(()=>{
            ctx.beginPath();//5th circle
            ctx.fillStyle = "green";
            ctx.arc(350, 300, 20, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.strokeStyle= "yellow";
            ctx.moveTo(355,290);
            ctx.lineTo(345,290);
            ctx.lineTo(345,300);
            ctx.lineTo(355,300);
            ctx.lineTo(355,310);
            ctx.lineTo(345,310);
            ctx.stroke();
            ctx.beginPath();
                ctx.strokeStyle= "#cccc00";
                ctx.moveTo(410,260);
        ctx.lineTo(402,260);
        ctx.lineTo(402,264);
        ctx.lineTo(410,264);
        ctx.lineTo(410,268);
        ctx.lineTo(402,268);//5(6,5)
                ctx.moveTo(364,286);
                ctx.lineTo(436,214);
                ctx.stroke();
            },totdelay+=delay);
           }
           break;
       }
   }
   function normalfunction(i){
       switch(i){
           case 0:
           {
            cleartimeout=setTimeout(()=>{
            ctx.beginPath();
            ctx.strokeStyle= "black";
            ctx.moveTo(98,132);
        ctx.lineTo(106,132);
        ctx.lineTo(106,140);
        ctx.lineTo(98,140);
        ctx.moveTo(106,136);
        ctx.lineTo(98,136);//3(1,2)
        ctx.moveTo(106,260);
        ctx.lineTo(98,260);
        ctx.lineTo(98,268);
        ctx.lineTo(106,268);
        ctx.lineTo(106,264);
        ctx.lineTo(98,264);//6
            ctx.moveTo(64,214);//1st line
            ctx.lineTo(136,286);
            ctx.moveTo(64,186);//2nd line
            ctx.lineTo(136,114);
            ctx.stroke();
            },totdelay+=delay);
           }
           break;
           case 1:
           {
            cleartimeout=setTimeout(()=>{
                ctx.beginPath();//2nd node lines
                ctx.strokeStyle = "black";
                ctx.moveTo(156,196);
        ctx.lineTo(164,196);
        ctx.lineTo(164,200);
        ctx.lineTo(156,200);
        ctx.lineTo(156,204);
        ctx.lineTo(164,204);//2(2,3)
        ctx.moveTo(254,86);
        ctx.lineTo(246,86);
        ctx.lineTo(246,90);
        ctx.lineTo(254,90);
        ctx.lineTo(254,94);
        ctx.lineTo(246,94);//5(2,4)
                ctx.moveTo(150,120);
                ctx.lineTo(150,280);
                ctx.moveTo(170,100);
                ctx.lineTo(330,100);
                ctx.stroke();
            },totdelay+=delay);
           }
           break;
           case 2:
           {
            cleartimeout=setTimeout(()=>{
            ctx.beginPath();//3rd node lines
            ctx.strokeStyle = "black";
            ctx.moveTo(246,306);
        ctx.lineTo(254,306);
        ctx.lineTo(254,310);
        ctx.lineTo(246,310);
        ctx.lineTo(246,314);
        ctx.lineTo(254,314);//2(3,5)
            ctx.moveTo(164,286);
            ctx.lineTo(336,114);
            ctx.moveTo(170,300);
            ctx.lineTo(330,300);
            ctx.stroke();
            },totdelay+=delay);
           }
           break;
           case 3:
           {
            cleartimeout=setTimeout(()=>{
            ctx.beginPath();//4rth circle
            ctx.fillStyle = "green";
            ctx.arc(350, 100, 20, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.strokeStyle= "yellow";
            ctx.moveTo(350,90);
            ctx.lineTo(345,100);
            ctx.lineTo(355,100);
            ctx.moveTo(350,90);
            ctx.lineTo(350,110);
            ctx.stroke();
            },totdelay+=delay);
           }
           break;
           case 4:
           {
            cleartimeout=setTimeout(()=>{
                ctx.beginPath();
                ctx.strokeStyle= "black";
                ctx.moveTo(410,260);
        ctx.lineTo(402,260);
        ctx.lineTo(402,264);
        ctx.lineTo(410,264);
        ctx.lineTo(410,268);
        ctx.lineTo(402,268);//5(6,5)
                ctx.moveTo(364,286);
                ctx.lineTo(436,214);
                ctx.stroke();
            },totdelay+=delay);
           }
           break;
           case 5:
           {
            cleartimeout=setTimeout(()=>{
            ctx.beginPath();//6th circle
            ctx.fillStyle = "green";
            ctx.arc(450, 200, 20, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.strokeStyle="yellow";
            ctx.moveTo(455,190);
            ctx.lineTo(445,190);
            ctx.lineTo(445,210);
            ctx.lineTo(455,210);
            ctx.lineTo(455,200);
            ctx.lineTo(445,200);
            ctx.stroke();
            },totdelay+=delay);
           }
       }
   }
   function shortestpath()
   {
    cleartimeout=setTimeout(()=>{
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.moveTo(98,132);
        ctx.lineTo(106,132);
        ctx.lineTo(106,140);
        ctx.lineTo(98,140);
        ctx.moveTo(106,136);
        ctx.lineTo(98,136);//3(1,2)

        ctx.moveTo(156,196);
        ctx.lineTo(164,196);
        ctx.lineTo(164,200);
        ctx.lineTo(156,200);
        ctx.lineTo(156,204);
        ctx.lineTo(164,204);//2(2,3)

        ctx.moveTo(246,306);
        ctx.lineTo(254,306);
        ctx.lineTo(254,310);
        ctx.lineTo(246,310);
        ctx.lineTo(246,314);
        ctx.lineTo(254,314);//2(3,5)

        ctx.moveTo(410,260);
        ctx.lineTo(402,260);
        ctx.lineTo(402,264);
        ctx.lineTo(410,264);
        ctx.lineTo(410,268);
        ctx.lineTo(402,268);//5(6,5)

    ctx.moveTo(64,186);//2nd line
    ctx.lineTo(136,114);
    ctx.moveTo(150,120);
    ctx.lineTo(150,280);
    ctx.moveTo(170,300);
    ctx.lineTo(330,300);
    ctx.moveTo(364,286);
    ctx.lineTo(436,214);
    ctx.stroke();
    },totdelay+=delay);
   }