Route::get('/api/cats','ApiController@categories');
Route::get('/api/brands','ApiController@brands');
Route::get('/api/brandsByCats/{id}','ApiController@brandsByCats');
Route::get('/api/offers','ApiController@offers');
Route::get('/api/offersByBrands/{id}','ApiController@offersByBrands');
Route::get('/api/offer/{id}/{user}','ApiController@getOffer');
Route::post('/api/addCustomer','ApiController@addCustomer');
Route::post('/api/login','ApiController@loginCustomer');
Route::post('/api/uploadInvoice','ApiController@uploadInvoice');
Route::get('/api/getCustomerCoins/{id}','ApiController@getUserCoins');
Route::get('/api/addCustomerCoins/{id}/{coins}','ApiController@addCustomerCoins');
Route::get('/api/coinsRedeemRequest/{id}/{rewardId}','ApiController@coinsRedeemRequest');
Route::get('/api/getUserRewards/{id}','ApiController@getUserRewards');
Route::get('/api/rewardsList','ApiController@rewardList');
Route::get('/api/rewardSingle/{id}','ApiController@rewardSingle');
Route::get('/api/featuredOffers','ApiController@featuredOffers');
Route::get('/api/bannerOffers','ApiController@bannerOffers');
Route::get('/api/offersByCities/{id}','ApiController@offersByCities');
Route::get('/api/getCity','ApiController@getCity');
Route::get('/api/citystatus/{id}','ApiController@citystatus');
Route::get('/api/reset/{email}','ApiController@reset');
Route::get('/api/updatecity/{id}/{city}','ApiController@updateCity');
Route::get('/api/getstores/{id}','ApiController@getstores');
Route::get('/api/getstoreoffers/{id}','ApiController@getstoreoffers');
Route::get('/api/getGoogleAd','ApiController@getGoogleAd');
Route::get('/api/getMobiAds','ApiController@getMobiAds');
Route::get('/api/getNotification/{id}','ApiController@getNotification');
Route::get('/api/getnotificationcount/{id}','ApiController@getNotificationcount');
Route::get('/api/setnotification/{id}/{status}','ApiController@setNotification');
Route::get('/api/getMobiAdsByPostion/{id}','ApiController@getMobiAdsByPostion');
Route::get('/api/fbLogin/{email}/{name}','ApiController@fbLogin');


Route::post('/api/updateinterest','ApiController@updateInterest');
Route::get('/api/interest/{id}','ApiController@interestgroup');


Route::get('/api/favourit/{id}','ApiController@favouritoffer');
Route::get('/api/addofferlike/{id}/{userid}','ApiController@addofferlike');
Route::get('/api/addofferfavourite/{id}/{userid}','ApiController@addofferfavourite');
Route::get('/api/addofferreport/{id}/{type}/{userid}','ApiController@addofferreport');

        <TouchableOpacity onPress={()=>Actions.Brands({categoryID:categories.id})}>
