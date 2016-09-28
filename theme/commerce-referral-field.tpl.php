<?php

/**
 * @file
 * Default theme implementation to display the basic html structure of a single
 * Drupal page.
 *
 * Variables:
 * - $link: $created link for sharing.
 * @see template_preprocess()
 * @see template_preprocess_commerce_referral_field()
 * @see template_process()
 *
 * @ingroup themeable
 */
?>

<div class='product-variation-top-commission-link-wrapper'>
  <div class='product-variation-top-commission-link-content'>
    <input type='textbox' id='commerce_product_link' class='commerce-product-unique-link table-els' value ="<?php print $link; ?>" />
    <div class='table-els' >
      <button class='product-variation-top-commission-link-btn' type='button' onclick = 'copyToClipboard()'>copy</button>
    </div>
  </div>
  <div class='copy-sts-msg enabled-copy'> URL is copied to clipboard! </div>
  <div class='copy-sts-msg disabled-copy'> Hit Ctrl+C to copy! </div>
</div>
<button class ='commerce-referral-button' onclick='toggleClipboard()' title='Copy your unique sharing url'>copy</button>
