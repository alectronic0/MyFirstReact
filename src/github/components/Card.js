import React from 'react';

export const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <img width="75" src={props.avatar_url} alt={props.name}/>
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontsize: '1.25 em', fontWeight: 'bold'}}>
                    <a href={props.html_url}> {props.name} </a>
                </div>
                <div>
                    {props.company}
                </div>
            </div>
        </div>
    )
};