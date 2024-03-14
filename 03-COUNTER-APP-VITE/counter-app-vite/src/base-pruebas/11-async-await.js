export const getImagen = async () => {
  try {
    const apiKey = "9gcqo0WQXG8AkRiEeNGA5o8OwssY4ua9";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    return url;
  } catch (error) {
    // manejo del error
    console.log(error);
    return 'no'
  }
};


