// Override Settings
var bcSfFilterSettings = {
    general: {
        limit: 12
    }
};

var prevIcon = '<svg aria-hidden="true" data-prefix="fal" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>';

var nextIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>';

// Declare Templates
var bcSfFilterTemplate = {
    'soldOutClass': 'sold-out',
    'saleClass': 'on-sale',
    'soldOutLabelHtml': '<span class="product-status sold-out">' + bcSfFilterConfig.label.sold_out + '</span>',
    'saleLabelHtml': '<span class="product-status sale">' + bcSfFilterConfig.label.sale + '</span>',
    'vendorHtml': '<div>{{itemVendorLabel}}</div>',

    // Grid Template
    'productGridItemHtml': '<div id="product_single" class="product-single col {{soldOutClass}} {{saleClass}}" data-product-id="{{itemId}}">' +
                                '<div class="inner">' +
                                    '<span class="product-image {{secondImageClass}}">' +
                                        '<a href="{{itemHandle}}" class="grid-link">' +
                                            '<img data-src="{{primaryImageDesktop}}" alt="{{itemTitle}}" class="img-fluid lazyload" data-second-image="{{secondThumbUrl}}" />' +
                                        '</a>' +
                                    '</span>' +
                                    
                                    '<span class="product-details">' +
                                        '<div class="product-title mb-2">' +
                                        '<a href="{{itemHandle}}">{{itemTitle}}</a>' +
                                        '</div>' + 
                                        '{{itemReviews}}' +
                                        '{{itemPrice}}' +
                                        '{{itemAddToBag}}' +
                                    '</span>' +
                                '</div>' +
                            '</div>',

    // Pagination Template
    'previousActiveHtml': '<span class="previous"><a href="{{itemUrl}}">'+ prevIcon +'</a></span>',
    'previousDisabledHtml': '<span class="previous disabled">'+ prevIcon +'</span>',
    'nextActiveHtml': '<span class="next"><a href="{{itemUrl}}">'+ nextIcon +'</a></span>',
    'nextDisabledHtml': '<span class="next disabled">'+ nextIcon +'</span>',
    'pageItemHtml': '<span class="page"><a href="{{itemUrl}}">{{itemTitle}}</a></span>',
    'pageItemSelectedHtml': '<span class="page current">{{itemTitle}}</span>',
    'pageItemRemainHtml': '<span class="page">{{itemTitle}}</span>',
    'paginateHtml': '<div class="pagination">{{previous}}{{pageItems}}{{next}}</div>',
  
    // Sorting Template
    'sortingHtml': '<select class="collection-sort__input">{{sortingItems}}</select>',
};

/************************** BUILD PRODUCT LIST **************************/

