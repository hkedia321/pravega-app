function change_text_rim(rim){
    if(rim==1){
	 var image = document.getElementById('component');
     image.src ='images/components/rims/al.jpg';
	 document.getElementById("component_rim").innerHTML = "OZ-Aluminium";
	 document.getElementById("info").innerHTML = "OZ-Aluminium";
	 document.getElementById("info_1").innerHTML = "Material-Aluminium";
	 }
	 if(rim==2){
     var image = document.getElementById('component');
     image.src ='images/components/rims/mg.jpg';
     document.getElementById("component_rim").innerHTML = "OZ-Magnesium";
	 document.getElementById("info").innerHTML = "OZ-Magnesium";
	 document.getElementById("info_1").innerHTML = "Material-Magnesium";
	 }
	 if(rim==3){
	var image = document.getElementById('component');
     image.src ='images/components/rims/cf.jpg';	 
     document.getElementById("component_rim").innerHTML = "Carbon Fibre";
	 document.getElementById("info").innerHTML = "Carbon Fibre";
	 document.getElementById("info_1").innerHTML = "Material-Carbon Fibre";
	 }
	 }
function change_text_steering(steering){
    if(steering==1){
	 var image = document.getElementById('component');
     image.src ='images/components/steering/Sparco-R325.jpg';
	 document.getElementById("component_steering").innerHTML = "Sparco-R 325";
	 document.getElementById("info").innerHTML = "Sparco-R 325";
	 document.getElementById("info_1").innerHTML = "Sparco steering wheels are designed to improve grip and comfort for driving precision. Available in different diameters, depths, and materials which will satisfy every driving situation from street to track.<br />Diameter - 350mm<br />Dish (depth front to back) - 95mm<br/>Cover Material - Suede or Leather<br />Yellow leather centering stripe";
	 }
    if(steering==2){
     var image = document.getElementById('component');
     image.src ='images/components/steering/Sparco-Nascar.jpg';
	 document.getElementById("component_steering").innerHTML = "Sparco-Nascar";
	 document.getElementById("info").innerHTML = "Sparco-Nascar";
	 document.getElementById("info_1").innerHTML = "Specifically designed for the unique demands of NASCAR the NASCAR steering wheel has a different hub pattern than the traditional 6 bolt Sparco pattern. Covered in durable suede for superior grip and comfort. The NASCAR has a removable center pad.Designed for NASCAR<br />3 Sizes: 330mm,380mm and 406mm.<br/>Dish (depth front to back) - 95mm.<br />Cover Material - Suede.<br/>Removable center pad";
	 }
	 if(steering==3){
     var image = document.getElementById('component');
     image.src ='images/components/steering/Sparco-P260.jpg';
	 document.getElementById("component_steering").innerHTML = "Sparco-P 260";
	 document.getElementById("info").innerHTML = "Sparco-P 260";
	 document.getElementById("info_1").innerHTML = "Sparco steering wheels are designed to improve grip and comfort for driving precision. Available in different diameters, depths, and materials which will satisfy every driving situation from street to track.Designed for open wheel applications.<br />Diameter - 260mm.<br />Dish (depth front to back) - Flat.<br />Cover Material - Suede.<br/>Flat Bottom";
	 }
	 if(steering==4){
     var image = document.getElementById('component');
     image.src ='images/components/steering/Sparco-385.jpg';
	 document.getElementById("component_steering").innerHTML = "Sparco-385";
	 document.getElementById("info").innerHTML = "Sparco-385";
	 document.getElementById("info_1").innerHTML = "The Carbon 385 weighs in at an unbelievable 385 grams, ½ the weight of a comparable wheel. The 385 is 100% Carbon Fiber with solid center spokes and a hollow core wheel rim.100% Carbon Fiber Construction<br />385 Grams<br />Diameter - 330mm.<br />Dish (depth front to back) - 30mm.<br />Cover Material - Suede.<br />Gloss center finish.<br />Raw center finish available by special order.";
}
	 if(steering==5){
	 var image = document.getElementById('component');
     image.src ='images/components/steering/Sparco-P270.jpg';
     document.getElementById("component_steering").innerHTML = "Sparco-P 270";
	 document.getElementById("info").innerHTML = "Sparco-P 270";
	 document.getElementById("info_1").innerHTML = "Sparco steering wheels are designed to improve grip and comfort for driving precision. Available in different diameters, depths, and materials which will satisfy every driving situation from street to track.Designed for open wheel applications<br />Diameter - 270mm.<br />Dish (depth front to back) - Flat.<br />Cover Material - Suede";
	 }
	 if(steering==6){
	 var image = document.getElementById('component');
     image.src ='images/components/steering/carbon.jpg';
	 document.getElementById("component_steering").innerHTML = "custom";
	 document.getElementById("info").innerHTML = "Custom";
	 document.getElementById("info_1").innerHTML = "100% carbon fibre. Custom made according to your comfort.";
	 }
	 }	 
