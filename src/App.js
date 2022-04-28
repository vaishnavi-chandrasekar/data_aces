import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

function App() {
  const validateData = (data) => {
    const errors = {};

    if (!data.Email) {
      errors.Email = "மின்னஞ்சலை உள்ளிடவும்";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.Email)) {
      errors.Email =
        "நீங்கள் உள்ளிட்ட மின்னஞ்சல் அல்லது மொபைல்  எண் இந்தக் கணக்குடன் இணைக்கப்படவில்லை. உங்களது கணக்கைக் கண்டறிந்து உள்நுழையவும்.";
    }

    if (!data.Password) {
      errors.Password = " கடவுச்சொல்லை கண்டறிந்து உள்நுழையவும்.";
    } else if (data.Password.length < 4) {
      errors.Password = "எவையேனும் நான்கு சொற்களை உள்ளிடவும் ";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validate: validateData,
    onSubmit: (values) => {
      alert("Logged in Successfully", (onclick = { reload }));
    },
  });
  var reload = function () {
    window.location.reload();
  };
  return (
    <>
      {" "}
      <div className="App">
        <h1 className="heading">
          facebook
          <p className="paragraph">
            Facebook சக மனிதர்களுடன் <br /> நல்லுறவு அமைத்துக்கொள்ள <br />{" "}
            உதவுகிறது.
          </p>
        </h1>

        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="மின்னஞ்சலை உள்ளிடவும்"
              name="Email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>{" "}
            {formik.touched.Email && formik.errors.Email ? (
              <span style={{ color: "red" }}>{formik.errors.Email}</span>
            ) : null}
            <br />
            <input
              type="Password"
              placeholder="கடவுச்சொல்"
              name="Password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
            {formik.touched.Password && formik.errors.Password ? (
              <span style={{ color: "red" }}>{formik.errors.Password}</span>
            ) : null}
            <br />
            <button type="submit" className="submit" onClick={reload}>
              உள்நுழைக
            </button>
            <p> கடவுச்சொல்லை மறந்துவிட்டீர்களா?</p>
            <h4></h4>
            <button className="new_acc">புதிய கணக்கை உருவாக்கு</button>
          </form>
          <p className="footer">
            பிரபலம், பிராண்ட் அல்லது வணிகத்திற்காக ஒரு <br /> பக்கத்தை
            உருவாக்கவும்.
          </p>
        </div>
      </div>
      <div className="foot">
        <p className="footer_details">
          தமிழ் తెలుగు ಕನ್ನಡ اردو हिन्दी മലയാളം සිංහල ਪੰਜਾਬੀ বাংলা ગુજરાતી
          English (UK){" "}
        </p>{" "}
        <p className="boxshadow"> </p>
        <p className="other_details">
          பதிவு செய்கஉள்நுழைக MessengerFacebook Lite Watch இடங்கள்விளையாட்டுகள்
          Marketplace Facebook PayOculus போர்ட்டல் <br />
          InstagramBulletin உள்ளூர்நிதி திரட்டும் திட்டங்கள்சேவைகள்வாக்களிப்பு
          தகவல் மையம்குழுக்கள் அறிமுகம் <br />
          விளம்பரம் உருவாக்குபக்கத்தை உருவாக்கு டெவலப்பர்கள்வேலைவாய்ப்பு
          தனியுரிமைகுக்கீவிளம்பரத் தேர்வுகள்விதிகள் <br /> உதவி அமைப்புகள்
          செயற்பாடு <br />{" "}
        </p>
        <p className="meta">Meta © 2022</p>
      </div>
    </>
  );
}

export default App;