// Build Product Grid Item
BCSfFilter.prototype.buildProductGridItem = function(data, index) {
    /*** Prepare data ***/
    var images = data.images_info;
    data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100; // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    
    //Calculate the percentage, based on the original price, and the new sale price
    var onSalePercentageRaw = (data.compare_at_price_min - data.price_min)/data.compare_at_price_min * 100;
    var onSalePercentage = Math.round(onSalePercentageRaw);
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices
    // Get First Variant (selected_or_first_available_variant)
    var firstVariant = data['variants'][0];
    var firstVariantId = data['variants'][0].id;
    var firstVariantTitle = firstVariant.title;
    var secondOption = data['variants'][0].option2;
    var hasPackOption = false;
    if (getParam('variant') !== null && getParam('variant') != '') {
        var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
        if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
    } else {
        for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                firstVariant = data['variants'];
                break;
            }
        }
    }

  
  
  	//console.log(data['variants'].length);
    // var allPrices = [];

    // if (firstVariantTitle != 'Default Title') {
    //     for (var i = 0; i < data['variants'].length; i++) {

    //         var option2 = data['variants'][i].option2;
    
    //         if (option2 !== undefined) {
    //             if (option2.includes('Single Pack')) {
    //                 allPrices.push(data['variants'][i].price);
    //             }
    //         }
    //     }
        
    // } else {
    //     allPrices.push(data.price_min);
    // }

    // console.log(allPrices);

    //MJ: Set hasPackOption
    if (firstVariantTitle != 'Default Title') {
        if (secondOption !== undefined) {
            if (secondOption.includes('Pack')) {
                hasPackOption = true
            }
        }
    }

    //MJ: Below is the logic for the variant price ranges 
    var variantPrices = [],
    rangePriceDiv,
    firstPrice,
    lastPrice;

    //MJ: For each variant, if the 2nd option is Single Pack, push that varinat's price value into an array
    for (var i = 0; i < data['variants'].length; i++) {

        var option2 = data['variants'][i].option2;

        if (option2 !== undefined) {

            //MJ: If only wanting it to apply to packs
            if (option2.includes('Single Pack')) {
                variantPrices.push(data['variants'][i].price);
            }
        }
        
    }

    //MJ: Set first and last price, using the first and last elements of the array
    firstPrice = variantPrices[0],
    lastPrice = variantPrices[variantPrices.length - 1];

    // console.log('first ' + firstPrice);
    // console.log('last ' + lastPrice);

    //MJ: If the prices are the same, just show the first price. Otherwise, format it as the first and last price together.
    if (firstPrice == lastPrice) {
        rangePriceDiv = this.formatMoney(firstPrice);
    } else {
        rangePriceDiv = this.formatMoney(firstPrice) + ' - ' + this.formatMoney(lastPrice);
    }
    //End varaint price ranges 
    
    /*** End Prepare data ***/

    // Get Template
    var itemHtml = bcSfFilterTemplate.productGridItemHtml;

    // Add Thumbnail
    var primaryImageDesktop = images.length > 0 ? this.optimizeImage(data['images_info'][0].src, '600x600') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{primaryImageDesktop}}/g, primaryImageDesktop);

    // Add Thumbnail
    var primaryImageMobile = images.length > 0 ? this.optimizeImage(data['images_info'][0].src, '200x200') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{primaryImageMobile}}/g, primaryImageMobile);

    var itemfullURL = this.buildProductItemUrl(data);

    var secondImageClass = ""

    // Second image
	if (images.length > 1) {
		var secondThumbUrl = this.optimizeImage(data['images_info'][1].src, '600x600');
        itemHtml = itemHtml.replace(/{{secondThumbUrl}}/g, secondThumbUrl);
        
        secondImageClass = "product-image-hover";
    } else {
        itemHtml = itemHtml.replace(/{{secondThumbUrl}}/g, '');
    }
    
    itemHtml = itemHtml.replace(/{{secondImageClass}}/g, secondImageClass);

    // Add Price
    var itemPriceHtml = '';
    if (data.title != '')  {

        itemPriceHtml += '<div class="prices d-flex align-items-baseline mb-3">';

        //MJ: If the product has packs in the variants, use the rangePriceDiv element. Otherwise, use the normal price
        if (hasPackOption) {
          if (onSale) {
              itemPriceHtml += '<div class="compare__price"><span><s>' + this.formatMoney(data.compare_at_price_min) + '</s></span></div>';
          }
          if (priceVaries) {
              itemPriceHtml += '<div class="money original__price ">' + rangePriceDiv + '</div>';
          } else {
              itemPriceHtml += '<span  class="now-price">'+ this.formatMoney(data.price_min) +'</span>';
          }
           // itemPriceHtml += '<div class="money original__price ">' + rangePriceDiv + '</div>';
        } else {
            itemPriceHtml += '<div class="money original__price ">' + this.formatMoney(data.price_min) + '</div>';
        }

		// if (onSale) {
        //     itemPriceHtml += '<div class="money compare__price pl-2">' + this.formatMoney(data.compare_at_price_min) + '</div>';
        // }
        
        itemPriceHtml += '</div>';
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    //Variant Support
    var itemVariantHtml = '';
    if (data.variant != '') {

        itemVariantHtml += '<span class="product-variants"><span class="product-variants-title">Size\'s Available:</span><ul>';

        //define vars for variant data to capture
        var variantAvailable = '',
            variantTitle = '',
            variantID ='';

        //loop through available variants
         for (var key in data['variants']) {
            if (data['variants'].hasOwnProperty(key)) {
               var obj = data['variants'][key];
               //for each variant, loop through the available properties.
               
               for (var prop in obj) {
                
                  if (obj.hasOwnProperty(prop)) {
                    //Store properties as vars
                    if (prop == "available") {
                        variantAvailable = obj[prop];
                    }
                    if (prop == "title") {
                        variantTitle = obj[prop];
                    }
                    if (prop == "id") {
                        variantID = obj[prop];
                    }

                  }
               }
               //for each variant, output into markup.
               itemVariantHtml += '<li class="variant-available-'+variantAvailable+'"><a href="'+itemfullURL+'?variant='+ variantID +'">'+variantTitle+'</a></li>';
            }
         }

        
        itemVariantHtml += '</ul></span>';
    }

    itemHtml = itemHtml.replace(/{{itemVariants}}/g, itemVariantHtml);

    // Add soldOut class
    var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
    itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
  
    // Add onSale class
    var saleClass = onSale ? bcSfFilterTemplate.saleClass : '';
    itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);

    var itemReviews = '<div class="product__reviews__snippet mb-1"><span class="shopify-product-reviews-badge" data-id="'+data.id+'"></span></div>';
    itemHtml = itemHtml.replace(/{{itemReviews}}/g, itemReviews);

    var addToCartButton = '';

    if (variantAvailable) {
        addToCartButton = '<button type="submit" name="add" data-add-to-cart="" class="btn-add-to-cart btn btn-primary btn-100 variant-available"><span data-add-to-cart-text="">Add To Cart</span></button>';
    } else {
        addToCartButton = '<button type="submit" name="add" data-add-to-cart="" disabled class="btn-add-to-cart btn btn-primary btn-100 variant-not-available btn-disabled"><span data-add-to-cart-text="">Sold Out</span></button>';
    }

  	//console.log($(location).attr('href'));
  //console.log('----');
  	//console.log(data['variants'].length);
  	//console.log(data['variants']);
  //console.log('----');
    if($(location).attr('href') == "https://orangecounty-cbd.com/collections/high-strength-cbd"){
      if(data['variants'].length == 12){
        //console.log(data['variants'][8]['id']);
        var itemAddToBag = '<div class="cart__button">' +
        '<form method="post" action="/cart/add">' +
        '<input type="hidden" name="id" class="product-variant-id" value="'+ data['variants'][8]['id'] + '" />' +	
        addToCartButton +	
        '</form>' +
        '</div>'
      } else if(data['variants'].length == 8){
        var itemAddToBag = '<div class="cart__button">' +
        '<form method="post" action="/cart/add">' +
        '<input type="hidden" name="id" class="product-variant-id" value="'+ data['variants'][4]['id'] + '" />' +	
        addToCartButton +	
        '</form>' +
        '</div>'
      } else {
        var itemAddToBag = '<div class="cart__button">' +
        '<form method="post" action="/cart/add">' +
        '<input type="hidden" name="id" class="product-variant-id" value="'+ firstVariantId + '" />' +	
        addToCartButton +	
        '</form>' +
        '</div>'
      }
    } else if($(location).attr('href') == "https://orangecounty-cbd.com/collections/medium-strength-cbd"){
      if(data['variants'].length == 12){
        //console.log(data['variants'][8]['id']);
        var itemAddToBag = '<div class="cart__button">' +
        '<form method="post" action="/cart/add">' +
        '<input type="hidden" name="id" class="product-variant-id" value="'+ data['variants'][4]['id'] + '" />' +	
        addToCartButton +	
        '</form>' +
        '</div>'
      } else if(data['variants'].length == 8){
        var itemAddToBag = '<div class="cart__button">' +
        '<form method="post" action="/cart/add">' +
        '<input type="hidden" name="id" class="product-variant-id" value="'+ data['variants'][0]['id'] + '" />' +	
        addToCartButton +	
        '</form>' +
        '</div>'
      } else {
        var itemAddToBag = '<div class="cart__button">' +
        '<form method="post" action="/cart/add">' +
        '<input type="hidden" name="id" class="product-variant-id" value="'+ firstVariantId + '" />' +	
        addToCartButton +	
        '</form>' +
        '</div>'
      }
    } else {
      var itemAddToBag = '<div class="cart__button">' +
      '<form method="post" action="/cart/add">' +
      '<input type="hidden" name="id" class="product-variant-id" value="'+ firstVariantId + '" />' +	
      addToCartButton +	
      '</form>' +
      '</div>'
    }
  
  

    itemHtml = itemHtml.replace(/{{itemAddToBag}}/g, itemAddToBag);

    // Add Vendor
    //var itemVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorHtml.replace(/{{itemVendorLabel}}/g, data.vendor) : '';
    itemHtml = itemHtml.replace(/{{itemVendor}}/g, data.vendor);

    // Add main attribute (Always put at the end of this function)
    itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
  	
  	var pagevisiturl = $(location).attr('href');
    if($(location).attr('href') == "https://orangecounty-cbd.com/collections/high-strength-cbd"){
      if(data['variants'].length == 12){
        //console.log(data['variants'][8]['id']);
        itemHtml = itemHtml.replace(/{{itemHandle}}/g, '/products/' + data.handle + '?variant='+ data['variants'][8]['id']);
      } else if(data['variants'].length == 8){
        itemHtml = itemHtml.replace(/{{itemHandle}}/g, '/products/' + data.handle + '?variant='+ data['variants'][4]['id']);
      } else {
        itemHtml = itemHtml.replace(/{{itemHandle}}/g,  '/products/' + data.handle);
      }
    } else if($(location).attr('href') == "https://orangecounty-cbd.com/collections/medium-strength-cbd"){
      if(data['variants'].length == 12){
        //console.log(data['variants'][8]['id']);
        itemHtml = itemHtml.replace(/{{itemHandle}}/g,  '/products/' + data.handle + '?variant='+ data['variants'][4]['id']);
      } else if(data['variants'].length == 8){
        itemHtml = itemHtml.replace(/{{itemHandle}}/g, '/products/' + data.handle + '?variant='+ data['variants'][0]['id']);
      } else {
        itemHtml = itemHtml.replace(/{{itemHandle}}/g, '/products/' + data.handle);
      }
    } else if(pagevisiturl.includes('https://orangecounty-cbd.com/search')) {
        itemHtml = itemHtml.replace(/{{itemHandle}}/g,'/products/'+ data.handle);
    } else {
        itemHtml = itemHtml.replace(/{{itemHandle}}/g, '/products/' + data.handle);
    }
  
  
    itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
  
  
  
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  
  	//console.log(data['variants']);
  
    itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

    return itemHtml;
};

