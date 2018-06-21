/**
 * BLOCK: Content Box
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
	MediaUpload,
	BlockControls,
	AlignmentToolbar,
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

const options = mightyblocksContentbox;
let attributes = SetInitialAttributes( options );

attributes['blockId'] = { type: 'string', default: '' };

registerBlockType( 'mightyblocks/block-contentbox', {
	title: __( 'Content Box' ),
	icon: 'admin-post',
	category: 'common',
	keywords: [
		__( 'mightyblocks' ),
		__( 'content box' ),
		__( 'image box' )
	],
	anchor: true,

	attributes,

	edit: function( { id, isSelected, attributes, className, setAttributes } ) {
		const alignmentToolbar = (
			<BlockControls>
				<AlignmentToolbar
					value={ attributes['alignment'] }
					onChange={ ( value ) => setAttributes( { alignment: value } ) }
				/>
			</BlockControls>
		);
		
		setAttributes( { blockId: id } );

		const inspectorControls = <MightyBlocksInspectorControls
			attributes={ attributes }
			options={ options }
			setAttributes={ setAttributes }
		/>;

        return [
			alignmentToolbar,
			inspectorControls,
			<MightyBlocksContentBox
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
				editing={ true }
			/>
        ];
	},

	save( { attributes } ) {
		return <MightyBlocksContentBox
			attributes={ attributes }
			editing={ false }
		/>
	}
} );

class MightyBlocksContentBox extends Component {
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

		const template = ReactHtmlParser( wpMightyBlocksContentBoxTemplate( className, attributes, editing ), {
			transform: node => {
				if ( node.type === 'tag' ) {
					if ( node.attribs['data-type'] === 'image' ) {
						if ( editing === true ) {
							return <MediaUpload
								onSelect={ ( media ) => setAttributes( { image: { url: media.url, id: media.id } } ) }
								type="image"
								value={ attributes['image']['id'] }
								render={ ( { open } ) => (
									<img
										src={ attributes['image']['url'] }
										alt={  __( 'Edit image' ) }
										onClick={ open }
									/>
								) }
							/>;
						} else {
							return <img src={ attributes['image']['url'] } alt="" />;
						}
					} else if ( node.attribs['data-type'] === 'title' ) {
						if ( editing === true ) {
							return <RichText
								tagName='h2'
								placeholder={ __( 'Heading' ) }
								value={ attributes['title'] }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
								keepPlaceholderOnFocus
							/>;
						} else {
							return attributes['title'];
						}
					} else if ( node.attribs['data-type'] === 'content' ) {
						if ( editing === true ) {
							return <RichText
								tagName='div'
								placeholder={ __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mi id ligula tempor luctus. In hac habitasse platea dictumst. Suspendisse egestas quam vel dictum ullamcorper.' ) }
								value={ attributes['content'] }
								onChange={ ( value ) => setAttributes( { content: value } ) }
								formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
								keepPlaceholderOnFocus
							/>;
						} else {
							return attributes['content'];
						}
					}
				}
			}
		} );

		return template;
	}
}