/* Table of Contents
==================================================

    #Slate Default
    #Custom Velstar

==================================================
*/

/* ==========================================================================
#Slate Default
========================================================================== */

window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Settings ================*/
//Create Vars that match SCSS breakpoints, defined in variables.scss.liquid file.
var screenSM = 576,
	screenMD = 768,
	screenLG = 992,
    screenXL = 1200;
    
var slickPrevArrow = "<button class='slick-prev slick-arrow' aria-label='Previous' type='button'><?xml version='1.0' encoding='UTF-8'?><svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><title>icon-chevron-left</title><g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Products' transform='translate(-53.000000, -294.000000)'><g id='icon-chevron-left' transform='translate(53.000000, 294.000000)'><path d='M14.71,6.71 C14.32,6.32 13.69,6.32 13.3,6.71 L8.71,11.3 C8.32,11.69 8.32,12.32 8.71,12.71 L13.3,17.3 C13.69,17.69 14.32,17.69 14.71,17.3 C15.1,16.91 15.1,16.28 14.71,15.89 L10.83,12 L14.71,8.12 C15.1,7.73 15.09,7.09 14.71,6.71 Z' id='Path' fill='#000000' fill-rule='nonzero'></path></g></g></g></svg></button>",
    slickNextArrow = "<button class='slick-next slick-arrow' aria-label='Next' type='button'><?xml version='1.0' encoding='UTF-8'?><svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><title>icon-chevron-right</title><g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Products' transform='translate(-1363.000000, -294.000000)'><g id='icon-chevron-right' transform='translate(1375.000000, 306.000000) rotate(-180.000000) translate(-1375.000000, -306.000000) translate(1363.000000, 294.000000)'><path d='M14.71,6.71 C14.32,6.32 13.69,6.32 13.3,6.71 L8.71,11.3 C8.32,11.69 8.32,12.32 8.71,12.71 L13.3,17.3 C13.69,17.69 14.32,17.69 14.71,17.3 C15.1,16.91 15.1,16.28 14.71,15.89 L10.83,12 L14.71,8.12 C15.1,7.73 15.09,7.09 14.71,6.71 Z' id='Path' fill='#000000' fill-rule='nonzero'></path></g></g></g></svg></button>";

//if no image available, load the SVG placeholder image. Generate by the liquid tag {{ 'product-1' | placeholder_svg_tag: 'svg-placeholder' }}
var svgPlaceholder = '<svg class="svg-placeholder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M375.5 345.2c0-.1 0-.1 0 0 0-.1 0-.1 0 0-1.1-2.9-2.3-5.5-3.4-7.8-1.4-4.7-2.4-13.8-.5-19.8 3.4-10.6 3.6-40.6 1.2-54.5-2.3-14-12.3-29.8-18.5-36.9-5.3-6.2-12.8-14.9-15.4-17.9 8.6-5.6 13.3-13.3 14-23 0-.3 0-.6.1-.8.4-4.1-.6-9.9-3.9-13.5-2.1-2.3-4.8-3.5-8-3.5h-54.9c-.8-7.1-3-13-5.2-17.5-6.8-13.9-12.5-16.5-21.2-16.5h-.7c-8.7 0-14.4 2.5-21.2 16.5-2.2 4.5-4.4 10.4-5.2 17.5h-48.5c-3.2 0-5.9 1.2-8 3.5-3.2 3.6-4.3 9.3-3.9 13.5 0 .2 0 .5.1.8.7 9.8 5.4 17.4 14 23-2.6 3.1-10.1 11.7-15.4 17.9-6.1 7.2-16.1 22.9-18.5 36.9-2.2 13.3-1.2 47.4 1 54.9 1.1 3.8 1.4 14.5-.2 19.4-1.2 2.4-2.3 5-3.4 7.9-4.4 11.6-6.2 26.3-5 32.6 1.8 9.9 16.5 14.4 29.4 14.4h176.8c12.9 0 27.6-4.5 29.4-14.4 1.2-6.5-.5-21.1-5-32.7zm-97.7-178c.3-3.2.8-10.6-.2-18 2.4 4.3 5 10.5 5.9 18h-5.7zm-36.3-17.9c-1 7.4-.5 14.8-.2 18h-5.7c.9-7.5 3.5-13.7 5.9-18zm4.5-6.9c0-.1.1-.2.1-.4 4.4-5.3 8.4-5.8 13.1-5.8h.7c4.7 0 8.7.6 13.1 5.8 0 .1 0 .2.1.4 3.2 8.9 2.2 21.2 1.8 25h-30.7c-.4-3.8-1.3-16.1 1.8-25zm-70.7 42.5c0-.3 0-.6-.1-.9-.3-3.4.5-8.4 3.1-11.3 1-1.1 2.1-1.7 3.4-2.1l-.6.6c-2.8 3.1-3.7 8.1-3.3 11.6 0 .2 0 .5.1.8.3 3.5.9 11.7 10.6 18.8.3.2.8.2 1-.2.2-.3.2-.8-.2-1-9.2-6.7-9.8-14.4-10-17.7 0-.3 0-.6-.1-.8-.3-3.2.5-7.7 3-10.5.8-.8 1.7-1.5 2.6-1.9h155.7c1 .4 1.9 1.1 2.6 1.9 2.5 2.8 3.3 7.3 3 10.5 0 .2 0 .5-.1.8-.3 3.6-1 13.1-13.8 20.1-.3.2-.5.6-.3 1 .1.2.4.4.6.4.1 0 .2 0 .3-.1 13.5-7.5 14.3-17.5 14.6-21.3 0-.3 0-.5.1-.8.4-3.5-.5-8.5-3.3-11.6l-.6-.6c1.3.4 2.5 1.1 3.4 2.1 2.6 2.9 3.5 7.9 3.1 11.3 0 .3 0 .6-.1.9-1.5 20.9-23.6 31.4-65.5 31.4h-43.8c-41.8 0-63.9-10.5-65.4-31.4zm91 89.1h-7c0-1.5 0-3-.1-4.2-.2-12.5-2.2-31.1-2.7-35.1h3.6c.8 0 1.4-.6 1.4-1.4v-14.1h2.4v14.1c0 .8.6 1.4 1.4 1.4h3.7c-.4 3.9-2.4 22.6-2.7 35.1v4.2zm65.3 11.9h-16.8c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h16.8v2.8h-62.2c0-.9-.1-1.9-.1-2.8h33.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-33.9c-.1-3.2-.1-6.3-.1-9h62.5v9zm-12.5 24.4h-6.3l.2-1.6h5.9l.2 1.6zm-5.8-4.5l1.6-12.3h2l1.6 12.3h-5.2zm-57-19.9h-62.4v-9h62.5c0 2.7 0 5.8-.1 9zm-62.4 1.4h62.4c0 .9-.1 1.8-.1 2.8H194v-2.8zm65.2 0h7.3c0 .9.1 1.8.1 2.8H259c.1-.9.1-1.8.1-2.8zm7.2-1.4h-7.2c.1-3.2.1-6.3.1-9h7c0 2.7 0 5.8.1 9zm-7.7-66.7v6.8h-9v-6.8h9zm-8.9 8.3h9v.7h-9v-.7zm0 2.1h9v2.3h-9v-2.3zm26-1.4h-9v-.7h9v.7zm-9 3.7v-2.3h9v2.3h-9zm9-5.9h-9v-6.8h9v6.8zm-119.3 91.1c-2.1-7.1-3-40.9-.9-53.6 2.2-13.5 11.9-28.6 17.8-35.6 5.6-6.5 13.5-15.7 15.7-18.3 11.4 6.4 28.7 9.6 51.8 9.6h6v14.1c0 .8.6 1.4 1.4 1.4h5.4c.3 3.1 2.4 22.4 2.7 35.1 0 1.2.1 2.6.1 4.2h-63.9c-.8 0-1.4.6-1.4 1.4v16.1c0 .8.6 1.4 1.4 1.4H256c-.8 11.8-2.8 24.7-8 33.3-2.6 4.4-4.9 8.5-6.9 12.2-.4.7-.1 1.6.6 1.9.2.1.4.2.6.2.5 0 1-.3 1.3-.8 1.9-3.7 4.2-7.7 6.8-12.1 5.4-9.1 7.6-22.5 8.4-34.7h7.8c.7 11.2 2.6 23.5 7.1 32.4.2.5.8.8 1.3.8.2 0 .4 0 .6-.2.7-.4 1-1.2.6-1.9-4.3-8.5-6.1-20.3-6.8-31.1H312l-2.4 18.6c-.1.4.1.8.3 1.1.3.3.7.5 1.1.5h9.6c.4 0 .8-.2 1.1-.5.3-.3.4-.7.3-1.1l-2.4-18.6H333c.8 0 1.4-.6 1.4-1.4v-16.1c0-.8-.6-1.4-1.4-1.4h-63.9c0-1.5 0-2.9.1-4.2.2-12.7 2.3-32 2.7-35.1h5.2c.8 0 1.4-.6 1.4-1.4v-14.1h6.2c23.1 0 40.4-3.2 51.8-9.6 2.3 2.6 10.1 11.8 15.7 18.3 5.9 6.9 15.6 22.1 17.8 35.6 2.2 13.4 2 43.2-1.1 53.1-1.2 3.9-1.4 8.7-1 13-1.7-2.8-2.9-4.4-3-4.6-.2-.3-.6-.5-.9-.6h-.5c-.2 0-.4.1-.5.2-.6.5-.8 1.4-.3 2 0 0 .2.3.5.8 1.4 2.1 5.6 8.4 8.9 16.7h-42.9v-43.8c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v44.9c0 .1-.1.2-.1.3 0 .1 0 .2.1.3v9c-1.1 2-3.9 3.7-10.5 3.7h-7.5c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h7.5c5 0 8.5-.9 10.5-2.8-.1 3.1-1.5 6.5-10.5 6.5H210.4c-9 0-10.5-3.4-10.5-6.5 2 1.9 5.5 2.8 10.5 2.8h67.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-67.4c-6.7 0-9.4-1.7-10.5-3.7v-54.5c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v43.8h-43.6c4.2-10.2 9.4-17.4 9.5-17.5.5-.6.3-1.5-.3-2s-1.5-.3-2 .3c-.1.2-1.4 2-3.2 5 .1-4.9-.4-10.2-1.1-12.8zm221.4 60.2c-1.5 8.3-14.9 12-26.6 12H174.4c-11.8 0-25.1-3.8-26.6-12-1-5.7.6-19.3 4.6-30.2H197v9.8c0 6.4 4.5 9.7 13.4 9.7h105.4c8.9 0 13.4-3.3 13.4-9.7v-9.8h44c4 10.9 5.6 24.5 4.6 30.2z"></path><path d="M286.1 359.3c0 .4.3.7.7.7h14.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-14.7c-.3 0-.7.3-.7.7zm5.3-145.6c13.5-.5 24.7-2.3 33.5-5.3.4-.1.6-.5.4-.9-.1-.4-.5-.6-.9-.4-8.6 3-19.7 4.7-33 5.2-.4 0-.7.3-.7.7 0 .4.3.7.7.7zm-11.3.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H242c-19.9 0-35.3-2.5-45.9-7.4-.4-.2-.8 0-.9.3-.2.4 0 .8.3.9 10.8 5 26.4 7.5 46.5 7.5h38.1zm-7.2 116.9c.4.1.9.1 1.4.1 1.7 0 3.4-.7 4.7-1.9 1.4-1.4 1.9-3.2 1.5-5-.2-.8-.9-1.2-1.7-1.1-.8.2-1.2.9-1.1 1.7.3 1.2-.4 2-.7 2.4-.9.9-2.2 1.3-3.4 1-.8-.2-1.5.3-1.7 1.1s.2 1.5 1 1.7z"></path><path d="M275.5 331.6c-.8 0-1.4.6-1.5 1.4 0 .8.6 1.4 1.4 1.5h.3c3.6 0 7-2.8 7.7-6.3.2-.8-.4-1.5-1.1-1.7-.8-.2-1.5.4-1.7 1.1-.4 2.3-2.8 4.2-5.1 4zm5.4 1.6c-.6.5-.6 1.4-.1 2 1.1 1.3 2.5 2.2 4.2 2.8.2.1.3.1.5.1.6 0 1.1-.3 1.3-.9.3-.7-.1-1.6-.8-1.8-1.2-.5-2.2-1.2-3-2.1-.6-.6-1.5-.6-2.1-.1zm-38.2 12.7c.5 0 .9 0 1.4-.1.8-.2 1.3-.9 1.1-1.7-.2-.8-.9-1.3-1.7-1.1-1.2.3-2.5-.1-3.4-1-.4-.4-1-1.2-.8-2.4.2-.8-.3-1.5-1.1-1.7-.8-.2-1.5.3-1.7 1.1-.4 1.8.1 3.7 1.5 5 1.2 1.2 2.9 1.9 4.7 1.9z"></path><path d="M241.2 349.6h.3c.8 0 1.4-.7 1.4-1.5s-.7-1.4-1.5-1.4c-2.3.1-4.6-1.7-5.1-4-.2-.8-.9-1.3-1.7-1.1-.8.2-1.3.9-1.1 1.7.7 3.5 4.1 6.3 7.7 6.3zm-9.7 3.6c.2 0 .3 0 .5-.1 1.6-.6 3-1.6 4.2-2.8.5-.6.5-1.5-.1-2s-1.5-.5-2 .1c-.8.9-1.8 1.6-3 2.1-.7.3-1.1 1.1-.8 1.8 0 .6.6.9 1.2.9z"></path></svg>';
//BG: The below function is used by both the Recently Viewed and Related Products. When looping through the products, we use the below as a template.
function outputProduct(data, outputLocation) {
	var onSale = data.compare_at_price_min > data.price_min,
		firstVariantId = data['variants'][0].id,
		firstVariantTitle = data['variants'][0].title,
		secondOption = data['variants'][0].option2,
		hasPackOption = false;
		
	//MJ: If the first variant isn't available, change the variant ID to be used to the 2nd one
	if (data['variants'][0].available == false) {
		firstVariantId = data['variants'][1].id;
	}

	//MJ: Below is the logic for the variant price ranges 
	var variantPrices = [],
	rangePriceDiv,
	firstPrice,
	lastPrice;

	//MJ: For each variant, if the 2nd option is Single Pack, push that varinat's price value into an array
	for (var i = 0; i < data['variants'].length; i++) {

		var option2 = data['variants'][i].option2;

		if (option2 !== null) {

			//MJ: If only wanting it to apply to packs
			if (option2.includes('Single Pack')) {
				variantPrices.push(data['variants'][i].price);
			}
		}
		
	}

	if (firstVariantTitle != 'Default Title') {
        if (secondOption !== null) {
            if (secondOption.includes('Pack')) {
                hasPackOption = true
            }
        }
    }

	//MJ: Set first and last price, using the first and last elements of the array
	firstPrice = variantPrices[0],
	lastPrice = variantPrices[variantPrices.length - 1];

	//MJ: If the prices are the same, just show the first price. Otherwise, format it as the first and last price together.
	if (firstPrice == lastPrice) {
		rangePriceDiv = slate.Currency.formatMoney(firstPrice, theme.moneyFormat);
	} else {
		rangePriceDiv = slate.Currency.formatMoney(firstPrice, theme.moneyFormat) + ' - ' + slate.Currency.formatMoney(lastPrice, theme.moneyFormat);
	}

	var productHTML = '';
	productHTML += '<div class="featured__product" data-rel-prod-equalize="title">';
	productHTML +=
		'<a href="/products/' +
		data.handle +
		'" title="' +
		data.title +
		'" class="image__holder">';
	if (data.featured_image != null) {
		productHTML +=
			'<img data-sizes="auto" data-src="' +
			slate.Image.getSizedImageUrl(data.featured_image, '275x') +
			'" data-srcset="' +
			slate.Image.getSizedImageUrl(data.featured_image, '275x') +
			' 275w, ' +
			slate.Image.getSizedImageUrl(data.featured_image, '275x') +
			' 275w, ' +
			slate.Image.getSizedImageUrl(data.featured_image, '275x') +
			' 275w, ' +
			slate.Image.getSizedImageUrl(data.featured_image, '275x') +
			' 275w" alt="' +
			data.title +
			'" class="img-fluid mx-auto lazyload" />';
	} else {
		productHTML += svgPlaceholder;
	}
	productHTML += '</a>';
	productHTML +=
		'<a href="/products/' +
		data.handle +
		'" title="' +
		data.title +
		'" class="title">';
	productHTML += '<p data-rel-prod-equalize-watch="title">' + data.title + '</p>';
	productHTML += '</a>';
	productHTML += '<div class="reviews mb-2">';
	productHTML +=
		'<div class="product__reviews__snippet"><span class="shopify-product-reviews-badge" data-id="' +
		data.id +
		'"></span></div>';
	productHTML += '</div>';
	productHTML += '<div class="prices d-flex align-items-baseline mb-3">';

	//MJ: If the product has variants, add a from label
	// if (firstVariantTitle != 'Default Title') {
    //     if (secondOption !== null) {
    //         if (secondOption.includes('Pack')) {
    //             productHTML += '<span class="pr-1">from</span>';
    //         }
    //     }
    // }

	//MJ: If the product has packs in the variants, use the rangePriceDiv element. Otherwise, use the normal price
	if (hasPackOption) {
		productHTML +=
		'<div class="money original__price range">' +
		rangePriceDiv +
		'</div>';
	} else {
		productHTML +=
		'<div class="money original__price">' +
		slate.Currency.formatMoney(data.price, theme.moneyFormat) +
		'</div>';
	}
	// if (onSale) {
	// 	productHTML +=
	// 		'<div class="money compare__price pl-2">' +
	// 		slate.Currency.formatMoney(data.compare_at_price_min, theme.moneyFormat) +
	// 		'</div>';
	// }
	productHTML += '</div>';
	productHTML +=
		'<form method="post" action="/cart/add">' +
		'<input type="hidden" name="id" value="' +
		firstVariantId +
		'" />' +
		'<button type="submit" name="add" data-add-to-cart="" class="btn-add-to-cart btn btn-primary btn-100 variant-available"><span data-add-to-cart-text="">Add To Cart</span></button>' +
		'</form>';
	productHTML += '</div>';

	$(outputLocation).find('.row.featured-products-slick').append(productHTML);
	relatedSliderAddToCart();
	relatedProductsEqualize();
}

