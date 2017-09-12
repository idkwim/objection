// https://developer.android.com/reference/android/os/Build.html
var Build = Java.use('android.os.Build');

var ActivityThread = Java.use('android.app.ActivityThread');

var currentApplication = ActivityThread.currentApplication();
var context = currentApplication.getApplicationContext();

var response = {
    status: 'success',
    error_reason: NaN,
    type: 'device-info',
    data: {
        application_name: context.getPackageName(),
        model: Build.MODEL.value.toString(),
        board: Build.BOARD.value.toString(),
        brand: Build.BRAND.value.toString(),
        device: Build.DEVICE.value.toString(),
        host: Build.HOST.value.toString(),
        id: Build.ID.value.toString(),
        product: Build.PRODUCT.value.toString(),
        user: Build.USER.value.toString(),
        version: Java.androidVersion
    }
};

send(JSON.stringify(response));