// Build Product List Item
BCSfFilter.prototype.buildProductListItem = function(data) {
    // // Add Description
    // var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
    // // Truncate by word
    // itemDescription = (itemDescription.split(" ")).length > 51 ? itemDescription.split(" ").splice(0, 51).join(" ") + '...' : itemDescription.split(" ").splice(0, 51).join(" ");
    // // Truncate by character
    // itemDescription = itemDescription.length > 350 ? itemDescription.substring(0, 350) + '...' : itemDescription.substring(0, 350);
    // itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);
};

// Customize data to suit the data of Shopify API
BCSfFilter.prototype.prepareProductData = function(data) {
    for (var k in data) {
        // Featured image
        if (data['images_info'] > 0) {
            data[k]['featured_image'] = data['images_info'][0];
        } else {
            data[k]['featured_image'] = {width: '', height: '', aspect_ratio: 0}
        }

        // Add Options
        var optionsArr = [];
        for (var i in data[k]['options_with_values']) {
            optionsArr.push(data[k]['options_with_values'][i]['name']);
        }
        data[k]['options'] = optionsArr;

        // Customize variants
        for (var i in data[k]['variants']) {
            var variantOptionArr = [];
            var count = 1;
            var variant = data[k]['variants'][i];
            // Add Options
            var variantOptions = variant['merged_options'];
            if (Array.isArray(variantOptions)) {
                for (var j = 0; j < variantOptions.length; j++) {
                    var temp = variantOptions[j].split(':');
                    data[k]['variants'][i]['option' + (parseInt(j) + 1)] = temp[1];
                    data[k]['variants'][i]['option_' + temp[0]] = temp[1];
                    variantOptionArr.push(temp[1]);
                }
                data[k]['variants'][i]['options'] = variantOptionArr;
            }
            data[k]['variants'][i]['compare_at_price'] = parseFloat(data[k]['variants'][i]['compare_at_price']) * 100;
            data[k]['variants'][i]['price'] = parseFloat(data[k]['variants'][i]['price']) * 100;
        }

        // Add Description
        data[k]['description'] = data[k]['body_html'];
    }
    return data;
};

