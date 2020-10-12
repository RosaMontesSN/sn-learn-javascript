//
// Lab 7: 
// Update your previous lab to return the sys_id and
// display value of the records you found using an array of objects.
// Return an array of objects.
//

// @param tableName - name of table to query
// @param limit - integer > 0
// @return array of objects
//    {
//      "display_value" : <display value>,
//      "sys_id" : <sys_id>
//    }
//
function listRecords(tableName, limit) {

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

    return answer;
}

var list = listRecords('incident', 10);

gs.info(JSON.stringify(list, null, 4));


// Rosa's code
function listRecords(tableName, limit) {

    var answer = [];

    var recGr = new GlideRecord(tableName);
    if (limit && limit > 0) {
        recGr.setLimit(limit);
    }
    recGr.query();

    while (recGr.next()) {
        var obj = {
            sys_id: recGr.getValue('sys_id'),
            displayValue: recGr.getDisplayValue()
        };

        answer.push(obj);
    }

    //gs.info(JSON.stringify(answer, null, 3));

    return answer;
}

var list = listRecords('incident', 10);

gs.info('**** List of Records ****');

gs.info(JSON.stringify(list, null, 3));

/*
*** Script: ** ** List of Records ** **

*** Script: [{
            "sys_id": "1c741bd70b2322007518478d83673af3",
            "displayValue": "INC0000060"
        },
        {
            "sys_id": "1c832706732023002728660c4cf6a7b9",
            "displayValue": "INC0009002"
        },
        {
            "sys_id": "46b66a40a9fe198101f243dfbc79033d",
            "displayValue": "INC0000009"
        },
        {
            "sys_id": "46b9490da9fe1981003c938dab89bda3",
            "displayValue": "INC0000010"
        },
        {
            "sys_id": "46c03489a9fe19810148cd5b8cbf501e",
            "displayValue": "INC0000011"
        },
        {
            "sys_id": "46c88ac1a9fe1981014de1c831fbcf6d",
            "displayValue": "INC0000012"
        },
        {
            "sys_id": "46cebb88a9fe198101aee93734f9768b",
            "displayValue": "INC0000013"
        },
        {
            "sys_id": "46e18c0fa9fe19810066a0083f76bd56",
            "displayValue": "INC0000014"
        },
        {
            "sys_id": "46ee0924a9fe198100f1cf78c198454a",
            "displayValue": "INC0000021"
        },
        {
            "sys_id": "46ee8c2fa9fe198100623592c70d643e",
            "displayValue": "INC0000024"
        }
    ]
*/