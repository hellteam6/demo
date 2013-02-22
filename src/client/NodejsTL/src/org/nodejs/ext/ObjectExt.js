/**
 * 
 */
//> public
vjo.mtype('org.nodejs.ext.ObjectExt') 
.props({
	/**
	 * Creates a new object whose prototype is the passed in parent object and 
	 * whose properties are those specified by props.
	 */
	//> public [%1+%2] create(Object prototype, ObjLiteral? properties)
	create: vjo.NEEDS_IMPL,
	
	/**
	 * Returns a list of the ownProperties of an object that are enumerable.
	 */
	//> public String[] keys(Object obj)
	keys: vjo.NEEDS_IMPL,
	
	/**
	 * Defines a property on an object with the given descriptor
	 * A property descriptor is an object with the following fields:
	 * <p>
	 * value - The value associated with the property. (data descriptors only). 
	 * Defaults to undefined.
	 * <p>
	 * writable - True if and only if the value associated with the property may 
	 * be changed. (data descriptors only). Defaults to false.
	 * <p>
	 * get - A function which serves as a getter for the property, or undefined 
	 * if there is no getter. (accessor descriptors only). Defaults to undefined.
	 * <p>
	 * set - A function which serves as a setter for the property, or undefined 
	 * if there is no setter. (accessor descriptors only). Defaults to undefined.
	 * <p>
	 * configurable - True if and only if the type of this property descriptor 
	 * may be changed and if the property may be deleted from the corresponding 
	 * object. Defaults to false.
	 * <p>
	 * enumerable - True if and only if this property shows up during enumeration 
	 * of the properties on the corresponding object. Defaults to false.
	 */
	//> public void defineProperty(Object obj, String name, Object descriptor)
	defineProperty: vjo.NEEDS_IMPL,
	
	/**
	 * Adds own properties and/or updates the attributes of existing own 
	 * properties of an object
	 */
	//> public Object defineProperties(Object obj, Object props)
	defineProperties: vjo.NEEDS_IMPL,
	
	/**
	 * Returns a list of the ownProperties of an object including ones that are n
	 * ot enumerable.
	 */
	//> public String[] getOwnPropertyNames(Object obj)
	getOwnPropertyNames: vjo.NEEDS_IMPL,
	
	/**
	 * Returns the prototype of an object.
	 */
	//> public Function getPrototypeOf(Object obj)
	getPrototypeOf: vjo.NEEDS_IMPL,
	
	/**
	 * Returns an object with keys describing the description of a property 
	 * (value, writable, enumerable, configurable)
	 */
	//> public Object getOwnPropertyDescriptor(Object obj, String propName)
	getOwnPropertyDescriptor: vjo.NEEDS_IMPL,
	
	/**
	 * Prevents any new properties from being added to the given object.
	 */
	//> public void preventExtensions(Object obj)
	preventExtensions: vjo.NEEDS_IMPL,
	
	/**
	 * Checks if Object.preventExtensions() has been called on this object.
	 */
	//> public boolean isExtensible(Object obj)
	isExtensible: vjo.NEEDS_IMPL,
	
	/**
	 * Prevents code from adding or deleting properties, or changing the descriptors 
	 * of any property on an object. Property values can be changed however.
	 */
	//> public void seal(Object obj)
	seal: vjo.NEEDS_IMPL,
	
	/**
	 * Checks if Object.seal() has been called on this object.
	 */
	//> public boolean isSealed(Object obj)
	isSealed: vjo.NEEDS_IMPL,
	
	/**
	 * Same as Object.seal, except property values cannot be changed.
	 */
	//> public void freeze(Object obj)
	freeze: vjo.NEEDS_IMPL,
	
	/**
	 * Checks if Object.freeze() has been called on this object.
	 */
	//> public boolean isFrozen(Object obj)
	isFrozen: vjo.NEEDS_IMPL
})
.protos({
	
	/**
	 * (Mozilla extension, not ECMAScript 5) Associates a function with a 
	 * property that, when accessed, executes that function and returns its 
	 * return value.
	 */
	//> 
	__defineGetter__: vjo.NEEDS_IMPL,
	
	/**
	 * (Mozilla extension, not ECMAScript 5) Associates a function with a property 
	 * that, when set, executes that function which modifies the property.
	 */
	//> 
	__defineSetter__: vjo.NEEDS_IMPL,
	
	/**
	 * (Mozilla extension, not ECMAScript 5) Returns the function associated with 
	 * the specified property by the defineGetter method.
	 */
	//> 
	__lookupGetter__: vjo.NEEDS_IMPL,
	
	/**
	 * (Mozilla extension, not ECMAScript 5) Returns the function associated 
	 * with the specified property by the defineSetter method.
	 */
	//> 
	__lookupSetter__: vjo.NEEDS_IMPL,
	
	/**
	 * (EcmaScript 3 and 5) Returns true if this is a prototype of the passed 
	 * in object.
	 */
	//> 
	isPrototypeOf: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();