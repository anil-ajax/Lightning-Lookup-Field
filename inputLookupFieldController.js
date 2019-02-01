({
	showHints : function(component, event, helper) {
		var inputTxt = component.get("v.inputTxtAttr");
        var objName = component.get("v.objNameAttr");
		console.log('here'+objName);
        
        var action = component.get('c.getRecords');
        
        action.setParams({
            inputTxt : inputTxt,
            objName : objName
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
        
        // use browser inbuilt dom html parser to avoid encoding such as &amp; for & in record name
        var parser = new DOMParser;
		var dom = parser.parseFromString('<!doctype html><body>' + recordName,'text/html');
        recordName = dom.body.textContent;
        
        component.set("v.selectedRecordId", id_str);
        component.set("v.inputTxtAttr", recordName);
        $('.records').hide();
	}
})
