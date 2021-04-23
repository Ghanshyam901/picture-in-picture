const videEle = document.getElementById('video');
const button = document.getElementById('button');


async function selectMedia(){
    try{
        const medaiStream = await navigator.mediaDevices.getDisplayMedia();
        videEle.srcObject = medaiStream;
        videEle.onloadedmetadata = () =>{
            videEle.play();
        }; 
    }catch(error){
            console.log('error found in stream',error);
    }
}

button.addEventListener('click',async () => {
    button.disabled = true;

    await videEle.requestPictureInPicture();
    
    button.disabled = false;
});


selectMedia();