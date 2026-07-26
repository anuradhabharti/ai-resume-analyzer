import { ACTION_VERBS, TECH_SKILLS } from "./keywords";

export function calculateATS(text: string) {
  const resume = text.toLowerCase();

  let score = 0;

  const breakdown = {
    sections: 0,
    skills: 0,
    experience: 0,
    education: 0,
    projects: 0,
    verbs: 0,
    contact: 0,
  };

  // Section checks
  if (resume.includes("experience")) breakdown.experience = 20;
  if (resume.includes("education")) breakdown.education = 10;
  if (resume.includes("project")) breakdown.projects = 10;

  // Skills
  const skillMatches = TECH_SKILLS.filter(skill =>
    resume.includes(skill)
  ).length;

  breakdown.skills = Math.min(skillMatches * 2, 25);

  // Action verbs
  const verbMatches = ACTION_VERBS.filter(word =>
    resume.includes(word)
  ).length;

  breakdown.verbs = Math.min(verbMatches * 2, 10);

  // Contact
  if (
    /\S+@\S+\.\S+/.test(resume) &&
    /\d{10}/.test(resume.replace(/\D/g, ""))
  ) {
    breakdown.contact = 5;
  }

  // Structure
  breakdown.sections =
    (breakdown.experience ? 7 : 0) +
    (breakdown.education ? 6 : 0) +
    (breakdown.projects ? 7 : 0);

  score = Object.values(breakdown).reduce((a, b) => a + b, 0);

  return {
    score,
    breakdown,
  };
}
