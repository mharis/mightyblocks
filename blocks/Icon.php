<?php
/**
 * Icon Block Options
 *
 * @since 	1.0.0
 * @package MightyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class MightyBlocksIcon {
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
		
		$options['size'] = array(
            'label'         	=> __( 'Size', 'wpmightyblocks' ),
            'description'   	=> '',
			'type'          	=> 'RangeControl',
			'initialPosition'	=> '30',
			'default'       	=> '30',
			'min'				=> '6',
			'max'				=> '300',
		);

        $options['borderwidth'] = array(
            'label'         => __( 'Border Width', 'wpmightyblocks' ),
            'description'   => __( '(In Pixels)', 'wpmightyblocks' ),
            'type'          => 'DimensionsControl',
            'default'       => '0px 0px 0px 0px',
            'unit'          => 'px',
            'min'           => '0'
		);
		
		$options['borderradius'] = array(
            'label'         => __( 'Border Radius', 'wpmightyblocks' ),
            'description'   => __( '(In Pixels)', 'wpmightyblocks' ),
            'type'          => 'DimensionsControl',
            'default'       => '50% 50% 50% 50%',
            'unit'          => 'px',
            'min'           => '0'
		);

		$options['rotate'] = array(
            'label'         	=> __( 'Rotate', 'wpmightyblocks' ),
            'description'   	=> '',
            'type'          	=> 'RangeControl',
			'default'       	=> '0',
			'initialPosition'	=> '0',
			'min'				=> '0',
			'max'				=> '360',
		);
		
		$options['padding'] = array(
            'label'         	=> __( 'Padding', 'wpmightyblocks' ),
            'description'   	=> '',
            'type'          	=> 'RangeControl',
			'default'       	=> '15',
			'initialPosition'	=> '15',
			'min'				=> '0',
			'max'				=> '100',
		);
		
        $options['normalStyle'] = array(
            'type'       => 'Section',
            'title'         => __( 'Normal Styles', 'wpmightyblocks' )
        );

        $options['normalStyle']['fields']['backgroundColor'] = array(
            'label'         => __( 'Primary Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#333333',
        );

        $options['normalStyle']['fields']['iconColor'] = array(
            'label'         => __( 'Secondary Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#FFFFFF',
        );

        $options['hoverStyle'] = array(
            'type'      => 'Section',
            'title'     => __( 'Hover Styles', 'wpmightyblocks' )
        );


        $options['hoverStyle']['fields']['hoverBackgroundColor'] = array(
            'label'         => __( 'Hover Primary Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#555555',
        );

        $options['hoverStyle']['fields']['hoverIconColor'] = array(
            'label'         => __( 'Hover Secondary Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#FFFFFF',
		);
		
		$options['linkSettings'] = array(
			'type'			=> 'Section',
			'title'			=> __( 'Link Settings', 'wpmightyblocks' )
		);

        $options['linkSettings']['fields']['link'] = array(
            'label'         => __( 'Button Link', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'TextControl',
            'default'       => '',
        );
        
        $options['linkSettings']['fields']['newwindow'] = array(
            'label'         => __( 'Open link in new window', 'wpmightyblocks' ),
            'description'   => 'Check to open link in a new window.',
            'type'          => 'ToggleControl',
            'default'       => false
        );

        $options['linkSettings']['fields']['nofollow'] = array(
            'label'         => __( 'Add Nofollow', 'wpmightyblocks' ),
            'description'   => 'Check to restrict search engines from following this link.',
            'type'          => 'ToggleControl',
            'default'       => false
		);

		return $options;
    }
}