/************************** END BUILD PRODUCT LIST **************************/

// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
    if (this.getSettingValue('general.paginationType') == 'default') {
        // Get page info
        var currentPage = parseInt(this.queryParams.page);
        var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

        // If it has only one page, clear Pagination
        if (totalPage == 1) {
            jQ(this.selector.bottomPagination).html('');
            return false;
        }

        if (this.getSettingValue('general.paginationType') == 'default') {
            var paginationHtml = bcSfFilterTemplate.paginateHtml;

            // Build Previous
            var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
            previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
            paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

            // Build Next
            var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml :  bcSfFilterTemplate.nextDisabledHtml;
            nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
            paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

            // Create page items array
            var beforeCurrentPageArr = [];
            for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
                beforeCurrentPageArr.unshift(iBefore);
            }
            if (currentPage - 4 > 0) {
                //beforeCurrentPageArr.unshift('...');
            }
            if (currentPage - 4 >= 0) {
                beforeCurrentPageArr.unshift(1);
            }
            beforeCurrentPageArr.push(currentPage);

            var afterCurrentPageArr = [];
            for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
                afterCurrentPageArr.push(iAfter);
            }
            if (currentPage + 3 < totalPage) {
                //afterCurrentPageArr.push('...');
            }
            if (currentPage + 3 <= totalPage) {
                //afterCurrentPageArr.push(totalPage);
            }

            // Build page items
            var pageItemsHtml = '';
            var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
            for (var iPage = 0; iPage < pageArr.length; iPage++) {
                if (pageArr[iPage] == '...') {
                    pageItemsHtml += bcSfFilterTemplate.pageItemRemainHtml;
                } else {
                    pageItemsHtml += (pageArr[iPage] == currentPage) ? bcSfFilterTemplate.pageItemSelectedHtml : bcSfFilterTemplate.pageItemHtml;
                }
                pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
                pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, pageArr[iPage]));
            }
            paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);

            jQ(this.selector.bottomPagination).html(paginationHtml);
        }
    }
};

