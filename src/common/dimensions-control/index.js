const {
    BaseControl,
	withInstanceId,
} = wp.components;

import './style.scss';

function DimensionsControl( { label, value, unit, help, className, instanceId, onChange, ...props } ) {
	const id = `inspector-mb-dimension-control-${ instanceId }`;
	let splitValues = value.split(' ');

	console.log( splitValues[ 0 ], ! splitValues[ 0 ] );
	if( ! splitValues[ 0 ] ) {
		splitValues[ 0 ] = 0;
	}

	if( ! splitValues[ 1 ] ) {
		splitValues[ 1 ] = 0;
	}

	if( ! splitValues[ 2 ] ) {
		splitValues[ 2 ] = 0;
	}

	if( ! splitValues[ 3 ] ) {
		splitValues[ 3 ] = 0;
	}

	const onChangeValue = ( event ) => {
		let value = event.target.value;

		if( ! value ) {
			value = 0
		};

		const slot = parseInt( event.target.getAttribute('data-dimension-slot') );
		splitValues[ slot ] = value;

		
		const returnValue = splitValues.map( ( value, index ) => {
			value = parseInt( value );
			value = value + unit;
			return value;
		}).join(' ');

		onChange( returnValue );
    }

	return (
		<BaseControl label={ label } id={ id } help={ help } className={ className }>
			<div className="components-mb-dimension-control__input">
				<input
					type="number"
					id={ `${id}-0` }
					data-dimension-slot="0"
					value={ parseInt( splitValues[0] ) }
					onChange={ onChangeValue }
					aria-describedby={ !! help ? id + '__help' : undefined }
					{ ...props }
				/>
				<label for={ `${id}-0` }>Top</label>
			</div>
			<div className="components-mb-dimension-control__input">
				<input
					type="number"
					id={ `${id}-1` }
					data-dimension-slot="1"
					value={ parseInt( splitValues[1] ) }
					onChange={ onChangeValue }
					aria-describedby={ !! help ? id + '__help' : undefined }
					{ ...props }
				/>
				<label for={ `${id}-1` }>Right</label>
			</div>
			<div className="components-mb-dimension-control__input">
				<input
					type="number"
					id={ `${id}-2` }
					data-dimension-slot="2"
					value={ parseInt( splitValues[2] ) }
					onChange={ onChangeValue }
					aria-describedby={ !! help ? id + '__help' : undefined }
					{ ...props }
				/>
				<label for={ `${id}-2` }>Bottom</label>
			</div>
			<div className="components-mb-dimension-control__input">
				<input
					type="number"
					id={ `${id}-3` }
					data-dimension-slot="3"
					value={ parseInt( splitValues[3] ) }
					onChange={ onChangeValue }
					aria-describedby={ !! help ? id + '__help' : undefined }
					{ ...props }
				/>
				<label for={ `${id}-3` }>Left</label>
			</div>
		</BaseControl>
	);
}

export default withInstanceId( DimensionsControl );