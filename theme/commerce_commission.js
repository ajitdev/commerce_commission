/**
 * @file
 * commerce_commission.js
 */

/**
 * Adding event listener to document click to close opened clipboard popup.
 */
document.addEventListener('click', function(event){
  if (!checkIfParent(event.target) && event.target.className.indexOf('commerce-referral-button') === -1) {
    document.querySelector('.product-variation-top-commission-link-wrapper').classList.remove('opened');
  }
});

/**
 * Function that allows user toggle copy to clipboard popup.
 */
function toggleClipboard(){
  var link = document.getElementById('commerce_product_link');
  // Select all text from the textbox.
  link.select();
  var obj = document.querySelector('.product-variation-top-commission-link-wrapper');
  if (obj.className.indexOf('opened') > -1) {
    obj.classList.remove('opened');
  }
  else {
    obj.classList.add('opened');
  }
}

/**
 * Function that allows user to copy the text to the dashboard.
 */
function copyToClipboard() {
  // Get the textbox containing the unique URL of the product.
  var link = document.getElementById('commerce_product_link');
  // Select all text from the textbox.
  link.select();
  // If browser supports copy command.
  if (document.queryCommandEnabled('copy')) {
    // Copy the link of the selected text.
    document.execCommand('copy');
    // Notify user.
    document.querySelector('.product-variation-top-commission-link-wrapper .copy-sts-msg.enabled-copy').classList.add('visible');
  }
  else {
    // Else Notify user to manual operation.
    document.querySelector('.product-variation-top-commission-link-wrapper .copy-sts-msg.disabled-copy').classList.add('visible');
  }

  // Hidding the status text after 2000 ms.
  var st = setTimeout(function(){
    document.querySelector('.product-variation-top-commission-link-wrapper .copy-sts-msg.visible').classList.remove('visible');
  }, 2000);
}


/**
 * Recursive function to check if the provided object lies in the
 * div having class 'product-variation-top-commission-link-wrapper'.
 */

function checkIfParent(obj){
  var sel;
  // If recursion reached top document node.
  if (obj === document) {
    sel = false;
  }
  else {
    // If selected node has class 'product-variation-top-commission-link-wrapper'.
    if (obj.className.indexOf('product-variation-top-commission-link-wrapper') > -1) {
      sel = true;
    }
    else {
      // If not, traverse to parent node.
      sel = sel || checkIfParent(obj.parentNode);
    }
  }
  return sel;
}
