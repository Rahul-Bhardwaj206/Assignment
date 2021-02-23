import React, { useState } from "react";
import Header from "components/Header";
import AddContact from "components/AddProduct";
import ContactCard from "components/ProductCard";

import { useSelector } from "react-redux";

const ProductList = () => {
    const contacts = useSelector(state => state.contacts.list);

    const [contactFormVisiblity, setContactFormVisiblity] = useState(false);

    const toggleProductFormVisiblity = () =>
        setContactFormVisiblity(visiblity => !visiblity);

    return (
        <>
            <Header title="React-Redux CRUD Operations" />

            <div className="row">
                <div className="col text-center">
                   
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header bg-dark text-white text-left">
                                <h4 className="d-inline">Product List</h4>
                                <span
                                    className="float-right mt-1 cursor-pointer"
                                    onClick={toggleProductFormVisiblity}
                                >
                                    <i className="fas fa-plus"></i>
                                </span>
                            </div>

                            <ul className="list-group list-group-flush">
                                {contacts.map((contact, index) => (
                                    <ContactCard
                                        {...contact}
                                        index={index}
                                        key={contact.name}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    {contactFormVisiblity && (
                        <AddContact onClose={toggleProductFormVisiblity} />
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductList;
