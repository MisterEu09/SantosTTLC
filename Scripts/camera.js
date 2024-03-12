function startVideoFromCamera()
{
navigator.mediaDevices.getUserMedia({video:true}).then(stream=>
    {
    const videoElement = document.querySelector("#video")
videoElement.srcObject = stream
}).catch(error=>{console.log(err)})
    
}
window.addEventListener("DOMContentLoaded", startVideoFromCamera)