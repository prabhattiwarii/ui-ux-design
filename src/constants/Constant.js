const getCurrentYear = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
};

const c = {
    APP_NAME: "Gunox Web Solutions",
    APP_TAGLINE: "",
    currentYear: new Date().getFullYear(),
    currentYearDate: getCurrentYear(),
    width: "1440px",
    BASE_URL:"http://localhost:3000"
    // BASE_URL : "https://regiustechnologies.com/web/home-data"
    // BASE_URL : "http://192.168.1.3:2002/web/home-data"
};

export default c;