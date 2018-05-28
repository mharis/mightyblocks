<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since 	1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @since 1.0.0
 */
function mightyblocks_block_assets() {
	// Styles.
	wp_enqueue_style(
		'mightyblocks-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		array( 'wp-blocks' )
	);

	wp_enqueue_style(
		'mightyblocks-icon-font',
		plugins_url( 'dist/mb-icon-font.css', dirname( __FILE__ ) )
	);
} // End function mightyblocks_block_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'mightyblocks_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @since 1.0.0
 */
function mightyblocks_editor_assets() {
	$options = array();
	$options[ 'plugin_url' ] = plugins_url( '/', dirname( __FILE__ ) );

	// Scripts.
	wp_enqueue_script(
		'mightyblocks-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks' )
	);

	wp_localize_script(
		'mightyblocks-block-js',
		'mightyblocks',
		$options
	);

	// Styles.
	wp_enqueue_style(
		'mightyblocks-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' )
	);

	wp_enqueue_style(
		'mightyblocks-icon-font',
		plugins_url( 'dist/mb-icon-font.css', dirname( __FILE__ ) )
	);
} // End function mightyblocks_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'mightyblocks_editor_assets', 11 );

function mightyblocks_plugin_template_path() {
	return apply_filters(
		'mightyblocks_plugin_template_path',
		untrailingslashit( plugin_dir_path( dirname( __FILE__ ) ) )
	);
}

function mightyblocks_plugin_template_url() {
	return apply_filters(
		'mightyblocks_plugin_template_url',
		untrailingslashit( plugin_dir_url( dirname( __FILE__ ) ) )
	);
}

function mightyblocks_locate_template( $template_name ) {
	$template_path = '/mightyblocks/';

	$plugin_path  = mightyblocks_plugin_template_path() . '/mightyblocks/';
	$plugin_url = mightyblocks_plugin_template_url() . '/mightyblocks/';

	// Look within passed path within the theme - this is priority
	$template = locate_template(
		array(
			$template_path . $template_name,
			$template_name
		)
	);

	if ( $template ) {
		$template = untrailingslashit( get_stylesheet_directory_uri() ) . $template_path . $template_name;
	}

	if ( ! $template && file_exists( $plugin_path . $template_name ) ) {
		$template = $plugin_url . $template_name;
	}

	// Return what we found
	return $template;
}
  
include_once plugin_dir_path( dirname( __FILE__ ) ) . '/blocks/Accordion.php';
$Accordion = new Accordion();

include_once plugin_dir_path( dirname( __FILE__ ) ) . '/blocks/Video.php';
$Accordion = new Video();