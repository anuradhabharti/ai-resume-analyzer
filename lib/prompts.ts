export const resumePrompt = (resume: string) => `
You are an expert resume reviewer and ATS specialist.

Analyze the following resume.

Return ONLY valid JSON.

Schema:

{
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "recommendations": [],
  "skills": []
}

Resume:

${resume}
`;