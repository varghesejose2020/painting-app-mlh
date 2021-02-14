const canvas =document.getElementById("canvas");
    const etx=canvas.getContext("2d");
    etx.fillStyle="white";
    etx.fillRect(0,0,500,500);


    etx.fillStyle="black";


    let brushColor="black";
    let brushSize=3;

    document.getElementById("color").addEventListener("change",function(){
        brushColor=this.value;

    });
    document.getElementById("thickness").addEventListener("change",function(){
        brushSize=this.value;
        
    });

    let painting=false;



    function paintingStart(e){
        painting=true;
        draw(e);

    }


    function paintingEnd(e){
        painting=false;
        etx.beginPath();
        
    }
    function draw(e){
        if(painting==false) return;
        let x=e.clientX;
        let y=e.clientY-canvas.offsetTop;


        etx.lineWidth= brushSize;
        etx.lineCap="round";
        etx.lineTo(x,y);
        etx.strokeStyle=brushColor;
        etx.stroke();
    }


    canvas.addEventListener("mousedown",paintingStart);
    canvas.addEventListener("mouseup",paintingEnd);

    canvas.addEventListener("mousemove",draw);