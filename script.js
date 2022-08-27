$(document).ready(function(e){
	$('#contents').on('paste',function(e){
		// var pastedData = e.originalEvent.clipboardData.getData('text');
		// let tdata = $('#contents').val();
		convertToUnicode();
	});

		
});

function convertToUnicode(){
	var t="bangla";
	let w = '';
	// w = cM(t,w);
	setTimeout(function(){
		let new_text = document.getElementById('contents').value;
		w = cM(t,new_text);
		document.getElementById('contents').value=w;
	},100);

}