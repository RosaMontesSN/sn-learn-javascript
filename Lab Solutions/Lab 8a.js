//
// Lab 8a - Rebuild the previous lab as a scripted REST API
//

//  Use Query parameters to accept the table name and limit
//  Return the array of objects in the response body
//
// Get table record display values and sys_ids
//

(function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    var queryParams = request.queryParams;
    var tableName = queryParams.tableName;
    var limit = queryParams.limit;

    var answer = [];

    var recGr = new GlideRecord(tableName);
    if (limit && limit > 0) {
        recGr.setLimit(limit);
    }
    recGr.query();

    while (recGr.next()) {
        var obj = {};
        obj.display_value = recGr.getDisplayValue();
        obj.sys_id = recGr.getUniqueValue();

        answer.push(obj);
    }

    response.setBody(answer);

})(request, response);


// Rosa's code
(function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    // https://<instance_rest_endpoint>?tableName=<tableName>&limit=<limit>

    var queryParams = request.queryParams;
    var requestTableName = queryParams.table_name;
    var requestLimit = queryParams.limit;

    //////////////////////////////////////////////////////////////////////////

    function listRecords(tableName, limit) {

        var arr = [];

        var recGr = new GlideRecord(tableName);
        if (limit && limit > 0) {
            recGr.setLimit(limit);
        }
        recGr.query();

        while (recGr.next()) {
            var obj = {};

            obj.display_value = recGr.getDisplayValue();
            obj.sys_id = recGr.getUniqueValue();

            arr.push(obj);
        }

        return arr;
    }

    //////////////////////////////////////////////////////////////////////////
	
    var answer = listRecords(requestTableName, requestLimit);

    response.setBody(answer);

})(request, response);