//MJ: Uses custom method of adding item to cart rather than going to cart page as per the default
function relatedSliderAddToCart() {
	$('.featured__product form').submit(function (e) {
		e.preventDefault();
		addToCart($(this));
	});
}

function relatedProductsEqualize() {

	var elementGroup = $('*[data-rel-prod-equalize]').attr('data-rel-prod-equalize');

	if (elementGroup) {
		var elementGroups = elementGroup.split(',');
		$i = 0;

		$(elementGroups).each(function () {
			var thisTarget = elementGroups[$i];
			var equalizerItems = $('[data-rel-prod-equalize-watch="' + thisTarget + '"]');

			var maxHeight = 0;
			$(equalizerItems).each(function () {
				if ($(this).innerHeight() > maxHeight) {
					maxHeight = $(this).innerHeight();
				}
			});
			$(equalizerItems).each(function () {
				$(this).innerHeight(maxHeight);
			});
			$i++;
		});
	}
}

if (($('body.template-product').length)) {
	$(window).on('resize',function() {
		relatedProductsEqualize();
	});
}

/*
BG: persistentCheck: The idea being to constantly check (or persistently check) if the target exists, if it does, pass in an additional function that will trigger once condition is true. If condition is never true, have a timeoutTime to stop checking. 
*/
function persistentCheck(
	target,
	targetValue,
	paramFunction,
	paramTarget,
	timeoutTime
) {
	//console.log('persistentCheckFunction');
	var checkExist = setInterval(function () {
		//console.log('Persistently checking for: '+target);
		//keep checking to see if condition is true

		if ($(target).length > targetValue) {
			//console.log('condition is true, will no longer check.');
			//check paramFunction is actually a function
			if (typeof paramFunction == 'function') {
				paramFunction(paramTarget);
			}
			//clear interval
			clearInterval(checkExist);
		}
	}, 100); // check every 100ms

	setTimeout(function () {
		//console.log('couldn\'t find target or condition wasn\'t true');
		clearInterval(checkExist);
	}, timeoutTime);
}

/**
 * RF: Initiate video player blocks,
 * hide player controls when necessary and add custom click event to play video
 *
 * @param {string} querySelector The query for element(s) to initate on
 */
function initPlayers(querySelector) {
	document.querySelectorAll(querySelector).forEach((player) => {
		const video = player.querySelector('video');
		const button = player.querySelector('a.video-player__button');

		// Are controls enabled
		const hasControls = video && video.hasAttribute('controls');

		if (video && button) {
			hasControls && video.removeAttribute('controls'); // Hide the controls initially

			button.addEventListener('click', (e) => {
				e.preventDefault();

				video.play(); // Play the video
				hasControls && video.setAttribute('controls', 'controls'); // Show the controls
				button.style.display = 'none';
			});
		}
	});
}
initPlayers('.video-player');

/**
 * BG: a function that can countdown to a specific time (daily) or a future date.
 * output (string) - class or id timer should be output too.
 * parent (string) - target the parent of the timer, should it need to be hide upon completetion.
 * daily (boolean) - if true, daily enabled, if false, specific date.
 * paramFunction (string) - a function to call upon completion
 */

function countdownTimer(output, parent, daily, paramFunction) {
	var output = $(output),
		targetHour = parseInt(output.attr('data-hours')),
		targetMinute = parseInt(output.attr('data-minutes'));

	//if not daily countdown, gather the target date.
	if (daily == false) {
		var targetMonth = parseInt(output.attr('data-month')),
			targetDate = parseInt(output.attr('data-date')),
			targetYear = parseInt(output.attr('data-year'));
	}

	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	//if daily, we set the time
	if (daily == true) {
		var countDown = new Date();
		countDown.setHours(targetHour, targetMinute, 0);
	} else {
		//if date, we define the target date

		//new Date(year, month, day, hours, minutes, seconds, milliseconds)
		var countDown = new Date(
			targetYear,
			targetMonth,
			targetDate,
			targetHour,
			targetMinute,
			00
		);
	}

	function pad(num) {
		return ('0' + parseInt(num)).substr(-2);
	}

	var x = setInterval(outputHTML, second);

	function outputHTML() {
		let now = new Date().getTime(),
			distance = countDown - now;

		var remainingDays = pad(Math.floor(distance / day)),
			remainingHours = pad(Math.floor((distance % day) / hour)),
			remainingMinutes = pad((distance % hour) / minute),
			remainingSeconds = pad((distance % minute) / second);

		if (daily == true) {
			output.html(remainingHours + ' hours, ' + remainingMinutes + ' minutes');
		} else {
			output.html(
				"<span class='time-col'><span class='remaining days'>" +
					remainingDays +
					"</span><span class='time-label'>Days</span></span><span class='time-col'><span class='remaining hours'>" +
					remainingHours +
					"</span><span class='time-label'>Hrs</span></span><span class='time-col'><span class='remaining mins'>" +
					remainingMinutes +
					"</span><span class='time-label'>Mins</span></span><span class='time-col'><span class='remaining secs'>" +
					remainingSeconds +
					"</span><span class='time-label'>Secs</span></span>"
			);
		}

		//if we're pasted the time or date, then...
		if (distance < 0) {
			clearInterval(x);

			if (typeof paramFunction == 'function') {
				paramFunction(parent);
			}
		} else {
			$(parent).addClass('d-block');
		}
	}
}

/**
 * RF: Smooth scrolling on anchor links
 */
document.querySelectorAll('a[href^="#"].scroll-to').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		const elem = document.querySelector(this.getAttribute('href'));
		if (elem) {
			e.preventDefault();

			const offset = document.getElementById('site-header')?.clientHeight | 0;
			const top =
				elem.getBoundingClientRect().top + window.pageYOffset - (offset + 30);
			window.scrollTo({ top: top, behavior: 'smooth' });
		}
	});
});

function setSmartBar() {
	var smartBar = $("#smartbar-app"),
	smartBarHeight = $(".smartbar-wrapper").height();

	if (smartBar.length ) {
		$("#site-header").prepend(smartBar);
		$('body').css('margin-top', smartBarHeight);
	}
}

/*================ Slate ================*/
/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 *
 *
 * @namespace a11y
 */

slate.a11y = {

  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   *
   * @param {JQuery} $element - The element to be acted upon
   */
  pageLinkFocus: function($element) {
    var focusClass = 'js-focus-hidden';

    $element.first()
      .attr('tabIndex', '-1')
      .focus()
      .addClass(focusClass)
      .one('blur', callback);

    function callback() {
      $element.first()
        .removeClass(focusClass)
        .removeAttr('tabindex');
    }
  },

  /**
   * If there's a hash in the url, focus the appropriate element
   */
  focusHash: function() {
    var hash = window.location.hash;

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))) {
      this.pageLinkFocus($(hash));
    }
  },

  /**
   * When an in-page (url w/hash) link is clicked, focus the appropriate element
   */
  bindInPageLinks: function() {
    $('a[href*=#]').on('click', function(evt) {
      this.pageLinkFocus($(evt.currentTarget.hash));
    }.bind(this));
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).on(eventName, function(evt) {
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length) {
        options.$container.focus();
      }
    });
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  removeTrapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};

/**
 * Cart Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Cart template.
 *
 * @namespace cart
 */

slate.cart = {
  
  /**
   * Browser cookies are required to use the cart. This function checks if
   * cookies are enabled in the browser.
   */
  cookiesEnabled: function() {
    var cookieEnabled = navigator.cookieEnabled;

    if (!cookieEnabled){
      document.cookie = 'testcookie';
      cookieEnabled = (document.cookie.indexOf('testcookie') !== -1);
    }
    return cookieEnabled;
  }
};

/**
 * Utility helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions for dealing with arrays and objects
 *
 * @namespace utils
 */

