import React from 'react';
import { connect } from 'react-redux';
class RecommendedChanges extends React.Component {
    renderList() {
        return this.props.actions.map(action => {
            let actionImage = '';
            if (action.action === 'A') {
                actionImage = 'fa-plus w3-text-green';
            }
            else {
                actionImage = 'fa-minus-circle w3-text-red';
            } 
            return(
                <div class="w3-cell-row" key={action.id}>
                    <div class="w3-cell w3-cell-middle" style={{width:'30px'}}>
                        <i class={`fa ${actionImage} w3-xlarge`}></i>
                    </div>
                    <div class="w3-cell  w3-mobile w3-text-grey w3-small" style={{width:'70px'}}>
                        {action.item}
                    </div>
                    <div class="w3-cell w3-mobile ">
                        {action.itemText}
                    </div>
                </div>
            );
        });
    }
    render() {
        return(
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const aryIndex = state.recommendations.findIndex(x => x.id === ownProps.recommendationId);
    return {actions: state.recommendations[aryIndex].actions};
};

export default connect(mapStateToProps)(RecommendedChanges);