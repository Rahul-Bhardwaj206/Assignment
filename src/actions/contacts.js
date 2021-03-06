export const actionTypes = {
    CREATE_CONTACT: "Contact/create",
    UPDATE_CONTACT: "Contact/update",
    DELETE_CONTACT: "Contact/delete"
};

export function createContact(product) {
    return dispatch => {
        return dispatch({ type: actionTypes.CREATE_CONTACT, product });
    };
}

export function updateContact(product, index) {
    return dispatch => {
        return dispatch({ type: actionTypes.UPDATE_CONTACT, product, index });
    };
}

export function deleteContact(index) {
    return dispatch => {
        return dispatch({ type: actionTypes.DELETE_CONTACT, index });
    };
}