slate.utils = {

  /**
   * Return an object from an array of objects that matches the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  findInstance: function(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
  },

  /**
   * Remove an object from an array of objects by matching the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  removeInstance: function(array, key, value) {
    var i = array.length;
    while(i--) {
      if (array[i][key] === value) {
        array.splice(i, 1);
        break;
      }
    }

    return array;
  },

  /**
   * _.compact from lodash
   * Remove empty/false items from array
   * Source: https://github.com/lodash/lodash/blob/master/compact.js
   *
   * @param {array} array
   */
  compact: function(array) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var resIndex = 0;
    var result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  },

  /**
   * _.defaultTo from lodash
   * Checks `value` to determine whether a default value should be returned in
   * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
   * or `undefined`.
   * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
   *
   * @param {*} value - Value to check
   * @param {*} defaultValue - Default value
   * @returns {*} - Returns the resolved value
   */
  defaultTo: function(value, defaultValue) {
    return (value == null || value !== value) ? defaultValue : value
  }
};

/**
 * Rich Text Editor
 * -----------------------------------------------------------------------------
 * Wrap iframes and tables in div tags to force responsive/scrollable layout.
 *
 * @namespace rte
 */

slate.rte = {
  /**
   * Wrap tables in a container div to make them scrollable when needed
   *
   * @param {object} options - Options to be used
   * @param {jquery} options.$tables - jquery object(s) of the table(s) to wrap
   * @param {string} options.tableWrapperClass - table wrapper class name
   */
  wrapTable: function(options) {
    var tableWrapperClass = typeof options.tableWrapperClass === "undefined" ? '' : options.tableWrapperClass;

    options.$tables.wrap('<div class="' + tableWrapperClass + '"></div>');
  },

  /**
   * Wrap iframes in a container div to make them responsive
   *
   * @param {object} options - Options to be used
   * @param {jquery} options.$iframes - jquery object(s) of the iframe(s) to wrap
   * @param {string} options.iframeWrapperClass - class name used on the wrapping div
   */
  wrapIframe: function(options) {
    var iframeWrapperClass = typeof options.iframeWrapperClass === "undefined" ? '' : options.iframeWrapperClass;

    options.$iframes.each(function() {
      // Add wrapper to make video responsive
      $(this).wrap('<div class="' + iframeWrapperClass + '"></div>');
      
      // Re-set the src attribute on each iframe after page load
      // for Chrome's "incorrect iFrame content on 'back'" bug.
      // https://code.google.com/p/chromium/issues/detail?id=395791
      // Need to specifically target video and admin bar
      this.src = this.src;
    });
  }
};

slate.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:section:reorder', this._onReorder.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

slate.Sections.prototype = $.extend({}, slate.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = $.extend(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (!instance) {
      return;
    }

    if (typeof instance.onUnload === 'function') {
      instance.onUnload(evt);
    }

    this.instances = slate.utils.removeInstance(this.instances, 'id', evt.detail.sectionId);
  },

  _onSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onSelect === 'function') {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onDeselect === 'function') {
      instance.onDeselect(evt);
    }
  },

  _onReorder: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onReorder === 'function') {
      instance.onReorder(evt);
    }
  },

  _onBlockSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockSelect === 'function') {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockDeselect === 'function') {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(function(index, container) {
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

slate.Currency = (function() {
  var moneyFormat = '${{amount}}';

  /**
   * Format money values based on your shop currency settings
   * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
   * or 3.00 dollars
   * @param  {String} format - shop money_format setting
   * @return {String} value - formatted value
   */
  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = slate.utils.defaultTo(precision, 2);
      thousands = slate.utils.defaultTo(thousands, ',');
      decimal = slate.utils.defaultTo(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_space_separator':
        value = formatWithDelimiters(cents, 2, ' ', '.');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, ',', '.');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  };
})();

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

slate.Image = (function() {

  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match) {
      return match[1];
    } else {
      return null;
    }
  }

  /**
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

    if (match) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    } else {
      return null;
    }
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist. Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = (function() {

  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();

    $(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
  }

  Variants.prototype = $.extend({}, Variants.prototype, {

    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function() {
      var currentOptions = $.map($(this.singleOptionSelector, this.$container), function(element) {
        var $element = $(element);
        var type = $element.attr('type');
        var currentOption = {};

        if (type === 'radio' || type === 'checkbox') {
          if ($element[0].checked) {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');

            return currentOption;
          } else {
            return false;
          }
        } else {
          currentOption.value = $element.val();
          currentOption.index = $element.data('index');

          return currentOption;
        }
      });

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = slate.utils.compact(currentOptions);

      return currentOptions;
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;
      var found = false;

      variants.forEach(function(variant) {
        var satisfied = true;

        selectedValues.forEach(function(option) {
          if (satisfied) {
            satisfied = (option.value === variant[option.index]);
          }
        });

        if (satisfied) {
          found = variant;
        }
      });

      return found || null;
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });
      
      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this._updateContentBox(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant image changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
        return;
      }

      this.$container.trigger({
        type: 'variantImageChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function(variant) {
      if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
        return;
      }

      this.$container.trigger({
        type: 'variantPriceChange',
        variant: variant
      });
    },

    _updateContentBox: function(variant) {
	
      var selectedvarid = $('.option.selected').data('value');
      $('.variant-box').hide();
      $('.variant-'+selectedvarid).css('display','flex');

    },
    /**
     * Update history state for product deeplinking
     *
     * @param {object} variant - Currently selected variant
     */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param {object} variant - Currently selected variant
     */
    _updateMasterSelect: function(variant) {
      $(this.originalSelectorId, this.$container)[0].value = variant.id;
    }
  });

  return Variants;
})();


/*================ Templates ================*/
/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
 * @namespace product
 */

theme.Product = (function () {
	var selectors = {
		addToCart: '[data-add-to-cart]',
		addToCartText: '[data-add-to-cart-text]',
		comparePrice: '[data-compare-price]',
		comparePriceText: '[data-compare-text]',
		originalSelectorId: '[data-product-select]',
		priceWrapper: '[data-price-wrapper]',
		productFeaturedImage: '[data-product-featured-image]',
		productJson: '[data-product-json]',
		productPrice: '[data-product-price]',
		productThumbs: '[data-product-single-thumbnail]',
		singleOptionSelector: '[data-single-option-selector]'
	};

	/**
	 * Product section constructor. Runs on page load as well as Theme Editor
	 * `section:load` events.
	 * @param {string} container - selector for the section container DOM element
	 */
	function Product(container) {
		this.$container = $(container);

		// Stop parsing if we don't have the product json script tag when loading
		// section in the Theme Editor
		if (!$(selectors.productJson, this.$container).html()) {
			return;
		}

		var sectionId = this.$container.attr('data-section-id');
		this.productSingleObject = JSON.parse(
			$(selectors.productJson, this.$container).html()
		);

		var options = {
			$container: this.$container,
			enableHistoryState: this.$container.data('enable-history-state') || false,
			singleOptionSelector: selectors.singleOptionSelector,
			originalSelectorId: selectors.originalSelectorId,
			product: this.productSingleObject,
		};

		this.settings = {};
		this.namespace = '.product';
		this.variants = new slate.Variants(options);
		this.$featuredImage = $(selectors.productFeaturedImage, this.$container);

		this.$container.on(
			'variantChange' + this.namespace,
			this.updateAddToCartState.bind(this)
		);
		this.$container.on(
			'variantPriceChange' + this.namespace,
			this.updateProductPrices.bind(this)
		);

		if (this.$featuredImage.length > 0) {
			this.settings.imageSize = slate.Image.imageSize(
				this.$featuredImage.attr('src')
			);
			slate.Image.preload(
				this.productSingleObject.images,
				this.settings.imageSize
			);

			this.$container.on(
				'variantImageChange' + this.namespace,
				this.updateProductImage.bind(this)
			);
		}
	}

	Product.prototype = $.extend({}, Product.prototype, {
		/**
		 * Updates the DOM state of the add to cart button
		 *
		 * @param {boolean} enabled - Decides whether cart is enabled or disabled
		 * @param {string} text - Updates the text notification content of the cart
		 */
		updateAddToCartState: function (evt) {

			var variant = evt.variant;

			if (variant) {
				$(selectors.priceWrapper, this.$container).removeClass('hide');
			} else {
				$(selectors.addToCart, this.$container).prop('disabled', true);
				$(selectors.addToCartText, this.$container).html(
					theme.strings.unavailable
				);
				$(selectors.priceWrapper, this.$container).addClass('hide');
				return;
			}

			if (variant.available) {
				$(selectors.addToCart, this.$container).prop('disabled', false);
				$(selectors.addToCart, this.$container).addClass('variant-available');
				$(selectors.addToCart, this.$container).removeClass(
					'variant-not-available'
				);
				$(selectors.addToCartText, this.$container).html(
					theme.strings.addToCart
				);
			} else {
				//$(selectors.addToCart, this.$container).prop('disabled', true);
				$(selectors.addToCart, this.$container).addClass(
					'variant-not-available'
				);
				$(selectors.addToCart, this.$container).removeClass(
					'variant-available'
				);
				$(selectors.addToCartText, this.$container).html(theme.strings.soldOut);
			}
		},

		/**
		 * Updates the DOM with specified prices
		 *
		 * @param {string} productPrice - The current price of the product
		 * @param {string} comparePrice - The original price of the product
		 */
		updateProductPrices: function (evt) {

			var variant = evt.variant;
			var $comparePrice = $(selectors.comparePrice, this.$container);
			var $compareEls = $comparePrice.add(
				selectors.comparePriceText,
				this.$container
			);

			$(selectors.productPrice, this.$container).html(
				slate.Currency.formatMoney(variant.price, theme.moneyFormat)
			);

			updateMultiBuyInfo(variant.option1);

			if (variant.compare_at_price > variant.price) {
				$comparePrice.html(
					slate.Currency.formatMoney(
						variant.compare_at_price,
						theme.moneyFormat
					)
				);
				$compareEls.removeClass('hide');
			} else {
				$comparePrice.html('');
				$compareEls.addClass('hide');
			}
		},

		/**
		 * Updates the DOM with the specified image URL
		 *
		 * @param {string} src - Image src URL
		 */
		updateProductImage: function (evt) {
			var variant = evt.variant;
			var sizedImgUrl = slate.Image.getSizedImageUrl(
				variant.featured_image.src,
				this.settings.imageSize
			);

			this.$featuredImage.attr('src', sizedImgUrl);
		},

		/**
		 * Event callback for Theme Editor `section:unload` event
		 */
		onUnload: function () {
			this.$container.off(this.namespace);
		},
	});

	//BG: Init slickSlider for Related Products.
function relatedSlickSlider(target) {
    $(target).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows:true,
        dots: false,
        prevArrow: slickPrevArrow,
        nextArrow: slickNextArrow,
        responsive: [
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
        }
        ]
    });
}


