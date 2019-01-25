({
	showHints : function(component, event, helper) {
		var inputTxt = component.get("v.inputTxtAttr");
		console.log(inputTxt);
        
        var action = component.get('c.getRecords');
        
        action.setParams({
            inputTxt : inputTxt
        })        
        
        action.setCallback(this, function(response){
            var recordsList = response.getReturnValue();
            console.log('recordsList'+JSON.stringify(recordsList));
            component.set("v.recordsList", recordsList);
        })
        $A.enqueueAction(action);
	},
    selectRecord : function(component, event, helper) {
		var ctarget = event.currentTarget;
        
    	var id_str = ctarget.dataset.value;
        var recordName = ctarget.innerHTML;
        
        component.set("v.selectedRecordId", id_str);
        component.set("v.inputTxtAttr", recordName);
        $('.records').hide();
	}
})
