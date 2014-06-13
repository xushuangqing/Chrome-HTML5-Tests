function getOriginPicture()
{
    var origin = document.getElementById("origin");
    return origin;
}

function getRadius(width, segment)
{
    var edge = width/segment/2;
    var angle = Math.PI/segment;

    var radius = edge/Math.tan(angle);
    return radius;
}

function createFaces(width, height, radius, segment)
{
    var faces = [];
    var poly = document.getElementById("poly");
    var origin = getOriginPicture();
    var angle = 360/segment;
    for (var i = 0; i < segment; i++) {
        faces[i] = document.createElement("div");
        
        faces[i].className = "face";
        faces[i].style.width = width+"px";
        faces[i].style.height = height+"px";
        faces[i].style.left = (-width/2)+"px";

        var wrapper = document.createElement("div");
        wrapper.className = "wrapper";

        var img = origin.cloneNode(true);
        img.className = "img";
        img.style.clip = "rect(0px "+(width*(i+1))+"px "+height+"px "+(width*i)+"px)";
        img.style.marginLeft = (-width*i)+"px";
        wrapper.appendChild(img);

        faces[i].appendChild(wrapper);

        faces[i].style.webkitTransform = "rotateY("+(angle*i)+"deg) translateZ("+radius+"px)";
        poly.appendChild(faces[i]);
    }
}

function rotation()
{
    var poly = document.getElementById("poly");
    var degree = 0;
    setInterval(function(){
        poly.style.webkitTransform = "rotateY("+degree+"deg)";
        if (degree == 359)
        {
            degree = 0;
        }
        else
        {
            degree+=0.5;
        }
    },20);
}

function onLoad()
{
    var origin = getOriginPicture();
    var segment = 40;

    var radius = getRadius(origin.clientWidth, segment);
    var width = origin.clientWidth/segment;
    var height = origin.clientHeight;

    createFaces(width, height, radius, segment);
    rotation();
}

