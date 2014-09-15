window.onscroll = function(event)
{
	var items = document.getElementsByClassName('collapsable');

	for (var i = 0; i < items.length; i++)
	{
		if (document.body.scrollTop !== 0) // value in PX
		{
			items[i].classList.add('collapsed');
		}

		else
		{
			items[i].classList.remove('collapsed');
		}
	}
}