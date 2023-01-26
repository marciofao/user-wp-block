import { useBlockProps, isSelected } from '@wordpress/block-editor';
import { Placeholder, TextControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import React, { Component } from "react";
import Select from 'react-select'


import './editor.scss';

export default function Edit({ attributes, setAttributes, isSelected }) {

	return (
		<div { ...useBlockProps() } >
             { attributes.userId && ! isSelected ? (
              
                <div>{ attributes.label }</div>
               
            ) : (
                <Placeholder 
                label="User Info"
                instructions="Select an user:"
                >     
                    <UserListSelector 
                    class="selector"
                        value={ attributes.userId }   
                        onChange={ ( val, label) => setAttributes( { userId: val , label:label} ) }
                    />
                </Placeholder>
             
            )}
           
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

    handleChange = (selectedOption) => {
        this.props.onChange(selectedOption.value, selectedOption.label); 
    }

    render() {
        const { error, isLoaded, items } = this.state;
        const selectedOption = items.find(item => item.value === this.props.value);
    
        if ( error ) {
            return <div>Error: { error.message }</div>;
        } else if ( ! isLoaded ) {
            return <div>Loading...</div>;
        } else {
            return (
                <Select 
                    options={items} 
                    value={selectedOption}
                    onChange={this.handleChange}
                />
            );
        }
    }
}
