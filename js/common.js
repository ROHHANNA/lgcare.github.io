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
	
	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){            
		event.preventDefault();
		$('html,body').animate({'scrollTop' : '0px'}, 800);
		});

		});

		 $(document).ready(function(){
        $('#card').change(function() {
            if ($(this).val() == 1) {
                $('.best_care').show();
            }
            else
            {
                $('.best_care').hide();
            }
        });
    });
	$(document).ready(function(){
        $('#card').change(function() {
            if ($(this).val() == 2) {
                $('.wooribank_bestrental').show();
            }
            else
            {
                $('.wooribank_bestrental').hide();
            }
        });
    });
	$(document).ready(function(){
        $('#card').change(function() {
            if ($(this).val() == 3) {
                $('.hyeondaeM_Edition3').show();
            }
            else
            {
                $('.hyeondaeM_Edition3').hide();
            }
        });
    });
	$(document).ready(function(){
        $('#card').change(function() {
            if ($(this).val() == 4) {
                $('.kebhana_lgrental_service').show();
            }
            else
            {
                $('.kebhana_lgrental_service').hide();
            }
        });
    });
		$(document).ready(function(){
        $('#card').change(function() {
            if ($(this).val() == 5) {
                $('.nonghyup_allone_lgbest').show();
            }
            else
            {
                $('.nonghyup_allone_lgbest').hide();
            }
        });
    });
		$(document).ready(function(){
        $('#card').change(function() {
            if ($(this).val() == 6) {
                $('.shinhan_rentalah').show();
            }
            else
            {
                $('.shinhan_rentalah').hide();
            }
        });
    });
		$(document).ready(function(){
        $('#card').change(function() {
            if ($(this).val() == 7) {
                $('.kbstar_lgkbnation').show();
            }
            else
            {
                $('.kbstar_lgkbnation').hide();
            }
        });
    });



	/***** 디바이스별 분기 *****/
	// 데스크탑
	if(!isMobile){
		// Navigation(Desktop) - start
		$("header > div.main_bg > div.inner_wrap > nav").mouseenter(function(e){
			$(this).css('padding-left','640px');
			$('header').addClass('on');
		});
		$("header > div.main_bg > div.inner_wrap").mouseleave(function(e){
			$(this).children('nav').css('padding-left','0px');
			$('header').removeClass('on');
		});


		// Navigation(Desktop) - end

	}

	else {
		//Navigation(mobile) - start
		var m_nav_visible = false;
		$("button.btn_menu_toggle, div.nav_bg").click(function(){
			$('button.btn_menu_toggle').toggleClass('off');
			$('div.nav_bg').toggle();
			if(!m_nav_visible){
				m_nav_visible = true;
				$('nav').css('transform','translateX(0)');
				$('html').css('overflow','hidden');
			} else {
				m_nav_visible = false;
				$('nav').css('transform','translateX(100%)');
				$('html').css('overflow','auto');
			}
		});

		$('nav > ul > li > a').click(function(){
			var status = $(this).next().css('display');
			$('nav > ul > li > a').removeClass('active');
			$('nav > ul > li > a').next().slideUp('fast');
			if (status == 'none')
			{	
				$(this).addClass('active').addClass('off');
				$(this).next().slideDown('fast');
			}
			else if (status == 'block')
			{
				$(this).removeClass('active').removeClass('off');
				$(this).next().slideUp('fast');
			}
		});

		function m_nav_reset(){
			$('nav > ul > li > a').removeClass('active');
			$('nav > ul > li > a').next().slideUp('fast');
		}


		//Navigation(mobile) - end
		// Tablet
		if(screen.width >= 768){

			

		}

		// Mobile
		else {

			

		}
		
	}

				$(function(){
			 $('.click1').click(function(){
				$('.click1img').show();
		});
			  $('.click2, .click3').click(function(){
				$('.click1img').hide();
			  });
		});
		
		$(function(){
			 $('.click2').click(function(){
				$('.click2img').show();
		});
			  $('.click1, .click3').click(function(){
				$('.click2img').hide();
			  });
		});

		$(function(){
			 $('.click3').click(function(){
				$('.click3img').show();
		});
			  $('.click2, .click1').click(function(){
				$('.click3img').hide();
			  });
		});
	
		$(function(){
			$('#click').click(function(){
			$('.agree_info').show();
	    });
	  $('#x').click(function(){
			$('.agree_info').hide();
		    });
	});

		$.datepicker.setDefaults($.datepicker.regional['ko']); 
		$(function() {
			$('#상담날짜').datepicker({    
			 dateFormat:"yy-mm-dd", 
				onSelect:function(d){	 
				}
			});
		});

	var form = document.getElementById("myform");
    var goname = form.goname;
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      var val = goname.value;
      switch(val) {
        case "냉난방시스템" :
		case "냉난방" :
		case "중대형빌딩시스템" :
		case "중대형빌딩" :
            location.href = "http://naver.com";
            break;
		case "중소형빌딩시스템" :
            location.href = "";
            break;
        default :
           alert("다시 입력해주세요.");
           break;
      }
    })


	
});
