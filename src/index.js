var registerBlocktype = wp.blocks.registerBlockType;

registerBlocktype("marciofao/user-wp-block", {
     edit: function(){
        return "Edit";
     },
     save: function(){
        return "Save";
     }
})