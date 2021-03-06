const {ServiceBase} = require('../serviceBase');

class Customprebuiltdomains extends ServiceBase {
    constructor() {
        super('/apps/customprebuiltdomains');
    }

    /**
     * Adds a prebuilt domain along with its models as a new application. Returns new app ID.
     */
    addPrebuiltApplication(params, prebuiltDomainCreateObject/* PrebuiltDomainCreateObject */) {
        return this.createRequest('', params, 'post', prebuiltDomainCreateObject);
    }

    /**
     * Gets all the available custom prebuilt domains for all cultures
     */
    getLUISPrebuiltDomainsList(params) {
        return this.createRequest('', params, 'get');
    }

    /**
     * Gets all the available custom prebuilt domains for a specific culture
     */
    getLUISPrebuiltDomainsForCultureList(params) {
        return this.createRequest('/{culture}', params, 'get');
    }
}

module.exports = Customprebuiltdomains;
