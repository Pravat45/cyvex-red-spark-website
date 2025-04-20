
import { useParams } from "react-router-dom";
import { JobApplicationForm } from "@/components/career/JobApplicationForm";

const jobTitles: Record<string, string> = {
  "cybersec-analyst": "Cybersecurity Analyst",
  "security-engineer": "Security Engineer",
  "identity-specialist": "Identity and Access Management Specialist",
};

const JobApplication = () => {
  const { id } = useParams<{ id: string }>();
  const jobTitle = id && jobTitles[id] ? jobTitles[id] : "Position";

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Apply for {jobTitle}</h1>
            <p className="text-gray-600">
              Complete the form below to submit your application. All fields are required unless marked as optional.
            </p>
          </div>
          
          <JobApplicationForm jobTitle={jobTitle} />
        </div>
      </div>
    </main>
  );
};

export default JobApplication;
