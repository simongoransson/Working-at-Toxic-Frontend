import React from 'react';

/**
 * Top Filter
 * 
 * @param {*} setSearchTerm
 * @param {*} setLanguage
 * @param {*} languages
 * @returns 
 */
const TopFilter = ({ setSearchTerm, setLanguage, languages }) => {
/**
 * Handle Language Change
 * 
 * @param {*} e 
 */
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="flex-container filter-section">
      <input type="text" placeholder="Search movie..." onChange={(e) => setSearchTerm(e.target.value)} />
      <select onChange={handleLanguageChange} defaultValue="All Languages">
        <option name="All languages" value=''>All Languages</option>
        { languages.map(language => <option key={language} name={language} value={language}>{language}</option>) }
      </select>
    </div>
  );
}

export default TopFilter;