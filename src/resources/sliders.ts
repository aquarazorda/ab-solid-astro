export const fetchMainSlides = async () => await fetch('https://newstatic.adjarabet.com/static/allSlidersData.json?v=1677591304')
	.then(res => res.json())
	.then(data => data.filter((item: any) => 
		item.byTags 
    && item.byTags.empty 
    && !item.segments?.length
    && Object.keys(item.byTags).length === 1
	))
	.then(data => data.sort((a: any, b: any) => a.byTags.empty.order - b.byTags.empty.order));

	export const fetchWidgetSlides = async () => await (await fetch('https://newstatic.adjarabet.com/static/widgetsCarouselData.json?v=1677603423')).json();

	export const fetchGameData = async () => await (await fetch('https://webapi-personal.adjarabet.com/getLikegames_proxy?device=0&domain=.com&quantity=20&tag=slots&period=7')).json();