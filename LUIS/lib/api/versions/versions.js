const {ServiceBase} = require('../serviceBase');

class Versions extends ServiceBase {
    constructor() {
        super('/apps/{appId}/versions');
    }

    /**
     * Gets the application versions info.
     */
    getApplicationVersionList(params) {
        return this.createRequest('', params, 'get');
    }

    /**
     * Imports a new version into a LUIS application, the version's JSON should be included in in the request body.
     */
    importVersionToApplication(params, jSONApp/* JSONApp */) {
        return this.createRequest('/import', params, 'post', jSONApp);
    }

    /**
     * Deletes an application version.
     */
    deleteApplicationVersion(params) {
        return this.createRequest('/{versionId}/', params, 'delete');
    }

    /**
     * Updates the name or description of the application version.
     */
    renameApplicationVersion(params, taskUpdateObject/* TaskUpdateObject */) {
        return this.createRequest('/{versionId}/', params, 'put', taskUpdateObject);
    }

    /**
     * Gets the task info.
     */
    getApplicationVersion(params) {
        return this.createRequest('/{versionId}/', params, 'get');
    }
}

module.exports = Versions;
