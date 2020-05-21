import React from 'react';
import { connect } from 'react-redux';

class CurrentAllergiesPanel extends React.Component {
    renderList() {
        if (this.props.currentAllergies.length === 0) {
            return (
            <div class="w3-panel">
                no current allergy
            </div>); 
        }
        return this.props.currentAllergies.map(allergy => {
            return (
                <div class="w3-panel" key={allergy.id}>
                    <div class="w3-cell-row w3-light-blue">
                        <div class="w3-cell w3-mobile w3-text-grey" 
                            style={{width:'80px',paddingLeft:'8px'}}
                            >Allergen
                        </div>
                        <div class="w3-cell w3-mobile w3-large"
                            >{allergy.allergen}
                        </div>
                    </div>
                    <div class="w3-cell-row w3-pale-blue">
                        <div class="w3-cell w3-mobile w3-text-grey w3-small" 
                            style={{width:'80px',paddingLeft:'8px'}}
                            >Reactions
                        </div>
                        <div class="w3-cell w3-mobile w3-left-align"
                            >{allergy.reactions}
                        </div>
                    </div>
                    <div class="w3-cell-row w3-pale-blue">
                        <div class="w3-cell w3-mobile w3-text-grey w3-small" 
                            style={{width:'80px',paddingLeft:'8px'}}
                            >Severity
                        </div>
                        <div class="w3-cell w3-mobile"
                            >{allergy.severity}
                        </div>
                    </div>
                    <div class="w3-cell-row w3-pale-blue">
                        <div class="w3-cell w3-mobile w3-text-grey w3-small" 
                            style={{width:'80px',paddingLeft:'8px'}}
                            >Type
                        </div>
                        <div class="w3-cell w3-mobile"
                            >{allergy.type}
                        </div>
                    </div>
                </div>
            );
        });
    }
    render() {
        return(
        <div>
            {this.renderList()}
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    const aryIndex = state.recommendations.findIndex(x => x.id === ownProps.recommendationId);
    return {currentAllergies: state.recommendations[aryIndex].currentAllergies};
};

export default connect(mapStateToProps)(CurrentAllergiesPanel);