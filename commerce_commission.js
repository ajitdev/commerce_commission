/**
 * @file
 * commerce_commission.js
 */

/**
 * Function that allows user to copy the text to the dashboard.
 */
function copyToClipboard() {
  // Get the textbox containing the unique URL of the product.
  var link = document.getElementById('commerce_product_link');
  // Select all text from the textbox.
  link.select();
  // Copy the link of the selected text.
  document.execCommand('copy');
  // Hide the textbox.
  // The textbox could also be kept hidden by default using CSS.
  link.style.visibility='hidden';
  // Notify user.
  alert("Product link has been copied to your clipboard");
}
