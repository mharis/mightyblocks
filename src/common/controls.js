const {
	InspectorControls,
	ColorPalette,
} = wp.blocks;

const {
	ToggleControl,
	PanelColor,
	RangeControl,
	SelectControl,
	IconButton,
	TextControl
} = wp.components;

const { Component } = wp.element;

class MightyBlocksInspectorControls extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
		const {
            attributes,
            options,
            setAttributes,
        } = this.props;
        
        const inspectorControls = (
			<InspectorControls>
				<br />
				{
					Object.keys( options ).map( index => {
						const option = options[ index ];

						let visible = true;

						if ( option['type'] === 'PlainText' || option['type'] === 'RichText' ) {
							visible = false;
						}

						if ( option['conditions'] ) {
							if ( option['conditions']['show'] ) {
								Object.keys( option['conditions']['show'] ).map( showConditionIndex => {
									const showCondition = option['conditions']['show'][ showConditionIndex ];

									if ( attributes[ showCondition['field'] ] !== showCondition['value'] ) {
										visible = false;
									}
								});
							}
						}

						if ( visible === false ) {
							return;
						}
						
						if ( option['type'] === 'SelectControl' ) {
							return <SelectControl
								label={ option['label'] }
								description={ option['description'] }
								options={ option['options'] }
								value={ attributes[ index ] }
								onChange={ ( value ) => setAttributes( { [index]: value } ) }
							/>;
						} else if ( option['type'] === 'TextControl' ) {
							return <TextControl
								label={ option['label'] }
								description={ option['description'] }
								value={ attributes[ index ] }
								onChange={ ( value ) => setAttributes( { [index]: value } ) }
							/>;
						} else if ( option['type'] === 'ToggleControl' ) {
							return <ToggleControl
								label={ option['label'] }
								help={ option['description'] }
								checked={ attributes[ index ] }
								onChange={ ( value ) => setAttributes( { [index]: value } ) }
							/>;
						} else if ( option['type'] === 'PanelColor' ) {
							return <PanelColor
								title={ option['label'] }
								colorValue={ attributes[ index ] }
								initialOpen={ false }
							>
								<ColorPalette
									label={ option['label']  }
									value={ attributes[ index ] }
									onChange={ ( value ) => setAttributes( { [index]: value } ) }
								/>
							</PanelColor>;
						}
					})
				}
			</InspectorControls>
        );
        
        return inspectorControls;
    }
}

export default MightyBlocksInspectorControls;