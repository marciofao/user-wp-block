
import React, { Component } from "react";
import { useBlockProps } from '@wordpress/block-editor';
import Select from 'react-select'
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';


import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	
  
	return (
		<div { ...useBlockProps() } >
	     <UserListSelector 
		 value={ attributes.message }   
		 onChange={ ( val ) => setAttributes( { message: val } ) }
		 />
	  </div>
	  
	);
  }

  class UserListSelector extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        apiFetch( { path: 'uwp/v1/users' } )
            .then(
                ( items ) => {
                    this.setState( {
                        isLoaded: true,
                        items,
                    } );
                },
                ( error ) => {
                    this.setState( {
                        isLoaded: true,
                        error,
                    } );
                }
        );
    }

    render() {
        const { error, isLoaded, items } = this.state;

        // If there's an error in fetching the remote data, display the error.
        if ( error ) {
            return <div>Error: { error.message }</div>;
        // If the data is still being loaded, show a loading message/icon/etc.
        } else if ( ! isLoaded ) {
            return <div>Loading...</div>;
        // Data loaded successfully; so let's show it.
        } else {
            return (
                <Select 
				options={items} 
				/>
            );
        }
    }
}
