var pictureSource;
var destinationType;

var btnImage = null;



window.onload = function()
{
    btnImage = document.getElementById("btnImage");
    btnImage.addEventListener("click", capturePhoto, false);
    document.body.style.backgroundColor = "#000";

    document.addEventListener("deviceready",onDeviceReady,false);
};

var onDeviceReady = function()
{
    pictureSource   = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
    document.body.style.backgroundColor = "#00F";
};

var onPhotoSuccess = function(imageData)
{
    var smallImage = document.getElementById("smallImage");
    smallImage.style.display = "block";
    smallImage.src = "data:image/jpeg;base64," + imageData;
};

var onPhotoFileSuccess = function(imageData)
{
    var smallImage = document.getElementById('smallImage');
    smallImage.style.display = 'block';
    smallImage.src = imageData;
};

var capturePhoto = function()
{
    var options =
    {
        quality : 50,
        destinationType : Camera.DestinationType.DATA_URL,
        sourceType : Camera.PictureSourceType.CAMERA,
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: window.innerWidth,
        targetHeight: window.innerHeight - 20,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };
    navigator.camera.getPicture(onPhotoSuccess, onFail, options);
};

var onFail = function(message)
{
    console.log(message);
};
