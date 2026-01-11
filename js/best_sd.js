// JavaScript Document
$(document).ready(function(){

	$("a[href = '#']").click(function(e){
		e.preventDefault();
		return false;
	});

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		isMobile = true;
	}

	/***** 공통 함수(start) *****/
	//visual Slides class 형태 start

	

		



	
	
	$(document).ready(function(){
		
			var $inner_list  = document.getElementById("inner_list"); //ul
			var $inner_list_li = $inner_list.getElementsByTagName("li");
			var $btn_prev = document.getElementById("btn_prev");
			var $btn_next = document.getElementById("btn_next");
			var cnt_num = 0;	// $inner_list_li 가, 하나씩이동할때 카운터변수가 필요 , 넘버링을 0 으로 매기면편함.
			var click_Event = true; // 버튼을 아무리눌러도 movement를 유지시키기위한 변수
			var si_01 = null; 
										
			// --------------------호출을 하지않아도, 자동으로 계속 실행시키는것 (최우선실행!!)-----------------------
			(function init(){
				
				$inner_list.insertBefore($inner_list_li[$inner_list_li.length - 1], $inner_list.firstChild); // ( 어떤걸 움직이게 할것인지?, 몇번째 자식으로 넣은거냐? )  
				$inner_list.style.marginLeft = "-340px";

			})(); 
			// ------------------------------------ END ---------------------------------------


			
			function move_ul(_direction){
					click_Event = false;
					stop_si(); 
					$inner_list.style.marginLeft = _direction =="prev" ? "0px" : "-680px" ;
					$inner_list.style.transition = "all 0.3s";
					setTimeout( function(){//* 주의 :  setTimeout으로 함수를 호출할때에는, function() < 익명함수를 넣어준다
						if(_direction == "prev"){
							$inner_list.insertBefore($inner_list_li[$inner_list_li.length - 1], $inner_list.firstChild);  
						}
						else{
							$inner_list.insertBefore($inner_list_li[0], $inner_list.lastChild);  
						}
						$inner_list.style.marginLeft = "-340px";
						$inner_list.style.transition = "none";
						click_Event = true;
						start_si();
					}, 300); 

			}

			$btn_prev.onclick = function(){
					if(!click_Event) return;
					move_ul("prev");
			}
			$btn_next.onclick = function(){
					if(!click_Event) return;
					move_ul("next");
			}
			


			function start_si(){
				if(si_01 !=0){
					clearInterval(si_01); // clearInterval 새로운것을 넣기위해 기존의함수를 clear 해줘야함
				}
				//si_01= setInterval(function(){move_ul("next")}, 3000);
			}
			function stop_si(){
					if(si_01 !=0){
					clearInterval(si_01); 
				}
				si_01= 0;
			}
			//start_si();
	});

	$(document).ready(function(){

			var $inner_list2  = document.getElementById("banner_list"); //ul
			var $inner_list_li2 = $inner_list2.getElementsByTagName("li");
			var $btn_prev2 = document.getElementById("prev");
			var $btn_next2 = document.getElementById("next");
			var cnt_num2 = 0;	// $inner_list_li 가, 하나씩이동할때 카운터변수가 필요 , 넘버링을 0 으로 매기면편함.
			var click_Event2 = true; // 버튼을 아무리눌러도 movement를 유지시키기위한 변수
			var si_02 = null; 
										
			// --------------------호출을 하지않아도, 자동으로 계속 실행시키는것 (최우선실행!!)-----------------------
			(function init(){
				
				$inner_list2.insertBefore($inner_list_li2[$inner_list_li2.length - 1], $inner_list2.firstChild); // ( 어떤걸 움직이게 할것인지?, 몇번째 자식으로 넣은거냐? )  
				$inner_list2.style.marginLeft = "-1920px";

			})(); 
			// ------------------------------------ END ---------------------------------------


			
			function move_ul2(_direction){
					click_Event2 = false;
					stop_si(); 
					$inner_list2.style.marginLeft = _direction =="prev" ? "0px" : "-3840px" ;
					$inner_list2.style.transition = "all 1s";
					setTimeout( function(){//* 주의 :  setTimeout으로 함수를 호출할때에는, function() < 익명함수를 넣어준다
						if(_direction == "prev"){
							$inner_list2.insertBefore($inner_list_li2[$inner_list_li2.length - 1], $inner_list2.firstChild);  
						}
						else{
							$inner_list2.insertBefore($inner_list_li2[0], $inner_list2.lastChild);  
						}
						$inner_list2.style.marginLeft = "-1920px";
						$inner_list2.style.transition = "none";
						click_Event2 = true;
						start_si();
					}, 900); 

			}

			$btn_prev2.onclick = function(){
					if(!click_Event2) return;
					move_ul2("prev");
			}
			$btn_next2.onclick = function(){
					if(!click_Event2) return;
					move_ul2("next");
			}
			


			function start_si(){
				if(si_02 !=0){
					clearInterval(si_02); // clearInterval 새로운것을 넣기위해 기존의함수를 clear 해줘야함
				}
				si_02= setInterval(function(){move_ul2("next")}, 3000);
			}
			function stop_si(){
					if(si_02 !=0){
					clearInterval(si_02); 
				}
				si_02= 0;
			}
			start_si();
	
	});
		
			



	/***** 공통 함수(end) *****/


	/***** 디바이스별 분기 *****/
	// 데스크탑
	if(!isMobile){
		
		

	}

	else {

		

		// Tablet
		if(screen.width >= 768){

		

		}

		// Mobile
		else {

			
		


		}
		
	}

	
	
});
