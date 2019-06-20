var i = 0; // Start point
	var images = [];
	var time = 100;
	// Image List
	images[0] = 'assets/fireImages/fire_1.png';
	images[1] = 'assets/fireImages/fire_2.png';
	images[2] = 'assets/fireImages/fire_3.png';
	images[3] = 'assets/fireImages/fire_4.png';
  images[4] = 'assets/fireImages/fire_5.png';
  images[5] = 'assets/fireImages/fire_6.png';
  images[6] = 'assets/fireImages/fire_7.png';
  images[7] = 'assets/fireImages/fire_8.png';
  images[8] = 'assets/fireImages/fire_9.png';
  images[9] = 'assets/fireImages/fire_10.png';
  images[10] = 'assets/fireImages/fire_11.png';
  images[11] = 'assets/fireImages/fire_12.png';
  images[12] = 'assets/fireImages/fire_13.png';
  images[13] = 'assets/fireImages/fire_14.png';
  images[14] = 'assets/fireImages/fire_15.png';
  images[15] = 'assets/fireImages/fire_16.png';
  images[16] = 'assets/fireImages/fire_17.png';
  images[17] = 'assets/fireImages/fire_18.png';
  images[18] = 'assets/fireImages/fire_19.png';
  images[19] = 'assets/fireImages/fire_20.png';
  images[20] = 'assets/fireImages/fire_21.png';
  images[21] = 'assets/fireImages/fire_22.png';
  images[22] = 'assets/fireImages/fire_23.png';
  images[23] = 'assets/fireImages/fire_24.png';
  images[24] = 'assets/fireImages/fire_25.png';
  images[25] = 'assets/fireImages/fire_26.png';
  images[26] = 'assets/fireImages/fire_27.png';
  images[11] = 'assets/fireImages/fire_12.png';
  images[11] = 'assets/fireImages/fire_12.png';
  images[27] = 'assets/fireImages/fire_28.png';
  images[28] = 'assets/fireImages/fire_29.png';
  images[29] = 'assets/fireImages/fire_30.png';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];
		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}
		setTimeout("changeImg()", time);
	}

   window.onload = changeImg;
  
   const audio = new Audio();
    audio.src = 'assets/sounds/fire.mp3';
    audio.volume = 1;
    audio.loop = true;
    audio.play();
    

   