function change_text_muffler(muffler){
    if(muffler==1){
	var image = document.getElementById('component');
     image.src ='images/components/muffler/Akrapovic_1.png';
	document.getElementById("component_muffler").innerHTML = "Sound-Akrapovic 1";
	 document.getElementById("info").innerHTML = "Sound-Akrapovic 1";
	 document.getElementById("info_1").innerHTML = "Provides unaltered engine growl with minimum loss in power and torque.";
	 }
	if(muffler==2){
	var image = document.getElementById('component');
    image.src ='images/components/muffler/Akrapovic_2.jpg';
	document.getElementById("component_muffler").innerHTML = "Sound-Akrapovic 2";
	 document.getElementById("info").innerHTML = "Sound-Akrapovic 2";
	 document.getElementById("info_1").innerHTML = "Provides unaltered engine growl with minimum loss in power and torque.";
	 }
	if(muffler==3){
	var image = document.getElementById('component');
     image.src ='images/components/muffler/Akrapovic_3.png';
	document.getElementById("component_muffler").innerHTML = "Sound-Akrapovic 3";
	 document.getElementById("info").innerHTML = "Sound-Akrapovic 3";
	 document.getElementById("info_1").innerHTML = "Provides unaltered engine growl with minimum loss in power and torque.";
	 }
	 if(muffler==4){
	var image = document.getElementById('component');
     image.src ='images/components/muffler/custom.jpg';
	document.getElementById("component_muffler").innerHTML = "Custom";
	 document.getElementById("info").innerHTML = "Custom";
	 document.getElementById("info_1").innerHTML = "Designed and manufactured inhouse to extract maximum performance out of the engine by minimizing back pressure.";
	 }
	 }
function change_text_tyre(tyre){
    if(tyre==1){
		var image = document.getElementById('component');
     image.src ='images/components/tyre/goodyear_tyre.jpg';
	  var tyre = document.getElementById('tyre');
	  tyre.src ='images/components/tyre/goodyear.png';
		document.getElementById("component_tyre").innerHTML = "GoodYear";
	 document.getElementById("info").innerHTML = "GoodYear";
	 document.getElementById("info_1").innerHTML = "";
	 }
	 if(tyre==2){
		 var tyre = document.getElementById('tyre');
	  tyre.src ='images/components/tyre/continental.png';
		var image = document.getElementById('component');
     image.src ='images/components/tyre/continental_tyre.jpg';
		 document.getElementById("component_tyre").innerHTML = "Continental";
	 document.getElementById("info").innerHTML = "Continental";
	 document.getElementById("info_1").innerHTML = "";
	 }
	 if(tyre==3){
		 var tyre = document.getElementById('tyre');
	  tyre.src ='images/components/tyre/hoosier.png';
			var image = document.getElementById('component');
     image.src ='images/components/tyre/tyre.gif';
		 document.getElementById("component_tyre").innerHTML = "Hoosier";
	 document.getElementById("info").innerHTML = "Hoosier";
	 document.getElementById("info_1").innerHTML = "";
	 }
	 }
function change_text_daq(daq){
    if(daq==1){
		var image = document.getElementById('component');
     image.src ='images/components/DAQ.jpg';
		document.getElementById("component_daq").innerHTML = "Kit-1";
	 document.getElementById("info").innerHTML = "Kit-1";
	 document.getElementById("info_1").innerHTML = "Data loggger, GPS and 3 axix accelerometer.";
	 }
	if(daq==2){
		var image = document.getElementById('component');
     image.src ='images/components/DAQ.jpg';
		document.getElementById("component_daq").innerHTML = "Kit-2";
	 document.getElementById("info").innerHTML = "Kit-2";
	 document.getElementById("info_1").innerHTML = "Data loggger, GPS, 3 axix accelerometer, gear position sensor and Steering angle sensor.";
	 }
	if(daq==3){
		var image = document.getElementById('component');
     image.src ='images/components/DAQ.jpg';
		document.getElementById("component_daq").innerHTML = "Kit-3";
	 document.getElementById("info").innerHTML = "Kit-3";
	 document.getElementById("info_1").innerHTML = "Data loggger, GPS, 3 axix accelerometer,  gear position sensor, Steering angle sensor and brake pressure sensor.";
	 }
	 if(daq==4){
		 var image = document.getElementById('component');
     image.src ='images/components/DAQ.jpg';
		 document.getElementById("component_daq").innerHTML = "Kit-4";
	 document.getElementById("info").innerHTML = "Kit-4";
	 document.getElementById("info_1").innerHTML = "Data loggger, GPS, 3 axix accelerometer, gear position sensor, Steering angle sensor, brake pressure sensor and 4 damper potentiometers";
	 }
	 if(daq==5){
		 var image = document.getElementById('component');
     image.src ='images/components/DAQ.jpg';
		 document.getElementById("component_daq").innerHTML = "Kit-5";
	 document.getElementById("info").innerHTML = "Kit-5";
	 document.getElementById("info_1").innerHTML = "Data loggger, GPS, 3 axix accelerometer, gear position sensor,  Steering angle sensor, brake pressure sensor, 4 damper potentiometers and a set of 5 strain gauge.";
	 }
	 }
