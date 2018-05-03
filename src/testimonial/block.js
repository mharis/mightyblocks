/**
 * BLOCK: Testimonial
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType,
	RichText,
	InspectorControls,
	ColorPalette,
	BlockControls,
	MediaUpload
} = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	Toolbar,
	ToggleControl,
	PanelColor,
	RangeControl,
	SelectControl,
	IconButton,
} = wp.components;
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
registerBlockType( 'mightyblocks/block-testimonial', {
	title: __( 'Testimonial' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'testimonial' ),
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
			<div
				className={ `${className} ${className}-${type}`  }
				style={ {
					backgroundColor,
					borderColor,
					borderWidth: borderSize + 'px'
				} }
			>

				<div>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { url: media.url, id: media.id } ) }
						type="image"
						value={ id }
						render={ ( { open } ) => (
							<img
								src={ url }
								alt={  __( 'Edit image' ) }
								onClick={ open }
							/>
						) }
					/>
				</div>

				{ type === 'wide' &&
					<div>
						<RichText
							className='wp-block-mightyblocks-testimonial-title'
							tagName='p'
							placeholder={ __( 'Title' ) }
							value={ title }
							formattingControls={ [ ] }
							isSelected={ focus }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							style={ {
								fontSize: titleFontSize + 'px',
								color: titleFontColor
							} }
							keepPlaceholderOnFocus
						/>

						<RichText
							className='wp-block-mightyblocks-testimonial-text'
							tagName='div'
							multiline='p'
							onChange={ ( value ) => setAttributes( { content: value } ) }
							value={ content }
							isSelected={ focus }
							placeholder={ __( 'Add notice text' ) }
							formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
							keepPlaceholderOnFocus
							style={ {
								fontSize: testimonialFontSize + 'px',
								color: testimonialFontColor
							} }
						/>
					</div>
				}

				{ type === 'compact' &&
					<div>
						<RichText
							className='wp-block-mightyblocks-testimonial-text'
							tagName='div'
							multiline='p'
							onChange={ ( value ) => setAttributes( { content: value } ) }
							value={ content }
							isSelected={ focus }
							placeholder={ __( 'Add notice text' ) }
							formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
							keepPlaceholderOnFocus
							style={ {
								fontSize: testimonialFontSize + 'px',
								color: testimonialFontColor
							} }
						/>

						<RichText
							className='wp-block-mightyblocks-testimonial-title'
							tagName='p'
							placeholder={ __( 'Title' ) }
							value={ title }
							formattingControls={ [ ] }
							isSelected={ focus }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							style={ {
								fontSize: titleFontSize + 'px',
								color: titleFontColor
							} }
							keepPlaceholderOnFocus
						/>
					</div>
				}
			</div>
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
			<div
				className={ `wp-block-mightyblocks-block-testimonial-${type}` }
				style={ {
					backgroundColor,
					borderColor,
					borderWidth: borderSize + 'px'
				} }
			>
				<div>
					<img
						src={ url }
						alt=''
					/>
				</div>
				{ type === 'wide' &&
					<div>
						<div
							className='wp-block-mightyblocks-testimonial-title'
							style={ {
								fontSize: titleFontSize + 'px',
								color: titleFontColor
							} }
						>
							{ title }
						</div>

						<div
							className='wp-block-mightyblocks-testimonial-text'
							style={ {
								fontSize: testimonialFontSize + 'px',
								color: testimonialFontColor
							} }
						>
							{ content }
						</div>
					</div>
				}

				{ type === 'compact' &&
					<div>
						<div
							className='wp-block-mightyblocks-testimonial-text'
							style={ {
								fontSize: testimonialFontSize + 'px',
								color: testimonialFontColor
							} }
						>
							{ content }
						</div>

						<div
							className='wp-block-mightyblocks-testimonial-title'
							style={ {
								fontSize: titleFontSize + 'px',
								color: titleFontColor
							} }
						>
							{ title }
						</div>
					</div>
				}
			</div>
		);
	}
} );
