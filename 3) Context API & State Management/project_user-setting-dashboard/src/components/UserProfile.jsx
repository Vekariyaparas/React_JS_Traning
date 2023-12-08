import React, { useState } from "react";
import SettingsForm, { hideshowclick } from "./UserSettingsContext";
import { useTranslation } from "react-i18next";
import { useTheme } from "./HomeContext";

const UserProfile = () => {
  const {theme} = useTheme();
  const [settings, setSettings] = useState({
    username: "",
    profilePicture: "",
  });

  const handleSettingsSubmit = (newSettings) => {
    setSettings(newSettings);
  };

  const { t } = useTranslation();

  return (
    <>
      <div style={{ background: theme.body }}>
        <h2 style={{ color: theme.text }}>{t('Dashboard_Settings')}</h2>
        <div className="pb-5">
          <div className="mx-5">
            <img src={settings.profilePicture} />
            <p style={{ color: theme.text }}>{t('Username')}: {settings.username}</p>
            <button
              onClick={hideshowclick}
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{background: theme.body, color: theme.text }}
            >
              {t('Edit_Your_Profile')}
            </button>
          </div>
        </div>
        <SettingsForm onSubmit={handleSettingsSubmit} />
      </div>
    </>
  );
};

export default UserProfile;
