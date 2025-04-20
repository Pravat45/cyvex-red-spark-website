
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  yearsOfExperience: string;
  workAuth: string;
  address: string;
  resume: File | null;
}

interface JobApplicationFormProps {
  jobTitle: string;
}

export const JobApplicationForm = ({ jobTitle }: JobApplicationFormProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would upload the file and form data to your server
      console.log("Form submitted:", { ...data, resume: resumeFile });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success("Application submitted successfully! We'll be in touch soon.");
      
      // Reset form
      reset();
      setResumeFile(null);
      
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    }
    
    setIsSubmitting(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Apply for {jobTitle}</CardTitle>
        <CardDescription>
          Complete the form below to submit your application. All fields are required.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name", { required: "Name is required" })}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              {...register("phone", { required: "Phone number is required" })}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <Label htmlFor="experience">Total Years of Experience</Label>
            <Select>
              <SelectTrigger id="experience" className={errors.yearsOfExperience ? "border-red-500" : ""}>
                <SelectValue placeholder="Select years of experience" {...register("yearsOfExperience", { required: "Experience is required" })} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1">0-1 years</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="10+">10+ years</SelectItem>
              </SelectContent>
            </Select>
            {errors.yearsOfExperience && (
              <p className="text-sm text-red-500">{errors.yearsOfExperience.message}</p>
            )}
          </div>

          {/* Work Authorization */}
          <div className="space-y-2">
            <Label htmlFor="workAuth">Work Authorization</Label>
            <Select>
              <SelectTrigger id="workAuth" className={errors.workAuth ? "border-red-500" : ""}>
                <SelectValue placeholder="Select work authorization status" {...register("workAuth", { required: "Work authorization is required" })} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us-citizen">US Citizen</SelectItem>
                <SelectItem value="green-card">Green Card Holder</SelectItem>
                <SelectItem value="h1b">H1B Visa</SelectItem>
                <SelectItem value="ead">EAD</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.workAuth && (
              <p className="text-sm text-red-500">{errors.workAuth.message}</p>
            )}
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              placeholder="Enter your full address"
              className={errors.address ? "border-red-500" : ""}
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="text-sm text-red-500">{errors.address.message}</p>
            )}
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <Label htmlFor="resume">Upload Resume</Label>
            <div className="flex items-center gap-4">
              <Input
                id="resume"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
            </div>
            {resumeFile && (
              <p className="text-sm text-green-600">
                File selected: {resumeFile.name}
              </p>
            )}
            <p className="text-xs text-gray-500">
              Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-end">
          <Button 
            type="submit" 
            className="bg-cyvex hover:bg-cyvex-dark" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