//BG: Make the call to the related products API
function relatedProductsAPI() {
var productID = $('.featured-products.related-products').attr('data-product-id');

    //Make the JSON request to the recommendations API, pass over the current product ID.
    $.getJSON('/recommendations/products.json?product_id='+productID+'&limit=8', function(data) {
        //for each product in the API Response, pass over to the output function.
        $.each(data.products,function(i, product) {
            //BG: outputProduct function used in settings/common.js. It's basic styling.
            outputProduct(product,'.featured-products.related-products');
            var increment = i + 1;

            //BG: if we've cycled through all products, trigger the slickInit
            if (data.products.length == increment) {
                //persistentCheck function in setting/common.js
                persistentCheck('.featured-products.related-products .featured__product',4,relatedSlickSlider,'.featured-products.related-products .featured-products-slick',5000);
            }
        });
    });
}

	//Get URL Parameter
	function getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null
			? ''
			: decodeURIComponent(results[1].replace(/\+/g, ' '));
	}

	//BG: if variant parameter is available in the URL, change the selection based on this.
	function changeProductByVariantID() {
		var variantID = getUrlParameter('variant');
		//console.log(variant);

		if (variantID) {
			$('.swatch [data-variant-id="' + variantID + '"]')
				.find('input[type="radio"]')
				.prop('checked', true);
			//console.log('test');
		}
	}

	function productSlick() {
		$('#product-large-images').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			prevArrow: slickPrevArrow,
			nextArrow: slickNextArrow,
			arrows: true
		});

		$('#product-thumbnails').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			prevArrow: slickPrevArrow,
			nextArrow: slickNextArrow,
			asNavFor: '#product-large-images',
			vertical: true,
			verticalSwiping: true,
			focusOnSelect: true
		});
	}

	/*
	* BG: Once countdown has finished, hide it.
	*/
  
	function deliveryCTA(parent) {
		$(parent).addClass('d-none');
	}

	//MJ: Update the multi buy boxes
	function updateMultiBuyInfo(optionStrength) {

		var optionBoxes = $('.pack__options .option');

		//MJ: For each box, perform the below
		optionBoxes.each(function(){
			var strength = $(this).attr('data-strength'),
			pack = $(this).attr('data-pack');

			//MJ: If the strength value attr of the option box matches the strength value passed,
			//show the box. If the pack value attr is Single, perform a click action to make sure
			//the first variant is selected
			if (strength == optionStrength) {
				$(this).addClass('d-flex');
				$(this).removeClass('d-none');

				if ((pack.includes('Single')) || (pack.includes('single'))) {
					$(this).click();
				}

			//MJ: if the strength values don't match, hide the box
			} else {
				$(this).addClass('d-none');
				$(this).removeClass('d-flex');
			}
          	$('.quick__buy__bar .variant').eq(0).text(optionStrength);
          
		});
      	
	}

	//MJ: Updates the main PDP price field, as well as changing the currently selected variant in the dropdown
	//used for adding to cart
	function updateMainProdInfo(optionPrice, optionID) {

		var mainPrice = $('.main__prod__price');

		var optionPriceCurrency = slate.Currency.formatMoney(optionPrice, theme.moneyFormat);

		mainPrice.html(optionPriceCurrency);

		$('.main__pdp__content select[data-product-select] option').attr("selected", false);
      	$('.main__pdp__content select[data-product-select] option[value="'+optionID+'"]').attr("selected", true);
		$(".main__pdp__content select[data-product-select]").val(optionID);
      
      	//PB: Update Quick Buy Bar
		$('.quick__buy__bar select[data-product-select] option').attr("selected", false);
      	$('.quick__buy__bar select[data-product-select] option[value="'+optionID+'"]').attr("selected", true);
		$(".quick__buy__bar select[data-product-select]").val(optionID);
      
      	$(".quickbuy__prod__price").html(optionPriceCurrency);
      	

    }

	//MJ: Listen for clicks on the multi buy boxes
	function detectMultiBuyOptions() {

		//When clicked, get the vars, remove the selected class from all boxes, then add the selected class
		//to the clicked box if it doesn't have it already. Afterwards, call updateMainProdInfo with the selected
		//box's price and variant ID
		$('.pack__options .option').off('click').on('click', function() {
			var price = $(this).attr('data-price'),
			id = $(this).attr('data-value'),
			pack = $(this).attr('data-pack');

			$('.pack__options .option').removeClass('selected');

			if ((pack.includes('Single')) || (pack.includes('single'))) {
				$('.pack__discount__message').addClass('d-none');
				$('.pack__discount__message').removeClass('d-block');
			} else {
				$('.pack__discount__message').addClass('d-block');
				$('.pack__discount__message').removeClass('d-none');
			}

			if (!$(this).hasClass('selected')) {
				$(this).addClass('selected');
			}
          
          	console.log(id);
          	$('.quick__buy__bar .variant').eq(1).text(pack);

			updateMainProdInfo(price, id);
		});
	}

	//BG: Only run on Product Page.
	if ($('body.template-product').length) {
		changeProductByVariantID();
		relatedProductsAPI();
		productSlick();
		countdownTimer('.pdp__delivery__timer .countdown-timer', '.pdp__delivery__timer', true, deliveryCTA);
		detectMultiBuyOptions();
		updateMultiBuyInfo($('.selected-variant').attr('data-option-1'));
	}

	return Product;
})();

/**
 * Customer Addresses Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Customer Addresses
 * template.
 *
 * @namespace customerAddresses
 */

theme.customerAddresses = (function() {
  var $newAddressForm = $('#AddressNewForm');

  if (!$newAddressForm.length) {
    return;
  }

  // Initialize observers on address selectors, defined in shopify_common.js
  if (Shopify) {
    new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
      hideElement: 'AddressProvinceContainerNew'
    });
  }

  // Initialize each edit form's country/province selector
  $('.address-country-option').each(function() {
    var formId = $(this).data('form-id');
    var countrySelector = 'AddressCountry_' + formId;
    var provinceSelector = 'AddressProvince_' + formId;
    var containerSelector = 'AddressProvinceContainer_' + formId;

    new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
      hideElement: containerSelector
    });
  });

  // Toggle new/edit address forms
  $('.address-new-toggle').on('click', function() {
    $newAddressForm.toggleClass('hide');
	  
	if ($(this).hasClass('address-new-primary')) {
		$(this).addClass('hide');
	}
	  
	if ($(this).hasClass('address-new-secondary')) {
		$('.address-new-primary').removeClass('hide');
	}
	  
  });

  $('.address-edit-toggle').on('click', function() {
    var formId = $(this).data('form-id');
    $('#EditAddress_' + formId).toggleClass('hide');
	  
	if ($(this).hasClass('address-edit-primary')) {
		$(this).addClass('hide');
	}
	  
	if ($(this).hasClass('address-edit-secondary')) {
		$('.address-edit-primary').removeClass('hide');
	}
  });

  // $('.address-delete').on('click', function() {
  //   var $el = $(this);
  //   var formId = $el.data('form-id');
  //   var confirmMessage = $el.data('confirm-message');
  //   if (confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {
  //     Shopify.postLink('/account/addresses/' + formId, {parameters: {_method: 'delete'}});
  //   }
  // });
})();

/**
 * Password Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Password template.
 *
 * @namespace password
 */

theme.customerLogin = (function() {
  var config = {
    recoverPasswordForm: '#RecoverPassword',
    hideRecoverPasswordLink: '#HideRecoverPasswordLink'
  };

  if (!$(config.recoverPasswordForm).length) {
    return;
  }

  checkUrlHash();
  resetPasswordSuccess();

  $(config.recoverPasswordForm).on('click', onShowHidePasswordForm);
  $(config.hideRecoverPasswordLink).on('click', onShowHidePasswordForm);

  function onShowHidePasswordForm(evt) {
    evt.preventDefault();
    toggleRecoverPasswordForm();
  }

  function checkUrlHash() {
    var hash = window.location.hash;

    // Allow deep linking to recover password form
    if (hash === '#recover') {
      toggleRecoverPasswordForm();
    }
  }

  /**
   *  Show/Hide recover password form
   */
  function toggleRecoverPasswordForm() {
    $('#RecoverPasswordForm').toggleClass('hide');
    $('#CustomerLoginForm').toggleClass('hide');
  }

  /**
   *  Show reset password success message
   */
  function resetPasswordSuccess() {
    var $formState = $('.reset-password-success');

    // check if reset password form was successfully submited.
    if (!$formState.length) {
      return;
    }

    // show success message
    $('#ResetSuccess').removeClass('hide');
  }
})();

//Get URL Parameters 
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

//create Cookie
function setCookie(name,value,days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

//Get cookie value
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

//Delete cookie
function eraseCookie(name) {
	document.cookie = name+'=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
}



function collectionViews() {
	var collectionViewSelect = $('.collection-view li'),
		collectionView = $('#bc-sf-filter-products');

	if (getCookie('collectionView')) {
		collectionView.attr('class','row collection-view-six');
		collectionViewSelect.removeClass('active');
		$('.collection-view li.collection-view-six').addClass('active');
	}

	collectionViewSelect.click(function(){
		var collectionViewClass = $(this).attr('class').split(' ')[0];

		collectionViewSelect.removeClass('active');
		$(this).addClass('active');

		collectionView.attr('class','row '+collectionViewClass);

		if (collectionViewClass === 'collection-view-six' ) {
			setCookie('collectionView','six', 365)
		} else {
			eraseCookie('collectionView');
		}

	});
}

function filterToggle() {
	var filterTitle = $('.filter-title'),
		filterSidebar = $('.filter-sidebar');
	
	filterTitle.off('click').on('click', function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			filterSidebar.slideUp();
		} else {
			$(this).addClass('active');
			filterSidebar.slideDown();
		}
	});
}

//BG: For each product, find the related product colour and link to it.
function collectionProductColours() {
	var collectionProducts = $('.collection-listing .product-single');

	//Loop through the product list, and get the productID for each product. The loop through the second list of products, and match them based on the productGroup.
	collectionProducts.each(function(){
	var productID = $(this).attr('data-product-id'),
		productGroup = $('.collection-product-colours li[data-product-id="'+productID+'"]').attr('data-product-group'),
		productGroupCollection = $('.collection-product-colours li[data-product-group="'+productGroup+'"]');

		//Loop through the product grouping, and append the products to their related grouping.
		productGroupCollection.each(function(){
			var thisProductID = $(this).attr('data-product-id'),
				thisProductColour = $(this).attr('data-product-colour'),
				thisProductImage = $(this).attr('data-product-image-large'),
				thisProductImageSecondary = $(this).attr('data-product-image-secondary'),
				thisProductURL = $(this).attr('data-product-url');

				if (thisProductID == productID) {
					thisProductColour = thisProductColour + " primary-product active";
				}

				var list = '<li class="'+thisProductColour+'" data-product-id="'+thisProductID+'" data-product-image="'+thisProductImage+'" data-product-image-secondary="'+thisProductImageSecondary+'" data-product-url="'+thisProductURL+'"></li>';

			//if product has colour....then append it.
			if (thisProductColour) {	
				if (thisProductID == productID) {
					$('.collection-listing .product-single[data-product-id="'+productID+'"] .product-colours ul').prepend(list);
				} else {
					$('.collection-listing .product-single[data-product-id="'+productID+'"] .product-colours ul').append(list);
				}
			}

			//if more than one colour, show colours.
			if ($('.collection-listing .product-single[data-product-id="'+productID+'"] .product-colours li').length > 1) {
				$('.collection-listing .product-single[data-product-id="'+productID+'"] .product-colours').removeClass('d-none');
			}
		});
	})
}

//BG: used in conjuction with the above function, once the above function has ran, we then need to allow the user to switch between the colours, and show image and update the product link.
function collectionProductColourSwitcher() {
	var productColours = $('.collection-listing .product-colours li'),
		interactionType = "";

	if ($(window).width() <= screenMD) {
		interactionType = "click";
	} else {
		interactionType = "mouseover";
	}

	productColours.on(interactionType, function() {
		var productImage = $(this).attr('data-product-image'),
			productImageSecondary = $(this).attr('data-product-image-secondary'),
			productURL = $(this).attr('data-product-url'),
			productID = $(this).attr('data-product-id'),
			parentProductID = $(this).closest('#product_single').attr('data-product-id'),
			productColours = $(this).closest('#product_single').find('.product-colours li'),
			primaryImage = $(this).closest('#product_single').find('.product-image img'),
			parentProductURL = $(this).closest('#product_single').find('a'),
			quickView = $(this).closest('#product_single').find('.product-quickview span');

			productColours.removeClass('active');
			$(this).addClass('active');

			primaryImage.attr('src', productImage);
			primaryImage.attr('data-second-image', productImageSecondary);
			parentProductURL.attr('href', productURL);
			quickView.attr('data-product-url', productURL);
	});
}

//On the initial page load, set the sorting option to the first option.
function sortFilter() {
	if (!getUrlParameter('sort')) {
		$( window ).one( "load", function() {
			$('#bc-sf-filter-top-sorting select option:first').attr("selected",true);
		});
	}
}

//BG: Changing the method of adding a second image. Rather than loading in the image as default, i'm loading in the URL to the second image, and will load it on hover.
function collectionProductHover() {
	$('.collection-listing .product-single .product-image-hover img').on("mouseenter", function(){
		var firstImage = $(this).attr('data-src'),
			secondImage = $(this).attr('data-second-image');
			
			$(this).attr('data-src',secondImage);
			$(this).attr('src',secondImage);
			$(this).attr('data-srcset',secondImage);
			$(this).attr('srcset',secondImage);
			$(this).attr('data-second-image',firstImage);
	});
	$('.collection-listing .product-single .product-image-hover img').on("mouseleave", function(){
		var secondImage = $(this).attr('data-src'),
			firstImage = $(this).attr('data-second-image');
			
			$(this).attr('data-src',firstImage);
			$(this).attr('src',firstImage);
			$(this).attr('data-srcset',firstImage);
			$(this).attr('srcset',firstImage);
			$(this).attr('data-second-image',secondImage);
	});
}

//MJ: Is used for the price labels underneath the price range filter. We hide the labels that come from the
//filter itself, and instead create custom ones using the product data from the collection the user is on.
//The client wanted to only have prices of products with no variants, variants with pack options which have Single Pack as an
//option on them, and non-pack variants to be used on the filter. The filter still works in the way the app inteneds, i.e. getting
//all variants, but the display of the labels will only show what the client requested.
function getCollectionVariants(collectionHandle) {

	var allFilterPrices = [],
	firstAllFilterPrice,
	lastAllFilterPrice;

	//MJ: Make a request using the collection handle, which is set via a data attribute on the collection page
	$.getJSON('/collections/'+collectionHandle+'/products.json', function(data) {

		//MJ: For each product returned, do the following
		$.each(data.products,function(i, product) {

			//MJ: For as many variants as there are in each product, do the following
			for (var i = 0; i < product.variants.length; i++) {

				//MJ: Set option2 var
				var option2 = product.variants[i].option2;

				//MJ: If the amount of variants for the product is 1, add the product price to the array
				if (product.variants.length == 1) {
					allFilterPrices.push(product.variants[i].price);
				}

				//MJ: If the variant's titile includes pack, do a check if option2 on that variant is Single Pack. If so,
				//add that variants price to the array. If the variants title doens't include pack, but there is more than 1 variant,
				//we add that variants price to the array.
				if (product.variants[i].title.includes('Pack')) {
					if (option2.includes('Single Pack')) {
						allFilterPrices.push(product.variants[i].price);
					}
				} else if (product.variants.length > 1) {
					allFilterPrices.push(product.variants[i].price);
				}
				
			}

		});

		//MJ: Sort the all prices array, from low to high
		allFilterPrices.sort(function(a, b){return a-b});

		//console.log('here ' + allFilterPrices);

		//MJ: Set the first and last price elements
		firstAllFilterPrice = allFilterPrices[0],
    	lastAllFilterPrice = allFilterPrices[allFilterPrices.length - 1];

		//MJ: Set a number version of the last item in the array
		var lastAllFilterPriceNum = parseInt(lastAllFilterPrice),
		halfNum;

		//MJ: Get the midpoint value, then format it
		halfNum = lastAllFilterPriceNum / 2;
		halfNum = halfNum.toFixed(2);

		// MJ: Sets the text of the corresponding elements using the above values
		$('.price__labels .first').text('£' + firstAllFilterPrice);
		$('.price__labels .last').text('£' + lastAllFilterPrice);

		//MJ: Only add the half value if the first and last values aren't the same
		if (firstAllFilterPrice !== lastAllFilterPrice) {
			$('.price__labels .half').text('£' + halfNum);
		}

		//MJ: Append the updated price labels element to the price filter
		$('.price__labels').clone().appendTo($('.bc-sf-filter-option-block-price'));
      
    });
}

