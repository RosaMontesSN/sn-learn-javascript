//
// Lab 8b Script Include Test Script
//

var list = new SNJS().getRecords('problem', 5);

gs.info(list.length);

gs.info(JSON.stringify(list, null, 4));


// Rosa's code
var list = new RecordFinderUtils().getListRecords('problem', 5);

gs.info(JSON.stringify(list, null, 4));

/*
*** Script: [
    {
        "display_value": "PRB0000050",
        "sys_id": "04ce72c9c0a8016600b5b7f75ac67b5b"
    },
    {
        "display_value": "PRB0000051",
        "sys_id": "05001913c0a8016600161851785e5219"
    },
    {
        "display_value": "PRB0000032",
        "sys_id": "05147c3ec0a8016600da5b1a92269b3d"
    },
    {
        "display_value": "PRB0000053",
        "sys_id": "05164252c0a80166006452a56ccd08a9"
    },
    {
        "display_value": "PRB0000029",
        "sys_id": "0518c160c0a801660073dc0189282aaf"
    }
]
*/