/************************** BUILD TOOLBAR **************************/

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
    if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
        jQ(this.selector.topSorting).html('');

        var sortingArr = this.getSortingList();
        if (sortingArr) {
            // Build content 
            var sortingItemsHtml = '';
            for (var k in sortingArr) {
                if (!k) continue;
              
                sortingItemsHtml += '<option value="' + k +'">' + sortingArr[k] + '</option>';
            }
            var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
            jQ(this.selector.topSorting).html(html);

            // Set current value
            jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
          
        }
    }
};

// Build Display type (List / Grid / Collage)
// BCSfFilter.prototype.buildFilterDisplayType = function() {
//     var itemHtml = '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="change-view bc-sf-filter-display-grid" data-view="grid"><span class="icon-fallback-text"><i class="fa fa-th" aria-hidden="true"></i><span class="fallback-text">Grid view</span></span></a>';
//     itemHtml += '<a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="change-view bc-sf-filter-display-list" data-view="list"><span class="icon-fallback-text"><i class="fa fa-list" aria-hidden="true"></i><span class="fallback-text">List view</span></span></a>';
//     jQ(this.selector.topDisplayType).html(itemHtml);

//     // Active current display type
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
//     if (this.queryParams.display == 'list') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
//     } else if (this.queryParams.display == 'grid') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
//     }
// };

/************************** END BUILD TOOLBAR **************************/

//BG: Custom functionality to allow the user to hover on products with more mulitple size variants.
function variantHover() {
    //define the products
    var collectionProduct = $('.product-single');
    //for each product
    collectionProduct.each(function(){
        //get the available variants
        var productVariants = $(this).find('.product-variants > ul > li');
        //if there's more than one variant, add the has-variants class.
        if (productVariants.length > 1) {
            $(this).addClass('has-variants');
        }
    });

    //console.log('Variant Hover');
}

// Add additional feature for product list, used commonly in customizing product list
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {
    variantHover();

    //reload smart wishlist for adding wishlist buttons to items loaded via AJAX
	if (typeof ReloadSmartWishlist !== "undefined" && $.isFunction(ReloadSmartWishlist)) ReloadSmartWishlist();

};

//MJ: Uses custom method of adding item to cart rather than going to cart page as per the default
function collectionAddToCart() {
    $('.product-details .cart__button form').submit(function (e) {
        e.preventDefault();
        addToCart($(this));
    });
}

// Build additional elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {
    quickView();
    collectionProductColours();
    collectionProductColourSwitcher();
    sortFilter();
    collectionProductHover();
    collectionAddToCart();

    //MJ: If the filters exists on the page, i.e. if the data exists for the filters to show, 
    //we unhide the strength label and element and append it to the strength filter. We also clone the div before adding it,
    //since each time the filter is manipulated, the appended div is removed. Then we call the getCollectionVariants function to
    //show the correct price labels on the price filter.
    if (eventType != 'page' && eventType != 'sort') {
        if ($('.bc-sf-filter-option-block-strength').length > 0){
            $('.strength__filter__titles').clone().appendTo($('.bc-sf-filter-option-block-strength'));
        }
    
        if ($('.bc-sf-filter-option-block-price').length > 0){
            getCollectionVariants($('.collection__handle').attr('data-handle'));
        }
    }
  
    /*if(eventType == 'variants_price'){
      var rangePrices = $('.bc-sf-filter-option-range-slider').data('value')
      var fromPrice = rangePrices.substr(0, rangePrices.indexOf(':')); 
      console.log(checkShowFilterOptionRange);
    }
    */
  
    //MJ: Used for loading reviews on the paginated items
    SPR.registerCallbacks();
    SPR.initRatingHandler();
    SPR.initDomEls();
    SPR.loadProducts();
    SPR.loadBadges();
};
