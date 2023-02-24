import { createSlice } from "@reduxjs/toolkit";

export const FormSlice = createSlice({
  name: "form",
  initialState: {
    PersonalDetails: {
      name: "",
      address: "",
      email: "",
      phone: "",
      linkedin: "",
    },
    Education: [],
    Experiance: [],
    Skills: [],
    Objective: { objective: "" },
    Referance: [],
    Projects: [],
    CoverLetter: { coverLetter: "" },
  },
  reducers: {
    addCoverLetter: (state, action) => {
      state.CoverLetter.coverLetter = action.payload.coverLetter;
    },
    addProjects: (state, action) => {
      state.Projects.push({
        id:
          state.Projects.length === 0
            ? 1
            : state.Projects[state.Projects.length - 1].id + 1,
        title: "",
        description: "",
        thingsUsed: "",
      });
    },
    delProjects: (state, action) => {
      state.Projects = state.Projects.filter((i) => action.payload !== i.id);
    },
    addProjectDetails: (state, action) => {
      state.Projects.map((i) => {
        if (action.payload.id === i.id) {
          i.title = action.payload.title;
          i.description = action.payload.description;
          i.thingsUsed = action.payload.thingsUsed;
        }
      });
    },
    addReferance: (state, action) => {
      state.Referance.push({
        id:
          state.Referance.length === 0
            ? 1
            : state.Referance[state.Referance.length - 1].id + 1,
        referanceName: "",
        jobTitle: "",
        companyName: "",
        email: "",
        phone: "",
      });
    },
    delReferance: (state, action) => {
      state.Referance = state.Referance.filter((i) => action.payload !== i.id);
    },
    addReferanceDetails: (state, action) => {
      state.Referance.map((i) => {
        if (action.payload.id === i.id) {
          i.referanceName = action.payload.referanceName;
          i.jobTitle = action.payload.jobTitle;
          i.companyName = action.payload.companyName;
          i.email = action.payload.email;
          i.phone = action.payload.phone;
        }
      });
    },
    addObjective: (state, action) => {
      state.Objective.objective = action.payload.objective;
    },
    addSkills: (state, action) => {
      state.Skills.push({
        id:
          state.Skills.length === 0
            ? 1
            : state.Skills[state.Skills.length - 1].id + 1,
        skillName: "",
        level: Number(0),
      });
    },
    delSkills: (state, action) => {
      state.Skills = state.Skills.filter((i) => action.payload !== i.id);
    },
    addSkillsDetails: (state, action) => {
      state.Skills.map((i) => {
        if (action.payload.id === i.id) {
          i.skillName = action.payload.skillName;
          i.level = action.payload.level;
        }
      });
    },
    addExperiance: (state, action) => {
      state.Experiance.push({
        id:
          state.Experiance.length === 0
            ? 1
            : state.Experiance[state.Experiance.length - 1].id + 1,
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        details: "",
      });
    },
    delExperiance: (state, action) => {
      state.Experiance = state.Experiance.filter(
        (i) => action.payload !== i.id
      );
    },
    addExperianceDetails: (state, action) => {
      state.Experiance.map((i) => {
        if (action.payload.id === i.id) {
          i.companyName = action.payload.companyName;
          i.jobTitle = action.payload.jobTitle;
          i.startDate = action.payload.startDate;
          i.endDate = action.payload.endDate;
          i.details = action.payload.details;
        }
      });
    },
    addPersonalDetails: (state, action) => {
      state.PersonalDetails.name = action.payload.name;
      state.PersonalDetails.address = action.payload.address;
      state.PersonalDetails.email = action.payload.email;
      state.PersonalDetails.phone = action.payload.phone;
      state.PersonalDetails.linkedin = action.payload.linkedin;
    },
    addEducation: (state, action) => {
      state.Education.push({
        id:
          state.Education.length === 0
            ? 1
            : state.Education[state.Education.length - 1].id + 1,
        course: "",
        school: "",
        grade: "",
        year: "",
      });
    },
    delEducation: (state, action) => {
      state.Education = state.Education.filter((i) => action.payload !== i.id);
    },
    addEducationDetails: (state, action) => {
      state.Education.map((i) => {
        if (action.payload.id === i.id) {
          i.course = action.payload.course;
          i.school = action.payload.school;
          i.grade = action.payload.grade;
          i.year = action.payload.year;
        }
      });
    },
  },
});
export const {
  addExperiance,
  addExperianceDetails,
  delExperiance,
  addEducation,
  addEducationDetails,
  delEducation,
  addPersonalDetails,
  addSkills,
  addSkillsDetails,
  delSkills,
  addObjective,
  addReferance,
  addReferanceDetails,
  delReferance,
  addProjectDetails,
  addProjects,
  delProjects,
  addCoverLetter,
} = FormSlice.actions;
export default FormSlice.reducer;
