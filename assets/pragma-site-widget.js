const SITE_WIDGET_HOST = 'https://d38wtz2u937gvx.cloudfront.net';  // Checkout Django page server 'http://192.168.1.164:8000'
const MERCHANT_ID = 393;

function initializeSiteWidget() {
  var params = {mid: MERCHANT_ID};

  var iframeUrl = new URL(`${SITE_WIDGET_HOST}/`);
  Object.keys(params).forEach(key => {
    iframeUrl.searchParams.set(key.toLowerCase(), params[key]);
  });
  // Load only if iframe is not already present
  var iframe = document.querySelector('#siteWidgetContainer iframe');
  if (iframe == null) {
    document.getElementById('siteWidgetContainer').innerHTML += `<iframe title="Pragma-site-widget" sandbox="allow-scripts allow-popups allow-same-origin allow-forms allow-popups-to-escape-sandbox" src="${iframeUrl.href}" onload="siteWidgetLoaded()" class="d-none"></iframe>`;
  }else{
    iframe.classList.remove('d-none');
    if(document.querySelector('#siteWidgetContainer .site-widget-loader')){
       document.querySelector('#siteWidgetContainer .site-widget-loader').remove(); 
    }
  };
};

function siteWidgetLoaded() {
  var iframe = document.querySelector('#siteWidgetContainer iframe');
  document.getElementById('siteWidgetTogglerBtn').style.visibility = 'visible';
  if(document.querySelector('#siteWidgetContainer .site-widget-loader')){
    document.querySelector('#siteWidgetContainer .site-widget-loader').remove(); 
  }
  if (document.getElementById('siteWidgetModalChk').checked == true){
    iframe.classList.remove('d-none');
  }
};

initializeSiteWidget();