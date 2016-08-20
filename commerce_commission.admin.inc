<?php
/**
 * @file
 * commerce_commission.admin.inc
 */

/**
 * Administrative form to set the commission percentage.
 */
function commerce_commission_settings_form($form, &$form_state) {
  $form = array();

  $form['commerce_commission_percent'] = array(
    '#type' => 'textfield',
    '#title' => t('Commission Percentage'),
    '#default_value' => variable_get('commerce_commission_percent', 0),
    '#required' => TRUE,
    '#size' => 3,
    '#maxlength' => 3,
    '#field_suffix' => '%',
  );

  return system_settings_form($form);
}

/**
 * Validation function for the percentage settings.
 */
function commerce_commission_settings_form_validate($form, &$form_state) {
  $percent = $form_state['values']['commerce_commission_percent'];
  if (!is_numeric($percent)) {
    form_set_error('commerce_commission_percent', t('Commission percentage only accepts numeric values.'));
  }
}
