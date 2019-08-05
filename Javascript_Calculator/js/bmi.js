var h, h2, w, w2, t;

function calculate_bmi(h,w,u) {
  bmi = h*h;
	bmi = w/bmi;
	if (u == 'i') {
	  bmi = bmi*703;
	}
	bmi = (bmi).toFixed(1)
	return bmi;
}

function toggle_imperial(u) {
  if (u == 'i') {
	  $('#hh2').slideDown();
    $('#hw2').slideDown();
		$('#ht').html("Feet");
		$('#wt').html("Stone");
	} else {
		$('#hh2').hide();
    $('#hw2').hide();
		$('#ht').html("cm");
		$('#wt').html("kg");
	}
}

function ss_bmi(u) {
  // ParseInteger or 0
  h = parseInt($('#h').val()) || 0;
  h2 = parseInt($('#h2').val()) || 0;
  w = parseInt($('#w').val()) || 0;
  w2 = parseInt($('#w2').val()) || 0;
   
  // Convert to values we can work with.
	if (u == 'i') {	h = (h*12); h = (h+h2); w = (w*14); w = (w+w2);	} else { h = h/100; }

	bmi = calculate_bmi(h,w,u);
    
  if (bmi < 18.5) {
    $('body').removeClass("normw").removeClass("overw").removeClass("obsew").addClass("underw");
    $('#bmib').attr("title","Underweight");
  } else if ((18.5 <= bmi) && (bmi <= 24.9)) {
    $('body').removeClass("underw").removeClass("overw").removeClass("obsew").addClass("normw");
    $('#bmib').attr("title","Normal weight");
  } else if ((25 <= bmi) && (bmi <= 29.9)) {
    $('body').removeClass("underw").removeClass("normw").removeClass("obsew").addClass("overw");
    $('#bmib').attr("title","Overweight");
  } else {
    $('body').removeClass("underw").removeClass("normw").removeClass("overw").addClass("obsew");
    $('#bmib').attr("title","Obese");
  }
  
  if ((bmi == 'NaN')||(bmi < 0.1 )||(bmi == 'Infinity')) {
    bmi = "&hellip;";
    $('body').removeClass("underw").removeClass("overw").removeClass("obsew").addClass("normw");
    $('#bmib').attr("title","...");
  }
  
  $('#bmi').html(bmi);
};

$("[name=u]").click(function() {
  toggle_imperial($(this).val());
  // Reset
  $('#h').val("");
  $('#h2').val("");
  $('#w').val("");
  $('#w2').val("");
  $('body').removeClass("underw").removeClass("overw").removeClass("obsew").addClass("normw");
  $('#bmib').attr("title","...");
  $('#bmi').html("&hellip;");
});

$("#h").bind("propertychange input paste", function() {
  u = $('[name=u]:checked').val();
  ss_bmi(u);
});
$("#h2").bind("propertychange input paste", function() {
  u = $('[name=u]:checked').val();
  ss_bmi(u);
});
$("#w").bind("propertychange input paste", function() {
  u = $('[name=u]:checked').val();
  ss_bmi(u);
});
$("#w2").bind("propertychange input paste", function() {
  u = $('[name=u]:checked').val();
  ss_bmi(u);
});