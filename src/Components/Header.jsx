import React from 'react'
import { useTheme } from '../ThemeContext';

const Header = ({show}) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <>
            <header>
                <button className="burger-button" onClick={show}>
                    ☰
                </button>
                <h1 className="header-title">Products</h1>
                <div>
                    <label className="switch-theme">
                        <p>Switch theme</p>
                        <div className="switch-container">
                            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                            <span className="slider round">
                                <span className="icon light">☀</span>
                                <span className="icon dark">🌙</span>
                            </span>
                        </div>
                    </label>
                </div>
            </header>
        </>
    )
}

export default Header