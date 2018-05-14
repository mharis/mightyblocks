/**
 * BLOCK: Tabs
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;

const {
	registerBlockType,
	RichText,
	InspectorControls,
	ColorPalette,
	BlockControls,
	MediaUpload,
	PlainText
} = wp.blocks;

const {
	Toolbar,
	ToggleControl,
	PanelColor,
	RangeControl,
	SelectControl,
	IconButton,
} = wp.components;

const { Component } = wp.element;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'mightyblocks/block-tabs', {
	title: __( 'Tabs' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'tabs' ),
	],

	attributes: {
		title: {
			type: 'string',
			selector: '.wp-block-mightyblocks-testimonial-title',
		},
		content: {
            type: 'array',
            selector: '.wp-block-mightyblocks-testimonial-text',
            source: 'children',
        },
		type: {
			type: 'string',
			default: 'wide'
		},
		backgroundColor: {
			type: 'string',
			default: mightyblocks['testimonial-bg-color']
		},
		borderColor: {
			type: 'string',
			default: mightyblocks['testimonial-border-color']
		},
		borderSize: {
			type: 'string',
			default: mightyblocks['testimonial-border-size']
		},
		titleFontColor: {
			type: 'string',
			default: mightyblocks['testimonial-title-font-color']
		},
		titleFontSize: {
			type: 'string',
			default: mightyblocks['testimonial-title-font-size']
		},
		testimonialFontColor: {
			type: 'string',
			default: mightyblocks['testimonial-font-color']
		},
		testimonialFontSize: {
			type: 'string',
			default: mightyblocks['testimonial-font-size']
		},
		url: {
			type: 'string',
			default: mightyblocks[ 'plugin_url' ] + '/dist/images/avatar.jpg'
		},
		id: {
			type: 'string',
		},
    },

	edit: function( { focus, attributes, className, setAttributes } ) {
		const {
			title,
			content,
			type,
			backgroundColor,
			borderColor,
			borderSize,
			titleFontColor,
			titleFontSize,
			testimonialFontColor,
			testimonialFontSize,
			url,
			id
		} = attributes;

		const inspectorControls = focus && (
			<InspectorControls>
				<br />

				<SelectControl
					label={ __( 'Type' ) }
					description={ __( 'Select style of testimonial.' ) }
					options={
						[
							{
								value: 'wide',
								label: __( 'Wide' )
							},
							{
								value: 'compact',
								label: __( 'Compact' )
							},
						]
					}
					value={ type }
					onChange={ ( value ) => setAttributes( { type: value } ) }
				/>

				<PanelColor
					title={ __( 'Background Color' ) }
					colorValue={ backgroundColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Background Color' ) }
						value={ backgroundColor }
						onChange={ ( value ) => setAttributes( { backgroundColor: value } ) }
						colors={[]}
					/>
				</PanelColor>

				<PanelColor
					title={ __( 'Border Color' ) }
					colorValue={ borderColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Border Color' ) }
						value={ borderColor }
						onChange={ ( value ) => setAttributes( { borderColor: value } ) }
						colors={[]}
					/>
				</PanelColor>

				<RangeControl
					label={ __( 'Border Size' ) }
					value={ borderSize }
					onChange={ ( value ) => setAttributes( { borderSize: value } ) }
					min={ 0 }
					max={ 32 }
					step={ 1 }
				/>

				<PanelColor
					title={ __( 'Title Font Color' ) }
					colorValue={ titleFontColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Title Font Color' ) }
						value={ titleFontColor }
						onChange={ ( value ) => setAttributes( { titleFontColor: value } ) }
						colors={[]}
					/>
				</PanelColor>

				<RangeControl
					label={ __( 'Title Font Size' ) }
					value={ titleFontSize }
					onChange={ ( value ) => setAttributes( { titleFontSize: value } ) }
					min={ 12 }
					max={ 32 }
					step={ 1 }
				/>

				<PanelColor
					title={ __( 'Testimonial Font Color' ) }
					colorValue={ testimonialFontColor }
					initialOpen={ false }
				>
					<ColorPalette
						label={ __( 'Testimonial Font Color' ) }
						value={ testimonialFontColor }
						onChange={ ( value ) => setAttributes( { testimonialFontColor: value } ) }
						colors={[]}
					/>
				</PanelColor>

				<RangeControl
					label={ __( 'Testimonial Font Size' ) }
					value={ testimonialFontSize }
					onChange={ ( value ) => setAttributes( { testimonialFontSize: value } ) }
					min={ 14 }
					max={ 24 }
					step={ 1 }
				/>
			</InspectorControls>
		);

        return [
			inspectorControls,
			<Tabs
				className={className}
				attributes={attributes}
				setAttributes={setAttributes}
				focus={focus}
			/>
        ];
	},

	save( { attributes, className } ) {
		const {
			title,
			content,
			type,
			backgroundColor,
			borderColor,
			borderSize,
			titleFontColor,
			titleFontSize,
			testimonialFontColor,
			testimonialFontSize,
			url,
			id
		} = attributes;

		return (
			<Tabs
				className={className}
			/>
		);
	}
} );


class Tabs extends Component {
	constructor(props) {
		super(props);

        this.state = {
            activeTab: 0,
            tabs: [
				{
					name: '',
					content: ''
				}
			]
        };
	}

    updateTab(index, type, value) {
        const currentState = this.state;
        const tabs  = currentState.tabs;

        tabs[index][type] = value;

        this.setState({ tabs: tabs });
        currentState.tabs = tabs;
    }

	render() {
		const {
			className,
			attributes,
			setAttributes,
			focus
		} = this.props;

		const {
			title
		} = attributes;

		const {
			activeTab,
			tabs
		} = this.state;

		const tabsNav = Object.keys(tabs).map((index) => {
			return <li>
				<a data-id={ index } onClick={ (event) => event.preventDefault() }>
					<PlainText
						placeholder={ `Tab ${parseInt(index) + 1}` }
						value={ tabs[index]['name'] }
						onChange={ ( value ) => this.updateTab(index, 'name', value) }
					/>
				</a>
			</li>;
		});


		const tabsContent = Object.keys(tabs).map((index) => {
			return <RichText
					className={ `wp-block-mightyblocks-block-tabs-content wp-block-mightyblocks-block-tabs-content-${index}` }
					tagName='div'
					multiline='p'
					onChange={ ( value ) => this.updateTab(index, 'content', value) }
					value={ tabs[index]['content'] }
					isSelected={ focus }
					placeholder={ __( 'Add content' ) }
					formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
					keepPlaceholderOnFocus
			/>;
		});


		return <div className={ className }>
			<div className='wp-block-mightyblocks-block-tabs'>
				<ul className='wp-block-mightyblocks-block-tabs-nav'>
					{ tabsNav }
				</ul>
			</div>
			<div className='wp-block-mightyblocks-block-tabs-content-wrapper'>
				{ tabsContent }
			</div>
		</div>;
	}
}