collectionViews();
filterToggle();
collectionProductHover();
function forgotPassword() {
	var loginForm = $('#CustomerLoginForm'),
		passwordForm = $('#RecoverPasswordForm');

	$('.show-forgot-password').click(function () {
		loginForm.addClass('hide');
		passwordForm.removeClass('hide');
	});

	$('.hide-forgot-password').click(function () {
		loginForm.removeClass('hide');
		passwordForm.addClass('hide');
	});
}

function resetPasswordForm() {
	var formState = $('.reset-password-success');

	if (formState.length) {
		$('#ResetSuccess').removeClass('hide');
	}
}

//BG: Check to see if the form is valid.
function checkFormValidation(form) {
	var invalidFields = form.find('label.required'),
		invalidFieldsCount = 0,
		validFieldsCount = 0;

	invalidFields.each(function () {
		if ($(this).hasClass('validated')) {
			validFieldsCount++;
		} else {
			invalidFieldsCount++;
		}
	});
	if (invalidFieldsCount === 0) {
		form.removeClass('validation-invalid');
	}

	console.log('invalid count:' + invalidFieldsCount);
	console.log('valid count:' + validFieldsCount);
}

//BG: build error message, what the message contains and where it should output.
function feedbackMessage(field, status, message, form) {
	var messageNoWhitespace = field.replace(/\s/g, ''),
		html =
			"<div class='ajaxfeedback " +
			status +
			' ' +
			messageNoWhitespace +
			"'>" +
			message +
			'</div>';

	//if error messages are already showing, don't show again.
	if ($('.ajaxfeedback.' + messageNoWhitespace).length == 0) {
		form.before(html);
	}
}

function confirmPasswords(form) {
	$('#CreatePassword').on('input', function () {
		var passwordOneValue = $('#PasswordOne').val(),
			passwordTwoValue = $('#CreatePassword').val();

		if (passwordOneValue != passwordTwoValue) {
			$('.ajaxfeedback.Password').remove();
			feedbackMessage('Password', 'error', 'Passwords do not match', form);
			$('label.password-required').removeClass('validated');
		} else {
			$('.ajaxfeedback.Password').remove();
			$('label.password-required').addClass('validated');
			feedbackMessage('Password', 'success', 'Passwords match', form);
			checkFormValidation(form);
		}
	});
}

//BG: Check input values
function checkRequiredFields(form) {
	var formFields = form.find('input.required:not(.password-required)'),
		passwordFields = form.find('input.password-required');

	//For each required field....
	formFields.each(function () {
		//on input should detect: paste, right click, deleting text or typing text.
		$(this).on('input', function () {
			var thisValue = $(this).val(),
				label = $(this).attr('id'),
				labelNoWhitespace = label.replace(/\s/g, '');

			//If the value is greater than 0
			//add valid input classes and remove invalid messages
			if (thisValue.length > 0) {
				$(this).addClass('input-valid');
				$(this).removeClass('input-invalid');
				$('label[for="' + labelNoWhitespace + '"]').addClass('validated');
				$('.ajaxfeedback.' + labelNoWhitespace).remove();
				checkFormValidation(form);
			} else {
				$(this).removeClass('input-valid');
				$(this).addClass('input-invalid');
				$('label[for="' + labelNoWhitespace + '"]').removeClass('validated');
			}
		});
	});

	if (passwordFields.length > 0) {
		confirmPasswords(form);
	}
}

//Highlighted the required fields to the user, and output error message.
function highlightRequiredFields(form) {
	//get list of labels
	var invalidFormLabels = form.find('label.required:not(.validated)'),
		once = 0;

	invalidFormLabels.each(function () {
		if ($(this).hasClass('password-required')) {
			//Run once
			if (once == 0) {
				feedbackMessage(
					'Password',
					'error',
					'<strong>Password</strong> this field is required.',
					form
				);
				once++;
			}
		} else {
			var labelValue = $.trim($(this).text());
			feedbackMessage(
				labelValue,
				'error',
				'<strong>' + labelValue + '</strong> this field is required.',
				form
			);
		}
	});
}

/* 
BG: Basic form validation intended for the registration form.
*/
function registrationFormValidation() {
	var registrationForm = $('#create_customer');

	checkRequiredFields(registrationForm);

	registrationForm.on('submit', function (e) {
		//If class is present, don't submit form.
		if ($(this).hasClass('validation-invalid')) {
			e.preventDefault();
			highlightRequiredFields(registrationForm);
		}
	});
}

function addressEditDelete() {
	//Delete Address, confirm user action.
	$('.address-delete').on('click', function () {
		var $el = $(this);
		var formId = $el.data('form-id');
		var confirmMessage = $el.data('confirm-message');
		if (
			confirm(confirmMessage || 'Are you sure you wish to delete this address?')
		) {
			Shopify.postLink('/account/addresses/' + formId, {
				parameters: { _method: 'delete' },
			});
		}
	});

	//Toggle edit address
	$('.edit-address').on('click', function (e) {
		e.preventDefault();
		var formId = $(this).attr('data-form-id');
		$('#EditAddress_' + formId).toggleClass('hide');

		if ($(this).hasClass('address-edit-primary')) {
			$(this).addClass('hide');
		}

		if ($(this).hasClass('address-edit-secondary')) {
			$('.address-edit-primary').removeClass('hide');
		}
	});
}

function accountNavigation() {
	var accountSidebarTitle = $('.account-sidebar h3'),
		accountSidebarNavigation = $('.account-sidebar-navigation');

	accountSidebarTitle.on('click', function () {
		accountSidebarTitle.toggleClass('active');
		accountSidebarNavigation.toggleClass('active');
	});
}

function orderList() {
	const orders = document.querySelectorAll('#account .orders .order'); // Get all the page orders

	orders.forEach((order) => {
		const btns = order.querySelectorAll('.order__details-btn'); // Get the order buttons

		btns.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				// On button click toggle expanded state
				e.preventDefault();
				order.classList.toggle('expanded');
			});
		});
	});
}

orderList();
addressEditDelete();
resetPasswordForm();
forgotPassword();
registrationFormValidation();
accountNavigation();

function sidebarLinks() {
	var sidebarTitle = $('.sidebar-title'),
		sidebarContent = $('.sidebar-content');

	if ($(window).width() <= screenMD) {
		
		sidebarTitle.off('click').on('click', function(){
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).next('.sidebar-content').slideUp();
			} else {
				$(this).addClass('active');
				$(this).next('.sidebar-content').slideDown();
			}
		});
		
	} else {
		sidebarTitle.off('click');
		sidebarContent.css('display', '');
	}
}

sidebarLinks();

$(window).on('resize',function() {
    sidebarLinks();
});
function returnToBlog() {
	var blogTags = $('.blog-tags li a');

	if ($(blogTags).hasClass('active')) {
		$('.return-to-blog').removeClass('d-none');
	}
}

function calculateReadingTime() {
	const readingTime = document.getElementById('readingtime');
	if (readingTime) {
		const text = document.getElementById('article').innerText;
		const wpm = 225;
		const words = text.trim().split(/\s+/).length;
		const time = Math.ceil(words / wpm);
		document.getElementById('time').innerText = time + ' mins';
	}
}

if ($('body.template-blog').length) {
	
	
}

returnToBlog();
calculateReadingTime();


/*================ Sections ================*/
function textFeaturesSlick() {
    
    if ($(window).width() < screenLG) {
        $('.header-text-features .text-features-slick').each(function(){
            var textFeatureSlick = $(this);

            if (!$(this).hasClass('slick-initialized')) {
                $(textFeatureSlick).slick({
                    arrows: false,
					autoplay: true,
					autoplaySpeed: 5000
                });
            }
            
        });
    }
    else {
        $('.header-text-features .text-features-slick').each(function(){
            var textFeatureSlick = $(this);

            if ($(this).hasClass('slick-initialized')) {
                $(textFeatureSlick).slick('unslick');
            }
        });
    }
    
}

$(window).on('resize', function() {
    textFeaturesSlick();
});

textFeaturesSlick();
//Open and close Search
function siteSearch() {
	var searchIcon = $('#site-header .header-search-icon .icon-search'),
		searchIconDiv = $('#site-header .header-search-icon'),
		searchBar = $('.search-bar'),
		searchCloseIcon =  $('#site-header .header-search-icon .icon-close'),
		overlay = $('.nav-overlay');

	searchIcon.click(function(){
		if ($(this).hasClass('active')) {
			searchIconDiv.removeClass('active');
			searchBar.removeClass('active');
			overlay.removeClass('active');
		} else {
			searchIconDiv.addClass('active');
			searchBar.addClass('active');
			searchBar.find('input').focus();
			overlay.addClass('active');
		}
	});

	searchCloseIcon.click(function(){
		searchIconDiv.removeClass('active');
		searchBar.removeClass('active');
		overlay.removeClass('active');
	});

	overlay.click(function() {
		searchIconDiv.removeClass('active');
		searchBar.removeClass('active');
		overlay.removeClass('active');
	})
}

//Toggle open and close of mobile navigation
function mobileNavigationMenuToggle() {
	var menuIcon = $('#site-header .header-mobile-menu'),
		menu = $('#site-navigation'),
		overlay = $('.nav-overlay');

	menuIcon.click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			menu.removeClass('active');
			overlay.removeClass('active');
			$('html').removeClass('nav-open');
			$('body').removeClass('nav-push');

		} else {
			$(this).addClass('active');
			menu.addClass('active');
			overlay.addClass('active');
			$('html').addClass('nav-open');
			$('body').addClass('nav-push');
		}
	});

	overlay.click(function() {
		$(this).removeClass('active');
		menu.removeClass('active');
		menuIcon.removeClass('active');
		$('body').removeClass('nav-push');
		$('html').removeClass('nav-open');
	})
}

//Toggle open and close of the individual links within the navigation.
function mobileNavigation() {
	var parentLink = $('#site-navigation .has-child > a'),
		secondaryLink = $('#site-navigation .sub-menu-menu-title'),
		tabLinks = $('#site-navigation .mobile-navigation-tabs ul li a'),
		primaryNavigation = $('#site-navigation .top-level'),
		secondaryNavigation = $('#site-navigation .account-navigation-links');
	
	if ($(window).width() <= screenLG) {
		//console.log('screenSM and Lower');
		
		//unbind and bind click action - can cause issues when resizing browser
		parentLink.off('click').on('click', function(e) {
			//print anchor from working.
			e.preventDefault();
			
			//add active class to parent and slide down child menus.
			if ($(this).parent('li').hasClass('active')) {
				$(this).next('.sub-menu-container').slideUp(400, function(){
					$(this).parent('li').removeClass('active');	
				});
			} else {
				parentLink.parent('li').removeClass('active');
				parentLink.next('.sub-menu-container').slideUp();
				$(this).next('.sub-menu-container').slideDown(400, function() {
					$(this).parent('li').addClass('active');
				});
			}
		});

		secondaryLink.off('click').on('click', function(e) {
			var link = $(this);
			if ($(this).hasClass('active')) {
				$(this).next('ul').slideUp(400, function(){
					link.removeClass('active');
				});
			} else {
				secondaryLink.removeClass('active').next('ul').slideUp();
				$(this).next('ul').slideDown(400, function(){
					link.addClass('active');
				});
			}
		});

		tabLinks.off('click').on('click', function(e){
			e.preventDefault();

			var hash = $(this).attr('href');
			
			if (hash == "#account") {
				primaryNavigation.addClass('d-none');
				secondaryNavigation.removeClass('d-none');
				$('#site-navigation .mobile-navigation-tabs ul li').removeClass('active');
				$(this).parent().addClass('active');
			} else {
				primaryNavigation.removeClass('d-none');
				secondaryNavigation.addClass('d-none');
				$('#site-navigation .mobile-navigation-tabs ul li').removeClass('active');
				$(this).parent().addClass('active');
			}

		});

		$('#site-navigation').addClass('transition');
		
	} else {
		parentLink.off('click');
		parentLink.next('.sub-menu').css('display', '');
		secondaryLink.off('click');
		secondaryLink.next('ul').css('display','');
		secondaryNavigation.addClass('d-none');
		primaryNavigation.removeClass('d-none');
		$('#site-navigation .mobile-navigation-tabs ul li').removeClass('active');
		$('#site-navigation .mobile-navigation-tabs ul li:first-of-type').addClass('active');
		
		$('#site-navigation').removeClass('active transition');
		$('.nav-overlay').removeClass('active');
		$('.header-mobile-menu').removeClass('active');
		$('body').removeClass('nav-push');
		//console.log('greater than screenSM');
		
	}
}

