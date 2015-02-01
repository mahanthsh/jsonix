Jsonix.Context.Marshaller = Jsonix.Class(Jsonix.Binding.ElementMarshaller, {
	context : null,
	initialize : function(context) {
		Jsonix.Util.Ensure.ensureObject(context);
		this.context = context;
	},
	marshalString : function(value) {
		var doc = this.marshalDocument(value);
		var text = Jsonix.DOM.serialize(doc);
		return text;
	},
	marshalDocument : function(value) {
		var output = new Jsonix.XML.Output({
			namespacePrefixes : this.context.namespacePrefixes
		});

		var doc = output.writeStartDocument();
		this.marshalElementNode(value, this.context, output, undefined);
		output.writeEndDocument();
		return doc;
	},
	CLASS_NAME : 'Jsonix.Context.Marshaller'
});
Jsonix.Context.Marshaller.Simplified = Jsonix.Class(Jsonix.Context.Marshaller, {
	CLASS_NAME : 'Jsonix.Context.Marshaller.Simplified'
});