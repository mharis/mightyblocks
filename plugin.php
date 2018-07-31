<?php
/**
 * Plugin Name: MightyBlocks
 * Plugin URI: http://wpmightyblocks.com
 * Description: Gutenberg blocks with super flexible customization options.
 * Author: Haris Zulfiqar
 * Author URI: https://hariszulfiqar.com
 * Version: 1.0.0
 * License: GPL2+
 *
 * @package MightyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';