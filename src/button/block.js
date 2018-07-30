/**
 * BLOCK: Accordion
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import MightyBlocksInspectorControls from '../common/controls.js';
import SetInitialAttributes from '../helpers/set-initial-attributes';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	RichText,
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

const options = mightyblocksButton;
let attributes = SetInitialAttributes( options );

attributes['blockId'] = { type: 'string', default: '' };

class MightyBlocksButtonIcon extends Component {
	render() {
		return (
			<svg width="20" height="20" aria-hidden="true" data-prefix="far" data-icon="rectangle-wide" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M592 96.5H48c-26.5 0-48 21.5-48 48v223c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48v-223c0-26.5-21.5-48-48-48zm-6 271H54c-3.3 0-6-2.7-6-6v-211c0-3.3 2.7-6 6-6h532c3.3 0 6 2.7 6 6v211c0 3.3-2.7 6-6 6z"></path></svg>
		);
	}
}


registerBlockType( 'mightyblocks/block-button', {
	title: __( 'Button' ),
	icon: <MightyBlocksButtonIcon />,
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'button' ),
	],
	anchor: true,

	attributes,

	edit: function( { clientId, attributes, className, setAttributes } ) {
		setAttributes( { blockId: clientId } );

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

		const template = ReactHtmlParser( wpMightyBlocksButtonTemplate( className, attributes, editing ), {
			transform: node => {
				if ( node.type === 'tag' && node.name === 'div' ) {
					if ( node.attribs['data-type'] === 'title' ) {
						if ( editing === true ) {
							return <RichText
								tagName='span'
								placeholder={ __( 'Add text…' ) }
								value={ attributes['title'] }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
								keepPlaceholderOnFocus
							/>;
						} else {
							return attributes['title'];
						}
					}
				}
			}
		} );

		return template;
	}
}