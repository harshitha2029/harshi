function collOfImg()
{
    var allImgTag=document.images;
    for(i=0;i<=allImgTag.length;i++)
    {
        allImgTag[i].src=`${i}.jpg`
    }
}
collOfImg()
function bigWindow(imgurl)
{
    document.getElementById("imgContainer").style.backgroundImage=`url(${imgurl})`
}