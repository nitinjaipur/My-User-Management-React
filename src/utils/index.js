export const getCookie = (name='csrftoken') => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim(); // Trim leading and trailing spaces
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1); // Extract the value after "name="
      }
    }
    return null; // Return null if the cookie is not found
}