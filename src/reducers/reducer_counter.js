export default function(state=0, action) {
    switch(action.type) {
        case 'increase':
            console.log(state)
            return state + 1;
        default:
            return state;
    }
}