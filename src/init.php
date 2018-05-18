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
add_action( 'enqueue_block_editor_assets', 'mightyblocks_editor_assets' );


include_once plugin_dir_path( dirname( __FILE__ ) ) . '/blocks/Accordion.php';
$Accordion = new Accordion();