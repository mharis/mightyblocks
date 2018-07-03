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

class ContentBox {
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
		return 'contentbox';
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
		return __( 'Content Box', 'wpmightyblocks' );
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
            'label'         => __( 'Title', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PlainText',
            'default'       => '',
            'placeholder'   => '',
        );

        $options['content'] = array(
            'label'         => __( 'Content', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'RichText',
            'default'       => '',
            'placeholder'   => __( 'Add Content', 'wpmightyblocks' ),
		);

		$options['iconSettings'] = array(
			'type'			=> 'Section',
			'title'			=> __( 'Icon Settings', 'wpmightyblocks' )
		);

		$options['iconSettings']['fields']['icon'] = array(
            'label'         => __( 'Icon', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'IconControl',
            'default'       => '',
		);
		
		$options['iconSettings']['fields']['iconSize'] = array(
            'label'         	=> __( 'Size', 'wpmightyblocks' ),
            'description'   	=> '',
			'type'          	=> 'RangeControl',
			'initialPosition'	=> '30',
			'default'       	=> '30',
			'min'				=> '6',
			'max'				=> '300',
        );
    
        $options['iconSettings']['fields']['iconAlignment'] = array(
            'label'         => __( 'Alignment', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'AlignmentControl',
            'default'       => 'center',
        );
        

        $options['iconSettings']['fields']['iconBorderwidth'] = array(
            'label'         => __( 'Border Width', 'wpmightyblocks' ),
            'description'   => __( '(In Pixels)', 'wpmightyblocks' ),
            'type'          => 'DimensionsControl',
            'default'       => '0px 0px 0px 0px',
            'unit'          => 'px',
            'min'           => '0'
		);
		
		$options['iconSettings']['fields']['iconBorderradius'] = array(
            'label'         => __( 'Border Radius', 'wpmightyblocks' ),
            'description'   => __( '(In Pixels)', 'wpmightyblocks' ),
            'type'          => 'DimensionsControl',
            'default'       => '50% 50% 50% 50%',
            'unit'          => 'px',
            'min'           => '0'
		);

		$options['iconSettings']['fields']['iconRotate'] = array(
            'label'         	=> __( 'Rotate', 'wpmightyblocks' ),
            'description'   	=> '',
            'type'          	=> 'RangeControl',
			'default'       	=> '0',
			'initialPosition'	=> '0',
			'min'				=> '0',
			'max'				=> '360',
		);
		
		$options['iconSettings']['fields']['iconPadding'] = array(
            'label'         	=> __( 'Padding', 'wpmightyblocks' ),
            'description'   	=> '',
            'type'          	=> 'RangeControl',
			'default'       	=> '15',
			'initialPosition'	=> '15',
			'min'				=> '0',
			'max'				=> '100',
        );
        
        $options['headingSettings'] = array(
			'type'			=> 'Section',
			'title'			=> __( 'Heading Settings', 'wpmightyblocks' )
        );
        
		$options['headingSettings']['fields']['headingSize'] = array(
            'label'         => __( 'Heading Size', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'HeadingControl',
            'default'       => 'H2',
        );

        $options['headingSettings']['fields']['headingAlignment'] = array(
            'label'         => __( 'Alignment', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'AlignmentControl',
            'default'       => 'center',
        );
        
        $options['contentSettings'] = array(
			'type'			=> 'Section',
			'title'			=> __( 'Content Settings', 'wpmightyblocks' )
        );
        
        $options['contentSettings']['fields']['contentAlignment'] = array(
            'label'         => __( 'Alignment', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'AlignmentControl',
            'default'       => 'center',
        );
		
        $options['normalStyle'] = array(
            'type'       => 'Section',
            'title'         => __( 'Normal Styles', 'wpmightyblocks' )
        );

        $options['normalStyle']['fields']['iconPrimaryColor'] = array(
            'label'         => __( 'Icon Primary Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#333333',
        );

        $options['normalStyle']['fields']['iconSecondaryColor'] = array(
            'label'         => __( 'Icon Secondary Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#FFFFFF',
        );

        $options['hoverStyle'] = array(
            'type'      => 'Section',
            'title'     => __( 'Hover Styles', 'wpmightyblocks' )
        );


        $options['hoverStyle']['fields']['iconHoverPrimaryColor'] = array(
            'label'         => __( 'Icon Hover Primary Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#555555',
        );

        $options['hoverStyle']['fields']['iconHoverSecondaryColor'] = array(
            'label'         => __( 'Icon Hover Secondary Color', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'PanelColor',
            'default'       => '#FFFFFF',
		);
		
		$options['linkSettings'] = array(
			'type'			=> 'Section',
			'title'			=> __( 'Link Settings', 'wpmightyblocks' )
		);

        $options['linkSettings']['fields']['link'] = array(
            'label'         => __( 'Link', 'wpmightyblocks' ),
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
		
        $options['image'] = array(
            'label'         => __( 'Image', 'wpmightyblocks' ),
            'description'   => '',
            'type'          => 'MediaUpload',
            'default'       => array(
				'id' => '',
				'url' => plugins_url( 'dist/images/placeholder.png', dirname(__FILE__) ),
			),
            'placeholder'   => __( 'Edit Image', 'wpmightyblocks' ),
        );

		return $options;
    }
}
