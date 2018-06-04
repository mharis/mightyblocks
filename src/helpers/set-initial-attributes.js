function SetInitialAttributes( options ) {
	let attributes = {};

	Object.keys( options ).map( index => {
		const option = options[ index ];
		
		if ( option['type'] === 'Section' ) {
			attributes = Object.assign( attributes, SetInitialAttributes( option['fields'] ) );
		} else {
			attributes[ index ] = { type: 'string', default: option['default'] };
		}
	});

	return attributes;
}

export default SetInitialAttributes;