function desktopNavigation() {
	var mainNavigation = $('#site-navigation'),
		navOverlay = $('.nav-overlay'),
		parentLink = $('#site-navigation .has-child');
	
	if ($(window).width() >= screenLG) {
		//console.log('Screen LG & Greater');
		
		parentLink.on("mouseover", function() {
			$(this).addClass('active');  
			$(this).find('.menu').addClass('active');
			navOverlay.addClass('active');

			//UPDATE
			//BG: for performance reasons, we are now going to load the images within the mega menu when the user hovers on the menu.

			var navigationImages = $(this).find('.sub-menu-image img');
			navigationImages.each(function(){
				var imageURL = $(this).attr('data-image-url')
				if (imageURL) {
					$(this).attr('src',imageURL);
					$(this).removeClass('img-full');
				}
			});
		

		});
		
		parentLink.on("mouseout", function() {
			$(this).removeClass('active');  
			$(this).find('.menu').removeClass('active');
			navOverlay.removeClass('active');
		});

		
		
	} else {
		//console.log('Lower than Screen LG');
		mainNavigation.off("mouseover");
		mainNavigation.off("mouseout");
		parentLink.off("mouseover");
		parentLink.off("mouseout");
	}
}

//BG: Need to move the navigation when on mobile so it doesn't clash with the fixed header.
function moveNavigation() {

	var navigationContainer = $('.site-navigation-container'),
		bodyContainer = $('.body-container'),
		navOverlay = $('.nav-overlay'),
		navigation = $('#site-navigation');


	if ($(window).width() <= screenLG) {
		
		navigation.insertBefore(bodyContainer);
		navOverlay.insertBefore(bodyContainer);

	} else {
		navigationContainer.append(navigation);
		navOverlay.insertAfter('#MainContent');
	}
}

//BG: Because the header is fixed, we need to add padding to ensure nothing is hidden behind the header.
function headSpaceFix() {
	var header = $('#site-header');

	var headerHeight = header.outerHeight(true);
	
	$('body').css('padding-top',headerHeight);
}

function headroom() {
	// grab an element
	var header = document.querySelector("header");
	// construct an instance of Headroom, passing the element
	var headroomHeader  = new Headroom(header, {
		"offset": 150
	});
	// initialise
	headroomHeader.init(); 
}

function miniBasketFunc() {
	var overlay = $('.nav-overlay'),
	headerBasket = $('.header-basket');
	headerBasketIcon = $('.header-basket .cart-icon');
	headerBasketClose =  $('.cart-mini-header .icon-close');

	//MJ: If desktop, toggle basket and overlay on mouseover. Otherwise, do it on click
	if ($(window).width() >= screenLG) {
		headerBasket.on("mouseover", function() {
			headerBasket.addClass('active');
			overlay.addClass('active');
		});
	
		headerBasket.on("mouseout", function() {
			headerBasket.removeClass('active');
			overlay.removeClass('active');
		});
	} else {
		headerBasketIcon.on("click", function() {
			headerBasket.addClass('active');
			$('body').addClass("fixed-pos");
		});
	}

	//MJ: Config the close icon 
	headerBasketClose.on("click", function() {
		headerBasket.removeClass('active');
		overlay.removeClass('active');
		$('body').removeClass("fixed-pos");
	});
	
}

$(document).ready(function() {	
    siteSearch();
    mobileNavigationMenuToggle();
    mobileNavigation()
	desktopNavigation();
	setTimeout(function () { headSpaceFix(); }, 500);
	moveNavigation();
	miniBasketFunc();
});

$(window).on('resize',function() {
    mobileNavigation();
	desktopNavigation();
	headSpaceFix();
	moveNavigation();
});
function footerFeaturedSlick() {
    
    if ($(window).width() < screenMD) {
        $('.footer__featured__on .footer-featured-slick').each(function(){
            var footerFeaturedSlick = $(this);

			if (!$(this).hasClass('slick-initialized')) {
				$(footerFeaturedSlick).slick({
                    prevArrow: slickPrevArrow,
					nextArrow: slickNextArrow,
					autoplaySpeed: 5000
                });
            }
        });
    }
    else {
        $('.footer__featured__on .footer-featured-slick').each(function(){
            var footerFeaturedSlick = $(this);

            if ($(this).hasClass('slick-initialized')) {
                $(footerFeaturedSlick).slick('unslick');
            }
        });
    }
    
}

$(window).on('resize', function() {
    footerFeaturedSlick();
});

footerFeaturedSlick();
// =require sections/featured-images-slider.js
function featuredProductsSlick() {
    $('.featured__products .featured-products-slick').each(function(){
        $($(this)).slick({
            prevArrow: slickPrevArrow,
            nextArrow: slickNextArrow,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    });
}

function featuredProductsEqualize() {
	var elementGroup = $('*[data-prod-equalize]').attr('data-prod-equalize');

	if (elementGroup) {
		var elementGroups = elementGroup.split(',');
		$i = 0;

		$(elementGroups).each(function () {
			var thisTarget = elementGroups[$i];
			var equalizerItems = $('[data-prod-equalize-watch="' + thisTarget + '"]');

			var maxHeight = 0;
			$(equalizerItems).each(function () {
				if ($(this).innerHeight() > maxHeight) {
					maxHeight = $(this).innerHeight();
				}
			});
			$(equalizerItems).each(function () {
				$(this).innerHeight(maxHeight);
			});
			$i++;
		});
	}
}

if (($('body.template-index').length) || (($('body.template-cart').length)) || (($('body.template-page').length))) {
    featuredProductsSlick();
    featuredProductsEqualize();

	$(window).on('resize',function() {
		featuredProductsEqualize();
	});
}
function heroSlickInit() {
    $('.hero-slick').each(function(){
        var heroSlick = $(this);
        $(heroSlick).slick({
                prevArrow: slickPrevArrow,
                nextArrow: slickNextArrow,
                adaptiveHeight: true
        });
    });
}

//MJ: Update height of videos in hero banner to match the slick parent
function setVideoHeight(containerHeight) {
    var videoDiv = $('.hero-item .hero-video');
    videoDiv.height(containerHeight);
}

heroSlickInit();

if ($(window).width() < screenLG) {
    $(document).ready(function () {
        setVideoHeight($('.hero').height());
    });
   
    $(window).on('resize', function() {
        setVideoHeight($('.hero').height());
    });
}
function featuredBlogsSlick() {
	$('.featured__blogs .featured-blogs-slick').each(function () {
		$($(this)).slick({
			prevArrow: slickPrevArrow,
			nextArrow: slickNextArrow,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			centerMode: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});
	});
}

//MJ: Set all article content divs to same height
function featuredBlogsEqualize() {

	var elementGroup = $('*[data-blog-equalize]').attr('data-blog-equalize');

	if (elementGroup) {
		var elementGroups = elementGroup.split(',');
		$i = 0;

		$(elementGroups).each(function () {
			var thisTarget = elementGroups[$i];
			var equalizerItems = $('[data-blog-equalize-watch="' + thisTarget + '"]');

			var maxHeight = 0;
			$(equalizerItems).each(function () {
				if ($(this).innerHeight() > maxHeight) {
					maxHeight = $(this).innerHeight();
				}
			});
			$(equalizerItems).each(function () {
				$(this).innerHeight(maxHeight);
			});
			$i++;
		});
	}

}

function showMoreButton() {
	var button = document.getElementById('show-more');
	var nextUrl = button.href;
	let loading = false;
	var page = 2;

	if (nextUrl) {
		// Make ajax call to get new posts
		button.addEventListener('click', (e) => {

			e.preventDefault();
			if (!loading) {
				$.ajax({
					url: nextUrl,
					type: 'GET',
					beforeSend: () => {
						loading = true;
						button.classList.add('loading');
					},
				}).done((data) => {
					// Append data
					$('.featured__blogs').append($(data).find('.featured__blogs').html());

					loading = false;
					button.classList.remove('loading');

					page = page + 1;
					$("#show-more").attr('href', '/blogs/posts?page=' + page);
					nextUrl = '/blogs/posts?page=' + page;
				});
			}
		});

	} else {
		button.remove();
	}
}

if ($('#show-more').length) {
	showMoreButton();
}

if (($('body.template-index').length) || ($('body.template-page').length)) {
	featuredBlogsSlick();
	featuredBlogsEqualize();

	$(window).on('resize',function() {
		featuredBlogsEqualize();
	});
}
function timelineSlick() {
	$('.timeline-slick').each(function () {
		$($(this)).slick({
			prevArrow: slickPrevArrow,
			nextArrow: slickNextArrow,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 776,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});
	});
}

timelineSlick();

function featuredCollectionsSlick() {
    $('.featured__collections .featured-collections-slick').each(function(){
        $($(this)).slick({
            prevArrow: slickPrevArrow,
            nextArrow: slickNextArrow,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 776,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false
                    }
                }
            ]
        });
    });
}

function featuredCollectionsEqualize() {
	var elementGroup = $('*[data-col-equalize]').attr('data-col-equalize');

	if (elementGroup) {
		var elementGroups = elementGroup.split(',');
		$i = 0;

		$(elementGroups).each(function () {
			var thisTarget = elementGroups[$i];
			var equalizerItems = $('[data-col-equalize-watch="' + thisTarget + '"]');

			var maxHeight = 0;
			$(equalizerItems).each(function () {
				if ($(this).innerHeight() > maxHeight) {
					maxHeight = $(this).innerHeight();
				}
			});
			$(equalizerItems).each(function () {
				$(this).innerHeight(maxHeight);
			});
			$i++;
		});
	}
}

if (($('body.template-index').length) || ($('body.template-page').length)) {
    featuredCollectionsSlick();
    featuredCollectionsEqualize();

	$(window).on('resize',function() {
		featuredCollectionsEqualize();
	});
}
function reviewsSlick() {
    
    if ($(window).width() < screenMD) {
        $('.reviews__section .review-cards-slick').each(function(){
            var reviewCardSlick = $(this);

            if (!$(this).hasClass('slick-initialized')) {
                $(reviewCardSlick).slick({
                    prevArrow: slickPrevArrow,
                    nextArrow: slickNextArrow,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                });
            }
            
        });
    }
    else {
        $('.reviews__section .review-cards-slick').each(function(){
            var reviewCardSlick = $(this);

            if ($(this).hasClass('slick-initialized')) {
                $(reviewCardSlick).slick('unslick');
            }
        });
    }
    
}

$(window).on('resize', function() {
    reviewsSlick();
});

reviewsSlick();

/*================ Snippets ================*/
function quickviewVariant() {
	var variants = $('.product-quickview-frame .swatch-element'),
		variantInput = $('.product-quickview-frame .product-variant-id');

	$(variants).click(function () {
		var variantID = $(this).attr('data-variant-id');
		$(variants).removeClass('active');
		$(this).addClass('active');

		$(variantInput).attr('value', variantID);
	});
}

function quickviewSlick() {
	$('.product-quickview-frame .product-detail-images').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: slickPrevArrow,
		nextArrow: slickNextArrow,
		arrows: true,
		fade: true,
	});
}

function quickviewAddToBasket() {
	$('.product-quickview-frame .btn-add-to-cart').click(function () {
		$('.product-quickview-frame form').submit(function (e) {
			e.preventDefault();
			addToCart($(this));
		});

		setTimeout(function () {
			$('.product-quickview-frame').removeClass('active');
			$('.product-quickview-overlay').removeClass('active');
			$('.product-quickview-frame .product-frame').html('');
		}, 2500);
	});
}

