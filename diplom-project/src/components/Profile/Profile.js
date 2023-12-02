import "./Profile.css";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { regexEmail } from "../../utils/config";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import CurrentUserContext from "../../context/context";

function Profile({ removeToken, updateUser, message, isUpdateUser }) {
  const { values, setValues, handleChange, errors, isValid, setIsValid } = useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);


  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser({
      name: values.name,
      email: values.email,
    });
  };

  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [setValues, currentUser]); 

  
 useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false);
    }
  }, [setIsValid, values, currentUser]);


  return (
    <section className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <div className="profile__about">
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__form-info profile__form-info_type_name">
            <label className="profile__text">Имя</label>
            <input
              className="profile__input"
              name="name"
              required
              minLength="2"
              maxLength="30"
              placeholder="Ваше имя"
              type="text"
              onChange={handleChange}
              defaultValue={values.name || ""}
            />
          </div>
          <div className="profile__err-container ">
            <span className="profile__err">{errors.name}</span>
          </div>
          <div className="profile__form-info profile__form-info_type_email">
            <label className="profile__text">E-mail</label>
            <input
              className="profile__input"
              name="email"
              type="email"
              required
              minLength="8"
              maxLength="30"
              placeholder="Ваш e-mail"
              onChange={handleChange}
              defaultValue={values.email || ""}
              pattern={regexEmail}
            />
          </div>
          <div className="profile__err-container ">
            <span className="profile__err">{errors.email}</span>
          </div>

          <p
            className={
              isUpdateUser ? "profile__message" : "profile__message_err"
            }
          >
            {message}
          </p>
          <div className="profile__btn">
            {isValid ? (
              <button
                className="profile__button"
                type="submit"
                onSubmit={handleSubmit}
              >
                Редактировать
              </button>
            ) : (
              <button
                className="profile__button_disabled "
                disabled
                type="submit"
              >
                Редактировать
              </button>
            ) }

            <Link
              className="profile__link profile__link_type_exit"
              onClick={removeToken}
            >
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;
