import { registerBlockType } from '@wordpress/blocks';


var registerBlocktype = wp.blocks.registerBlockType;

registerBlocktype("marciofao/user-wp-block", {
	apiVersion: 2,
	title: 'User Info',
	icon: 'universal-access-alt',
	category: 'text', 
	attributes: {
		message: {
			type: 'string',
			source: 'text',
			selector: 'div',
			default: '', // empty default
		},
	},
     edit: function(){
        return "Edit";
     },
     save: function(){
        return "Save";
     }
})