function quickView() {
	var quickViewBtn = $('.product-quickview .btn'),
		quickViewFrame = $('.product-quickview-frame'),
		quickViewOverlay = $('.product-quickview-overlay'),
		quickViewClose = $('.product-quickview-frame .frame-close'),
		quickViewProduct = $('.product-quickview-frame .product-frame');

	$(quickViewBtn).on('click', function () {
		var productURL = $(this).attr('data-product-url'),
			productAvailability = $(this).attr('data-product-availability');

		console.log(productAvailability);

		quickViewFrame.addClass('active');
		quickViewOverlay.addClass('active');
		$('html,body').addClass('quickview-open');

		$.ajax({
			type: 'GET',
			url: productURL + '.json',
			dataType: 'json',
			success: function (data) {
				console.log(data);

				//if compare price (sale price) is available
				var productComparePrice = '';
				if (
					data.product.variants[0].compare_at_price >
					data.product.variants[0].price
				) {
					productComparePrice =
						'<span class="product-price-original"><span class="money">' +
						data.product.variants[0].compare_at_price +
						'</span></span>';
				}

				//get product variants
				// var productVariants = '';
				// console.log(data.product.options.values);
				// console.log('yup');
				// $.each(data.product.options.values, function (i, variant) {
				// 	console.log('test' +vairant);
				// });

				//get product options (variant names)
				var productOptions = '';
				$.each(data.product.options, function (i, option) {
					//get product variants
					var productVariants = '';
					//loop through each variant
					$.each(option.values, function (i, variant) {
						var firstItem = '';
						if (i == 0) {
							firstItem = 'active';
						}

						productVariants +=
							'<div data-value="' +
							data.product.variants[i].title +
							'" data-variant-id="' +
							data.product.variants[i].id +
							'" class="swatch-element ' +
							firstItem +
							'">' +
							data.product.variants[i].title +
							'</div>';
					});

					productOptions +=
						'<div class="swatch swatch-' +
						option.name.toLowerCase() +
						'">' +
						'<div class="swatch-header">' +
						'Select a ' +
						option.name +
						'' +
						'</div>' +
						productVariants +
						'</div>';
				});

				//get images for products
				var quickviewImages = '';
				$.each(data.product.images, function (i, image) {
					quickviewImages +=
						'<div class="product-image"><img src="' +
						image.src +
						'" class="img-fluid" alt="' +
						data.product.title +
						'"></div>';
				});

				//if product is available, show the available button, if product is sold out, show the sold out option.
				var addToCartButton = '';
				addToCartButton =
					'<button type="submit" name="add" data-add-to-cart="" class="btn-add-to-cart btn btn-primary mt-3 variant-available"><span data-add-to-cart-text="">Add to Basket</span></button>';

				//Build Markup output
				var quickviewHTML =
					'<div class="container product-detail-container quickview-product-details">' +
					'<div class="row align-items-center">' +
					'<div class="col-12 mb-3 mb-md-0">' +
					'<div class="product-detail-images">' +
					quickviewImages +
					'</div>' +
					'</div><!-- Col - Image -->' +
					'<div class="col-12">' +
					'<h1 class="product-title text-center"><a href="/products/' +
					data.product.handle +
					'">' +
					data.product.title +
					'</a></h1>' +
					'<div class="row align-items-sm-center text-center">' +
					'<div class="col-12">' +
					'<div class="product-detail-price-wrapper">' +
					'<span class="product-detail-price">' +
					'<span class="money">' +
					data.product.variants[0].price +
					'</span>' +
					'</span>' +
					productComparePrice +
					'<form method="post" action="/cart/add">' +
					'<input min="1" type="number" id="quantity" name="quantity" value="1" class="d-none" />' +
					productOptions +
					'<input type="hidden" name="id" class="product-variant-id" value="' +
					data.product.variants[0].id +
					'" />' +
					addToCartButton +
					'</form>' +
					'<a class="d-block text-align-center mt-3" href="/products/' +
					data.product.handle +
					'">More details</a>' +
					'</div><!-- col -->' +
					'</div><!-- row -->' +
					'</div><!-- Col - Details -->' +
					'</div><!-- row -->' +
					'</div><!-- container -->';

				quickViewProduct.html(quickviewHTML);
				quickviewSlick();
				quickviewVariant();
				quickviewAddToBasket();
			},
		});
	});

	$(quickViewClose).click(function () {
		quickViewFrame.removeClass('active');
		quickViewOverlay.removeClass('active');
		quickViewProduct.html('');
		$('html,body').removeClass('quickview-open');
	});
}

quickView();

	/**
	 * Velstar Ajaxify Cart
	 **/
	var config = {

		/* Langauge */
		addToCartBtnText: 		'Add To Cart', //Add to Basket
		addedToCartBtnText: 	'Added', //Added to Basket
		addingToCartBtnText: 	'Adding', //Adding...
		soldOutBtnText: 		'Sold Out', //Sold Out
		//After adding a product to the cart, how long to wait before it returns to normal?
		returnBtnToNormal: 		1000, // milliseconds

		/* Selectors */
		cartCountSelector: 		'.cart-count',
		cartTotalSelector: 		'.mini-cart-total',
		cartRemoveSelector: 	'.cart-prod-remove',

		/* Icons*/
		successIcon: 			'<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-check" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>',
		errorIcon: 				'<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-times" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>',
		loadingIcon: 			'<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-sync" viewBox="0 0 512 512"><path d="M500 8h-27.711c-6.739 0-12.157 5.548-11.997 12.286l2.347 98.575C418.212 52.043 342.256 8 256 8 134.813 8 33.933 94.924 12.296 209.824 10.908 217.193 16.604 224 24.103 224h28.576c5.674 0 10.542-3.982 11.737-9.529C83.441 126.128 161.917 60 256 60c79.545 0 147.942 47.282 178.676 115.302l-126.39-3.009c-6.737-.16-12.286 5.257-12.286 11.997V212c0 6.627 5.373 12 12 12h192c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12zm-12.103 280h-28.576c-5.674 0-10.542 3.982-11.737 9.529C428.559 385.872 350.083 452 256 452c-79.546 0-147.942-47.282-178.676-115.302l126.39 3.009c6.737.16 12.286-5.257 12.286-11.997V300c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12v192c0 6.627 5.373 12 12 12h27.711c6.739 0 12.157-5.548 11.997-12.286l-2.347-98.575C93.788 459.957 169.744 504 256 504c121.187 0 222.067-86.924 243.704-201.824 1.388-7.369-4.308-14.176-11.807-14.176z"></path></svg>',


		/* No need to change this elements. */
		addToCartBtnSelector: 	'.btn-add-to-cart.variant-available',
		addToCartFormSelector: 	'form[action="/cart/add"]',
		shopifyAjaxAddURL: 		'/cart/add.js',
		shopifyAjaxChangeURL: 	'/cart/change.js',
		shopifyAjaxCartURL: 	'/cart.js'
	}

//Provide the user Feedback if the Ajax was sucessful or not.
function ajaxFeedback(status, html, $addToCartForm) {
	//$('.ajaxfeedback').remove();
	var feedback = '<p class="ajaxfeedback ' + status + '">' + html + '</p>';

	$addToCartForm.find(config.addToCartBtnSelector).after(feedback);
	$('.ajaxfeedback').slideDown();
}

//BG: Provide the user feedback on the cart template when adjusting quantity / variant.
function ajaxFeedbackCart(status,html,output) {
	$('.ajaxFeedbackCart').remove();
	var feedback = '<span class="ajaxFeedbackCart '+status+'">'+html+'</span>';

	$(output).after(feedback);
}

//Update the button apperance during the various stages. Adding, added, and back to add.
function updateBtnText($button, label, icon) {
	if ($button.children().length) {
		$button.children().each(function () {
			if (icon) {
				if ($.trim($(this).text()) !== '') {
					$(this).html(label + icon);
				}
			} else {
				if ($.trim($(this).text()) !== '') {
					$(this).text(label);
				}
			}
		});
	} else {
		$button.val(label).text(label);
	}
}

//Format the money
function formatMoney(cents, format) {
	if (typeof cents == 'string') {
		cents = cents.replace('.', '');
	}
	var value = '';
	var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
	var formatString = (format || this.money_format);

	function defaultOption(opt, def) {
		return (typeof opt == 'undefined' ? def : opt);
	}

	function formatWithDelimiters(number, precision, thousands, decimal) {
		precision = defaultOption(precision, 2);
		thousands = defaultOption(thousands, ',');
		decimal = defaultOption(decimal, '.');

		if (isNaN(number) || number == null) {
			return 0;
		}

		number = (number / 100.0).toFixed(precision);

		var parts = number.split('.'),
			dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
			cents = parts[1] ? (decimal + parts[1]) : '';

		return dollars + cents;
	}

	switch (formatString.match(placeholderRegex)[1]) {
		case 'amount':
			value = formatWithDelimiters(cents, 2);
			break;
		case 'amount_no_decimals':
			value = formatWithDelimiters(cents, 0);
			break;
		case 'amount_with_comma_separator':
			value = formatWithDelimiters(cents, 2, '.', ',');
			break;
		case 'amount_no_decimals_with_comma_separator':
			value = formatWithDelimiters(cents, 0, '.', ',');
			break;
	}

	return formatString.replace(placeholderRegex, value);
};

//BG: Function to update the Cart Dropdown with the newly added product(s)	
function updateMiniCartContents() {

	//ajax get request to cart.js
	$.ajax({
		type: 'GET',
		url: config.shopifyAjaxCartURL,
		dataType: 'json',
		success: function (data) {

			//Debug
			//console.log(data);

			//Get Cart Total Cost (format it) & Cart Count. 
			var cartTotalCost = slate.Currency.formatMoney(data.total_price, theme.moneyFormat),
				cartCount = data.item_count;

			if (cartCount > 0) {
				$('.header-basket .cart-icon').addClass('items');
			} else {
				$('.header-basket .cart-icon').removeClass('items');
			}

			//Output cart total
			$(config.cartTotalSelector).text(cartTotalCost);
			$(config.cartCountSelector).text(cartCount);
			if (cartCount > 0) {
				$(config.cartCountSelector).removeClass('no-items');
			} else if (cartCount > 9) {
				$(config.cartCountSelector).addClass('no-items');
			} else {
				$(config.cartCountSelector).addClass('no-items');
			}

			//Update Total Price
			$('#cart-total').html(cartTotalCost);

			//Update the Subtotal Price
			$('#cart-subtotal').html(cartTotalCost);

			//Update the mini cart Subtotal Price
			$('#mini-cart-subtotal').html(cartTotalCost);

			//remove all items within cart.
			$('.cart-mini-contents .cart-row .cart-item').remove();

			//with the returned data, focus soley on the items. For each item...
			$.each(data.items, function (i, item) {
				//debugging
				//console.log(item);

				var itemTitle = item.product_title;
				var itemPrice = slate.Currency.formatMoney(item.price, theme.moneyFormat);
				var itemQuantity = item.quantity;
				var itemVariant = item.variant_options[0] + ' - ' + item.variant_options[1];
				var itemVariantId = item.variant_id;
				var itemImage = item.image;
				var itemUrl = item.url;
              
              
				if (item.variant_options[1] == undefined)  {
					itemVariant = item.variant_options[0];
				}

				if (itemVariant == 'Default Title')  {
					itemVariant = '';
				}
 
				//add each product back to mini cart preview.
				$('.cart-mini-contents .cart-row').append('<div class="cart-item"><div class="cart-item-left"><div class="cart-prod-img"><a href="' + itemUrl + '"><img src="' + itemImage + '" class="img-fluid lazyload img-full"></a></div></div><div class="cart-item-right"><div class="cart-prod-name"><a href="' + itemUrl + '">' + itemTitle + '</a></div><div class="cart-prod-variant"><span>' + itemVariant + '</span></div><div class="cart-prod-price"><span class="money">' + itemPrice + '</span></div><div class="cart-prod-quantity"><span>Quantity: </span><span class="quantity-value">' + itemQuantity + '</span></div><div class="cart-prod-remove" data-variant-id="' + itemVariantId + '">Remove</div></div>');
				//WITH QTY $('.cart-mini-contents .cart-row').append('<div class="cart-item"><div class="cart-item-left"><div class="cart-prod-img"><a href="' + itemUrl + '"><img src="' + itemImage + '" class="img-fluid lazyload img-full"></a></div></div><div class="cart-item-right"><div class="cart-prod-name"><a href="' + itemUrl + '">' + itemTitle + '</a></div><div class="cart-prod-variant"><span>' + itemVariant + '</span></div><div class="cart-prod-price"><span class="money">' + itemPrice + '</span></div><div class="ajaxcart__quantity"><label for="updates_' + itemVariantId +'" class="visually-hidden">Quantity</label><div class="js-qty__wrapper"><input type="text" id="updates_'+ itemVariantId +'" class="js-qty__num" value="'+ itemQuantity + '" data-id="' + itemVariantId +'" min="0" aria-label="quantity" pattern="[0-9]*" name="updates[]"><button type="button" class="js-qty__adjust js-qty__adjust--minus" aria-label="Reduce item quantity by one"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-minus" viewBox="0 0 20 20"><path fill="#444" d="M17.543 11.029H2.1A1.032 1.032 0 0 1 1.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"/></svg><span class="icon__fallback-text" aria-hidden="true">&minus;</span></button><button type="button" class="js-qty__adjust js-qty__adjust--plus" aria-label="Increase item quantity by one"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" viewBox="0 0 20 20"><path fill="#444" d="M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"/></svg><span class="icon__fallback-text" aria-hidden="true">+</span></button></div></div><div class="cart-prod-remove" data-variant-id="' + itemVariantId + '">Remove</div></div>');

			});

			//re-trigger the remove functionality.
			removeCartItemTrigger();
		}
	});
}

//remove product by setting quantity to zero via the data attribute.
function removeItemFromCart(variant_id) {
	//ajax get request to cart.js
	$.ajax({
		type: 'POST',
		url: config.shopifyAjaxChangeURL,
		data: 'quantity=0&id=' + variant_id,
		dataType: 'json',
		success: function (data) {

			//console.log('Remove Item Triggered');
			
			//Update the cart to reflect new contents.
			updateMiniCartContents();

		},
		error: function (XMLHttpRequest) {
			var response = eval('(' + XMLHttpRequest.responseText + ')');
			response = response.description;
			console.log(response);

		}
	});
}

