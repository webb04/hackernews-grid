import React, { Component } from 'react';
import classnames from 'classnames';

import './GridItem.css';

class GridItem extends Component {
    toggleClick() {
        this.props.onSelect();
    }

    render() {
        const { by, title, score, selected, gridKey, zIndex } = this.props;
        const GridItemClasses = classnames({
            GridItem: true,
            selected
        });
        return (
            <div style={{ zIndex: `${zIndex}` }} id={gridKey} className={GridItemClasses} onClick={() => this.props.onSelect(title, gridKey)}>
                <div className="score">{ score }</div>
                <div className="details">
                    <div className="title"><strong>{ title }</strong></div>
                    <div className="by">By { by }</div>
                    <div>
                        Changes to our legacy lifecycle methods.
                        {
                            selected 
                            ? <span> In React 16.3.0, we are adding a few new lifecycle methods to assist with that migration. We are also introducing new APIs for long requested features: an official context API, a ref forwarding API, and an ergonomic ref API. 
                                <br/><br/>
                                <p>React’s class component API has been around for years with little change. However, as we add support for more advanced features (such as error boundaries and the upcoming async rendering mode) we stretch this model in ways that it was not originally intended.</p></span> 
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default GridItem;