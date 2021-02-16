import React from 'react'

export default function PersonalInfoContainer() {
    return (
        <div>
            <h4>My personnal informations:</h4>
            <form>
                <fieldset>
                    <label>First name</label>
                    <input type="text" name="" value="" />
                </fieldset>
                <fieldset>
                    <label>Last name</label>
                    <input type="text" name="" value="" />
                </fieldset>
                <fieldset>
                    <label>Phone number</label>
                    <input type="text" name="" value="" />
                </fieldset>
                <button>Update</button>
            </form>
        </div>
    )
}