//BG: Function will trigger on the cart page if user changes variant
function addItem(variant_id,quantity,old_variant_id) {
	$.ajax({
		type: 'POST',
		url: config.shopifyAjaxAddURL,
		data: 'quantity='+quantity+'&id=' + variant_id,
		dataType: 'json',
		success: function (data) {
			ajaxFeedbackCart('success','Updated size','.product-title[data-variant-id='+old_variant_id+'] .cart-product-variant-select');
		},
		error: function (XMLHttpRequest) {
			var response = eval('(' + XMLHttpRequest.responseText + ')');
			response = response.description;
		}
	});
}

function quantityItemChange(variant_id,value) {
	//convert string to int
	var variant_id = parseInt(variant_id);
	
	//ajax get request to cart.js
	$.ajax({
		type: 'POST',
		url: config.shopifyAjaxChangeURL,
		data: 'quantity='+value+'&id=' + variant_id,
		dataType: 'json',
		success: function (data) {
        $.each(data.items, function(index,item) {
            if (variant_id === item.variant_id) {
                if (item.quantity == value) {
                    ajaxFeedbackCart('success','Quantity Updated','.basket-item[data-variant-id='+variant_id+'] .product-quantity');
                    updateMiniCartContents();

                //BG: if the amount has changed, but not to the value the user wanted.
                } else if (item.quantity < value) {
                    ajaxFeedbackCart('warning','Quantity Updated to '+item.quantity+'. This is the last amount for this item','.basket-item[data-variant-id='+variant_id+'] .product-quantity');
                    updateMiniCartContents();
                }
				
                return false
                
            }
		});

		calculateCartSubtotal(false);
		
		if ($('body').hasClass('template-cart')) {
			$('#cart-total').addClass('changed');
			setTimeout(() => { $('#cart-total').removeClass('changed');  }, 1000);
		}
			
		},
		error: function (XMLHttpRequest) {
			var response = eval('(' + XMLHttpRequest.responseText + ')');
			response = response.description;
		}
    });
}

//Define the remove cart item selector, use the .off & .on feature to ensure it works correctly after new contents added to mini cart.
function removeCartItemTrigger() {
	//Remove Item from Cart
	$(config.cartRemoveSelector).off().on("click", function () {
		var varientID = $(this).attr('data-variant-id');

		$(this).parents('.cart-item').slideUp();
		
		//Pass over to removeItemFromCart Function.
		removeItemFromCart(varientID);

	});
}

function addToCart(form) {
		$('.ajaxfeedback').remove();
		//e.preventDefault();
		var $addToCartForm = form;
		var $addToCartBtn = $addToCartForm.find(config.addToCartBtnSelector+':first-of-type');

		//Adding button stage
		updateBtnText($addToCartBtn, config.addingToCartBtnText, config.loadingIcon);
		$addToCartBtn.addClass('btn-adding').prop('disabled', true);

		// Add to cart.
		$.ajax({
			url: config.shopifyAjaxAddURL,
			dataType: 'json',
			type: 'post',
			data: $addToCartForm.serialize(),
			success: function (itemData) {

				//Added button stage
				updateBtnText($addToCartBtn, config.addedToCartBtnText, config.successIcon);
				$addToCartBtn.removeClass('btn-adding').addClass('btn-added');

				//Once added, reset button back to add.
				window.setTimeout(function () {
					$addToCartBtn.prop('disabled', false).removeClass('btn-added');
					updateBtnText($addToCartBtn, config.addToCartBtnText);
				}, config.returnBtnToNormal);

				updateMiniCartContents();

				window.setTimeout(function () {
					//$('.header-basket .cart-icon').addClass('swing animated');
					$('.header-basket').addClass('hover');
				}, 1000);

				window.setTimeout(function () {
					$('.header-basket').removeClass('hover');
					//$('.header-basket .cart-icon').removeClass('swing animated');
				}, 4000);

				if ($('body.template-cart').length) {
					location.reload();
				}
			},
			error: function (XMLHttpRequest) {
				var response = eval('(' + XMLHttpRequest.responseText + ')');
				response = response.description;
				if (response.slice(0, 4) === 'All ') {
					ajaxFeedback('error', response.replace('All 1 ', 'All '), $addToCartForm);
					$addToCartBtn.prop('disabled', false);
					updateBtnText($addToCartBtn, config.soldOutBtnText);
					$addToCartBtn.prop('disabled', true).removeClass('btn-adding').removeClass('btn-added');
				} else {
					ajaxFeedback('error', '<i class="fa fa-warning"></i> ' + response, $addToCartForm);
					$addToCartBtn.prop('disabled', false).removeClass('disabled');
					updateBtnText($addToCartBtn, config.addToCartBtnText);
				}

			}

		});
		return false;
}



//BG: allows the user to update the quantity and/or variant on the cart page.
function cartItemQuantityVariant() {
	var cartItem = $('.basket-item');

	cartItem.each(function(){
		var variantSelect = $(this).find('product-variant-select'),
			variantSelectValueOriginal = '',
			quantitySelect = $(this).find('.product-quantity-select'),
			quantitySelectId = quantitySelect.attr('data-variant-id'),
			quantitySelectValue = quantitySelect.val();

		variantSelect.on('focus', function(){
			variantSelectValueOriginal = $(this).val();
		});

		variantSelect.on('change', function(){
			var variantSelectValue = $(this).val();
			quantitySelectId = quantitySelect.attr('data-variant-id',variantSelectValue);
			quantityItemChange(variantSelectValueOriginal,0,'add',variantSelectValue,quantitySelectValue);

		});

		quantitySelect.on('change',function(){
			quantitySelectValue = $(this).val();
			quantitySelectId = quantitySelect.attr('data-variant-id');
			quantityItemChange(quantitySelectId,quantitySelectValue);
		})	
	});
}

function cartSelectQuantity() {

	var cartItem = $('.basket-item');

	cartItem.each(function(){
		var quantitySelect = $(this).find('.quantity__holder'),
			quantitySelectId = quantitySelect.attr('data-variant-id'),
			plusQuantity = $(this).find('[data-quantity="plus"]'),
			quantityInput = $(this).find('input[name="quantity"]'),
			minusQuantity = $(this).find('[data-quantity="minus"]'),
			removeAnchor = $(this).find('.basket-remove');

			valCheck(quantityInput, minusQuantity, plusQuantity);

			$(plusQuantity).click(function(e){
				// Stop acting like a button
				e.preventDefault();

				increaseQuantity(quantitySelect, quantityInput, quantitySelectId, plusQuantity, minusQuantity);
			});

			$(minusQuantity).click(function(e) {
				// Stop acting like a button
				e.preventDefault();

				decreaseQuantity(quantityInput, quantitySelect, quantitySelectId, plusQuantity, minusQuantity, removeAnchor);
			});
	});
}

function valCheck(quantityInput, minusQuantity) {

	var currentVal = parseInt($(quantityInput).val());

	if (currentVal == 1) {
		minusQuantity.addClass('greyed');
		minusQuantity.attr('disabled', true);
	} else {
		minusQuantity.attr('disabled', false);
	}
}

//MJ: Moved into seperate function, since it can be used for either the main cart increase or the mini cart increase.
function increaseQuantity(quantitySelect, quantityInput, quantitySelectId, plusQuantity, minusQuantity) {

	var currentVal = parseInt($(quantityInput).val());
	
	if (!isNaN(currentVal)) {

		$(quantityInput).val(currentVal + 1);
		var inputAmount = $(quantityInput).val();
		quantitySelect.attr('value', inputAmount);
		quantityItemChange(quantitySelectId,inputAmount);
	
		if (minusQuantity.hasClass('greyed')) {
			minusQuantity.removeClass('greyed');
			minusQuantity.prop('disabled', false);
		}
	} 
}

//MJ: Moved into seperate function, since it can be used for either the main cart increase or the mini cart decrease.
function decreaseQuantity(quantityInput, quantitySelect, quantitySelectId, plusQuantity, minusQuantity, removeAnchor) {
	// Get its current value
	var currentVal = parseInt($(quantityInput).val());
	// If it isn't undefined or its greater than 0

	

	if (!isNaN(currentVal) && currentVal > 1) {
		// Decrement one
		$(quantityInput).val(currentVal - 1);
		var inputAmount = $(quantityInput).val();
		quantitySelect.attr('value', inputAmount);
		quantityItemChange(quantitySelectId,inputAmount);

		if (currentVal == 2) {
			minusQuantity.addClass('greyed');
			minusQuantity.prop('disabled', true);
		}

	} else {
		$(quantityInput).val(0);
		var inputAmount = $(quantityInput).val();
		quantityItemChange(quantitySelectId,inputAmount);
		$(removeAnchor)[0].click();
	}

	if (plusQuantity.hasClass('greyed')) {
		plusQuantity.removeClass('greyed');
		plusQuantity.prop('disabled', false);
	}
}

//MJ: Take the cart item price, the current quanity, then multiply to get the combined subtotal.
// Is called when the user changes quantity.
//If isONLoad is true, updates another attribute in order to show the correct value without needing to
//increase/decrease
function calculateCartSubtotal(isOnLoad) {

	var cartItem =  $('.basket-item');

	cartItem.each(function(){
		var cartItemPrice = $(this).attr('data-price'),
		cartItemQuantity = $(this).find('.cart-item-quantity').val(),
		cartItemSubtotal = $(this).find('.cart__item__subtotal');
	  
		var newQuantity = cartItemPrice * cartItemQuantity;

		if (isOnLoad) {
			cartItemSubtotal.html(newQuantity);
		}

		newQuantity = slate.Currency.formatMoney(newQuantity, theme.moneyFormat);
		cartItemSubtotal.html(newQuantity);

	});
}

$(document).ready(function() { 

	cartSelectQuantity();
	removeCartItemTrigger();

	if ($('body.template-cart').length) {
		calculateCartSubtotal(true);
	}

	$(config.addToCartFormSelector).submit(function (e) {
		e.preventDefault();
		addToCart($(this));
	});
});
//Accordion Functionality.

function toggleAccordionTitle(accordion) {
	if (accordion.length > 0) {
		if (accordion.parent('.accordion-item').hasClass('active')) {
			accordion.parent('.accordion-item').removeClass('active');
			accordion.next('.accordion-content').slideUp();
		} else {
			$('.accordion-item').removeClass('active');
			$('.accordion-content').slideUp();

			accordion.parent('.accordion-item').addClass('active');
			accordion.next('.accordion-content').slideDown();
		}
	}
}

function initAccordions() {
	var accordionTitle = $('.accordion-title');
	$('.accordion-item.active .accordion-content').show();

	accordionTitle.click(function () {
		toggleAccordionTitle($(this));
	});
}

if ($('.accordion-item').length > 0) {
	initAccordions();
}

/**
 * RF: Automatically open an accordion if we're given it's hash in the url
 */
$(document).ready(() => {
	const hash = window.location.hash.toLowerCase();
	toggleAccordionTitle($(`.accordion-title[href="${hash}"]`));
});


$(document).ready(function () {
	var sections = new slate.Sections();
	sections.register('product', theme.Product);

	// Common a11y fixes
	slate.a11y.pageLinkFocus($(window.location.hash));

	$('.in-page-link').on('click', function (evt) {
		slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
	});

	// Target tables to make them scrollable
	var tableSelectors = '.rte table';

	slate.rte.wrapTable({
		$tables: $(tableSelectors),
		tableWrapperClass: 'rte__table-wrapper',
	});

	// Target iframes to make them responsive
	var iframeSelectors =
		'.rte iframe[src*="youtube.com/embed"],' +
		'.rte iframe[src*="player.vimeo"]';

	slate.rte.wrapIframe({
		$iframes: $(iframeSelectors),
		iframeWrapperClass: 'rte__video-wrapper',
	});

	// Apply a specific class to the html element for browser support of cookies.
	if (slate.cart.cookiesEnabled()) {
		document.documentElement.className =
			document.documentElement.className.replace(
				'supports-no-cookies',
				'supports-cookies'
			);
	}
});

/* ==========================================================================
#Custom Velstar
========================================================================== */

//product page swatch change
$('.swatch :radio').change(function () {
	var optionIndex = $(this).closest('.swatch').attr('data-option-index');
	var optionValue = $(this).val();
	$(this)
		.closest('form')
		.find('.single-option-selector')
		.eq(optionIndex)
		.val(optionValue)
		.trigger('change');
});



$(document).ready(function () {
  var selectedvarid = $('.option.selected').data('value');
  
  $('.variant-'+selectedvarid).css('display','flex');
  
  
  //Collection description more information toggle
  var productDescription = $('.collection-description .rte'),
      productReadMore = $('.collection-read-more'),
      currentHeight = productDescription.height(),
      autoHeight = productDescription.css('height', 'auto').height(),
      showMoreText = 'Show More',
      showLessText = 'Show Less';

  productDescription.css('height', currentHeight);

  productReadMore.click(function(){
      if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          productDescription.removeClass('active');
          productDescription.height(currentHeight).animate({height: currentHeight}, 0);
          productReadMore.find('.text_more').html(showMoreText);
      } else {
          $(this).addClass('active');
          productDescription.addClass('active');
          productDescription.height(currentHeight).animate({height: autoHeight}, 0);
          productReadMore.find('.text_more').html(showLessText);
      }
  });
  
});