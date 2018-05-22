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
		items: {
			type: 'array'
		},
		type: {
			type: 'string',
			default: 'wide'
		}
    },

	edit: function( { focus, attributes, className, setAttributes } ) {
		const {
			items,
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
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
				focus={ focus }
				editing={ true }
			/>
        ];
	},

	save( { attributes, className } ) {
		const {
			items,
			type
		} = attributes;

		return (
			<Accordion
				className={ className }
				attributes={ attributes }
				editing={ false }
			/>
		);
	}
} );


class Accordion extends Component {
	constructor(props) {
		super(props);
		let items;

		if(typeof props.attributes.items === 'undefined') {
            items = [{
                title: '',
                content: ''
            }];
        } else {
            items = props.attributes.items;
		}
		
        this.state = {
            activeItem: 0,
            items
		};
	}

    updateItem(index, type, value) {
		const {
			setAttributes
		} = this.props;

        const currentState = this.state;
        const items  = currentState.items;

        items[index][type] = value;

        this.setState({ items });	
		setAttributes({ items });
    }

	render() {
		const {
			className,
			attributes,
			setAttributes,
			focus,
			editing
		} = this.props;

		const {
			activeItem,
			items
		} = this.state;

		const that = this;

		const template = ReactHtmlParser(wpMightyBlocksAccordionTemplate( className, items ), {
			transform: node => {
				if ( node.type === 'tag' && node.name === 'div' ) {
					if ( node.attribs['data-type'] === 'title' ) {
						const key = node.attribs['key'];

						if ( editing === true ) {
							return <PlainText
								value={ items[ key ]['title'] }
								onChange={ ( value ) => that.updateItem( key, 'title', value ) }
							/>;
						} else {
							return <div class='wp-block-mightyblocks-accordion-title'>{ items[ key ]['title'] }</div>;
						}
					}

					if ( node.attribs['data-type'] === 'content' ) {
						const key = node.attribs['key'];

						if ( editing === true ) {
							return <RichText
								class='wp-block-mightyblocks-accordion-content'
								tagName='div'
								multiline='p'
								onChange={ ( value ) => that.updateItem( key, 'content', value ) }
								value={ items[ key ]['content'] }
								placeholder={ __( 'Add accordion content' ) }
								formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
								keepPlaceholderOnFocus
							/>;
						} else {
							return <div class='wp-block-mightyblocks-accordion-content'>{ items[ key ]['content'] }</div>;
						}
					}
				}
			}
		});

		return template;
	}
}
