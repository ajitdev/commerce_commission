<?php
/**
 * @file
 * Commerce commission API Documentation.
 */

/**
 * Allows other modules to change the commission percentage programatically.
 *
 * @param array $commission_percent
 *   By reference. This will change the main percentage for the commission.
 */
function hook_commerce_commission_percentage_alter(&$commission_percent) {
  // Change the commission percentage to 10.
  // This can be done based on some condition.
  $commission_percent = '10';
}
