
// mobile-search show/hide button

$( window ).resize(function() {
  if($( window ).width() < 694) {
     $('.header-block.mobile').hide();
  }

  if($( window ).width() > 693) {
     $('.header-block.mobile').show();
  }
   
});




// kartochka_tovara_mobile 
if($( window ).width() < 694) {
     $('.price_bask').insertAfter('.links');
  }

  if($( window ).width() > 693) {
     $('.links').insertAfter('.price_bask');
  }

$( window ).resize(function() {
  if($( window ).width() < 694) {
     $('.price_bask').insertAfter('.links');
   }

  if($( window ).width() > 693) {
     $('.links').insertAfter('.price_bask');
  }
   

});
// katalog__mobile 
if($( window ).width() < 768) {
     $('.detach').detach();
  }
 
$( window ).resize(function() {
  if($( window ).width() < 694) {
     $('.detach').detach();
   }
   
});

// katalog__mobile sort
(function($) {
$(function() {

    $('.sort_text').on('click', function() {
        $(this)
            .addClass('active').siblings().removeClass('active');
    });

});
})(jQuery);



// tabs
(function($) {
$(function() {

	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

		$('ul.tabs__caption_2').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs_2').find('div.tabs__content_2').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);



  // ---color placeholder---
  
// color placeholder-name
$('#u_input_name').focus(function() {
    $('#u_label').hide();
});

$('#u_input_name').blur(function() {
    if ($(this).val().trim() === '') {
        $('#u_label').show();
    }

});


// color placeholder-tel
$('#u_input_tel').focus(function() {
    $('#u_label_tel').hide();
});

$('#u_input_tel').blur(function() {
    if ($(this).val().trim() === '') {
        $('#u_label_tel').show();
    }
    
});

// color placeholder-email
$('#u_input_email').focus(function() {
    $('#u_label_email').hide();
});

$('#u_input_email').blur(function() {
    if ($(this).val().trim() === '') {
        $('#u_label_email').show();
    }
    
});


// color placeholder-message
$('#u_input_message').focus(function() {
    $('#u_label_message').hide();
});

$('#u_input_message').blur(function() {
    if ($(this).val().trim() === '') {
        $('#u_label_message').show();
    }
    
});


$(document).ready(function() {

// mobile-search 

$('.search_toggle').on('click', function() {
 $('.header-block.mobile').slideToggle(300);
});
//---submenu---
	$('.submenu').hide();

	$('.uncover').on('click', function() {
	     $(this).children('ul').slideToggle(300);
	     $(this)
			.toggleClass('open');
});

    /* filter*/
jQuery("#slider").slider({
    min: 0,
    max: 150000,
    values: [0,150000],
    range: true,
    stop: function(event, ui) {
        jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
        
    },
    slide: function(event, ui){
        jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

jQuery("input#minCost").change(function(){

    var value1=jQuery("input#minCost").val();
    var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        jQuery("input#minCost").val(value1);
    }
    jQuery("#slider").slider("values",0,value1);    
});

    
jQuery("input#maxCost").change(function(){
        
    var value1=jQuery("input#minCost").val();
    var value2=jQuery("input#maxCost").val();
    
    if (value2 > 150000) { value2 = 150000; jQuery("input#maxCost").val(150000)}

    if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        jQuery("input#maxCost").val(value2);
    }
    jQuery("#slider").slider("values",1,value2);
});


// фильтрация ввода в поля
    jQuery('input').keypress(function(event){
        var key, keyChar;
        if(!event) var event = window.event;
        
        if (event.keyCode) key = event.keyCode;
        else if(event.which) key = event.which;
    
        if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
        keyChar=String.fromCharCode(key);
        
        if(!/\d/.test(keyChar)) return false;
    
    });
/*================*/






//---customize input type number---
$(function() {
  
  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
       // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
        } else {
        newVal = 0;
        }
      }
    $button.parent().find("input").val(newVal);
  });
});


//---fancybox---   
    $(".fancybox").fancybox();

 
	});
