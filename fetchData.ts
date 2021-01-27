exports.getSiteData = async (org) => {
    const organizations = require('./data.js');
    // find org
    const found = organizations.organizations.find(o => o.name === org);
    
    if (!found) return;
    // return all data attached
    return found;
}