/**
 * BLOCK: Accordion
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import MightyBlocksInspectorControls from '../common/controls.js';

const { __ } = wp.i18n;

const {
	registerBlockType,
	RichText
} = wp.blocks;

const {
	PlainText,
} = wp.editor;

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

let attributes = {};
const options = mightyblocksButton;

Object.keys( options ).map( index => {
	const option = options[ index ];
	attributes[ index ] = { type: 'string', default: option['default'] };
});

registerBlockType( 'mightyblocks/block-button', {
	title: __( 'Button' ),
	icon: 'laptop',
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'button' ),
	],

	attributes,

	edit: function( { id, isSelected, attributes, className, setAttributes } ) {
		attributes.blockId = id;

		const inspectorControls = <MightyBlocksInspectorControls
			attributes={ attributes }
			options={ options }
			setAttributes={ setAttributes }
		/>;
		
        return [
			inspectorControls,
			<MightyBlocksButton
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
				editing={ true }
			/>
        ];
	},

	save( { attributes } ) {
		return <MightyBlocksButton
			attributes={ attributes }
			editing={ false }
		/>
	}
} );

class MightyBlocksButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			className,
			attributes,
			setAttributes,
			editing
		} = this.props;

		const template = ReactHtmlParser( wpMightyBlocksButtonTemplate( className, attributes ), {
			transform: node => {
				if ( node.type === 'tag' && node.name === 'div' ) {
					if ( node.attribs['data-type'] === 'title' ) {
						if ( editing === true ) {
							return <PlainText
								value={ attributes['title'] }
								onChange={ ( value ) => setAttributes( { title: value } ) }
							/>;
						} else {
							return attributes['title'];
						}
					}
				}
			}
		});

		return template;
	}
}