function SetInitialAttributes( options ) {
	let attributes = {};

	return Object.keys( options ).map( index => {
		const option = options[ index ];
		return attributes[ index ] = { type: 'string', default: option['default'] };
	});
}

export default SetInitialAttributes;