function change_text_damper(damper){
    if(damper==1){
			var image = document.getElementById('component');
     image.src ='images/components/dampers/Tanner.jpg';
		document.getElementById("component_damper").innerHTML = "Tanner";
	 document.getElementById("info").innerHTML = "Tanner";
	 document.getElementById("info_1").innerHTML = "";
	 }
	if(damper==2){
			var image = document.getElementById('component');
     image.src ='images/components/dampers/Ohlins_1.jpg';
		document.getElementById("component_damper").innerHTML = "Ohlins-Group N/R4";
	 document.getElementById("info").innerHTML = "Ohlins-Group N/R4";
	 document.getElementById("info_1").innerHTML = "The front strut is a Twin Piston McPherson strut with a 44 mm diameter piston, three way adjusted with one-way rebound and two-way compression. The rear damper is a Twin Tube TTX44 with a 44 mm piston and it’s four-way adjusted.";
	 }
	if(damper==3){
			var image = document.getElementById('component');
     image.src ='images/components/dampers/Ohlins_2.jpg';
		document.getElementById("component_damper").innerHTML = "Ohlins-TTX36 Inline";
	 document.getElementById("info").innerHTML = "Ohlins-TTX36 Inline";
	 document.getElementById("info_1").innerHTML = "Both front and rear are fully pressure balanced, eliminating the risk of cavitation and due to low gas pressure they keep the internal friction low. <br />PX44 McPherson strut (Front)<br />44 mm twin piston (Front)<br />PDS (Progressive Damping System) (Front)<br />3-way adjusted, one rebound and two way compression (Front)<br />TTX44 Twin Tube shock absorber (Rear)<br />44 mm single piston (Rear)<br />PDS (Progressive Damping System) (Rear)<br />4-way adjusted, course rebound adjuster in the shaft, single rebound adjuster in the cylinder head and a two-way compression adjuster (Rear)";
	 }
	 if(damper==4){
		 	var image = document.getElementById('component');
     image.src ='images/components/dampers/Ohlins_3.jpg';
		 document.getElementById("component_damper").innerHTML = "Ohlins-ILX-Series";
	 document.getElementById("info").innerHTML = "Ohlins-ILX-Series";
	 document.getElementById("info_1").innerHTML = "The design of the TTX36 Inline with the compact design and with an inline reservoir makes it suitable for asphalt oval racing. TTX-technology - no cavitation risk<br />Integrated reservoir.<br />2-way adjusted, compression and rebound.<br />Possible to upgrade to 3- and 4-way adjustable.<br />Compact design.<br />Available in different lengths.Used in asphalt oval racing as the NASCAR-series and Late Model";
	 }
	 if(damper==5){
		 	var image = document.getElementById('component');
     image.src ='images/components/dampers/Penske.jpg';
		 document.getElementById("component_damper").innerHTML = "Penske-8760";
	 document.getElementById("info").innerHTML = "Penske-8760";
	 document.getElementById("info_1").innerHTML = " Piggyback or Remote Reservoir 1/8” NPT, Banjo, or Banjo-Swivel Style Hose 45mm or 55mm Bore Body 2.00”, 2.25”, 2.50” Spring Hardware Coarse ACME Thread Aluminum Body.<br />Various Piston Options.<br />Built to Customer Specifications.<br />Custom-Valved for Driver Feel or Chassis Set-Up.<br />Owner Rebuildable.<br />Consistent Performance  ";
	 }
	 }
