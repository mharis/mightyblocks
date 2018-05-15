/**
 * BLOCK: Accordion
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
 * Register: a Gutenberg Block.
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

registerBlockType( 'mightyblocks/block-accordion', {
	title: __( 'Accordion' ),
	icon: 'menu',
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'accordion' ),
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
		}
    },

	edit: function( { focus, attributes, className, setAttributes } ) {
		const {
			title,
			content,
			type,
		} = attributes;

		const options = mightyblocks['blocks']['Accordion'];


		const inspectorControls = (
			<InspectorControls>
				<br />
				{
					Object.keys(options).map((index) => {
						return <SelectControl
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
					})
				}
			</InspectorControls>
		);

		console.log(inspectorControls);

        return [
			inspectorControls,
			<Accordion
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
			type
		} = attributes;

		return (
			<Accordion
				className={className}
			/>
		);
	}
} );


class Accordion extends Component {
	constructor(props) {
		super(props);

        this.state = {
            activeItem: 0,
            items: [
				{
					name: 'Vivamus ullamcorper nim sit amet consequat laoreet tortor tortor dictum egestas urna.',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem ut felis ullamcorper posuere gravida tellus faucibus. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus. Duis et purus ipsum. In auctor mattis ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a massa. Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor dictum urna, ut egestas urna ipsum nec libero. Nulla justo leo, molestie vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor iaculis pulvinar, odio orci sodales odio, ac pulvinar felis quam sit.'
				}
			]
        };
	}

    updateItem(index, type, value) {
        const currentState = this.state;
        const items  = currentState.items;

        items[index][type] = value;

        this.setState({ items: items });
        currentState.items = items;
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
			activeItem,
			items
		} = this.state;

		return <div dangerouslySetInnerHTML={{__html: wpMightyBlocksAccordionTemplate( className, items )}} />
	}
}
