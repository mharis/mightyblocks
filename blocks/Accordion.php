<?php
/**
 * Accordion Block Options
 *
 * @since 	1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Accordion {
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );
	}

	public function editor_assets() {
		$options = apply_filters(
            'mightyblocks_' . $this->get_name() . '_settings',
            $this->register_controls()
        );

		$template_path = mightyblocks_locate_template( 'video.js' );

		// Scripts.
		wp_enqueue_script(
			'mightyblocks-block-accordion-template-js',
			$template_path
		);

		wp_localize_script(
			'mightyblocks-block-accordion-template-js',
			'mightyblocksAccordion',
			$options
		);
	}
	
	/**
	 * Get block name
	 *
	 * Retrieve accordion block name
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Block name.
	 */
	public function get_name() {
		return 'accordion';
	}

	/**
	 * Get block title.
	 *
	 * Retrieve accordion block title.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Block title.
	 */
	public function get_title() {
		return __( 'Accordion', 'wpmightyblocks' );
	}

	/**
	 * Register accordion block controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function register_controls() {
        $options = array();

        $options['title'] = array(
            //'storeAsA'      => 'string',
            //'selector'      => '.wp-block-mightyblocks-testimonial-title',
            'label'         => __( 'Title', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PlainText',
            'default'       => '',
            'placeholder'   => '',
        );

        $options['content'] = array(
            //'storeAsA'      => 'string',
            //'selector'      => '.wp-block-mightyblocks-testimonial-title',
            'label'         => __( 'Content', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'RichText',
            'default'       => '',
            'placeholder'   => __( 'Add Content', 'wpmightyblocks' ),
        );

        $options['type'] = array(
            'label'         => __( 'Type', 'wpmightyblocks' ),
            'description'   => __( 'Select style of accordion.', 'wpmightyblocks' ),
            'type'          => 'SelectControl',
            'default'       => 'wide',
            'options'       => array(
				array(
					'value' => 'wide',
					'label' => __( 'Wide', 'wpmightyblocks' )
				),
				array(
					'value' => 'compact',
					'label' => __( 'Compact', 'wpmightyblocks' )
				)
            ),
		);
		
		return $options;
    }
}