function change_text_ecu(ecu){
    if(ecu==1){
			var image = document.getElementById('component');
     image.src ='images/components/ecu/PE3_1.png';
	 document.getElementById("component_ecu").innerHTML = "PE3-IG001";
	 document.getElementById("info").innerHTML = "PE3-IG001";
	 document.getElementById("info_1").innerHTML = "The PE3-8400 engine control unit is a compact, adjustable system that handles fuel and ignition responsibilities for almost any engine. The long features list, ease of use and small size make it a great addition to any vehicle, on or off-road.Full build PE3 series ECU, 8 injector drivers, 4 internal coil drivers, plastic waterproof enclosure.";
	 }
    if(ecu==2){
		var image = document.getElementById('component');
     image.src ='images/components/ecu/PE3_2.png';
	  document.getElementById("component_ecu").innerHTML = "PE3-8400A";
	 document.getElementById("info").innerHTML = "PE3-8400A";
	 document.getElementById("info_1").innerHTML = "The PE3-8400 engine control unit is a compact, adjustable system that handles fuel and ignition responsibilities for almost any engine. The long features list, ease of use and small size make it a great addition to any vehicle, on or off-road.Full build PE3 series ECU, 8 injector drivers, 4 internal coil drivers, plastic waterproof enclosure.";
	 }
	 if(ecu==3){
		 var image = document.getElementById('component');
     image.src ='images/components/ecu/M400.jpg';
	 document.getElementById("component_ecu").innerHTML = "Motec-M400";
	 document.getElementById("info").innerHTML = "Motec-M400";
	 document.getElementById("info_1").innerHTML = "The M400 is a powerful and cost effective ECU for modern four cylinder and two rotor applications. Using advanced M800 technology, it controls the latest automotive innovations such as continuously variable camshaft timing and drive by wire throttle.It is fully programmable and has been designed with high performance road cars and racing vehicles in mind. Install it as a stand-alone ECU or as component of a complete motorsport-ready engine management and data acquisition solutionData Logging: 512 kb, No of Cylinders: Sequential- upto 4, Communication: RS232 & CAN, ENABLE SINGLE WIDE LAMBDA";
	 }
	 if(ecu==4){
		  var image = document.getElementById('component');
     image.src ='images/components/ecu/M600.jpg';
	 document.getElementById("component_ecu").innerHTML = "Motec-M600";
	 document.getElementById("info").innerHTML = "Motec-M600";
	 document.getElementById("info_1").innerHTML = "Built with the same leading edge technology as MoTeC’s M800, the M600 is ideal for late model six cylinder engines and twin or triple rotary engines. It controls modern electronics such as continuously variable camshaft timing and drive by wire throttle and is fully programmable for road and race applications.It is both suited to stand-alone installation and as component of a complete engine management and data acquisition solution.Data Logging: 512 kb, No of Cylinders: Sequential- upto 6, Communication: RS232 & CAN, ENABLE SINGLE WIDE LAMBDA";
}
	 if(ecu==5){
		  var image = document.getElementById('component');
     image.src ='images/components/ecu/M800.jpg';
     document.getElementById("component_ecu").innerHTML = "Motec-M800";
	 document.getElementById("info").innerHTML = "Motec-M800";
	 document.getElementById("info_1").innerHTML = "MoTeC’s benchmark M800 is a versatile, race-bred ECU that is suitable for almost any application including modern engines with up to 12 cylinders. It also suits rotary engines with twin, triple or quad rotors.It offers maximum sophistication to control the latest automotive advances, such as continuously variable camshaft timing and drive by wire throttle, while maintaining the flexibility to suit a range of users.This highly advanced ECU is ideal for professional motorsport and integrates seamlessly into a complete engine management and data acquisition solution.Data Logging: 1mb,No of Cylinders: Sequential- upto 8-12,  Communication: RS232 & CAN, ENABLE 1 MEG INT LOGGING, ENABLE SINGLE WIDE LAMBDA";
	 }
	 if(ecu==6){
		  var image = document.getElementById('component');
     image.src ='images/components/ecu/M880.jpg';
	 document.getElementById("component_ecu").innerHTML = "Motec-M880";
	 document.getElementById("info").innerHTML = "Motec-M880";
	 document.getElementById("info_1").innerHTML = "The M880 is MoTeC’s top of the line ECU. Developed for motorsport professionals, it takes the M800 engineering one step further with an Autosport connector, Advanced Functions‡ as standard and an optional 4 MB logging memory.This powerful ECU suits the same broad scope of applications as the M800, including modern engines with up to 12 cylinders and twin, triple or quad rotor applications.It offers maximum sophistication to control the latest automotive advances, such as continuously variable camshaft timing and drive by wire throttle, while maintaining the flexibility to suit a range of users.<br/>* Advanced Functions includes: Traction Control, Launch Control, Gear Change Ignition Cut (flat shifts) and Overrun Boost Enhancement (anti-Lag).Data Logging: 1 to 4 mb, No of Cylinders: Sequential- upto 8-12, Communication: RS232 & CAN, ENABLE 1 MEG INT LOGGING, ADD 3 MEG INT LOGGING, ENABLE SINGLE WIDE LAMBDA";
	 }
	 }
	 