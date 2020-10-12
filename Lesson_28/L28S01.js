//
// L28S01 - Get object keys
//

var vehicle = {
  "year": 2018,
  "make": "Toyota",
  "model": "Sienna"
};

for (var key in vehicle) {
  
  gs.info('key=' + key + ' value=' + vehicle[key]);
}


// Rosa's code
var gr = new GlideRecord('incident');
gr.query();
gr.next();

for (var key in gr) {
  
  gs.info('key = ' + key + ' | value = ' + gr[key]);
}

/*
*** Script: key = sys_meta | value = sys_meta
*** Script: key = parent | value = 
*** Script: key = made_sla | value = true
*** Script: key = caused_by | value = 
*** Script: key = watch_list | value = 
*** Script: key = upon_reject | value = cancel
*** Script: key = sys_updated_on | value = 2016-12-14 02:46:44
*** Script: key = child_incidents | value = 0
*** Script: key = hold_reason | value = 0
*** Script: key = approval_history | value = 
*** Script: key = skills | value = 
*** Script: key = number | value = INC0000060
*** Script: key = resolved_by | value = 5137153cc611227c000bbd1bd8cd2007
*** Script: key = sys_updated_by | value = employee
*** Script: key = opened_by | value = 681ccaf9c0a8016400b98a06818d57c7
*** Script: key = user_input | value = 
*** Script: key = sys_created_on | value = 2016-12-12 15:19:57
*** Script: key = sys_domain | value = global
*** Script: key = state | value = 7
*** Script: key = sys_created_by | value = employee
*** Script: key = knowledge | value = false
*** Script: key = order | value = 0
*** Script: key = calendar_stc | value = 102197
*** Script: key = closed_at | value = 2016-12-14 02:46:44
*** Script: key = cmdb_ci | value = 109562a3c611227500a7b7ff98cc0dc7
*** Script: key = delivery_plan | value = 
*** Script: key = impact | value = 2
*** Script: key = contract | value = 
*** Script: key = active | value = false
*** Script: key = work_notes_list | value = 
*** Script: key = business_service | value = 27d32778c0a8000b00db970eeaa60f16
*** Script: key = priority | value = 3
*** Script: key = sys_domain_path | value = /
*** Script: key = rfc | value = 
*** Script: key = time_worked | value = 
*** Script: key = rejection_goto | value = 
*** Script: key = expected_start | value = 
*** Script: key = opened_at | value = 2016-12-12 15:19:57
*** Script: key = business_duration | value = 1970-01-01 08:00:00
*** Script: key = group_list | value = 
*** Script: key = work_end | value = 
*** Script: key = reopened_time | value = 
*** Script: key = resolved_at | value = 2016-12-13 21:43:14
*** Script: key = caller_id | value = 681ccaf9c0a8016400b98a06818d57c7
*** Script: key = approval_set | value = 
*** Script: key = subcategory | value = email
*** Script: key = wf_activity | value = 
*** Script: key = work_notes | value = 
*** Script: key = short_description | value = Unable to connect to email
*** Script: key = close_code | value = Solved (Permanently)
*** Script: key = correlation_display | value = 
*** Script: key = delivery_task | value = 
*** Script: key = work_start | value = 
*** Script: key = assignment_group | value = 287ebd7da9fe198100f92cc8d1d2154e
*** Script: key = business_stc | value = 28800
*** Script: key = additional_assignee_list | value = 
*** Script: key = description | value = I am unable to connect to the email server. It appears to be down.
*** Script: key = calendar_duration | value = 1970-01-02 04:23:17
*** Script: key = notify | value = 1
*** Script: key = sys_class_name | value = incident
*** Script: key = service_offering | value = 
*** Script: key = close_notes | value = This incident is resolved.
*** Script: key = closed_by | value = 681ccaf9c0a8016400b98a06818d57c7
*** Script: key = follow_up | value = 
*** Script: key = parent_incident | value = 
*** Script: key = sys_id | value = 1c741bd70b2322007518478d83673af3
*** Script: key = contact_type | value = self-service
*** Script: key = reopened_by | value = 
*** Script: key = incident_state | value = 7
*** Script: key = urgency | value = 2
*** Script: key = u_cd_reference | value = 
*** Script: key = problem_id | value = 
*** Script: key = company | value = 31bea3d53790200044e0bfc8bcbe5dec
*** Script: key = reassignment_count | value = 2
*** Script: key = activity_due | value = 2016-12-13 01:26:36
*** Script: key = assigned_to | value = 5137153cc611227c000bbd1bd8cd2007
*** Script: key = u_test_rosa | value = 
*** Script: key = severity | value = 3
*** Script: key = variables | value = 
*** Script: key = variable_pool | value = 
*** Script: key = hierarchical_variables | value = variable_pool
*** Script: key = comments | value = 
*** Script: key = sla_due | value = 
*** Script: key = approval | value = not requested
*** Script: key = comments_and_work_notes | value = 
*** Script: key = due_date | value = 
*** Script: key = sys_mod_count | value = 15
*** Script: key = reopen_count | value = 0
*** Script: key = sys_tags | value = 
*** Script: key = escalation | value = 0
*** Script: key = upon_approval | value = proceed
*** Script: key = correlation_id | value = 
*** Script: key = location | value = 
*** Script: key = category | value = inquiry
*/