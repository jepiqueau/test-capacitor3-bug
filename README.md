# test-bug

A Ionic/Angular demonstrating the capacitor 3.1.1 bug in Android and in iOS

This Ionic/Angular App uses the `capacitor-jeep-bug` plugin created for demonstrating the error which is the pure basic echo plugin. 

This error impact the `@capacitor-community/sqlite` plugin see issue#144

## Android

``` 
2021-07-11 09:28:07.945 3394-3394/jeep.test.bug E/Capacitor/Console: File: http://localhost/vendor.js - Line 43755 - Msg: ERROR Error: Uncaught (in promise): Error: "JeepBug.toJSON()" is not implemented on android
    Error: "JeepBug.toJSON()" is not implemented on android
        at http://localhost/vendor.js:87062:31
        at ZoneDelegate.invoke (http://localhost/polyfills.js:436:30)
        at Object.onInvoke (http://localhost/vendor.js:65973:33)
        at ZoneDelegate.invoke (http://localhost/polyfills.js:435:56)
        at Zone.run (http://localhost/polyfills.js:196:47)
        at http://localhost/polyfills.js:1354:38
        at ZoneDelegate.invokeTask (http://localhost/polyfills.js:470:35)
        at Object.onInvokeTask (http://localhost/vendor.js:65960:33)
        at ZoneDelegate.invokeTask (http://localhost/polyfills.js:469:64)
        at Zone.runTask (http://localhost/polyfills.js:241:51)

```

## iOS

```
[error] - ERROR {"rejection":{"code":"UNIMPLEMENTED"},"promise":{"__zone_symbol__state":0,"__zone_symbol__value":"..."},"zone":{"_parent":{"_parent":null,"_name":"<root>","_properties":{},"_zoneDelegate":{"_taskCounts":{"microTask":0,"macroTask":0,"eventTask":0},"zone":"...","_parentDelegate":"...","_forkZS":"...","_forkDlgt":"...","_forkCurrZone":"...","_interceptZS":"...","_interceptDlgt":"...","_interceptCurrZone":"...","_invokeZS":"...","_invokeDlgt":"...","_invokeCurrZone":"...","_handleErrorZS":"...","_handleErrorDlgt":"...","_handleErrorCurrZone":"...","_scheduleTaskZS":"...","_scheduleTaskDlgt":"...","_scheduleTaskCurrZone":"...","_invokeTaskZS":"...","_invokeTaskDlgt":"...","_invokeTaskCurrZone":"...","_cancelTaskZS":"...","_cancelTaskDlgt":"...","_cancelTaskCurrZone":"...","_hasTaskZS":"...","_hasTaskDlgt":"...","_hasTaskDlgtOwner":"...","_hasTaskCurrZone":"..."}},"_name":"angular","_properties":{"isAngularZone":true},"_zoneDelegate":{"_taskCounts":{"microTask":0,"macroTask":1,"eventTask":7},"zone":"...","_parentDelegate":"...","_forkZS":"...","_forkDlgt":"...","_forkCurrZone":"...","_interceptZS":"...","_interceptDlgt":"...","_interceptCurrZone":"...","_invokeZS":{"name":"angular","properties":"..."},"_invokeDlgt":"...","_invokeCurrZone":"...","_handleErrorZS":"...","_handleErrorDlgt":"...","_handleErrorCurrZone":"...","_scheduleTaskZS":{"name":""},"_scheduleTaskDlgt":"...","_scheduleTaskCurrZone":"...","_invokeTaskZS":"...","_invokeTaskDlgt":"...","_invokeTaskCurrZone":"...","_cancelTaskZS":"...","_cancelTaskDlgt":"...","_cancelTaskCurrZone":"...","_hasTaskZS":"...","_hasTaskDlgt":"...","_hasTaskDlgtOwner":"...","_hasTaskCurrZone":"..."}},"task":{"type":"microTask","state":"notScheduled","source":"Promise.then","zone":"angular","runCount":0}}

```

