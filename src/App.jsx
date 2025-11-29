import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";
import BackgroundShapes from "./components/BackgroundShapes";
import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const [isEditing, setIsEditing] = useState(true);

  const addEducation = (edu) => {
    setEducation([...education, { ...edu, id: Date.now() }]);
  };

  const updateEducation = (id, updatedEdu) => {
    setEducation(education.map((edu) => (edu.id === id ? updatedEdu : edu)));
  };

  const deleteEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const addExperience = (exp) => {
    setExperience([...experience, { ...exp, id: Date.now() }]);
  };

  const updateExperience = (id, updatedExp) => {
    setExperience(experience.map((exp) => (exp.id === id ? updatedExp : exp)));
  };

  const deleteExperience = (id) => {
    setExperience(experience.filter((exp) => exp.id !== id));
  };

  return (
    <div className="app">
      <BackgroundShapes />
      <div className="app-container">
        <div className="app-content">
          <header className="app-header">
            <h1>🔥 RANDOM CV BUILDER 😹</h1>
            <p>Create a CV as lit as your favorite CV! 🚀</p>
          </header>

          {isEditing ? (
            <div className="edit-mode">
              <GeneralInfo data={generalInfo} onChange={setGeneralInfo} />
              <Education
                items={education}
                onAdd={addEducation}
                onUpdate={updateEducation}
                onDelete={deleteEducation}
              />
              <Experience
                items={experience}
                onAdd={addExperience}
                onUpdate={updateExperience}
                onDelete={deleteExperience}
              />

              <button
                className="submit-btn"
                onClick={() => setIsEditing(false)}
              >
                👀 PREVIEW MY CV! 👀
              </button>
            </div>
          ) : (
            <div className="preview-mode">
              <CVPreview
                generalInfo={generalInfo}
                education={education}
                experience={experience}
              />

              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                ✏️ EDIT AGAIN! ✏️
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
