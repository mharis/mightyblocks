/**
 * BLOCK: Accordion
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

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
			selector: '.wp-block-mightyblocks-accordion-title',
		},
		content: {
            type: 'array',
            selector: '.wp-block-mightyblocks-accordion-content',
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

		const options = mightyblocksAccordion;

		const inspectorControls = (
			<InspectorControls>
				<br />
				{
					Object.keys( options ).map( index => {
						const option = options[ index ];
					
						if ( option['type'] === 'PlainText' || option['type'] === 'RichText' ) {
							return;
						}

						return <SelectControl
							label={ option['label'] }
							description={ option['description'] }
							options={ option['options'] }
							value={ type }
							onChange={ ( value ) => setAttributes( { type: value } ) }
						/>
					})
				}
			</InspectorControls>
		);

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
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			title,
			content
		} = attributes;

        const currentState = this.state;
        const items  = currentState.items;

        items[index][type] = value;

        this.setState({ items: items });
		currentState.items = items;
		
		const settingAttributes = {};
		settingAttributes[ type ] = value;

		setAttributes( settingAttributes );
    }

	render() {
		const {
			className,
			attributes,
			setAttributes,
			focus
		} = this.props;

		const {
			title,
			content
		} = attributes;

		const {
			activeItem,
			items
		} = this.state;

		const that = this;

		const template = ReactHtmlParser(wpMightyBlocksAccordionTemplate( className, items ), {
			transform: node => {
				if ( node.type === 'tag' && node.name === 'div' ) {
					if ( node.attribs['data-type'] === 'content' ) {
						const key = node.attribs['key'];
						return <RichText
							className='wp-block-mightyblocks-accordion-content'
							tagName='div'
							multiline='p'
							onChange={ ( value ) => that.updateItem( key, 'content', value ) }
							value={ content }
							placeholder={ __( 'Add accordion content' ) }
							formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
							keepPlaceholderOnFocus
						/>;
					}
				}
			}
		});

		return template;
	}
}
