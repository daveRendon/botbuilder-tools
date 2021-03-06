const {ServiceBase} = require('../serviceBase');

class Customprebuiltintents extends ServiceBase {
    constructor() {
        super('/apps/{appId}/versions/{versionId}/customprebuiltintents');
    }

    /**
     * Gets custom prebuilt intents information of this application
     */
    getCustomPrebuiltDomainIntentsList(params) {
        return this.createRequest('', params, 'get');
    }

    /**
     * Adds a custom prebuilt intent model to the application
     */
    addCustomPrebuiltIntent(params, prebuiltDomainModelCreateObject/* PrebuiltDomainModelCreateObject */) {
        return this.createRequest('', params, 'post', prebuiltDomainModelCreateObject);
    }
}

module.exports = Customprebuiltintents;
