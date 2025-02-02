// HTTP-запити

export function getPictures(name, page = 1) {
  const baseURL = "https://pixabay.com/api/";
  const KEY = "47181465-58855b534a7ed572abb95719a";

  const params = new URLSearchParams({
    key: KEY,
    q: name,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 40, 
    page, 
  });

  return fetch(`${baseURL}?${params}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
