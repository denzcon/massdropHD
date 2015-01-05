$(function()
{
	function fixViewingExperience()
	{
		/* remove width constraint on parent container */
		$('#ContentContainer').css('width', 'auto');
		
		/* now that we have removed that constraint, lets break out the tape-measure and see what we got */
		var screenSize = $('#ContentContainer').width();

		/* to account for the left nave element that is 225px,
		we will lop off 250px to be save and not crowd the edges */
		var mainSectionNewSize = screenSize - 250;
		var mainSectionNewSizeCss = mainSectionNewSize + 'px';

		/* Lets inject what we have into the DOM using the jquery css() function */
			
			/* remove the clear statement that was constraining to 3 elements per visual row */
			$('.main-section .product-list>li:nth-child(3n+1)').css('clear', 'inherit');
			
			/* increase the size of the main-section now that we have the parents constraint removed */
			$('section.main-section').css('width', mainSectionNewSizeCss);

			/* ensure poper spacing between the cards */
			$('section li.product-card').css('margin-left', '30px');	
		
		console.log(screenSize);
		console.log(mainSectionNewSize);
		console.log(mainSectionNewSizeCss);
	}
	fixViewingExperience();
	$(window).resize(fixViewingExperience);
});
