<?php
/**
 * Icon Block Options
 *
 * @since 	1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Icon {
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );
	}

	public function editor_assets() {
		$options = apply_filters(
            'mightyblocks_' . $this->get_name() . '_settings',
            $this->register_controls()
        );

        $template = mightyblocks_locate_template( $this->get_name() . '.js' );

		// Scripts.
		wp_enqueue_script(
            'mightyblocks-block-' . $this->get_name() . '-template-js',
            $template
		);

		wp_localize_script(
			'mightyblocks-block-' . $this->get_name() . '-template-js',
			'mightyblocks' . ucfirst( $this->get_name() ),
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
		return 'icon';
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
		return __( 'Icon', 'wpmightyblocks' );
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

		$options['icon'] = array(
            'label'         => __( 'Icon', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'IconControl',
            'default'       => 'fas fa-user',
		);

		// TODO: Add link options to panel
        $options['link'] = array(
            'label'         => __( 'Button Link', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'TextControl',
            'default'       => '#',
        );
        
        $options['newwindow'] = array(
            'label'         => __( 'Open link in new window', 'wpmightyblocks' ),
            'description'   => 'Check to open link in a new window.',
            'type'          => 'ToggleControl',
            'default'       => false
        );

        $options['nofollow'] = array(
            'label'         => __( 'Add Nofollow', 'wpmightyblocks' ),
            'description'   => 'Check to restrict search engines from following this link.',
            'type'          => 'ToggleControl',
            'default'       => false
		);
		
		$options['size'] = array(
            'label'         => __( 'Size', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'TextControl',
			'default'       => '50px',
		);

		return $options;
    }
}
