import axios from "axios";

export const getCurrentLocation = async () => {
  const APIKEY = import.meta.env.VITE_GEOAPIFY_APIKEY;

  const { latitude, longitude } = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        }),
      (err) => reject(err),
    );
  });

  const { data } = await axios.get(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${APIKEY}`,
  );

  const { city, state, address_line1: address } = data?.results[0];
  return { city, state, address };
};

export const handleSingupForm = async ({ request }) => {
  const form = await request.formData();

  const user = {
    fullname: form.get("fullname"),
    email: form.get("email"),
    password: form.get("password"),
  };

  const { data } = await axios.post(
    "http://localhost:3000/api/auth/register",
    user,
    {
      withCredentials: true,
    },
  );

  return data;
};
