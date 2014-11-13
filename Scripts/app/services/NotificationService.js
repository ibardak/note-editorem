function NotificationService() {
    toastr.options.positionClass = "toast-bottom-right";
    var NotificationService = {
        success: function (text) {
            toastr.success(text, "Операция завершена успешно");
        },
        error: function (text) {
            toastr.error(text, "Ошибка");
        },
        info: function (text) {
            toastr.info(text);
        }
    };
    return NotificationService;
}
app.factory('NotificationService', NotificationService);