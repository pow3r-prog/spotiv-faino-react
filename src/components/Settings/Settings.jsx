import React from 'react'

const Settings = () => {
    return (
        <div className='container'>
            <div className="settings">
                <h1 className='settings__header'>Settings</h1>
                <div className='settings__list'>
                    <div className="change__language">
                        <h2>Language</h2>
                        <div className='change__language_settings'>
                            <p>Choose the language</p>
                            <select name="Choose language" id="">
                                <option value="">English</option>
                                <option value="">Ukraine</option>
                                <option value="">Russian</option>
                                <option value="">Japan</option>
                            </select>
                        </div>
                    </div>
                    <div className="non-stop__settings">
                        <h2>Music non-stop</h2>
                        <div className='non-stop__change'>
                            <p>When the tracks end, turn on the others.</p>
                            <input type="checkbox" name="non-stop" id="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
