import { registerBlockType } from '@wordpress/blocks';

var registerBlocktype = wp.blocks.registerBlockType;

import metadata from './block.json';

registerBlocktype(metadata.name, {
	
     edit: function(){
        return "Edit";
     },
     save: function(){
        return "Save";
     }
})