# angular2-flash-message
Flash Messages for angular2

# Getting Started
 
 angular2-flash-message is intended to be used for displaying flash-messages on UI. The flash message can be customized based on the 
 message type (alert, info, warning) which is based on [Bootstrap 3 Alerts](http://getbootstrap.com/components/#alerts)
 
 You will need to include bootstrap styles
  
```
<!-- index.html -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
```

# How to use:

Install `angular2-flash-message` from 'npm'

```bash
npm install angular2-flash-message --save
```


In the template where you would like show the flash-message include

`<flash-message messagePositioning="top-right"></flash-message>`

Optionally you could choose where to display the flash message, by default its 'top-right'

In your component, the flash message service need to be injected so
```bash

constructor(private flashMessageService: FlashMessageService)

To display the flash message create an instance of flashMessage like so
let flMsg = new FlashMessage()
flMsg.message = 'Test'; // string to be displayed in the notification, if empty flash message wont be dsiplayed
flMsg.isSuccess = true; // defaults to info
flMsg.timeoutInMS = 80000; // defaults to 6000

// Finally call the service with the created flasMessage instance
this.flashMessageService.display(flMsg);
````

The flash message can be destroyed by time out or by pressing the `x` on the notification.