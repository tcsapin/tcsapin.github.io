function picture(){    
    var myURL = document.getElementById('webURL').value;
    if(!myURL.match(/\S/))
    {
      document.getElementById('qr-code').src="qr_img.png";
      document.getElementById('qr-code').style.display='none';
      document.getElementById('qr-url').src="qr-url.png";
      document.getElementById('qr-url').style.display='none';
      console.log("Empty URL")
      return false;
    }
    else{
      document.getElementById('qr-code').src="qr_img.png";
      document.getElementById('qr-code').style.display='block';
      document.getElementById('qr-url').src="qr-url.png";
      document.getElementById('qr-url').style.display='block';
      console.log("Valid URL");
      return true;        
    }      
  }