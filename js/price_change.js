var price_rim=0;
var price_tyre=0;
var price_muffler=0;	
var price_steering=0;
var price_daq=0;
var price_ecu=0;
var price_damper=0;
var price_dealer=0;
var total=13000;

	
function change_price_rim(rim){
	if(rim==1){
	price_rim=0;}
	if(rim==2){
	price_rim=323;
	}
	if(rim==3){
	price_rim=1926;
	}
	price_dealer=price_damper+price_daq+price_muffler+price_ecu+price_rim+price_steering+price_tyre;
	var element = document.getElementById("cost");
    element.innerHTML = price_dealer;
	
	
}	
function change_price_steering(steering){
	if(steering==1){
	price_steering=0;}
	if(steering==2){
	price_steering=180;}
	if(steering==3){
	price_steering=70;}
	if(steering==4){
	price_steering=850;}
	if(steering==5){
	price_steering=10;}
	if(steering==6){
	price_steering=950;}
	price_dealer=price_damper+price_daq+price_muffler+price_ecu+price_rim+price_steering+price_tyre;
	var element = document.getElementById("cost");
    element.innerHTML = price_dealer;
	
}
function change_price_muffler(muffler){
	if(muffler==1){
	price_muffler=806;}
	if(muffler==2){
	price_muffler=806;
	}
	if(muffler==3){
	price_muffler=806;
	}
	if(muffler==4){
	price_muffler=0;
	}
	price_dealer=price_damper+price_daq+price_muffler+price_ecu+price_rim+price_steering+price_tyre;
	var element = document.getElementById("cost");
    element.innerHTML = price_dealer;
	
	
}	
function change_price_tyre(tyre){
	if(tyre==1){
	price_tyre=0;}
	if(tyre==2){
	price_tyre=0;
	}
	if(tyre==3){
	price_tyre=161;
	}
	price_dealer=price_damper+price_daq+price_muffler+price_ecu+price_rim+price_steering+price_tyre;
	var element = document.getElementById("cost");
    element.innerHTML = price_dealer;
	
	
}
function change_price_daq(daq){
	if(daq==1){
	price_daq=0;}
	if(daq==2){
	price_daq=161;
	}
	if(daq==3){
	price_daq=241;
	}
	if(daq==4){
	price_daq=806;
	}
	if(daq==5){
	price_daq=1613;
	}
	price_dealer=price_damper+price_daq+price_muffler+price_ecu+price_rim+price_steering+price_tyre;
	var element = document.getElementById("cost");
    element.innerHTML = price_dealer;
	
}
function change_price_damper(damper){
	if(damper==1){
	price_damper=0;}
	if(damper==2){
	price_damper=2324;
	}
	if(damper==3){
	price_damper=1824;
	}
	if(damper==4){
	price_damper=2524;
	}
	if(damper==5){
	price_damper=3124;
	}
	price_dealer=price_damper+price_daq+price_muffler+price_ecu+price_rim+price_steering+price_tyre;
	var element = document.getElementById("cost");
    element.innerHTML = price_dealer;
	
	
}
function change_price_ecu(ecu){
	if(ecu==1){
	price_ecu=0;}
	if(ecu==2){
	price_ecu=480;}
	if(ecu==3){
	price_ecu=2865;}
	if(ecu==4){
	price_ecu=3280;}
	if(ecu==5){
	price_ecu=4322;}
	if(ecu==6){
	price_ecu=5738;}
	price_dealer=price_damper+price_daq+price_muffler+price_ecu+price_rim+price_steering+price_tyre;
	var element = document.getElementById("cost");
    element.innerHTML = price_dealer;
	
	
}
function change_price_total(){
	var tax=((total+price_dealer)*12.36)/100;
	tax = Math.round(tax*100)/100;
	var tot=total + price_dealer + tax;
	document.getElementById("tax").innerHTML = tax; 
    document.getElementById("total").innerHTML = (Math.round(tot*100))/100;
}
