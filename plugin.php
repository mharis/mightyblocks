<?php
/**
 * Plugin Name: Mighty Blocks
 * Plugin URI:
 * Description: mightyblocks — is a Gutenberg plugin created via create-guten-block.
 * Author: mharis
 * Author URI:
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

if ( ! class_exists( 'ReduxFramework' ) && file_exists( dirname( __FILE__ ) . '/libs/ReduxFramework/ReduxCore/framework.php' ) ) {
    require_once( dirname( __FILE__ ) . '/libs/ReduxFramework/ReduxCore/framework.php' );
}
if ( ! isset( $redux_demo ) && file_exists( dirname( __FILE__ ) . '/libs/ReduxFramework/sample/sample-config.php' ) ) {
    require_once( dirname( __FILE__ ) . '/libs/ReduxFramework/sample/sample-config.php' );
}
