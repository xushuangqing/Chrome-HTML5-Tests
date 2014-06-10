var bitmapOfNumbers = [238, 72, 186, 218, 92, 214, 246, 74, 254, 222];

function numberChange(bitmap)
{
    for (var i = 1; i < 8; i++) {
        if (bitmap&(1<<i)) 
        {
            lightUp(i, "red");
        }
        else
        {
            lightUp(i, "transparent");
        }
    }
}

function lightUp(i, color)
{
    var cube = document.getElementById(i);
    var faces = cube.children;
    console.log(faces);
    for (var i = 0; i < faces.length; i++) {
        faces[i].style.backgroundColor = color;
        faces[i].style.borderTopColor = color;
        faces[i].style.borderBottomColor = color;
    }
}

function time()
{
    var num = 0;
    var number = document.getElementById("number");
    setInterval(function(){
        numberChange(bitmapOfNumbers[num]);
        number.style.webkitTransform = "rotateY("+num*36+"deg)";
        if (num == 9)
        {
            num = 0;
        }
        else
        {
            num++;
        }
    },1000);
}

function createOneFace()
{
    var face = document.createElement("div");
    face.className = "face";
    return face;
}

function createFrontFace(length, height)
{
    var frontFace = createOneFace();
    frontFace.style.width = length+"px";
    frontFace.style.height = height+"px";
    
    var triangleUp = document.createElement("div");
    triangleUp.className = "triangle";
    triangleUp.style.top = (-length/2)+"px";
    triangleUp.style.borderLeft = (length/2)+"px solid transparent";
    triangleUp.style.borderRight = (length/2)+"px solid transparent";
    triangleUp.style.borderBottom = (length/2)+"px solid";
    triangleUp.style.borderBottomColor = "inherit";

    var main = document.createElement("div");
    main.className = "main";
    main.style.width = length+"px";
    main.style.height = height+"px";
    main.style.top = (-length/2)+"px";

    var triangleDown = document.createElement("div");
    triangleDown.className = "triangle";
    triangleDown.style.top = (-length/2)+"px";
    triangleDown.style.borderLeft = (length/2)+"px solid transparent";
    triangleDown.style.borderRight = (length/2)+"px solid transparent";
    triangleDown.style.borderTop = (length/2)+"px solid";
    triangleDown.style.borderTopColor = "inherit";

    frontFace.appendChild(triangleUp);
    frontFace.appendChild(main);
    frontFace.appendChild(triangleDown);

    return frontFace;
}

function createInclinedPlane(length, width)
{
    var inclinedPlane = createOneFace();
    inclinedPlane.className += " inclinedPlane";
    inclinedPlane.style.width = length/Math.sqrt(2)+"px";
    inclinedPlane.style.height = width+"px";
    return inclinedPlane;
}

function createSideFace(width, height)
{
    var sideFace = createOneFace();
    sideFace.className += " sideFace";
    sideFace.style.width = width+"px";
    sideFace.style.height = height+"px";
    return sideFace;
}

function onLoad()
{

    var width = 50, height = 100, length = 60;
    var gap = 20;

    var poly1 = createOnePoly(length, height, width);
    poly1.style.webkitTransform = "rotate(90deg)";
    poly1.id = "1";
    document.getElementById("number").appendChild(poly1);

    var poly2 = createOnePoly(length, height, width);
    poly2.style.webkitTransform = "translateY("+(height/2+length/2+gap/2)+"px) translateX("+(-length/2-height/2-gap/2)+"px)";
    poly2.id = "2";
    document.getElementById("number").appendChild(poly2);

    var poly3 = createOnePoly(length, height, width);
    poly3.style.webkitTransform = "translateY("+(height/2+length/2+gap/2)+"px) translateX("+(length/2+height/2+gap/2)+"px)";
    poly3.id = "3";
    document.getElementById("number").appendChild(poly3);

    var poly4 = createOnePoly(length, height, width);
    poly4.style.webkitTransform = "translateY("+(height+length+gap)+"px) rotate(90deg)";
    poly4.id = "4";
    document.getElementById("number").appendChild(poly4);

    var poly5 = createOnePoly(length, height, width);
    poly5.style.webkitTransform = "translateY("+(3*height/2+3*length/2+3*gap/2)+"px) translateX("+(-length/2-height/2-gap/2)+"px)";
    poly5.id = "5";
    document.getElementById("number").appendChild(poly5);

    var poly6 = createOnePoly(length, height, width);
    poly6.style.webkitTransform = "translateY("+(3*height/2+3*length/2+3*gap/2)+"px) translateX("+(length/2+height/2+gap/2)+"px)";
    poly6.id = "6";
    document.getElementById("number").appendChild(poly6);

    var poly7 = createOnePoly(length, height, width);
    poly7.style.webkitTransform = "translateY("+(height*2+length*2+gap*2)+"px) rotate(90deg)";
    poly7.id = "7";
    document.getElementById("number").appendChild(poly7);

    time();
}


function createOnePoly(length, height, width)
{
    var poly = document.createElement("div");
    poly.className = "cube";
    poly.style.height = height+"px";
    poly.style.width = length+"px";

    var frontFace = createFrontFace(length, height);
    frontFace.style.webkitTransform = "translateZ("+(width/2)+"px)";
    
    var backFace = createFrontFace(length, height);
    backFace.style.webkitTransform = "translateZ("+(-width/2)+"px)";

    poly.appendChild(frontFace);
    poly.appendChild(backFace);

    var inclinedPlane1 = createInclinedPlane(length, width);
    inclinedPlane1.style.webkitTransform = "translateX("+(length/4-length/2/Math.sqrt(2))+"px) translateY("+(-length/4-width/2)+"px) rotateZ(-45deg) rotateX(90deg)";

    var inclinedPlane2 = createInclinedPlane(length, width);
    inclinedPlane2.style.webkitTransform = "translateX("+(length*3/4-length/2/Math.sqrt(2))+"px) translateY("+(-length/4-width/2)+"px) rotateZ(45deg) rotateX(90deg)";

    var inclinedPlane3 = createInclinedPlane(length, width);
    inclinedPlane3.style.webkitTransform = "translateX("+(length*3/4-length/2/Math.sqrt(2))+"px) translateY("+(length/4+height-width/2)+"px) rotateZ(-45deg) rotateX(90deg)";

    var inclinedPlane4 = createInclinedPlane(length, width);
    inclinedPlane4.style.webkitTransform = "translateX("+(length/4-length/2/Math.sqrt(2))+"px) translateY("+(length/4+height-width/2)+"px) rotateZ(45deg) rotateX(90deg)";

    poly.appendChild(inclinedPlane1);
    poly.appendChild(inclinedPlane2);
    poly.appendChild(inclinedPlane3);
    poly.appendChild(inclinedPlane4);

    var sideFace1 = createSideFace(width, height);
    sideFace1.style.webkitTransform = "translateX("+(-width/2)+"px) rotateY(90deg)";

    var sideFace2 = createSideFace(width, height);
    sideFace2.style.webkitTransform = "translateX("+(length-width/2)+"px) rotateY(90deg)";

    poly.appendChild(sideFace1);
    poly.appendChild(sideFace2);

    return poly;
}