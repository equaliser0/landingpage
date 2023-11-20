export const useNotificationStore = definePiniaStore('notifications', () => {
  const notifications = ref<any[]>([]);

  function addNotification(notification) {
    notifications.value.push(notification);
  };

  function closeNotification(notification) {
    notifications.value = notifications.value.filter(n => n !== notification);
  };
  return { notifications, addNotification, closeNotification };
});
