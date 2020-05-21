import { combineReducers } from 'redux';


const recommendationsReducer = (recommendations, action) => {
    if (action.type === 'ACCEPT_RECOMMENDATION') 
    {
        //console.log("action: ",action);
        //console.log("recs",recommendations);
        const newObj = Object.assign([],recommendations);
        const aryIndex = newObj.findIndex(x => x.id === action.payload);
        newObj[aryIndex].userAction="A";
        newObj[aryIndex].actionTaken = "accepted"
        //const newObj = [...recommendations, [action.payload.id]: ups];
        //console.log("new obj:", aryIndex, newObj);
        return newObj;
    }
    if (action.type === 'DECLINE_RECOMMENDATION') 
    {
        //console.log("action: ",action);
        //console.log("recs",recommendations);
        const newObj = Object.assign([],recommendations);
        const aryIndex = newObj.findIndex(x => x.id === action.payload);
        newObj[aryIndex].userAction="D";
        newObj[aryIndex].actionTaken = "declined"
        //const newObj = [...recommendations, [action.payload.id]: ups];
        //console.log("new obj:", aryIndex, newObj);
        return newObj;
    }
    if (action.type === 'UNDO_RECOMMENDATION') 
    {
        //console.log("action: ",action);
        //console.log("recs",recommendations);
        const newObj = Object.assign([],recommendations);
        const aryIndex = newObj.findIndex(x => x.id === action.payload);
        newObj[aryIndex].userAction="N";
        newObj[aryIndex].actionTaken = ""
        //const newObj = [...recommendations, [action.payload.id]: ups];
        //console.log("new obj:", aryIndex, newObj);
        return newObj;
    }
    return [{
        "id": "1",
        "recommendation": "Add Allergy",
        "actions": [{
            "id": "1",
            "action": "A",
            "item": "allergen",
            "itemText": "Latex"
        }, {
            "id": "2",
            "action": "A",
            "item": "reactions",
            "itemText": "cough, rash"
        }, {
            "id": "3",
            "action": "A",
            "item": "severity",
            "itemText": "medium"
        }, {
            "id": "4",
            "action": "A",
            "item": "type",
            "itemText": "allergy"
        }],
        "reasons": "lgE blood identified as positive",
        "userAction": "N",
        "actionTaken": "",
        "currentAllergies": []
    }, {
        "id": "2",
        "recommendation": "Add Reaction, Update Severity",
        "actions": [{
            "id": "1",
            "action": "A",
            "item": "reactions",
            "itemText": "Shortness of Breath"
        }, {
            "id": "2",
            "action": "A",
            "item": "severity",
            "itemText": "High"
        }, {
            "id": "3",
            "action": "D",
            "item": "severity",
            "itemText": "Low"
        }],
        "reasons": "Free-text reaction found in notes",
        "userAction": "N",
        "actionTaken": "",
        "currentAllergies": [{
            "id": "1234567",
            "allergen": "Bactrim",
            "reactions": "Rash",
            "severity": "Low",
            "type": "Allergy"
        }]
    }]
};



export default combineReducers({
    recommendations: recommendationsReducer
});